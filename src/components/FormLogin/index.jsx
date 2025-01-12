"use client"

import { FormEvent } from "react"
import { useRouter } from "next/router"
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

export default function FormLogin() {
  const handleSubmit = async event => {
    event.preventDefault()

    const formData = new FormData(event.target)
    const email = formData.get("email")
    const password = formData.get("password")

    const response = await fetch(process.env.NEXT_PUBLIC_BACKEND_API_URL+"/clientes", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzM2NjQ1NjcyLCJleHAiOjE3MzY2NDYyNzJ9.3Ri8IhRkIQxWcd6cX0LEP9LlHPlA3Z7yaz9CcH4w4Os"
      },
      // body: JSON.stringify({ email }),
    })

    if (response.ok) {
      // const { token } = await response.json()
      // localStorage.setItem("token", token)
      // alert(token)
      const response = await response.json()
      return response
    } else {
      console.error("Login failed")
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
