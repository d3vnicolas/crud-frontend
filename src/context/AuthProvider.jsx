"use client"

import { createContext, useContext, useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import {
  loginService
} from "@/services/auth"

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null) // Estado do usuário
  const [loading, setLoading] = useState(true) // Controle de carregamento
  const router = useRouter()

  // Efeito para verificar o token no localStorage ao carregar a aplicação
  useEffect(() => {
    const initAuth = async () => {
      const token = localStorage.getItem("authToken")
      const user = JSON.parse(localStorage.getItem("authUser"))

      if (!token || !user) {
        logout() // Remove token inválido
      }

      setUser(user) // Atualiza o estado do usuário
      
      setLoading(false) // Fim do carregamento
    }

    initAuth()
  }, [])

  // Função de login
  const login = async (email, password) => {
    try {
      const { token, user } = await loginService(email, password)
      localStorage.setItem("authToken", token) // Salva o token no localStorage
      localStorage.setItem("authUser", JSON.stringify(user)) // Atualiza o estado do usuário
      setUser(user) // Atualiza o estado do usuário
      router.push("/dashboard") // Redireciona para o dashboard
    } catch (error) {
      throw new Error(error.response?.data?.message || "Erro ao fazer login")
    }
  }

  // Função de logout
  const logout = () => {
    localStorage.removeItem("authToken") // Remove token do localStorage
    localStorage.removeItem("authUser") // Remove usuário do localStorage
    setUser(null) // Reseta o estado do usuário
    router.push("/") // Redireciona para a página de login
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, loading, setLoading }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
