"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowUp, BarChart3, DollarSign, Code, Store, TestTube, Plus } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export function MakerDashboardContent() {
  const [username, setUsername] = useState("")

useEffect(() => {
  const storedUsername = localStorage.getItem("username")
  if (storedUsername) {
    setUsername(storedUsername)
  }
}, [])


  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold font-heading">Bienvenido, {username} </h1>
          <p className="text-muted-foreground font-body">Crea, gestiona y monetiza tus scripts</p>
        </div>
        <Select defaultValue="7d">
          <SelectTrigger className="w-full md:w-[180px]">
            <SelectValue placeholder="Seleccionar período" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="24h">Últimas 24 horas</SelectItem>
            <SelectItem value="7d">Últimos 7 días</SelectItem>
            <SelectItem value="30d">Últimos 30 días</SelectItem>
            <SelectItem value="90d">Últimos 90 días</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-xs md:text-sm font-medium">Scripts Publicados</CardTitle>
            <Code className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-xl md:text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-success inline-flex items-center">
                <ArrowUp className="mr-1 h-3 w-3" />
                +3
              </span>{" "}
              este mes
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-xs md:text-sm font-medium">Scripts en Revisión</CardTitle>
            <TestTube className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-xl md:text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-primary inline-flex items-center">
                <ArrowUp className="mr-1 h-3 w-3" />
                +1
              </span>{" "}
              pendiente
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-xs md:text-sm font-medium">Lifts Generados</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-xl md:text-2xl font-bold">247</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-success inline-flex items-center">
                <ArrowUp className="mr-1 h-3 w-3" />
                +18
              </span>{" "}
              esta semana
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-xs md:text-sm font-medium">Ingresos</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-xl md:text-2xl font-bold">$2,847</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-success inline-flex items-center">
                <ArrowUp className="mr-1 h-3 w-3" />
                +12%
              </span>{" "}
              vs anterior
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
        <Card className="hover:shadow-md transition-shadow cursor-pointer">
          <CardHeader className="pb-2">
            <CardTitle className="text-base md:text-lg font-heading flex items-center">
              <Plus className="mr-2 h-5 w-5 text-primary" />
              Crear Nuevo Script
            </CardTitle>
            <CardDescription className="font-body text-sm">
              Desarrolla una nueva automatización desde cero
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline" className="w-full">
              Nuevo script
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow cursor-pointer">
          <CardHeader className="pb-2">
            <CardTitle className="text-base md:text-lg font-heading flex items-center">
              <TestTube className="mr-2 h-5 w-5 text-success" />
              Probar Script
            </CardTitle>
            <CardDescription className="font-body text-sm">
              Simula y valida el funcionamiento de tus scripts
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline" className="w-full">
              Abrir simulador
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow cursor-pointer">
          <CardHeader className="pb-2">
            <CardTitle className="text-base md:text-lg font-heading flex items-center">
              <Store className="mr-2 h-5 w-5 text-primary" />
              Ver en Marketplace
            </CardTitle>
            <CardDescription className="font-body text-sm">Revisa cómo se ven tus scripts publicados</CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline" className="w-full">
              Ir al marketplace
            </Button>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="space-y-6 pt-4">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
          <TabsTrigger value="overview" className="text-xs md:text-sm">
            Vista General
          </TabsTrigger>
          <TabsTrigger value="scripts" className="text-xs md:text-sm">
            Mis Scripts
          </TabsTrigger>
          <TabsTrigger value="performance" className="text-xs md:text-sm">
            Rendimiento
          </TabsTrigger>
          <TabsTrigger value="earnings" className="text-xs md:text-sm">
            Ganancias
          </TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg md:text-xl">Actividad Reciente</CardTitle>
                <CardDescription className="text-sm">Últimas acciones en tu cuenta de Maker</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { action: "Script 'E-commerce Analyzer' aprobado", time: "Hace 2 horas", type: "success" },
                    { action: "Nueva valoración 5⭐ recibida", time: "Hace 4 horas", type: "success" },
                    { action: "Script 'Social Monitor' en revisión", time: "Hace 1 día", type: "pending" },
                    { action: "Pago de $450 procesado", time: "Hace 2 días", type: "success" },
                  ].map((activity, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 border rounded-lg">
                      <div
                        className={`w-2 h-2 rounded-full mt-2 ${
                          activity.type === "success" ? "bg-success" : "bg-primary"
                        }`}
                      />
                      <div className="flex-1">
                        <p className="text-sm font-medium">{activity.action}</p>
                        <p className="text-xs text-muted-foreground">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg md:text-xl">Scripts Más Populares</CardTitle>
                <CardDescription className="text-sm">Tus scripts con mejor rendimiento</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { name: "E-commerce Trend Analyzer", downloads: 89, rating: 4.8, earnings: "$1,245" },
                    { name: "Social Media Monitor", downloads: 67, rating: 4.6, earnings: "$892" },
                    { name: "Financial Predictor", downloads: 45, rating: 4.9, earnings: "$710" },
                  ].map((script, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <p className="font-medium text-sm">{script.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {script.downloads} descargas • ⭐ {script.rating}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-sm">{script.earnings}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="scripts" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg md:text-xl">Gestión de Scripts</CardTitle>
              <CardDescription className="text-sm">Administra todos tus scripts desde aquí</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    name: "E-commerce Trend Analyzer",
                    status: "Publicado",
                    version: "v2.1",
                    lastUpdate: "Hace 3 días",
                  },
                  { name: "Social Media Monitor", status: "Publicado", version: "v1.8", lastUpdate: "Hace 1 semana" },
                  { name: "Financial Predictor", status: "En revisión", version: "v3.0", lastUpdate: "Hace 2 días" },
                  { name: "Content Detector", status: "Borrador", version: "v1.0", lastUpdate: "Hace 5 días" },
                ].map((script, index) => (
                  <div
                    key={index}
                    className="flex flex-col md:flex-row md:items-center justify-between p-3 border rounded-lg gap-2"
                  >
                    <div>
                      <p className="font-medium text-sm md:text-base">{script.name}</p>
                      <p className="text-xs md:text-sm text-muted-foreground">
                        {script.version} • {script.lastUpdate}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${
                          script.status === "Publicado"
                            ? "bg-success/10 text-success"
                            : script.status === "En revisión"
                              ? "bg-primary/10 text-primary"
                              : "bg-muted text-muted-foreground"
                        }`}
                      >
                        {script.status}
                      </span>
                      <Button variant="outline" size="sm">
                        Editar
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="performance" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg md:text-xl">Métricas de Rendimiento</CardTitle>
              <CardDescription className="text-sm">Análisis detallado del rendimiento de tus scripts</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="text-center p-4 border rounded-lg">
                  <div className="text-2xl font-bold text-primary">4.7</div>
                  <p className="text-sm text-muted-foreground">Rating Promedio</p>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <div className="text-2xl font-bold text-success">89%</div>
                  <p className="text-sm text-muted-foreground">Tasa de Aprobación</p>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <div className="text-2xl font-bold text-primary">247</div>
                  <p className="text-sm text-muted-foreground">Total Descargas</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="earnings" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg md:text-xl">Resumen de Ganancias</CardTitle>
              <CardDescription className="text-sm">Ingresos generados por tus scripts</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="p-4 border rounded-lg">
                    <div className="text-lg font-bold">$2,847</div>
                    <p className="text-sm text-muted-foreground">Ingresos este mes</p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <div className="text-lg font-bold">$8,234</div>
                    <p className="text-sm text-muted-foreground">Ingresos totales</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">Próximos pagos</h4>
                  {[
                    { date: "15 Feb 2024", amount: "$450", status: "Pendiente" },
                    { date: "01 Mar 2024", amount: "$680", status: "Programado" },
                  ].map((payment, index) => (
                    <div key={index} className="flex justify-between items-center p-3 border rounded-lg">
                      <div>
                        <p className="font-medium text-sm">{payment.date}</p>
                        <p className="text-xs text-muted-foreground">{payment.status}</p>
                      </div>
                      <div className="font-medium">{payment.amount}</div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
