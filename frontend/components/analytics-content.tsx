"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BarChart3, TrendingUp, TrendingDown, Users, DollarSign, Zap, Download } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TrendChart } from "@/components/trend-chart"

export function AnalyticsContent() {
  const performanceData = [
    {
      script: "Publicación en Redes Sociales",
      executions: 45,
      successRate: 98,
      avgTime: "2.3s",
      impact: "+15% engagement",
      trend: "up",
    },
    {
      script: "Análisis de Tendencias",
      executions: 30,
      successRate: 95,
      avgTime: "45s",
      impact: "24 tendencias detectadas",
      trend: "up",
    },
    {
      script: "Facturación Automática",
      executions: 12,
      successRate: 83,
      avgTime: "5.2s",
      impact: "$6,490 generados",
      trend: "down",
    },
    {
      script: "Seguimiento de Clientes",
      executions: 67,
      successRate: 92,
      avgTime: "1.8s",
      impact: "47 clientes contactados",
      trend: "up",
    },
  ]

  const clientMetrics = [
    { segment: "Clientes VIP", count: 8, revenue: "$33,600", growth: "+12%" },
    { segment: "Clientes Regulares", count: 25, revenue: "$45,000", growth: "+8%" },
    { segment: "Clientes Nuevos", count: 14, revenue: "$13,300", growth: "+25%" },
  ]

  return (
    <div className="flex-1 p-4 md:p-8 overflow-auto pt-16 md:pt-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold font-heading">Análisis</h1>
          <p className="text-muted-foreground font-body">Métricas detalladas y insights de tu negocio</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Exportar
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
            <CardTitle className="text-sm font-medium">ROI Total</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+24.5%</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-success inline-flex items-center">
                <TrendingUp className="mr-1 h-3 w-3" />
                +3.2%
              </span>{" "}
              vs anterior
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Tiempo Ahorrado</CardTitle>
            <Zap className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">127h</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-success inline-flex items-center">
                <TrendingUp className="mr-1 h-3 w-3" />
                +18h
              </span>{" "}
              este mes
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Satisfacción Cliente</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">94%</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-success inline-flex items-center">
                <TrendingUp className="mr-1 h-3 w-3" />
                +2%
              </span>{" "}
              vs anterior
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Scripts Activos</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-success inline-flex items-center">
                <TrendingUp className="mr-1 h-3 w-3" />
                +2
              </span>{" "}
              este mes
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
            Rendimiento Scripts
          </TabsTrigger>
          <TabsTrigger value="clients" className="text-xs md:text-sm">
            Análisis Clientes
          </TabsTrigger>
          <TabsTrigger value="trends" className="text-xs md:text-sm">
            Tendencias IA
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-heading">Tendencias Detectadas por IA</CardTitle>
                <CardDescription className="font-body">Análisis predictivo de los últimos 30 días</CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                <div className="h-[300px]">
                  <TrendChart />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-heading">Impacto Financiero</CardTitle>
                <CardDescription className="font-body">Ingresos generados por automatizaciones</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">Facturación Automática</p>
                      <p className="text-sm text-muted-foreground">12 facturas generadas</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-success">$6,490</p>
                      <p className="text-xs text-muted-foreground">+15%</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">Marketing Automatizado</p>
                      <p className="text-sm text-muted-foreground">45 campañas ejecutadas</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-success">$3,200</p>
                      <p className="text-xs text-muted-foreground">+22%</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">Seguimiento CRM</p>
                      <p className="text-sm text-muted-foreground">67 interacciones</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-success">$2,800</p>
                      <p className="text-xs text-muted-foreground">+8%</p>
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
              <CardDescription className="font-body">Métricas detalladas de cada automatización</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {performanceData.map((script, index) => (
                  <div key={index} className="p-4 border rounded-lg">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-3">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <Zap className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium">{script.script}</h4>
                          <p className="text-sm text-muted-foreground">{script.impact}</p>
                        </div>
                      </div>
                      <Badge
                        variant="outline"
                        className={`text-xs ${
                          script.trend === "up"
                            ? "bg-success/10 text-success border-success"
                            : "bg-destructive/10 text-destructive border-destructive"
                        }`}
                      >
                        {script.trend === "up" ? (
                          <TrendingUp className="mr-1 h-3 w-3" />
                        ) : (
                          <TrendingDown className="mr-1 h-3 w-3" />
                        )}
                        {script.trend === "up" ? "Mejorando" : "Requiere atención"}
                      </Badge>
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <p className="text-xs text-muted-foreground">Ejecuciones</p>
                        <p className="text-lg font-bold">{script.executions}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Tasa de éxito</p>
                        <p className="text-lg font-bold">{script.successRate}%</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Tiempo promedio</p>
                        <p className="text-lg font-bold">{script.avgTime}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="clients" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-heading">Segmentación de Clientes</CardTitle>
                <CardDescription className="font-body">Análisis por valor y comportamiento</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {clientMetrics.map((segment, index) => (
                    <div key={index} className="flex justify-between items-center p-3 border rounded-lg">
                      <div>
                        <p className="font-medium">{segment.segment}</p>
                        <p className="text-sm text-muted-foreground">{segment.count} clientes</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold">{segment.revenue}</p>
                        <p className="text-xs text-success">{segment.growth}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-heading">Retención y Crecimiento</CardTitle>
                <CardDescription className="font-body">Métricas de fidelización</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-center p-4 border rounded-lg">
                    <div className="text-3xl font-bold text-success mb-2">89%</div>
                    <p className="text-sm text-muted-foreground">Tasa de retención</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <div className="text-3xl font-bold text-primary mb-2">4.2</div>
                    <p className="text-sm text-muted-foreground">Puntuación NPS</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <div className="text-3xl font-bold text-success mb-2">+25%</div>
                    <p className="text-sm text-muted-foreground">Crecimiento mensual</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="trends" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-heading">Tendencias Emergentes</CardTitle>
                <CardDescription className="font-body">Detectadas por IA en las últimas 48h</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-3 border rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-medium">IA en retail</h4>
                      <Badge variant="outline" className="text-success bg-success/10">
                        +12%
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Incremento en búsquedas relacionadas con automatización de inventarios
                    </p>
                  </div>
                  <div className="p-3 border rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-medium">Comercio social</h4>
                      <Badge variant="outline" className="text-success bg-success/10">
                        +8%
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Crecimiento en integración de redes sociales con e-commerce
                    </p>
                  </div>
                  <div className="p-3 border rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-medium">Pagos sin contacto</h4>
                      <Badge variant="outline" className="text-success bg-success/10">
                        +6%
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">Adopción acelerada de métodos de pago digitales</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-heading">Recomendaciones IA</CardTitle>
                <CardDescription className="font-body">Acciones sugeridas basadas en datos</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-3 border rounded-lg border-l-4 border-l-primary">
                    <h4 className="font-medium mb-1">Optimizar horarios de publicación</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Tus posts tienen 23% más engagement entre 2-4 PM
                    </p>
                    <Button variant="outline" size="sm">
                      Aplicar cambio
                    </Button>
                  </div>
                  <div className="p-3 border rounded-lg border-l-4 border-l-success">
                    <h4 className="font-medium mb-1">Expandir segmento VIP</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      5 clientes regulares califican para upgrade a VIP
                    </p>
                    <Button variant="outline" size="sm">
                      Ver clientes
                    </Button>
                  </div>
                  <div className="p-3 border rounded-lg border-l-4 border-l-yellow-500">
                    <h4 className="font-medium mb-1">Revisar script de facturación</h4>
                    <p className="text-sm text-muted-foreground mb-2">Tasa de éxito bajó 5% en la última semana</p>
                    <Button variant="outline" size="sm">
                      Diagnosticar
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
