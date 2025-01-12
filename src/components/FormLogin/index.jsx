"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { LogIn } from "lucide-react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  
} from "@/components/ui/card"
import { useAuth } from "@/context/AuthProvider"

export default function FormLogin() {
  const { login } = useAuth()
  const router = useRouter()

  const handleSubmit = async event => {
    event.preventDefault()

    const formData = new FormData(event.target)
    const email = formData.get("email")
    const password = formData.get("password")

    try {
      await login(email, password)
    } catch (error) {
      // todo: alert component
      console.error("Erro ao fazer login:", error)
    }  
  }
  
  return (
    <Card className="w-full max-w-sm border-white/30 bg-white/50 backdrop-blur-lg dark:bg-gray-950/50">
      <CardHeader>
        <CardTitle className="text-xl text-black dark:text-white">
          Acesso
        </CardTitle>
        <CardDescription className="text-lg text-black dark:text-white">
          Informe os dados para acessar o sistema
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="flex flex-col gap-4" onSubmit={(event) => handleSubmit(event)}>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Input
              className="border-white/30 dark:placeholder:text-white"
              type="email"
              name="email"
              id="email"
              placeholder="E-mail"
              required
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Input
              className="border-white/30 dark:placeholder:text-white"
              type="password"
              id="password"
              name="password"
              placeholder="Senha"
              required
            />
          </div>
          <Button
            type="submit"
            className="bg-lime-500 font-medium text-white hover:bg-lime-600"
          >
            Entrar <LogIn />
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
