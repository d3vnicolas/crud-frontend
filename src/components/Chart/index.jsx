"use client"

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
  { month: "Janeiro", vendasOnline: 120, vendasLoja: 80 },
  { month: "Fevereiro", vendasOnline: 150, vendasLoja: 100 },
  { month: "Março", vendasOnline: 170, vendasLoja: 130 },
  { month: "Abril", vendasOnline: 90, vendasLoja: 60 },
  { month: "Maio", vendasOnline: 200, vendasLoja: 160 },
  { month: "Junho", vendasOnline: 220, vendasLoja: 180 },
]

const chartConfig = {
  vendasOnline: {
    label: "Vendas Online",
    color: "#F472B6", // Rosa Claro
  },
  vendasLoja: {
    label: "Vendas na Loja",
    color: "#EC4899", // Rosa Médio
  },
}

export function ChartComponent() {
  return (
    <ChartContainer
      config={chartConfig}
      className="rounded-md min-h-[200px] w-full border-white/30 bg-white/50 backdrop-blur-lg dark:bg-gray-950/50"
    >
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Bar
          dataKey="vendasOnline"
          fill="var(--color-vendasOnline)"
          radius={4}
        />
        <Bar dataKey="vendasLoja" fill="var(--color-vendasLoja)" radius={4} />
      </BarChart>
    </ChartContainer>
  )
}
