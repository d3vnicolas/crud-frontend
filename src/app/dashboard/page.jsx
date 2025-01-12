"use client"

import Header from '@/components/Header'
import { useAuth } from '@/context/AuthProvider'

export default function Dashboard() {
  const { user } = useAuth()
  return (
    <Header title="Dashboard" />
  )
}