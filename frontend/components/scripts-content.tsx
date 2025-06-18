"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Zap,
  Play,
  Pause,
  Settings,
  BarChart3,
  Trash2,
  Plus,
  Search,
  CheckCircle,
  AlertCircle,
  Clock,
} from "lucide-react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"

export function ScriptsContent() {
  const scripts = [
    {
      id: 1,
      name: "Publicación Automática en Redes",
      type: "Marketing",
      status: "Activo",
      lastExecution: "Hace 2 horas",
      nextExecution: "En 4 horas",
      executions: 45,
      success: true,
      description: "Publica contenido automáticamente en Instagram y Facebook",
    },
    {
      id: 2,
      name: "Análisis de Tendencias Diario",
      type: "Análisis",
      status: "Activo",
      lastExecution: "Hace 1 día",
      nextExecution: "Mañana 8:00 AM",
      executions: 30,
      success: true,
      description: "Analiza tendencias del mercado y genera reportes",
    },
    {
      id: 3,
      name: "Facturación Automática",
      type: "Ventas",
      status: "Inactivo",
      lastExecution: "Hace 3 días",
      nextExecution: "No programado",
      executions: 12,
      success: false,
      description: "Genera facturas automáticamente para clientes recurrentes",
    },
    {
      id: 4,
      name: "Seguimiento de Clientes",
      type: "CRM",
      status: "Activo",
      lastExecution: "Hace 6 horas",
      nextExecution: "En 18 horas",
      executions: 67,
      success: true,
      description: "Envía seguimientos automáticos a clientes potenciales",
    },
    {
      id: 5,
      name: "Backup de Datos",
      type: "Mantenimiento",
      status: "Error",
      lastExecution: "Hace 2 días",
      nextExecution: "Requiere atención",
      executions: 8,
      success: false,
      description: "Realiza copias de seguridad de datos importantes",
    },
  ]

  const getStatusIcon = (status: string, success: boolean) => {
    if (status === "Error") return <AlertCircle className="h-4 w-4 text-destructive" />
    if (status === "Activo" && success) return <CheckCircle className="h-4 w-4 text-success" />
    if (status === "Activo" && !success) return <Clock className="h-4 w-4 text-primary" />
    return <Pause className="h-4 w-4 text-muted-foreground" />
  }

  const getStatusColor = (status: string, success: boolean) => {
    if (status === "Error") return "bg-destructive/10 text-destructive border-destructive"
    if (status === "Activo" && success) return "bg-success/10 text-success border-success"
    if (status === "Activo" && !success) return "bg-primary/10 text-primary border-primary"
    return "bg-muted text-muted-foreground border-muted"
  }

  return (
    <div className="flex-1 p-4 md:p-8 overflow-auto pt-16 md:pt-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold font-heading">Scripts</h1>
          <p className="text-muted-foreground font-body">Gestiona tus automatizaciones y scripts activos</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90">
          <Plus className="mr-2 h-4 w-4" />
          Ir al Marketplace
        </Button>
      </div>

      {/* Filtros y búsqueda */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Buscar scripts..." className="pl-10" />
        </div>
        <Select defaultValue="all">
          <SelectTrigger className="w-full md:w-[180px]">
            <SelectValue placeholder="Filtrar por tipo" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todos los tipos</SelectItem>
            <SelectItem value="marketing">Marketing</SelectItem>
            <SelectItem value="ventas">Ventas</SelectItem>
            <SelectItem value="analisis">Análisis</SelectItem>
            <SelectItem value="crm">CRM</SelectItem>
            <SelectItem value="mantenimiento">Mantenimiento</SelectItem>
          </SelectContent>
        </Select>
        <Select defaultValue="all">
          <SelectTrigger className="w-full md:w-[180px]">
            <SelectValue placeholder="Filtrar por estado" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todos los estados</SelectItem>
            <SelectItem value="activo">Activo</SelectItem>
            <SelectItem value="inactivo">Inactivo</SelectItem>
            <SelectItem value="error">Error</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Lista de scripts */}
      <div className="grid gap-4">
        {scripts.map((script) => (
          <Card key={script.id} className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Zap className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg font-heading">{script.name}</CardTitle>
                    <CardDescription className="font-body">{script.description}</CardDescription>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="text-xs">
                    {script.type}
                  </Badge>
                  <Badge variant="outline" className={`text-xs ${getStatusColor(script.status, script.success)}`}>
                    <span className="flex items-center gap-1">
                      {getStatusIcon(script.status, script.success)}
                      {script.status}
                    </span>
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                <div>
                  <p className="text-xs text-muted-foreground">Última ejecución</p>
                  <p className="text-sm font-medium">{script.lastExecution}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Próxima ejecución</p>
                  <p className="text-sm font-medium">{script.nextExecution}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Total ejecuciones</p>
                  <p className="text-sm font-medium">{script.executions}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Tasa de éxito</p>
                  <p className="text-sm font-medium">{script.success ? "98%" : "45%"}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {script.status === "Activo" ? (
                  <Button variant="outline" size="sm">
                    <Pause className="mr-2 h-4 w-4" />
                    Pausar
                  </Button>
                ) : (
                  <Button variant="outline" size="sm">
                    <Play className="mr-2 h-4 w-4" />
                    Activar
                  </Button>
                )}
                <Button variant="outline" size="sm">
                  <Play className="mr-2 h-4 w-4" />
                  Ejecutar ahora
                </Button>
                <Button variant="outline" size="sm">
                  <Settings className="mr-2 h-4 w-4" />
                  Configurar
                </Button>
                <Button variant="outline" size="sm">
                  <BarChart3 className="mr-2 h-4 w-4" />
                  Ver resultados
                </Button>
                <Button variant="outline" size="sm" className="text-destructive hover:text-destructive">
                  <Trash2 className="mr-2 h-4 w-4" />
                  Eliminar
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Call to action para más scripts */}
      <Card className="mt-8 bg-muted/30 border-dashed">
        <CardContent className="flex flex-col items-center justify-center py-8 text-center">
          <div className="p-3 bg-primary/10 rounded-full mb-4">
            <Plus className="h-8 w-8 text-primary" />
          </div>
          <h3 className="text-lg font-semibold font-heading mb-2">¿Necesitas más automatizaciones?</h3>
          <p className="text-muted-foreground font-body mb-4 max-w-md">
            Explora nuestro marketplace para encontrar scripts que se adapten perfectamente a tu negocio
          </p>
          <Button asChild>
            <Link href="/marketplace">Explorar Marketplace</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
