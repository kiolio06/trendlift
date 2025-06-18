"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowUp, DollarSign, Users, FileText, Zap, TrendingUp, CheckCircle } from "lucide-react"
import { TrendChart } from "@/components/trend-chart"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function DashboardContent() {
  return (
    <div className="flex-1 p-4 md:p-8 overflow-auto pt-16 md:pt-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold font-heading">Panel Principal</h1>
          <p className="text-muted-foreground font-body">Visión rápida del estado de tus automatizaciones</p>
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

      {/* Métricas principales */}
      <div className="grid gap-4 grid-cols-2 lg:grid-cols-4 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-xs md:text-sm font-medium">Tendencias Detectadas</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-xl md:text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-success inline-flex items-center">
                <ArrowUp className="mr-1 h-3 w-3" />
                +12%
              </span>{" "}
              vs anterior
            </p>
            <p className="text-xs text-muted-foreground mt-1">Actualizado hace 2h</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-xs md:text-sm font-medium">Scripts Activos</CardTitle>
            <Zap className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-xl md:text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-success inline-flex items-center">
                <ArrowUp className="mr-1 h-3 w-3" />
                +2
              </span>{" "}
              este mes
            </p>
            <p className="text-xs text-muted-foreground mt-1">3 ejecutándose ahora</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-xs md:text-sm font-medium">Clientes Atendidos</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-xl md:text-2xl font-bold">47</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-success inline-flex items-center">
                <ArrowUp className="mr-1 h-3 w-3" />
                +8
              </span>{" "}
              esta semana
            </p>
            <p className="text-xs text-muted-foreground mt-1">12 facturas emitidas</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-xs md:text-sm font-medium">ROI Estimado</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-xl md:text-2xl font-bold">+24.5%</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-success inline-flex items-center">
                <ArrowUp className="mr-1 h-3 w-3" />
                +3.2%
              </span>{" "}
              vs anterior
            </p>
            <p className="text-xs text-muted-foreground mt-1">$12,450 generados</p>
          </CardContent>
        </Card>
      </div>

      {/* Bloques de acción rápida */}
      <div className="grid gap-4 grid-cols-1 md:grid-cols-3 mb-8">
        <Card className="hover:shadow-md transition-shadow cursor-pointer border-l-4 border-l-primary">
          <CardHeader className="pb-2">
            <CardTitle className="text-base md:text-lg font-heading flex items-center">
              <TrendingUp className="mr-2 h-5 w-5 text-primary" />
              Ver Recomendaciones
            </CardTitle>
            <CardDescription className="font-body text-sm">
              Explora tendencias emergentes detectadas por IA
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between mb-3">
              <Badge variant="outline" className="text-primary border-primary">
                5 nuevas tendencias
              </Badge>
              <span className="text-xs text-muted-foreground">Actualizado hace 1h</span>
            </div>
            <Button variant="outline" className="w-full">
              Explorar tendencias
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow cursor-pointer border-l-4 border-l-success">
          <CardHeader className="pb-2">
            <CardTitle className="text-base md:text-lg font-heading flex items-center">
              <FileText className="mr-2 h-5 w-5 text-success" />
              Crear Factura Manual
            </CardTitle>
            <CardDescription className="font-body text-sm">
              Genera facturas rápidamente para tus clientes
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-success" />
                <span className="text-xs text-success">Conectado a Siigo</span>
              </div>
            </div>
            <Button variant="outline" className="w-full">
              Nueva factura
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow cursor-pointer border-l-4 border-l-primary">
          <CardHeader className="pb-2">
            <CardTitle className="text-base md:text-lg font-heading flex items-center">
              <Zap className="mr-2 h-5 w-5 text-primary" />
              Lanzar Script
            </CardTitle>
            <CardDescription className="font-body text-sm">Ejecuta automatizaciones de forma manual</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between mb-3">
              <Badge variant="outline" className="text-primary border-primary">
                8 scripts disponibles
              </Badge>
            </div>
            <Button variant="outline" className="w-full">
              Ejecutar script
            </Button>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
          <TabsTrigger value="overview" className="text-xs md:text-sm">
            Vista General
          </TabsTrigger>
          <TabsTrigger value="scripts" className="text-xs md:text-sm">
            Scripts Recientes
          </TabsTrigger>
          <TabsTrigger value="clients" className="text-xs md:text-sm">
            Clientes Activos
          </TabsTrigger>
          <TabsTrigger value="billing" className="text-xs md:text-sm">
            Facturación
          </TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg md:text-xl">Motor de Tendencias IA</CardTitle>
              <CardDescription className="text-sm">
                Análisis predictivo de tendencias detectadas en los últimos 7 días
              </CardDescription>
            </CardHeader>
            <CardContent className="pl-2">
              <div className="h-[250px] md:h-[300px]">
                <TrendChart />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="scripts" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg md:text-xl">Scripts Ejecutados Recientemente</CardTitle>
              <CardDescription className="text-sm">
                Historial de ejecuciones y rendimiento de tus automatizaciones
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    name: "Publicación en Redes Sociales",
                    status: "Completado",
                    time: "Hace 2 horas",
                    success: true,
                    type: "Marketing",
                    impact: "15 publicaciones",
                  },
                  {
                    name: "Análisis de Tendencias",
                    status: "En progreso",
                    time: "Hace 30 min",
                    success: null,
                    type: "Análisis",
                    impact: "Procesando...",
                  },
                  {
                    name: "Facturación Automática",
                    status: "Completado",
                    time: "Hace 1 día",
                    success: true,
                    type: "Ventas",
                    impact: "8 facturas generadas",
                  },
                  {
                    name: "Backup de Datos",
                    status: "Error",
                    time: "Hace 3 horas",
                    success: false,
                    type: "Mantenimiento",
                    impact: "Requiere atención",
                  },
                ].map((script, index) => (
                  <div
                    key={index}
                    className="flex flex-col md:flex-row md:items-center justify-between p-3 border rounded-lg gap-2"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <p className="font-medium text-sm md:text-base">{script.name}</p>
                        <Badge variant="outline" className="text-xs">
                          {script.type}
                        </Badge>
                      </div>
                      <p className="text-xs md:text-sm text-muted-foreground">{script.time}</p>
                      <p className="text-xs text-muted-foreground">{script.impact}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${
                          script.success === true
                            ? "bg-success/10 text-success"
                            : script.success === false
                              ? "bg-destructive/10 text-destructive"
                              : "bg-primary/10 text-primary"
                        }`}
                      >
                        {script.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="clients" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg md:text-xl">Clientes Recientes</CardTitle>
              <CardDescription className="text-sm">Últimas interacciones y valor generado por cliente</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    name: "María González",
                    lastInteraction: "Hace 1 hora",
                    value: "$1,250",
                    status: "Activo",
                    email: "maria@empresa.com",
                    invoices: 3,
                  },
                  {
                    name: "Carlos Ruiz",
                    lastInteraction: "Hace 3 horas",
                    value: "$890",
                    status: "Pendiente",
                    email: "carlos@negocio.com",
                    invoices: 2,
                  },
                  {
                    name: "Ana López",
                    lastInteraction: "Hace 1 día",
                    value: "$2,100",
                    status: "Completado",
                    email: "ana@startup.com",
                    invoices: 5,
                  },
                  {
                    name: "Pedro Martín",
                    lastInteraction: "Hace 2 días",
                    value: "$750",
                    status: "Activo",
                    email: "pedro@tienda.com",
                    invoices: 1,
                  },
                ].map((client, index) => (
                  <div
                    key={index}
                    className="flex flex-col md:flex-row md:items-center justify-between p-3 border rounded-lg gap-2"
                  >
                    <div className="flex-1">
                      <p className="font-medium text-sm md:text-base">{client.name}</p>
                      <p className="text-xs md:text-sm text-muted-foreground">{client.email}</p>
                      <p className="text-xs text-muted-foreground">
                        {client.lastInteraction} • {client.invoices} facturas
                      </p>
                    </div>
                    <div className="flex items-center justify-between md:text-right">
                      <p className="font-medium text-sm md:text-base">{client.value}</p>
                      <span
                        className={`px-2 py-1 rounded-full text-xs ml-2 ${
                          client.status === "Completado"
                            ? "bg-success/10 text-success"
                            : client.status === "Pendiente"
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-primary/10 text-primary"
                        }`}
                      >
                        {client.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="billing" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg md:text-xl">Facturación Reciente</CardTitle>
              <CardDescription className="text-sm">
                Facturas generadas automáticamente y estado de pagos
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    invoice: "FAC-001",
                    client: "María González",
                    amount: "$1,250",
                    status: "Pagada",
                    date: "15/01/2024",
                    method: "Automática",
                  },
                  {
                    invoice: "FAC-002",
                    client: "Carlos Ruiz",
                    amount: "$890",
                    status: "Pendiente",
                    date: "14/01/2024",
                    method: "Manual",
                  },
                  {
                    invoice: "FAC-003",
                    client: "Ana López",
                    amount: "$2,100",
                    status: "Pagada",
                    date: "13/01/2024",
                    method: "Automática",
                  },
                  {
                    invoice: "FAC-004",
                    client: "Pedro Martín",
                    amount: "$750",
                    status: "Enviada",
                    date: "12/01/2024",
                    method: "Automática",
                  },
                ].map((billing, index) => (
                  <div
                    key={index}
                    className="flex flex-col md:flex-row md:items-center justify-between p-3 border rounded-lg gap-2"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <p className="font-medium text-sm md:text-base">{billing.invoice}</p>
                        <Badge variant="outline" className="text-xs">
                          {billing.method}
                        </Badge>
                      </div>
                      <p className="text-xs md:text-sm text-muted-foreground">
                        {billing.client} • {billing.date}
                      </p>
                    </div>
                    <div className="flex items-center justify-between md:text-right">
                      <p className="font-medium text-sm md:text-base">{billing.amount}</p>
                      <span
                        className={`px-2 py-1 rounded-full text-xs ml-2 ${
                          billing.status === "Pagada"
                            ? "bg-success/10 text-success"
                            : billing.status === "Pendiente"
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-primary/10 text-primary"
                        }`}
                      >
                        {billing.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
