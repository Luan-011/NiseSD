import axios from 'axios';

// 🌐 A URL base do seu servidor (sempre igual à do auth.service)
const API_URL = "https://vascular-virtuous-acutely.ngrok-free.dev";

export const getResumoIA = async (idPaciente: string) => {
  try {
    // 🧠 Faz a chamada GET passando o ID do paciente na URL
    const response = await axios.get(`${API_URL}/ia/resumo/${idPaciente}`);
    return response.data; 
  } catch (error) {
    console.error("Erro ao buscar resumo da IA:", error);
    throw error;
  }
};