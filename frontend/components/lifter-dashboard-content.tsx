"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Zap, Store, TrendingUp, Clock, CheckCircle, AlertCircle } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

export function LifterDashboardContent() {
  const [username, setUsername] = useState("")

  useEffect(() => {
    const storedUsername = localStorage.getItem("username")
    if (storedUsername) {
      setUsername(storedUsername)
    }
  }, [])

  const recentScripts = [
    {
      id: 1,
      name: "Automatización WhatsApp",
      status: "active",
      lastRun: "Hace 2 horas",
      category: "Marketing",
    },
    {
      id: 2,
      name: "Análisis de Ventas",
      status: "inactive",
      lastRun: "Hace 1 día",
      category: "Analytics",
    },
    {
      id: 3,
      name: "Gestión de Inventario",
      status: "active",
      lastRun: "Hace 30 min",
      category: "Operaciones",
    },
  ]

  const recommendations = [
    {
      title: "Script de Email Marketing",
      description: "Automatiza tus campañas de email",
      price: "Gratis",
      rating: 4.8,
    },
    {
      title: "Análisis de Competencia",
      description: "Monitorea a tu competencia automáticamente",
      price: "$15/mes",
      rating: 4.9,
    },
  ]

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold font-heading mb-2">¡Bienvenido {username}!</h1>
        <p className="text-muted-foreground">Gestiona tus automatizaciones y descubre nuevas oportunidades</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Scripts Activos</CardTitle>
            <Zap className="h-4 w-4 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">+1 desde la semana pasada</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Tiempo Ahorrado</CardTitle>
            <Clock className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24h</div>
            <p className="text-xs text-muted-foreground">Este mes</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Eficiencia</CardTitle>
            <TrendingUp className="h-4 w-4 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+85%</div>
            <p className="text-xs text-muted-foreground">Mejora en productividad</p>
          </CardContent>
        </Card>
      </div>

      {/* Recent Scripts */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Mis Scripts Recientes</CardTitle>
              <CardDescription>Gestiona y monitorea tus automatizaciones</CardDescription>
            </div>
            <Button asChild>
              <Link href="/lifter/scripts">Ver todos</Link>
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentScripts.map((script) => (
              <div key={script.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Zap className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">{script.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {script.category} • {script.lastRun}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                  <Badge variant={script.status === "active" ? "default" : "secondary"}>
                    {script.status === "active" ? (
                      <>
                        <CheckCircle className="h-3 w-3 mr-1" />
                        Activo
                      </>
                    ) : (
                      <>
                        <AlertCircle className="h-3 w-3 mr-1" />
                        Inactivo
                      </>
                    )}
                  </Badge>
                  <Button variant="outline" size="sm">
                    Configurar
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recommendations */}
      <Card>
        <CardHeader>
          <div className="flex flex-col md: flex-row md:justify-between md:items-center">
            <div>
              <CardTitle>Recomendaciones para ti</CardTitle>
              <CardDescription>Scripts que podrían interesarte</CardDescription>
            </div>
            <Button
            variant="outline" 
            size="sm"
            className="w-full sm:w-auto text-sm px-3 py-1.5 sm:px-4 sm:py-2"
            asChild>
              <Link href="/lifter/marketplace" className="flex items-center justify-center w-full sm:w-auto">
                <Store className="h-4 w-4 mr-2 flex-shrink-0" />
                Explorar Marketplace
              </Link>
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {recommendations.map((item, index) => (
              <div key={index} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-medium">{item.title}</h3>
                  <Badge variant="outline">{item.price}</Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-3">{item.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="text-sm text-muted-foreground">⭐ {item.rating}</span>
                  </div>
                  <Button size="sm">Ver detalles</Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
