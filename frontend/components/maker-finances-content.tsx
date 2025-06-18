"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import {
  DollarSign,
  TrendingUp,
  Download,
  Calendar,
  CreditCard,
  Wallet,
  ArrowUpRight,
  ArrowDownRight,
  Eye,
  ExternalLink,
} from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function MakerFinancesContent() {
  return (
    <div className="flex-1 p-4 md:p-8 overflow-auto pt-16 md:pt-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold font-heading">Finanzas</h1>
          <p className="text-muted-foreground font-body">Gestiona tus ingresos y pagos</p>
        </div>
        <div className="flex gap-2 w-full md:w-auto">
          <Select defaultValue="30d">
            <SelectTrigger className="w-full md:w-[140px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7d">Últimos 7 días</SelectItem>
              <SelectItem value="30d">Últimos 30 días</SelectItem>
              <SelectItem value="90d">Últimos 90 días</SelectItem>
              <SelectItem value="year">Este año</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Exportar
          </Button>
        </div>
      </div>

      {/* Financial Overview Cards */}
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Balance Actual</CardTitle>
            <Wallet className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-success">$3,247.50</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-success inline-flex items-center">
                <ArrowUpRight className="mr-1 h-3 w-3" />
                +$450
              </span>{" "}
              este mes
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Ingresos del Mes</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$2,847.50</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-success inline-flex items-center">
                <ArrowUpRight className="mr-1 h-3 w-3" />
                +12%
              </span>{" "}
              vs mes anterior
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Próximo Pago</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$680.00</div>
            <p className="text-xs text-muted-foreground">Programado para el 15 Feb</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Scripts Activos</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">Generando ingresos</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
          <TabsTrigger value="overview">Resumen</TabsTrigger>
          <TabsTrigger value="earnings">Ganancias</TabsTrigger>
          <TabsTrigger value="payments">Pagos</TabsTrigger>
          <TabsTrigger value="taxes">Impuestos</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Progreso hacia el siguiente pago
                  <Badge variant="secondary">$680 pendiente</Badge>
                </CardTitle>
                <CardDescription>Mínimo de $500 requerido para procesar pago</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Progreso actual</span>
                    <span>$680 / $500</span>
                  </div>
                  <Progress value={100} className="w-full" />
                </div>
                <Button className="w-full">
                  <CreditCard className="mr-2 h-4 w-4" />
                  Solicitar pago ahora
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Scripts con mayor rendimiento</CardTitle>
                <CardDescription>Ingresos por script este mes</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { name: "E-commerce Analyzer", earnings: "$1,245", change: "+18%" },
                    { name: "Social Monitor", earnings: "$892", change: "+12%" },
                    { name: "Financial Predictor", earnings: "$710", change: "+8%" },
                    { name: "Content Detector", earnings: "$0", change: "Nuevo" },
                  ].map((script, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-sm">{script.name}</p>
                        <p className="text-xs text-muted-foreground">{script.change}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">{script.earnings}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Historial de ingresos mensual</CardTitle>
              <CardDescription>Evolución de tus ganancias en los últimos 6 meses</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { month: "Febrero 2024", amount: "$2,847", scripts: 12, trend: "up" },
                  { month: "Enero 2024", amount: "$2,540", scripts: 11, trend: "up" },
                  { month: "Diciembre 2023", amount: "$2,180", scripts: 10, trend: "up" },
                  { month: "Noviembre 2023", amount: "$1,890", scripts: 9, trend: "down" },
                  { month: "Octubre 2023", amount: "$2,100", scripts: 8, trend: "up" },
                  { month: "Septiembre 2023", amount: "$1,750", scripts: 7, trend: "up" },
                ].map((period, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center gap-3">
                      {period.trend === "up" ? (
                        <ArrowUpRight className="h-4 w-4 text-success" />
                      ) : (
                        <ArrowDownRight className="h-4 w-4 text-destructive" />
                      )}
                      <div>
                        <p className="font-medium">{period.month}</p>
                        <p className="text-sm text-muted-foreground">{period.scripts} scripts activos</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">{period.amount}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="earnings" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Detalles de ganancias</CardTitle>
              <CardDescription>Breakdown detallado de tus ingresos</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    date: "2024-02-10",
                    script: "E-commerce Analyzer",
                    type: "Descarga Premium",
                    amount: "$25.00",
                    user: "user_12345",
                  },
                  {
                    date: "2024-02-10",
                    script: "Social Monitor",
                    type: "Descarga Premium",
                    amount: "$15.00",
                    user: "user_67890",
                  },
                  {
                    date: "2024-02-09",
                    script: "Financial Predictor",
                    type: "Descarga Premium",
                    amount: "$30.00",
                    user: "user_11111",
                  },
                  {
                    date: "2024-02-09",
                    script: "E-commerce Analyzer",
                    type: "Descarga Premium",
                    amount: "$25.00",
                    user: "user_22222",
                  },
                  {
                    date: "2024-02-08",
                    script: "Social Monitor",
                    type: "Descarga Premium",
                    amount: "$15.00",
                    user: "user_33333",
                  },
                ].map((earning, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <p className="font-medium text-sm">{earning.script}</p>
                        <Badge variant="outline" className="text-xs">
                          {earning.type}
                        </Badge>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        {earning.date} • {earning.user}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-success">{earning.amount}</p>
                    </div>
                  </div>
                ))}
                <Button variant="outline" className="w-full">
                  Ver más transacciones
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="payments" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Historial de pagos</CardTitle>
              <CardDescription>Todos los pagos procesados</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    date: "2024-01-15",
                    amount: "$2,540.00",
                    status: "Completado",
                    method: "Transferencia bancaria",
                    reference: "PAY_001234",
                  },
                  {
                    date: "2023-12-15",
                    amount: "$2,180.00",
                    status: "Completado",
                    method: "PayPal",
                    reference: "PAY_001235",
                  },
                  {
                    date: "2023-11-15",
                    amount: "$1,890.00",
                    status: "Completado",
                    method: "Transferencia bancaria",
                    reference: "PAY_001236",
                  },
                  {
                    date: "2024-02-15",
                    amount: "$680.00",
                    status: "Programado",
                    method: "Transferencia bancaria",
                    reference: "PAY_001237",
                  },
                ].map((payment, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-2 h-2 rounded-full ${
                          payment.status === "Completado" ? "bg-success" : "bg-primary"
                        }`}
                      />
                      <div>
                        <p className="font-medium">{payment.amount}</p>
                        <p className="text-sm text-muted-foreground">
                          {payment.date} • {payment.method}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge variant={payment.status === "Completado" ? "default" : "secondary"}>
                        {payment.status}
                      </Badge>
                      <p className="text-xs text-muted-foreground mt-1">{payment.reference}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Configuración de pagos</CardTitle>
              <CardDescription>Gestiona tus métodos de pago</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Método de pago preferido</label>
                <Select defaultValue="bank">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="bank">Transferencia bancaria</SelectItem>
                    <SelectItem value="paypal">PayPal</SelectItem>
                    <SelectItem value="stripe">Stripe</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Umbral mínimo de pago</label>
                <Select defaultValue="500">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="100">$100</SelectItem>
                    <SelectItem value="250">$250</SelectItem>
                    <SelectItem value="500">$500</SelectItem>
                    <SelectItem value="1000">$1000</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button variant="outline" className="w-full">
                <ExternalLink className="mr-2 h-4 w-4" />
                Gestionar métodos de pago
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="taxes" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Información fiscal</CardTitle>
              <CardDescription>Documentos y datos para declaración de impuestos</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="p-4 border rounded-lg">
                  <h4 className="font-medium mb-2">Ingresos 2024 (hasta la fecha)</h4>
                  <p className="text-2xl font-bold">$8,234.50</p>
                  <p className="text-sm text-muted-foreground">Enero - Febrero</p>
                </div>
                <div className="p-4 border rounded-lg">
                  <h4 className="font-medium mb-2">Ingresos 2023 (total)</h4>
                  <p className="text-2xl font-bold">$23,456.00</p>
                  <p className="text-sm text-muted-foreground">Año completo</p>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-medium">Documentos fiscales</h4>
                {[
                  { name: "Resumen fiscal 2023", format: "PDF", size: "245 KB", date: "2024-01-31" },
                  { name: "Detalle de transacciones 2023", format: "CSV", size: "12 KB", date: "2024-01-31" },
                  { name: "Certificado de ingresos 2023", format: "PDF", size: "89 KB", date: "2024-01-15" },
                ].map((doc, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center">
                        <Eye className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-sm">{doc.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {doc.format} • {doc.size} • {doc.date}
                        </p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      <Download className="mr-2 h-3 w-3" />
                      Descargar
                    </Button>
                  </div>
                ))}
              </div>

              <div className="p-4 bg-muted rounded-lg">
                <h4 className="font-medium mb-2">Nota fiscal importante</h4>
                <p className="text-sm text-muted-foreground">
                  Los documentos se generan automáticamente. Consulta con tu contador sobre las obligaciones fiscales
                  específicas en tu jurisdicción. TrendLift no proporciona asesoría fiscal.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
