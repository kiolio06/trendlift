"use client"

import { Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  {
    date: "Ene 1",
    "IA en retail": 240,
    "Comercio social": 139,
    "Realidad aumentada": 221,
  },
  {
    date: "Ene 15",
    "IA en retail": 283,
    "Comercio social": 168,
    "Realidad aumentada": 251,
  },
  {
    date: "Feb 1",
    "IA en retail": 299,
    "Comercio social": 201,
    "Realidad aumentada": 290,
  },
  {
    date: "Feb 15",
    "IA en retail": 304,
    "Comercio social": 203,
    "Realidad aumentada": 298,
  },
  {
    date: "Mar 1",
    "IA en retail": 325,
    "Comercio social": 218,
    "Realidad aumentada": 325,
  },
  {
    date: "Mar 15",
    "IA en retail": 341,
    "Comercio social": 235,
    "Realidad aumentada": 367,
  },
]

export function TrendChart() {
  return (
    <ChartContainer
      config={{
        "IA en retail": {
          label: "IA en retail",
          color: "hsl(var(--chart-1))",
        },
        "Comercio social": {
          label: "Comercio social",
          color: "hsl(var(--chart-2))",
        },
        "Realidad aumentada": {
          label: "Realidad aumentada",
          color: "hsl(var(--chart-3))",
        },
      }}
      className="h-[300px]"
    >
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 10,
            left: 10,
            bottom: 0,
          }}
        >
          <XAxis dataKey="date" tickLine={false} axisLine={false} tickMargin={10} className="text-sm" />
          <YAxis tickLine={false} axisLine={false} tickMargin={10} className="text-sm" />
          <ChartTooltip content={<ChartTooltipContent />} cursor={false} />
          <Line
            type="monotone"
            dataKey="IA en retail"
            strokeWidth={2}
            activeDot={{
              r: 6,
              style: { fill: "var(--color-IA en retail)", opacity: 0.8 },
            }}
            style={{
              stroke: "var(--color-IA en retail)",
            }}
          />
          <Line
            type="monotone"
            dataKey="Comercio social"
            strokeWidth={2}
            activeDot={{
              r: 6,
              style: { fill: "var(--color-Comercio social)", opacity: 0.8 },
            }}
            style={{
              stroke: "var(--color-Comercio social)",
            }}
          />
          <Line
            type="monotone"
            dataKey="Realidad aumentada"
            strokeWidth={2}
            activeDot={{
              r: 6,
              style: { fill: "var(--color-Realidad aumentada)", opacity: 0.8 },
            }}
            style={{
              stroke: "var(--color-Realidad aumentada)",
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}
