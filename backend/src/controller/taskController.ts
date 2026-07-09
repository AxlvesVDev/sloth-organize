import { Request, Response } from "express";
import { prisma } from "../prisma";

export async function createTask(req: Request, res: Response) {
  const {
    title,
    priority,
    dueDate,
    dueTime,
    duration,
    userId
  } = req.body;
  
  

  const task = await prisma.task.create({
    data: {
      title,
      priority,
      dueDate,
      dueTime,
      duration,
      userId
    }
  });
  


  res.json(task);
}

export async function getTasks(req: Request, res: Response) {
  const { userId } = req.params;

  const tasks = await prisma.task.findMany({
    where: {
      userId
    },
    orderBy: {
      createdAt: "desc"
    }
  });

  res.json(tasks);
}


//delete task (metodo delete)
export async function deleteTask(req: Request, res: Response) {
  const { id } = req.params;

  await prisma.task.delete({
    where: {
      id
    }
  });

  res.status(204).send();
}

//completed task (metodo patch)
export async function updateTask(req: Request, res: Response) {
  const { id } = req.params;

  const {
    title,
    priority,
    completed,
    dueDate,
    dueTime,
    duration
  } = req.body;

  const task = await prisma.task.update({
    where: {
      id
    },
    data: {
      title,
      priority,
      completed,
      completedAt: completed ? new Date() : null,
      dueDate,
      dueTime,
      duration
    }
  });

  res.json(task);
}
