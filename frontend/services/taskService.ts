const API_URL = "http://localhost:4000/api";

export const taskService = {
  async getTasks(userId: string) {
    const response = await fetch(
      `${API_URL}/tasks/${userId}`
    );

    if (!response.ok) {
      throw new Error("Erro ao buscar tarefas");
    }

    return response.json();
  }
};