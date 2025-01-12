"use client"

import { createContext, useContext, useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import {
  login as loginService,
  logout as logoutService
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
      if (token) {
        try {
          const userData = await getUser() // Obtém dados do usuário
          setUser(userData)
        } catch (error) {
          console.error("Erro ao carregar usuário:", error)
          logout() // Remove token inválido
        }
      }
      setLoading(false) // Fim do carregamento
    }

    initAuth()
  }, [])

  // Função de login
  const login = async (email, password) => {
    try {
      const { token, user: userData } = await loginService(email, password)
      localStorage.setItem("authToken", token) // Salva o token no localStorage
      setUser(userData) // Atualiza o estado do usuário
      router.push("/dashboard") // Redireciona para o dashboard
    } catch (error) {
      throw new Error(error.response?.data?.message || "Erro ao fazer login")
    }
  }

  // Função de logout
  const logout = () => {
    logoutService() // Remove token do localStorage
    setUser(null) // Reseta o estado do usuário
    router.push("/login") // Redireciona para a página de login
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
