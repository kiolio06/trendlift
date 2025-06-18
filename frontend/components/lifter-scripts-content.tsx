"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Zap, Search, Play, Settings, BarChart3, CheckCircle, AlertCircle, Clock } from "lucide-react"

export function LifterScriptsContent() {
  const scripts = [
    {
      id: 1,
      name: "Automatización WhatsApp Business",
      description: "Envía mensajes automáticos a clientes potenciales",
      category: "Marketing",
      status: "active",
      lastRun: "Hace 2 horas",
      executions: 156,
      successRate: 98,
    },
    {
      id: 2,
      name: "Análisis de Ventas Diario",
      description: "Genera reportes automáticos de ventas",
      category: "Analytics",
      status: "active",
      lastRun: "Hace 1 hora",
      executions: 89,
      successRate: 100,
    },
    {
      id: 3,
      name: "Gestión de Inventario",
      description: "Actualiza stock automáticamente",
      category: "Operaciones",
      status: "inactive",
      lastRun: "Hace 2 días",
      executions: 45,
      successRate: 95,
    },
    {
      id: 4,
      name: "Email Marketing Semanal",
      description: "Envía newsletters automáticamente",
      category: "Marketing",
      status: "active",
      lastRun: "Hace 30 min",
      executions: 23,
      successRate: 97,
    },
  ]

  return (
    <div className="p-4 md:p-6 pt-20 md:pt-24 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl md:text-3xl font-bold font-heading mb-2">Mis Scripts</h1>
        <p className="text-muted-foreground text-sm md:text-base">Gestiona y monitorea todas tus automatizaciones</p>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Buscar scripts..." className="pl-10" />
              </div>
            </div>
            <Select>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Categoría" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todas las categorías</SelectItem>
                <SelectItem value="marketing">Marketing</SelectItem>
                <SelectItem value="analytics">Analytics</SelectItem>
                <SelectItem value="operations">Operaciones</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Estado" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos los estados</SelectItem>
                <SelectItem value="active">Activos</SelectItem>
                <SelectItem value="inactive">Inactivos</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Scripts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {scripts.map((script) => (
          <Card key={script.id} className="hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
                <div className="flex items-center space-x-3 flex-1">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Zap className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-base md:text-lg">{script.name}</CardTitle>
                    <CardDescription className="text-sm">{script.description}</CardDescription>
                  </div>
                </div>
                <Badge variant={script.status === "active" ? "default" : "secondary"} className="text-xs w-fit">
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
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-xl md:text-2xl font-bold text-primary">{script.executions}</div>
                    <div className="text-xs text-muted-foreground">Ejecuciones</div>
                  </div>
                  <div>
                    <div className="text-xl md:text-2xl font-bold text-success">{script.successRate}%</div>
                    <div className="text-xs text-muted-foreground">Éxito</div>
                  </div>
                  <div>
                    <div className="text-xs md:text-sm font-medium flex items-center justify-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {script.lastRun}
                    </div>
                    <div className="text-xs text-muted-foreground">Última ejecución</div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col md:flex-row gap-2">
                  <Button size="sm" className="flex-1 text-xs">
                    <Play className="h-4 w-4 mr-2" />
                    Ejecutar
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1 text-xs">
                    <Settings className="h-4 w-4 mr-2" />
                    Configurar
                  </Button>
                  <Button variant="outline" size="sm" className="w-full md:w-auto">
                    <BarChart3 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
