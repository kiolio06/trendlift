"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Code,
  Plus,
  Search,
  Edit,
  Eye,
  BarChart3,
  Trash2,
  Clock,
  CheckCircle,
  AlertCircle,
  ShoppingCart,
} from "lucide-react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"

export function MakerScriptsContent() {
  const scripts = [
    {
      id: 1,
      name: "E-commerce Trend Analyzer",
      category: "Análisis",
      status: "Publicado",
      publishDate: "15/12/2023",
      views: 234,
      purchases: 89,
      rating: 4.8,
      description: "Analiza tendencias de productos en tiendas online y predice demanda",
    },
    {
      id: 2,
      name: "Social Media Monitor",
      category: "Marketing",
      status: "Publicado",
      publishDate: "08/01/2024",
      views: 156,
      purchases: 67,
      rating: 4.6,
      description: "Monitorea menciones y engagement en redes sociales",
    },
    {
      id: 3,
      name: "Financial Market Predictor",
      category: "Análisis",
      status: "Borrador",
      publishDate: "-",
      views: 0,
      purchases: 0,
      rating: 0,
      description: "Predice movimientos en mercados financieros usando IA",
    },
    {
      id: 4,
      name: "Content Trend Detector",
      category: "Marketing",
      status: "Revisión",
      publishDate: "10/01/2024",
      views: 45,
      purchases: 0,
      rating: 0,
      description: "Detecta tendencias emergentes en contenido digital",
    },
    {
      id: 5,
      name: "Retail Analytics Suite",
      category: "Ventas",
      status: "Publicado",
      publishDate: "22/11/2023",
      views: 312,
      purchases: 124,
      rating: 4.7,
      description: "Suite completa para análisis de retail y optimización de ventas",
    },
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Publicado":
        return <CheckCircle className="h-4 w-4 text-success" />
      case "Revisión":
        return <Clock className="h-4 w-4 text-primary" />
      case "Borrador":
        return <AlertCircle className="h-4 w-4 text-muted-foreground" />
      default:
        return <Clock className="h-4 w-4 text-muted-foreground" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Publicado":
        return "bg-success/10 text-success border-success"
      case "Revisión":
        return "bg-primary/10 text-primary border-primary"
      case "Borrador":
        return "bg-muted text-muted-foreground border-muted"
      default:
        return "bg-muted text-muted-foreground border-muted"
    }
  }

  return (
    <div className="p-6 pt-20 space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold font-heading">Mis Scripts</h1>
          <p className="text-muted-foreground font-body">Gestiona tus scripts y analiza su rendimiento</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90" asChild>
          <Link href="/maker-dashboard/scripts/new">
            <Plus className="mr-2 h-4 w-4" />
            Crear Nuevo Script
          </Link>
        </Button>
      </div>

      {/* Métricas rápidas */}
      <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Scripts Publicados</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-success">+1</span> este mes
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Compras</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">280</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-success">+45</span> esta semana
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Ingresos Estimados</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$8,234</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-success">+12%</span> vs anterior
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Rating Promedio</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4.7⭐</div>
            <p className="text-xs text-muted-foreground">Basado en 156 reseñas</p>
          </CardContent>
        </Card>
      </div>

      {/* Filtros y búsqueda */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Buscar scripts..." className="pl-10" />
        </div>
        <Select defaultValue="all">
          <SelectTrigger className="w-full md:w-[180px]">
            <SelectValue placeholder="Filtrar por estado" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todos los estados</SelectItem>
            <SelectItem value="publicado">Publicado</SelectItem>
            <SelectItem value="borrador">Borrador</SelectItem>
            <SelectItem value="revision">En revisión</SelectItem>
          </SelectContent>
        </Select>
        <Select defaultValue="all">
          <SelectTrigger className="w-full md:w-[180px]">
            <SelectValue placeholder="Categoría" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todas las categorías</SelectItem>
            <SelectItem value="analisis">Análisis</SelectItem>
            <SelectItem value="marketing">Marketing</SelectItem>
            <SelectItem value="ventas">Ventas</SelectItem>
            <SelectItem value="facturacion">Facturación</SelectItem>
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
                    <Code className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg font-heading">{script.name}</CardTitle>
                    <CardDescription className="font-body">{script.description}</CardDescription>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="text-xs">
                    {script.category}
                  </Badge>
                  <Badge variant="outline" className={`text-xs ${getStatusColor(script.status)}`}>
                    <span className="flex items-center gap-1">
                      {getStatusIcon(script.status)}
                      {script.status}
                    </span>
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-4">
                <div>
                  <p className="text-xs text-muted-foreground">Fecha publicación</p>
                  <p className="text-sm font-medium">{script.publishDate}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Vistas</p>
                  <p className="text-sm font-medium flex items-center">
                    <Eye className="mr-1 h-3 w-3" />
                    {script.views}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Compras</p>
                  <p className="text-sm font-medium flex items-center">
                    <ShoppingCart className="mr-1 h-3 w-3" />
                    {script.purchases}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Rating</p>
                  <p className="text-sm font-medium">{script.rating > 0 ? `${script.rating}⭐` : "Sin rating"}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Conversión</p>
                  <p className="text-sm font-medium">
                    {script.views > 0 ? `${Math.round((script.purchases / script.views) * 100)}%` : "0%"}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                <Button variant="outline" size="sm" asChild>
                  <Link href={`/maker-dashboard/scripts/${script.id}/edit`}>
                    <Edit className="mr-2 h-4 w-4" />
                    Editar
                  </Link>
                </Button>
                <Button variant="outline" size="sm">
                  <Eye className="mr-2 h-4 w-4" />
                  Ver como Lifter
                </Button>
                <Button variant="outline" size="sm">
                  <BarChart3 className="mr-2 h-4 w-4" />
                  Estadísticas
                </Button>
                {script.status === "Borrador" && (
                  <Button variant="outline" size="sm" className="text-success hover:text-success">
                    <CheckCircle className="mr-2 h-4 w-4" />
                    Publicar
                  </Button>
                )}
                <Button variant="outline" size="sm" className="text-destructive hover:text-destructive">
                  <Trash2 className="mr-2 h-4 w-4" />
                  Eliminar
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Call to action para crear más scripts */}
      <Card className="bg-muted/30 border-dashed">
        <CardContent className="flex flex-col items-center justify-center py-8 text-center">
          <div className="p-3 bg-primary/10 rounded-full mb-4">
            <Plus className="h-8 w-8 text-primary" />
          </div>
          <h3 className="text-lg font-semibold font-heading mb-2">¿Tienes una idea para un nuevo script?</h3>
          <p className="text-muted-foreground font-body mb-4 max-w-md">
            Crea automatizaciones útiles y monetiza tu conocimiento técnico
          </p>
          <Button asChild>
            <Link href="/maker-dashboard/scripts/new">Crear Nuevo Script</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
