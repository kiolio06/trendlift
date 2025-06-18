"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Download, DollarSign, Star, TrendingUp } from "lucide-react"

export function MakerEstadisticasContent() {
  const scripts = [
    {
      id: 1,
      name: "WhatsApp Bulk Sender",
      downloads: 1247,
      revenue: 2494,
      rating: 4.8,
      executions: 3421,
      status: "Publicado",
    },
    {
      id: 2,
      name: "Instagram Analytics",
      downloads: 892,
      revenue: 1784,
      rating: 4.6,
      executions: 2156,
      status: "Publicado",
    },
    {
      id: 3,
      name: "Email Validator",
      downloads: 634,
      revenue: 0,
      rating: 4.9,
      executions: 1892,
      status: "Gratuito",
    },
  ]

  const monthlyStats = [
    { month: "Enero", downloads: 234, revenue: 468 },
    { month: "Febrero", downloads: 312, revenue: 624 },
    { month: "Marzo", downloads: 289, revenue: 578 },
    { month: "Abril", downloads: 445, revenue: 890 },
    { month: "Mayo", downloads: 523, revenue: 1046 },
  ]

  return (
    <div className="p-4 md:p-6 pt-20 md:pt-24 space-y-6">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight">Estadísticas</h1>
        <p className="text-muted-foreground text-sm md:text-base">
          Analiza el rendimiento de tus scripts y optimiza tus ingresos
        </p>
      </div>

      {/* Métricas generales */}
      <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-xs md:text-sm font-medium">Total Descargas</CardTitle>
            <Download className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-xl md:text-2xl font-bold">2,773</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+12%</span> vs mes anterior
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-xs md:text-sm font-medium">Ingresos Totales</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-xl md:text-2xl font-bold">$4,278</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+8%</span> vs mes anterior
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-xs md:text-sm font-medium">Rating Promedio</CardTitle>
            <Star className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-xl md:text-2xl font-bold">4.7</div>
            <p className="text-xs text-muted-foreground">Basado en 156 reseñas</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-xs md:text-sm font-medium">Ejecuciones</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-xl md:text-2xl font-bold">7,469</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+23%</span> vs mes anterior
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="scripts" className="space-y-4">
        <TabsList className="grid w-full grid-cols-3 h-auto">
          <TabsTrigger value="scripts" className="text-xs md:text-sm py-2">
            Por Script
          </TabsTrigger>
          <TabsTrigger value="monthly" className="text-xs md:text-sm py-2">
            Mensual
          </TabsTrigger>
          <TabsTrigger value="feedback" className="text-xs md:text-sm py-2">
            Feedback
          </TabsTrigger>
        </TabsList>

        <TabsContent value="scripts" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg md:text-xl">Rendimiento por Script</CardTitle>
              <CardDescription className="text-sm">Estadísticas detalladas de cada uno de tus scripts</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {scripts.map((script) => (
                  <div key={script.id} className="p-3 md:p-4 border rounded-lg space-y-3">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                      <div className="space-y-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="font-medium text-sm md:text-base">{script.name}</h3>
                          <Badge variant={script.status === "Publicado" ? "default" : "secondary"} className="text-xs">
                            {script.status}
                          </Badge>
                        </div>
                        <div className="grid grid-cols-2 md:flex md:items-center gap-2 md:gap-4 text-xs md:text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Download className="h-3 w-3" />
                            {script.downloads}
                          </span>
                          <span className="flex items-center gap-1">
                            <DollarSign className="h-3 w-3" />${script.revenue}
                          </span>
                          <span className="flex items-center gap-1">
                            <Star className="h-3 w-3" />
                            {script.rating}
                          </span>
                          <span className="flex items-center gap-1">
                            <TrendingUp className="h-3 w-3" />
                            {script.executions}
                          </span>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" className="w-full md:w-auto text-xs">
                        Ver detalles
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="monthly" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg md:text-xl">Estadísticas Mensuales</CardTitle>
              <CardDescription className="text-sm">Evolución de descargas e ingresos por mes</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {monthlyStats.map((stat, index) => (
                  <div
                    key={stat.month}
                    className="flex flex-col md:flex-row md:items-center md:justify-between p-3 md:p-4 border rounded-lg gap-3"
                  >
                    <div className="space-y-1">
                      <h3 className="font-medium">{stat.month}</h3>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span>{stat.downloads} descargas</span>
                        <span>${stat.revenue} ingresos</span>
                      </div>
                    </div>
                    <div className="w-full md:w-32">
                      <Progress value={(stat.downloads / 600) * 100} className="h-2" />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="feedback" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg md:text-xl">Feedback de Usuarios</CardTitle>
              <CardDescription className="text-sm">Reseñas y comentarios de tus scripts</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-3 md:p-4 border rounded-lg">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                    <div className="space-y-1 flex-1">
                      <div className="flex flex-col md:flex-row md:items-center gap-2">
                        <span className="font-medium text-sm">Usuario123</span>
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star key={star} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                      </div>
                      <p className="text-xs md:text-sm text-muted-foreground">WhatsApp Bulk Sender</p>
                      <p className="text-sm">
                        "Excelente script, muy fácil de usar y muy efectivo. Lo recomiendo totalmente."
                      </p>
                    </div>
                    <span className="text-xs text-muted-foreground">Hace 2 días</span>
                  </div>
                </div>

                <div className="p-3 md:p-4 border rounded-lg">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                    <div className="space-y-1 flex-1">
                      <div className="flex flex-col md:flex-row md:items-center gap-2">
                        <span className="font-medium text-sm">MarketingPro</span>
                        <div className="flex">
                          {[1, 2, 3, 4].map((star) => (
                            <Star key={star} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                          ))}
                          <Star className="h-3 w-3 text-gray-300" />
                        </div>
                      </div>
                      <p className="text-xs md:text-sm text-muted-foreground">Instagram Analytics</p>
                      <p className="text-sm">
                        "Muy útil para analizar métricas. Sería genial si tuviera más opciones de exportación."
                      </p>
                    </div>
                    <span className="text-xs text-muted-foreground">Hace 1 semana</span>
                  </div>
                </div>

                <div className="p-3 md:p-4 border rounded-lg">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                    <div className="space-y-1 flex-1">
                      <div className="flex flex-col md:flex-row md:items-center gap-2">
                        <span className="font-medium text-sm">DevUser</span>
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star key={star} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                      </div>
                      <p className="text-xs md:text-sm text-muted-foreground">Email Validator</p>
                      <p className="text-sm">"Script gratuito increíble. Funciona perfectamente y es muy rápido."</p>
                    </div>
                    <span className="text-xs text-muted-foreground">Hace 3 días</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
