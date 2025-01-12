"use client"

import { useAuth } from '@/context/AuthProvider'

export default function Dashboard() {
  const { user } = useAuth()
  return (
    <div>
      <h1>Olá {user.name}</h1>
    </div>
  )
}