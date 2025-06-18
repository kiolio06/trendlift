"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Star, Download, Zap, TrendingUp, Clock } from "lucide-react"

export function LifterMarketplaceContent() {
  const featuredScripts = [
    {
      id: 1,
      name: "WhatsApp Business Automation",
      description: "Automatiza mensajes y respuestas en WhatsApp Business",
      category: "Marketing",
      price: "Gratis",
      rating: 4.9,
      downloads: 1250,
      maker: "TechSolutions",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 2,
      name: "Sales Analytics Dashboard",
      description: "Genera reportes automáticos de ventas y métricas",
      category: "Analytics",
      price: "$15/mes",
      rating: 4.8,
      downloads: 890,
      maker: "DataPro",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 3,
      name: "Inventory Management",
      description: "Gestión automática de inventario y stock",
      category: "Operaciones",
      price: "$25/mes",
      rating: 4.7,
      downloads: 650,
      maker: "AutoFlow",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  const allScripts = [
    ...featuredScripts,
    {
      id: 4,
      name: "Email Marketing Automation",
      description: "Automatiza campañas de email marketing",
      category: "Marketing",
      price: "$10/mes",
      rating: 4.6,
      downloads: 420,
      maker: "MailMaster",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 5,
      name: "Social Media Scheduler",
      description: "Programa publicaciones en redes sociales",
      category: "Marketing",
      price: "Gratis",
      rating: 4.5,
      downloads: 780,
      maker: "SocialBot",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 6,
      name: "Customer Support Bot",
      description: "Bot automático para atención al cliente",
      category: "Soporte",
      price: "$20/mes",
      rating: 4.8,
      downloads: 340,
      maker: "SupportAI",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  return (
    <div className="p-4 md:p-6 pt-20 md:pt-24 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl md:text-3xl font-bold font-heading mb-2">Marketplace</h1>
        <p className="text-muted-foreground text-sm md:text-base">
          Descubre scripts para automatizar y optimizar tu negocio
        </p>
      </div>

      {/* Search and Filters */}
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
                <SelectItem value="support">Soporte</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Precio" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos los precios</SelectItem>
                <SelectItem value="free">Gratis</SelectItem>
                <SelectItem value="paid">De pago</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Tabs */}
      <Tabs defaultValue="featured" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 h-auto gap-1 bg-muted p-1">
          <TabsTrigger value="featured" className="text-xs md:text-sm py-2 px-2 data-[state=active]:bg-background">
            Destacados
          </TabsTrigger>
          <TabsTrigger value="all" className="text-xs md:text-sm py-2 px-2 data-[state=active]:bg-background">
            Todos
          </TabsTrigger>
          <TabsTrigger value="popular" className="text-xs md:text-sm py-2 px-2 data-[state=active]:bg-background">
            Más populares
          </TabsTrigger>
          <TabsTrigger value="recent" className="text-xs md:text-sm py-2 px-2 data-[state=active]:bg-background">
            Recientes
          </TabsTrigger>
        </TabsList>

        <TabsContent value="featured" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredScripts.map((script) => (
              <Card key={script.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                <div className="aspect-video bg-muted rounded-t-lg"></div>
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                    <div className="flex-1">
                      <CardTitle className="text-base md:text-lg">{script.name}</CardTitle>
                      <CardDescription className="mt-1 text-sm">{script.description}</CardDescription>
                    </div>
                    <Badge variant="outline" className="text-xs w-fit">
                      {script.category}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 text-sm">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-400 mr-1" />
                          <span>{script.rating}</span>
                        </div>
                        <div className="flex items-center">
                          <Download className="h-4 w-4 text-muted-foreground mr-1" />
                          <span>{script.downloads}</span>
                        </div>
                      </div>
                      <span className="font-semibold text-primary">{script.price}</span>
                    </div>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                      <span className="text-sm text-muted-foreground">por {script.maker}</span>
                      <Button size="sm" className="w-full md:w-auto text-xs" asChild>
                        <a href={`/lifter/marketplace/${script.id}/config`}>
                        <Zap className="h-4 w-4 mr-2" />
                        Configurar
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="all" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allScripts.map((script) => (
              <Card key={script.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                <div className="aspect-video bg-muted rounded-t-lg"></div>
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                    <div className="flex-1">
                      <CardTitle className="text-base md:text-lg">{script.name}</CardTitle>
                      <CardDescription className="mt-1 text-sm">{script.description}</CardDescription>
                    </div>
                    <Badge variant="outline" className="text-xs w-fit">
                      {script.category}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 text-sm">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-400 mr-1" />
                          <span>{script.rating}</span>
                        </div>
                        <div className="flex items-center">
                          <Download className="h-4 w-4 text-muted-foreground mr-1" />
                          <span>{script.downloads}</span>
                        </div>
                      </div>
                      <span className="font-semibold text-primary">{script.price}</span>
                    </div>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                      <span className="text-sm text-muted-foreground">por {script.maker}</span>
                      <Button size="sm" className="w-full md:w-auto text-xs" asChild>
                        <a href={`/lifter/marketplace/${script.id}/config`}>
                          <Zap className="h-4 w-4 mr-2" />
                          Configurar
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="popular" className="space-y-6">
          <div className="text-center py-12">
            <TrendingUp className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Scripts más populares</h3>
            <p className="text-muted-foreground text-sm">Ordenados por número de descargas y calificaciones</p>
          </div>
        </TabsContent>

        <TabsContent value="recent" className="space-y-6">
          <div className="text-center py-12">
            <Clock className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Scripts recientes</h3>
            <p className="text-muted-foreground text-sm">Los últimos scripts añadidos al marketplace</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
