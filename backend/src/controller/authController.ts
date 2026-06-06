import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { prisma } from "../prisma";

export const registerUser = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  try {
    const exists = await prisma.user.findUnique({ where: { email } });

    if (exists) {
      return res.status(400).json({ error: "Este e-mail já está cadastrado." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    return res.json({
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      }
    });

  } catch (err) {
    return res.status(500).json({ error: "Erro ao registrar usuário." });
  }
};

export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      return res.status(400).json({ error: "Credenciais inválidas." });
    }

    const correct = await bcrypt.compare(password, user.password);

    if (!correct) {
      return res.status(400).json({ error: "Credenciais inválidas." });
    }

    const token = jwt.sign(
      { userId: user.id },
      "SUPER_SECRET_KEY", // Troque quando for pra produção
      { expiresIn: "30d" }
    );

    return res.json({
      user: { id: user.id, name: user.name, email: user.email },
      token,
    });

  } catch (err) {
    return res.status(500).json({ error: "Erro ao fazer login." });
  }
};
