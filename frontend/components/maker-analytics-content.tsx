"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  BarChart3,
  TrendingUp,
  Download,
  Calendar,
  Star,
  Users,
  DollarSign,
  MessageSquare,
  ChevronRight,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Line, LineChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend, Bar, BarChart } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export function MakerAnalyticsContent() {
  // Datos de ejemplo para las gráficas
  const salesData = [
    { date: "Ene", "E-commerce Analyzer": 12, "Social Monitor": 8, "Retail Analytics": 15 },
    { date: "Feb", "E-commerce Analyzer": 19, "Social Monitor": 12, "Retail Analytics": 17 },
    { date: "Mar", "E-commerce Analyzer": 22, "Social Monitor": 18, "Retail Analytics": 20 },
    { date: "Abr", "E-commerce Analyzer": 25, "Social Monitor": 24, "Retail Analytics": 18 },
    { date: "May", "E-commerce Analyzer": 32, "Social Monitor": 28, "Retail Analytics": 22 },
    { date: "Jun", "E-commerce Analyzer": 38, "Social Monitor": 35, "Retail Analytics": 30 },
  ]

  const revenueData = [
    { date: "Ene", "E-commerce Analyzer": 599, "Social Monitor": 320, "Retail Analytics": 1199 },
    { date: "Feb", "E-commerce Analyzer": 949, "Social Monitor": 480, "Retail Analytics": 1359 },
    { date: "Mar", "E-commerce Analyzer": 1099, "Social Monitor": 720, "Retail Analytics": 1599 },
    { date: "Abr", "E-commerce Analyzer": 1249, "Social Monitor": 960, "Retail Analytics": 1439 },
    { date: "May", "E-commerce Analyzer": 1599, "Social Monitor": 1120, "Retail Analytics": 1759 },
    { date: "Jun", "E-commerce Analyzer": 1899, "Social Monitor": 1400, "Retail Analytics": 2399 },
  ]

  const ratingData = [
    { name: "5 estrellas", value: 68 },
    { name: "4 estrellas", value: 22 },
    { name: "3 estrellas", value: 7 },
    { name: "2 estrellas", value: 2 },
    { name: "1 estrella", value: 1 },
  ]

  const scriptPerformance = [
    {
      id: 1,
      name: "E-commerce Trend Analyzer",
      executions: 245,
      purchases: 89,
      rating: 4.8,
      revenue: "$4,455",
      growth: "+18%",
      trend: "up",
    },
    {
      id: 2,
      name: "Social Media Monitor",
      executions: 187,
      purchases: 67,
      rating: 4.6,
      revenue: "$2,679",
      growth: "+12%",
      trend: "up",
    },
    {
      id: 5,
      name: "Retail Analytics Suite",
      executions: 312,
      purchases: 124,
      rating: 4.7,
      revenue: "$9,917",
      growth: "+24%",
      trend: "up",
    },
  ]

  const reviews = [
    {
      id: 1,
      user: "María G.",
      avatar: "M",
      script: "E-commerce Trend Analyzer",
      rating: 5,
      comment:
        "Increíble herramienta. Ha transformado completamente cómo analizamos las tendencias de productos en nuestra tienda online. Los insights son precisos y accionables.",
      date: "Hace 2 días",
    },
    {
      id: 2,
      user: "Carlos R.",
      avatar: "C",
      script: "Social Media Monitor",
      rating: 4,
      comment:
        "Muy útil para monitorear menciones en redes sociales. Me gustaría que tuviera más integración con plataformas emergentes, pero en general es excelente.",
      date: "Hace 1 semana",
    },
    {
      id: 3,
      user: "Ana L.",
      avatar: "A",
      script: "Retail Analytics Suite",
      rating: 5,
      comment:
        "La suite completa es impresionante. Nos ha ayudado a optimizar nuestro inventario y a predecir tendencias de ventas con gran precisión. Vale cada centavo.",
      date: "Hace 3 días",
    },
  ]

  return (
    <div className="flex-1 p-4 md:p-8 overflow-auto pt-16 md:pt-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold font-heading">Ventas y Estadísticas</h1>
          <p className="text-muted-foreground font-body">Analiza el rendimiento de tus scripts en el marketplace</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Calendar className="mr-2 h-4 w-4" />
            Personalizar período
          </Button>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Exportar datos
          </Button>
          <Select defaultValue="30d">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Período" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7d">Últimos 7 días</SelectItem>
              <SelectItem value="30d">Últimos 30 días</SelectItem>
              <SelectItem value="90d">Últimos 90 días</SelectItem>
              <SelectItem value="1y">Último año</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* KPIs principales */}
      <div className="grid gap-4 grid-cols-2 lg:grid-cols-4 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Ventas Totales</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$17,051</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-success inline-flex items-center">
                <TrendingUp className="mr-1 h-3 w-3" />
                +21%
              </span>{" "}
              vs mes anterior
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Scripts Vendidos</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">280</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-success inline-flex items-center">
                <TrendingUp className="mr-1 h-3 w-3" />
                +45
              </span>{" "}
              vs mes anterior
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Ejecuciones</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">744</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-success inline-flex items-center">
                <TrendingUp className="mr-1 h-3 w-3" />
                +18%
              </span>{" "}
              vs mes anterior
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Rating Promedio</CardTitle>
            <Star className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4.7⭐</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-success inline-flex items-center">
                <TrendingUp className="mr-1 h-3 w-3" />
                +0.2
              </span>{" "}
              vs mes anterior
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
          <TabsTrigger value="overview" className="text-xs md:text-sm">
            Vista General
          </TabsTrigger>
          <TabsTrigger value="scripts" className="text-xs md:text-sm">
            Rendimiento por Script
          </TabsTrigger>
          <TabsTrigger value="reviews" className="text-xs md:text-sm">
            Reseñas y Feedback
          </TabsTrigger>
          <TabsTrigger value="customers" className="text-xs md:text-sm">
            Clientes
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-heading">Ventas por Script</CardTitle>
                <CardDescription className="font-body">Número de scripts vendidos por mes</CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                <div className="h-[300px]">
                  <ChartContainer
                    config={{
                      "E-commerce Analyzer": {
                        label: "E-commerce Analyzer",
                        color: "hsl(var(--chart-1))",
                      },
                      "Social Monitor": {
                        label: "Social Monitor",
                        color: "hsl(var(--chart-2))",
                      },
                      "Retail Analytics": {
                        label: "Retail Analytics",
                        color: "hsl(var(--chart-3))",
                      },
                    }}
                  >
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart
                        data={salesData}
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
                        <Legend />
                        <Line
                          type="monotone"
                          dataKey="E-commerce Analyzer"
                          strokeWidth={2}
                          activeDot={{
                            r: 6,
                            style: { fill: "var(--color-E-commerce Analyzer)", opacity: 0.8 },
                          }}
                          style={{
                            stroke: "var(--color-E-commerce Analyzer)",
                          }}
                        />
                        <Line
                          type="monotone"
                          dataKey="Social Monitor"
                          strokeWidth={2}
                          activeDot={{
                            r: 6,
                            style: { fill: "var(--color-Social Monitor)", opacity: 0.8 },
                          }}
                          style={{
                            stroke: "var(--color-Social Monitor)",
                          }}
                        />
                        <Line
                          type="monotone"
                          dataKey="Retail Analytics"
                          strokeWidth={2}
                          activeDot={{
                            r: 6,
                            style: { fill: "var(--color-Retail Analytics)", opacity: 0.8 },
                          }}
                          style={{
                            stroke: "var(--color-Retail Analytics)",
                          }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-heading">Ingresos por Script</CardTitle>
                <CardDescription className="font-body">Ingresos generados por mes (USD)</CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                <div className="h-[300px]">
                  <ChartContainer
                    config={{
                      "E-commerce Analyzer": {
                        label: "E-commerce Analyzer",
                        color: "hsl(var(--chart-1))",
                      },
                      "Social Monitor": {
                        label: "Social Monitor",
                        color: "hsl(var(--chart-2))",
                      },
                      "Retail Analytics": {
                        label: "Retail Analytics",
                        color: "hsl(var(--chart-3))",
                      },
                    }}
                  >
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart
                        data={revenueData}
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
                        <Legend />
                        <Line
                          type="monotone"
                          dataKey="E-commerce Analyzer"
                          strokeWidth={2}
                          activeDot={{
                            r: 6,
                            style: { fill: "var(--color-E-commerce Analyzer)", opacity: 0.8 },
                          }}
                          style={{
                            stroke: "var(--color-E-commerce Analyzer)",
                          }}
                        />
                        <Line
                          type="monotone"
                          dataKey="Social Monitor"
                          strokeWidth={2}
                          activeDot={{
                            r: 6,
                            style: { fill: "var(--color-Social Monitor)", opacity: 0.8 },
                          }}
                          style={{
                            stroke: "var(--color-Social Monitor)",
                          }}
                        />
                        <Line
                          type="monotone"
                          dataKey="Retail Analytics"
                          strokeWidth={2}
                          activeDot={{
                            r: 6,
                            style: { fill: "var(--color-Retail Analytics)", opacity: 0.8 },
                          }}
                          style={{
                            stroke: "var(--color-Retail Analytics)",
                          }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-heading">Distribución de Calificaciones</CardTitle>
                <CardDescription className="font-body">Desglose de ratings por estrellas</CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={ratingData}
                      margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                      }}
                    >
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="value" fill="hsl(var(--chart-1))" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-heading">Próximos Pagos</CardTitle>
                <CardDescription className="font-body">Ingresos pendientes de recibir</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">15 de Julio, 2024</p>
                      <p className="text-sm text-muted-foreground">Período: 1-30 Junio</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-lg">$5,698</p>
                      <Badge variant="outline" className="bg-primary/10 text-primary">
                        Pendiente
                      </Badge>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">15 de Agosto, 2024</p>
                      <p className="text-sm text-muted-foreground">Período: 1-31 Julio</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-lg">$6,120</p>
                      <Badge variant="outline" className="bg-muted text-muted-foreground">
                        Estimado
                      </Badge>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">15 de Septiembre, 2024</p>
                      <p className="text-sm text-muted-foreground">Período: 1-31 Agosto</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-lg">$6,500</p>
                      <Badge variant="outline" className="bg-muted text-muted-foreground">
                        Proyectado
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="scripts" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-heading">Rendimiento por Script</CardTitle>
              <CardDescription className="font-body">
                Métricas detalladas de cada uno de tus scripts publicados
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {scriptPerformance.map((script) => (
                  <div key={script.id} className="p-4 border rounded-lg">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-4">
                      <div>
                        <h4 className="font-medium text-lg">{script.name}</h4>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge variant="outline" className="text-xs bg-success/10 text-success">
                            {script.growth}
                          </Badge>
                          <span className="text-xs text-muted-foreground">vs mes anterior</span>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        Ver detalles
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="p-3 bg-muted/20 rounded-lg">
                        <p className="text-xs text-muted-foreground">Ejecuciones</p>
                        <p className="text-lg font-bold">{script.executions}</p>
                      </div>
                      <div className="p-3 bg-muted/20 rounded-lg">
                        <p className="text-xs text-muted-foreground">Compras</p>
                        <p className="text-lg font-bold">{script.purchases}</p>
                      </div>
                      <div className="p-3 bg-muted/20 rounded-lg">
                        <p className="text-xs text-muted-foreground">Rating</p>
                        <p className="text-lg font-bold">{script.rating}⭐</p>
                      </div>
                      <div className="p-3 bg-muted/20 rounded-lg">
                        <p className="text-xs text-muted-foreground">Ingresos</p>
                        <p className="text-lg font-bold">{script.revenue}</p>
                      </div>
                    </div>

                    <div className="mt-4">
                      <h5 className="text-sm font-medium mb-2">Tendencia de ventas (últimos 30 días)</h5>
                      <div className="flex items-center">
                        <div className="flex-1 bg-muted h-2 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-primary rounded-full"
                            style={{ width: `${Math.floor(Math.random() * 40 + 60)}%` }}
                          ></div>
                        </div>
                        <span className="ml-2 text-sm font-medium">
                          {script.trend === "up" ? (
                            <ArrowUpRight className="h-4 w-4 text-success" />
                          ) : (
                            <ArrowDownRight className="h-4 w-4 text-destructive" />
                          )}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reviews" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-heading">Reseñas Recientes</CardTitle>
              <CardDescription className="font-body">Feedback de los usuarios sobre tus scripts</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {reviews.map((review) => (
                  <div key={review.id} className="p-4 border rounded-lg">
                    <div className="flex items-start gap-3 mb-3">
                      <Avatar>
                        <AvatarFallback>{review.avatar}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="font-medium">{review.user}</h4>
                          <Badge variant="outline" className="text-xs">
                            {review.script}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-2 mt-1">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-3 w-3 ${
                                  i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-muted-foreground"
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-xs text-muted-foreground">{review.date}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm">{review.comment}</p>
                    <div className="flex justify-end mt-3">
                      <Button variant="outline" size="sm">
                        <MessageSquare className="mr-2 h-3 w-3" />
                        Responder
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-heading">Análisis de Sentimiento</CardTitle>
              <CardDescription className="font-body">
                Análisis automático del sentimiento en las reseñas
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 border rounded-lg text-center">
                  <div className="text-4xl mb-2 text-success">😀</div>
                  <h4 className="font-medium">Positivo</h4>
                  <p className="text-2xl font-bold">82%</p>
                  <p className="text-xs text-muted-foreground">de las reseñas</p>
                </div>
                <div className="p-4 border rounded-lg text-center">
                  <div className="text-4xl mb-2 text-yellow-500">😐</div>
                  <h4 className="font-medium">Neutral</h4>
                  <p className="text-2xl font-bold">15%</p>
                  <p className="text-xs text-muted-foreground">de las reseñas</p>
                </div>
                <div className="p-4 border rounded-lg text-center">
                  <div className="text-4xl mb-2 text-destructive">🙁</div>
                  <h4 className="font-medium">Negativo</h4>
                  <p className="text-2xl font-bold">3%</p>
                  <p className="text-xs text-muted-foreground">de las reseñas</p>
                </div>
              </div>

              <div className="mt-6">
                <h4 className="font-medium mb-3">Temas mencionados frecuentemente</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="bg-success/10 text-success">
                    Fácil de usar (24)
                  </Badge>
                  <Badge variant="outline" className="bg-success/10 text-success">
                    Ahorra tiempo (18)
                  </Badge>
                  <Badge variant="outline" className="bg-success/10 text-success">
                    Preciso (15)
                  </Badge>
                  <Badge variant="outline" className="bg-yellow-100 text-yellow-800">
                    Más integraciones (7)
                  </Badge>
                  <Badge variant="outline" className="bg-yellow-100 text-yellow-800">
                    Documentación (5)
                  </Badge>
                  <Badge variant="outline" className="bg-destructive/10 text-destructive">
                    Lento (2)
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="customers" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-heading">Análisis de Clientes</CardTitle>
              <CardDescription className="font-body">Información sobre quiénes compran tus scripts</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="p-4 border rounded-lg">
                  <h4 className="font-medium mb-3">Distribución por Industria</h4>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">E-commerce</span>
                        <span className="text-sm font-medium">42%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{ width: "42%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">Marketing</span>
                        <span className="text-sm font-medium">28%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{ width: "28%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">Finanzas</span>
                        <span className="text-sm font-medium">15%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{ width: "15%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">Otros</span>
                        <span className="text-sm font-medium">15%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{ width: "15%" }}></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 border rounded-lg">
                  <h4 className="font-medium mb-3">Distribución por Tamaño de Empresa</h4>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">Pequeña (1-50)</span>
                        <span className="text-sm font-medium">56%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{ width: "56%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">Mediana (51-200)</span>
                        <span className="text-sm font-medium">32%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{ width: "32%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">Grande (201+)</span>
                        <span className="text-sm font-medium">12%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{ width: "12%" }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <h4 className="font-medium mb-3">Clientes Destacados</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarFallback>EC</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">E-commerce Solutions Inc.</p>
                        <p className="text-xs text-muted-foreground">5 scripts comprados • $399.95 gastados</p>
                      </div>
                    </div>
                    <Badge variant="outline" className="bg-success/10 text-success">
                      Cliente VIP
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarFallback>DM</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">Digital Marketing Pro</p>
                        <p className="text-xs text-muted-foreground">3 scripts comprados • $219.97 gastados</p>
                      </div>
                    </div>
                    <Badge variant="outline" className="bg-primary/10 text-primary">
                      Cliente Frecuente
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarFallback>RT</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">Retail Tech Solutions</p>
                        <p className="text-xs text-muted-foreground">2 scripts comprados • $159.98 gastados</p>
                      </div>
                    </div>
                    <Badge variant="outline" className="bg-primary/10 text-primary">
                      Cliente Frecuente
                    </Badge>
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
