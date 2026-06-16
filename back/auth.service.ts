import axios from 'axios';

// Certifique-se de que a URL base está com o seu Ngrok atualizado
const API_URL = "https://vascular-virtuous-acutely.ngrok-free.dev";

export const loginApiCall = async (email: string, password: string) => {
  try {
    // 📢 O SEGREDO ESTÁ AQUI: Precisa ser /auth/signin para Logar!
    const response = await axios.post(`${API_URL}/auth/signin`, {
      email,
      password // Garanta também que o nome aqui seja password, não senha
    });
    
    return response.data; // Retorna o token de sucesso
  } catch (error) {
    console.error("Erro na chamada de login da API:", error);
    throw error;
  }
};