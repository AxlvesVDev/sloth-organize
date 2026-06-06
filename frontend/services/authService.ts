import { User } from "../types";

const API_URL = "http://localhost:4000/api"; 
// Troque pelo endereço do seu servidor (Render, Railway, etc)


export const taskService = {
  async getTasks(userId: string) {
    const response = await fetch(
      `${API_URL}/tasks/${userId}`
    );

    return response.json();
  }
};

export const authService = {
  login: async (email: string, password: string): Promise<{ user: User; token: string }> => {
    const response = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      const err = await response.json().catch(() => null);
      throw new Error(err?.error || "Erro ao fazer login.");
    }

    const data = await response.json();
    return data; // { user, token }
  },

  register: async (name: string, email: string, password: string): Promise<{ user: User }> => {
    const response = await fetch(`${API_URL}/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });

    if (!response.ok) {
      const err = await response.json().catch(() => null);

      console.log("Status:", response.status);
       console.log("Resposta:", err);
      throw new Error(err?.error || "Erro ao criar conta.");
    }

    const data = await response.json();
    return data; // { user }
  },

  logout: () => {
    // Agora não precisa mais de localStorage, deixa vazio mesmo
  },

  getCurrentUser: async (): Promise<User | null> => {
    // Agora o App.tsx é quem controla a sessão local
    return null;
  },
};
