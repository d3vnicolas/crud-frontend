import api from "@/services/api"

export const login = async (email, password) => {
  try {
    const response = await api.post("/login-admin", { email, password })
    return response.data
  } catch (error) {
    return Promise.reject(error.response.data)
  }
}

export const logout = async () => {
  localStorage.removeItem("authToken")
}