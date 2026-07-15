const API_URL = "http://localhost:4000/api";

export const taskService = {
  async getTasks(userId: string) {
    const response = await fetch(`${API_URL}/tasks/${userId}`);

    if (!response.ok) {
      throw new Error("Erro ao buscar tarefas");
    }

    return response.json();
  },

  async updateTask(id: string, data: any) {
    const response = await fetch(`${API_URL}/tasks/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Erro ao atualizar tarefa");
    }

    return response.json();
  },

  async deleteTask(id: string) {
    const response = await fetch(`${API_URL}/tasks/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Erro ao deletar tarefa");
    }
  },

  async createTask(data: any) {
  const response = await fetch(`${API_URL}/tasks`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Erro ao criar tarefa");
  }

  return response.json();
},
};