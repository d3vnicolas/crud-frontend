import axios from "axios"

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_API_URL || "https://api.example.com",
  headers: {
    "Content-Type": "application/json",
  },
})

// Adiciona o token de autenticação automaticamente em cada requisição
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("authToken")
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

export default api
