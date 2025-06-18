"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  FileText,
  Plus,
  Search,
  Download,
  Eye,
  CheckCircle,
  AlertCircle,
  Clock,
  ExternalLink,
  Settings,
} from "lucide-react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function BillingContent() {
  const invoices = [
    {
      id: "FAC-001",
      client: "María González",
      email: "maria@empresa.com",
      amount: "$1,250.00",
      status: "Pagada",
      date: "15/01/2024",
      dueDate: "30/01/2024",
      method: "Automática",
      paymentMethod: "Transferencia",
    },
    {
      id: "FAC-002",
      client: "Carlos Ruiz",
      email: "carlos@negocio.com",
      amount: "$890.00",
      status: "Pendiente",
      date: "14/01/2024",
      dueDate: "29/01/2024",
      method: "Manual",
      paymentMethod: "Pendiente",
    },
    {
      id: "FAC-003",
      client: "Ana López",
      email: "ana@startup.com",
      amount: "$2,100.00",
      status: "Pagada",
      date: "13/01/2024",
      dueDate: "28/01/2024",
      method: "Automática",
      paymentMethod: "Tarjeta de crédito",
    },
    {
      id: "FAC-004",
      client: "Pedro Martín",
      email: "pedro@tienda.com",
      amount: "$750.00",
      status: "Enviada",
      date: "12/01/2024",
      dueDate: "27/01/2024",
      method: "Automática",
      paymentMethod: "Pendiente",
    },
    {
      id: "FAC-005",
      client: "Laura Sánchez",
      email: "laura@consultora.com",
      amount: "$1,500.00",
      status: "Vencida",
      date: "05/01/2024",
      dueDate: "20/01/2024",
      method: "Manual",
      paymentMethod: "Pendiente",
    },
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Pagada":
        return <CheckCircle className="h-4 w-4 text-success" />
      case "Vencida":
        return <AlertCircle className="h-4 w-4 text-destructive" />
      default:
        return <Clock className="h-4 w-4 text-primary" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Pagada":
        return "bg-success/10 text-success border-success"
      case "Vencida":
        return "bg-destructive/10 text-destructive border-destructive"
      case "Pendiente":
        return "bg-yellow-100 text-yellow-800 border-yellow-300"
      default:
        return "bg-primary/10 text-primary border-primary"
    }
  }

  return (
    <div className="flex-1 p-4 md:p-8 overflow-auto pt-16 md:pt-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold font-heading">Facturación</h1>
          <p className="text-muted-foreground font-body">Gestiona facturas y conexiones con sistemas externos</p>
        </div>
        <Button className="bg-success hover:bg-success/90">
          <Plus className="mr-2 h-4 w-4" />
          Nueva Factura
        </Button>
      </div>

      {/* Estado de conexiones */}
      <div className="grid gap-4 md:grid-cols-2 mb-8">
        <Card className="border-l-4 border-l-success">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-success" />
                <CardTitle className="text-lg font-heading">Siigo</CardTitle>
              </div>
              <Badge variant="outline" className="bg-success/10 text-success border-success">
                Conectado
              </Badge>
            </div>
            <CardDescription className="font-body">
              Sistema de facturación electrónica conectado y funcionando
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Settings className="mr-2 h-4 w-4" />
                Configurar
              </Button>
              <Button variant="outline" size="sm">
                <ExternalLink className="mr-2 h-4 w-4" />
                Abrir Siigo
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-muted">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-muted-foreground" />
                <CardTitle className="text-lg font-heading">Alegra</CardTitle>
              </div>
              <Badge variant="outline" className="bg-muted text-muted-foreground">
                No conectado
              </Badge>
            </div>
            <CardDescription className="font-body">Conecta con Alegra para sincronizar tu facturación</CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline" size="sm" className="w-full">
              <ExternalLink className="mr-2 h-4 w-4" />
              Conectar con Alegra
            </Button>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="invoices" className="space-y-4">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-3">
          <TabsTrigger value="invoices" className="text-xs md:text-sm">
            Facturas
          </TabsTrigger>
          <TabsTrigger value="analytics" className="text-xs md:text-sm">
            Análisis
          </TabsTrigger>
          <TabsTrigger value="settings" className="text-xs md:text-sm">
            Configuración
          </TabsTrigger>
        </TabsList>

        <TabsContent value="invoices" className="space-y-4">
          {/* Filtros y búsqueda */}
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Buscar facturas..." className="pl-10" />
            </div>
            <Select defaultValue="all">
              <SelectTrigger className="w-full md:w-[180px]">
                <SelectValue placeholder="Filtrar por estado" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos los estados</SelectItem>
                <SelectItem value="pagada">Pagada</SelectItem>
                <SelectItem value="pendiente">Pendiente</SelectItem>
                <SelectItem value="enviada">Enviada</SelectItem>
                <SelectItem value="vencida">Vencida</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="all">
              <SelectTrigger className="w-full md:w-[180px]">
                <SelectValue placeholder="Método" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos los métodos</SelectItem>
                <SelectItem value="automatica">Automática</SelectItem>
                <SelectItem value="manual">Manual</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Lista de facturas */}
          <div className="grid gap-4">
            {invoices.map((invoice) => (
              <Card key={invoice.id} className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <FileText className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-lg font-heading">{invoice.id}</CardTitle>
                        <CardDescription className="font-body">
                          {invoice.client} • {invoice.email}
                        </CardDescription>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="text-xs">
                        {invoice.method}
                      </Badge>
                      <Badge variant="outline" className={`text-xs ${getStatusColor(invoice.status)}`}>
                        <span className="flex items-center gap-1">
                          {getStatusIcon(invoice.status)}
                          {invoice.status}
                        </span>
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    <div>
                      <p className="text-xs text-muted-foreground">Monto</p>
                      <p className="text-lg font-bold">{invoice.amount}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Fecha emisión</p>
                      <p className="text-sm font-medium">{invoice.date}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Fecha vencimiento</p>
                      <p className="text-sm font-medium">{invoice.dueDate}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Método de pago</p>
                      <p className="text-sm font-medium">{invoice.paymentMethod}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <Button variant="outline" size="sm">
                      <Eye className="mr-2 h-4 w-4" />
                      Ver
                    </Button>
                    <Button variant="outline" size="sm">
                      <Download className="mr-2 h-4 w-4" />
                      Descargar PDF
                    </Button>
                    {invoice.status === "Pendiente" && (
                      <Button variant="outline" size="sm">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Enviar recordatorio
                      </Button>
                    )}
                    <Button variant="outline" size="sm">
                      <Settings className="mr-2 h-4 w-4" />
                      Editar
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Ingresos este mes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$6,490.00</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-success">+15%</span> vs mes anterior
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Facturas pendientes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3</div>
                <p className="text-xs text-muted-foreground">$2,140.00 por cobrar</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Tiempo promedio de pago</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12 días</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-success">-2 días</span> vs mes anterior
                </p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="settings" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-heading">Configuración de Facturación</CardTitle>
              <CardDescription className="font-body">
                Ajusta las preferencias de tu sistema de facturación
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Numeración automática</h4>
                <p className="text-sm text-muted-foreground mb-2">Próximo número de factura: FAC-006</p>
                <Button variant="outline" size="sm">
                  Configurar numeración
                </Button>
              </div>
              <div>
                <h4 className="font-medium mb-2">Plantillas de factura</h4>
                <p className="text-sm text-muted-foreground mb-2">Personaliza el diseño de tus facturas</p>
                <Button variant="outline" size="sm">
                  Editar plantilla
                </Button>
              </div>
              <div>
                <h4 className="font-medium mb-2">Recordatorios automáticos</h4>
                <p className="text-sm text-muted-foreground mb-2">Envía recordatorios de pago automáticamente</p>
                <Button variant="outline" size="sm">
                  Configurar recordatorios
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
