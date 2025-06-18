"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowUpRight, X } from "lucide-react"
import { useState } from "react"

export function TrendsSidebar() {
  const [isOpen, setIsOpen] = useState(true)

  const trends = [
    {
      id: 1,
      name: "IA en retail",
      change: "+12%",
      direction: "up",
      category: "Tecnología",
    },
    {
      id: 2,
      name: "Comercio social",
      change: "+8%",
      direction: "up",
      category: "E-commerce",
    },
    {
      id: 3,
      name: "Realidad aumentada",
      change: "+15%",
      direction: "up",
      category: "Tecnología",
    },
    {
      id: 4,
      name: "Pagos sin contacto",
      change: "+6%",
      direction: "up",
      category: "Finanzas",
    },
    {
      id: 5,
      name: "Marketing por voz",
      change: "+9%",
      direction: "up",
      category: "Marketing",
    },
  ]

  if (!isOpen) {
    return (
      <Button variant="outline" size="sm" className="fixed right-4 top-20 z-10" onClick={() => setIsOpen(true)}>
        <ArrowUpRight className="mr-2 h-4 w-4" />
        Ver tendencias
      </Button>
    )
  }

  return (
    <div className="hidden md:block w-72 border-l h-[calc(100vh-4rem)] bg-background">
      <div className="p-4 border-b flex justify-between items-center">
        <h3 className="font-semibold font-heading">Tendencias Emergentes</h3>
        <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)}>
          <X className="h-4 w-4" />
        </Button>
      </div>
      <div className="p-4 space-y-3 overflow-auto h-[calc(100%-60px)]">
        {trends.map((trend) => (
          <Card key={trend.id} className="p-3 hover:bg-muted/50 cursor-pointer transition-colors">
            <div className="flex justify-between items-start mb-2">
              <h4 className="font-medium">{trend.name}</h4>
              <Badge variant="outline" className="text-success bg-success/10">
                {trend.change}
              </Badge>
            </div>
            <div className="text-xs text-muted-foreground">Categoría: {trend.category}</div>
          </Card>
        ))}
        <Button variant="link" className="w-full mt-4">
          Ver todas las tendencias
        </Button>
      </div>
    </div>
  )
}
