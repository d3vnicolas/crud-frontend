"use client"

import { ChartComponent } from "@/components/Chart"
import Header from "@/components/Header"
import { DataTableDemo } from "@/components/Table"

export default function Dashboard() {
  return (
    <>
      <Header title="Dashboard" />
      <main className="px-4 flex h-[calc(100%-96px)] flex-col items-end gap-4">
        <DataTableDemo />
        <ChartComponent />
      </main>
    </>
  )
}
