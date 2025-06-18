"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Star, Download, Eye, DollarSign, TrendingUp, BarChart3 } from "lucide-react"

export function MakerMarketplaceContent() {
  const myPublishedScripts = [
    {
      id: 1,
      name: "WhatsApp Business Automation",
      description: "Automatiza mensajes y respuestas en WhatsApp Business",
      category: "Marketing",
      price: "Gratis",
      rating: 4.9,
      downloads: 1250,
      views: 3400,
      revenue: 0,
      status: "published",
    },
    {
      id: 2,
      name: "Sales Analytics Dashboard",
      description: "Genera reportes automáticos de ventas y métricas",
      category: "Analytics",
      price: "$15/mes",
      rating: 4.8,
      downloads: 890,
      views: 2100,
      revenue: 13350,
      status: "published",
    },
  ]

  const marketplaceStats = {
    totalDownloads: 2140,
    totalRevenue: 13350,
    averageRating: 4.85,
    totalViews: 5500,
  }

  return (
    <div className="p-4 md:p-6 pt-20 md:pt-24 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl md:text-3xl font-bold font-heading mb-2">Marketplace - Vista Maker</h1>
        <p className="text-muted-foreground text-sm md:text-base">
          Gestiona tus scripts publicados y analiza su rendimiento
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-xs md:text-sm font-medium">Total Descargas</CardTitle>
            <Download className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-xl md:text-2xl font-bold">{marketplaceStats.totalDownloads.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">+12% desde el mes pasado</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-xs md:text-sm font-medium">Ingresos Totales</CardTitle>
            <DollarSign className="h-4 w-4 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-xl md:text-2xl font-bold">${marketplaceStats.totalRevenue.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">+8% desde el mes pasado</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-xs md:text-sm font-medium">Rating Promedio</CardTitle>
            <Star className="h-4 w-4 text-yellow-400" />
          </CardHeader>
          <CardContent>
            <div className="text-xl md:text-2xl font-bold">{marketplaceStats.averageRating}</div>
            <p className="text-xs text-muted-foreground">Excelente calificación</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-xs md:text-sm font-medium">Total Vistas</CardTitle>
            <Eye className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-xl md:text-2xl font-bold">{marketplaceStats.totalViews.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">+15% desde el mes pasado</p>
          </CardContent>
        </Card>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="published" className="space-y-6">
        <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 h-auto gap-1">
          <TabsTrigger value="published" className="text-xs md:text-sm py-2 px-2">
            Scripts Publicados
          </TabsTrigger>
          <TabsTrigger value="analytics" className="text-xs md:text-sm py-2 px-2">
            Análisis Detallado
          </TabsTrigger>
          <TabsTrigger value="marketplace" className="text-xs md:text-sm py-2 px-2">
            Explorar Marketplace
          </TabsTrigger>
        </TabsList>

        <TabsContent value="published" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {myPublishedScripts.map((script) => (
              <Card key={script.id} className="hover:shadow-md transition-shadow">
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
                    {/* Performance Stats */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center">
                        <div className="text-xl md:text-2xl font-bold text-primary">{script.downloads}</div>
                        <div className="text-xs text-muted-foreground">Descargas</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xl md:text-2xl font-bold text-success">
                          {script.revenue > 0 ? `$${script.revenue.toLocaleString()}` : "Gratis"}
                        </div>
                        <div className="text-xs text-muted-foreground">Ingresos</div>
                      </div>
                    </div>

                    {/* Rating and Views */}
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 text-sm">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-400 mr-1" />
                          <span>{script.rating}</span>
                        </div>
                        <div className="flex items-center">
                          <Eye className="h-4 w-4 text-muted-foreground mr-1" />
                          <span>{script.views}</span>
                        </div>
                      </div>
                      <span className="font-semibold text-primary">{script.price}</span>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col md:flex-row gap-2">
                      <Button variant="outline" size="sm" className="flex-1 text-xs">
                        Editar
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1 text-xs">
                        <BarChart3 className="h-4 w-4 mr-2" />
                        Estadísticas
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-6">
          <div className="text-center py-12">
            <BarChart3 className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Análisis Detallado</h3>
            <p className="text-muted-foreground text-sm">Métricas avanzadas de rendimiento de tus scripts</p>
          </div>
        </TabsContent>

        <TabsContent value="marketplace" className="space-y-6">
          <div className="text-center py-12">
            <TrendingUp className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Explorar Marketplace</h3>
            <p className="text-muted-foreground text-sm">Descubre qué están creando otros Makers</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
