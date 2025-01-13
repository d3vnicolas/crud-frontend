import api from "@/services/api"

export const loginService = async (email, password) => {
  try {
    // Requisição inicial para login
    const loginResponse = await api.post("/login-admin", { email, password })
    const { id, token } = loginResponse.data

    const userResponse = await getUserService(id, token)

    // Retorna os dados combinados
    return { 
      token, 
      user: userResponse
    }
  } catch (error) {
    // Retorna um erro mais descritivo, caso `error.response` não exista
    throw error.response?.data?.message || {
      message: "Erro inesperado. Por favor, tente novamente."
    }
  }
}

export const getUserService = async (id, token) => {
  const response = await api.get(`/admin/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

  return response.data
}
