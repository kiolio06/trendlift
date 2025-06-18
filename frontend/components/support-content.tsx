"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  HelpCircle,
  Plus,
  Search,
  MessageSquare,
  Clock,
  CheckCircle,
  AlertCircle,
  FileText,
  Send,
  Paperclip,
} from "lucide-react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Label } from "@/components/ui/label"

export function SupportContent() {
  const tickets = [
    {
      id: "TK-001",
      subject: "Error en script de facturación automática",
      description: "El script se detiene al intentar generar facturas para clientes con caracteres especiales",
      status: "Abierto",
      priority: "Alta",
      date: "15/01/2024",
      lastUpdate: "Hace 2 horas",
      responses: 3,
      assignedTo: "Equipo Técnico",
    },
    {
      id: "TK-002",
      subject: "Consulta sobre integración con Shopify",
      description: "Necesito ayuda para conectar mi tienda Shopify con los scripts de análisis de tendencias",
      status: "En revisión",
      priority: "Media",
      date: "14/01/2024",
      lastUpdate: "Hace 1 día",
      responses: 1,
      assignedTo: "Soporte Técnico",
    },
    {
      id: "TK-003",
      subject: "Solicitud de nueva funcionalidad",
      description: "¿Es posible agregar soporte para WhatsApp Business API en los scripts de marketing?",
      status: "Resuelto",
      priority: "Baja",
      date: "12/01/2024",
      lastUpdate: "Hace 3 días",
      responses: 5,
      assignedTo: "Equipo Producto",
    },
    {
      id: "TK-004",
      subject: "Problema con conexión a Siigo",
      description: "La conexión OAuth con Siigo se desconecta frecuentemente",
      status: "Abierto",
      priority: "Alta",
      date: "13/01/2024",
      lastUpdate: "Hace 6 horas",
      responses: 2,
      assignedTo: "Equipo Técnico",
    },
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Resuelto":
        return <CheckCircle className="h-4 w-4 text-success" />
      case "Abierto":
        return <AlertCircle className="h-4 w-4 text-destructive" />
      default:
        return <Clock className="h-4 w-4 text-primary" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Resuelto":
        return "bg-success/10 text-success border-success"
      case "Abierto":
        return "bg-destructive/10 text-destructive border-destructive"
      default:
        return "bg-primary/10 text-primary border-primary"
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "Alta":
        return "bg-destructive/10 text-destructive border-destructive"
      case "Media":
        return "bg-yellow-100 text-yellow-800 border-yellow-300"
      default:
        return "bg-muted text-muted-foreground border-muted"
    }
  }

  return (
    <div className="flex-1 p-4 md:p-8 overflow-auto pt-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold font-heading">Soporte</h1>
          <p className="text-muted-foreground font-body">Gestiona tickets y obtén ayuda del equipo TrendLift</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90">
          <Plus className="mr-2 h-4 w-4" />
          Nuevo Ticket
        </Button>
      </div>

      {/* Métricas rápidas */}
      <div className="grid gap-4 grid-cols-2 lg:grid-cols-4 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Tickets Abiertos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-muted-foreground">Requieren atención</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">En Revisión</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1</div>
            <p className="text-xs text-muted-foreground">Siendo procesado</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Resueltos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">Este mes</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Tiempo Promedio</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4.2h</div>
            <p className="text-xs text-muted-foreground">Tiempo de respuesta</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="tickets" className="space-y-6 pt-4">
        <TabsList className="flex flex-col sm:grid sm:grid-cols-2 md:grid-cols-3 gap-2">
          <TabsTrigger value="tickets" className="text-xs md:text-sm py-2 px-3 sm:px-4 sm:py-2 rounded-md text-center w-full data-[state=active]:bg-muted">
            Mis Tickets
          </TabsTrigger>
          <TabsTrigger value="new" className="text-xs md:text-sm py-2 px-3 sm:px-4 sm:py-2 rounded-md text-center w-full data-[state=active]:bg-muted">
            Nuevo Ticket
          </TabsTrigger>
          <TabsTrigger value="knowledge" className="text-xs md:text-sm py-2 px-3 sm:px-4 sm:py-2 rounded-md text-center w-full data-[state=active]:bg-muted">
            Base de Conocimiento
          </TabsTrigger>
        </TabsList>

        <TabsContent value="tickets" className="space-y-4 pt-4">
          {/* Filtros y búsqueda */}
          <div className="flex flex-col gap-3 md:flex-col md:items-center md:gap-4 mb-6">
            <div className="relative w-full md:flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Buscar tickets..." className="pl-10 text-sm" />
            </div>
            <Select defaultValue="all">
              <SelectTrigger className="w-full md:w-[180px] text-sm">
                <SelectValue placeholder="Filtrar por estado" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos los estados</SelectItem>
                <SelectItem value="abierto">Abierto</SelectItem>
                <SelectItem value="revision">En revisión</SelectItem>
                <SelectItem value="resuelto">Resuelto</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="all">
              <SelectTrigger className="w-full md:w-[180px] text-sm">
                <SelectValue placeholder="Prioridad" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todas las prioridades</SelectItem>
                <SelectItem value="alta">Alta</SelectItem>
                <SelectItem value="media">Media</SelectItem>
                <SelectItem value="baja">Baja</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Lista de tickets */}
          <div className="grid gap-4">
            {tickets.map((ticket) => (
              <Card key={ticket.id} className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <HelpCircle className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-lg font-heading">{ticket.id}</CardTitle>
                        <CardDescription className="font-body">{ticket.subject}</CardDescription>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className={`text-xs ${getPriorityColor(ticket.priority)}`}>
                        {ticket.priority}
                      </Badge>
                      <Badge variant="outline" className={`text-xs ${getStatusColor(ticket.status)}`}>
                        <span className="flex items-center gap-1">
                          {getStatusIcon(ticket.status)}
                          {ticket.status}
                        </span>
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{ticket.description}</p>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    <div>
                      <p className="text-xs text-muted-foreground">Fecha creación</p>
                      <p className="text-sm font-medium">{ticket.date}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Última actualización</p>
                      <p className="text-sm font-medium">{ticket.lastUpdate}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Respuestas</p>
                      <p className="text-sm font-medium">{ticket.responses}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Asignado a</p>
                      <p className="text-sm font-medium">{ticket.assignedTo}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <Button variant="outline" size="sm">
                      <MessageSquare className="mr-2 h-4 w-4" />
                      Ver conversación
                    </Button>
                    <Button variant="outline" size="sm">
                      <Send className="mr-2 h-4 w-4" />
                      Responder
                    </Button>
                    {ticket.status !== "Resuelto" && (
                      <Button variant="outline" size="sm">
                        <CheckCircle className="mr-2 h-4 w-4" />
                        Marcar como resuelto
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="new" className="space-y-6 pt-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-heading">Crear Nuevo Ticket</CardTitle>
              <CardDescription className="font-body">
                Describe tu problema o consulta y nuestro equipo te ayudará
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="subject">Asunto</Label>
                  <Input id="subject" placeholder="Describe brevemente tu consulta" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="priority">Prioridad</Label>
                  <Select>
                    <SelectTrigger id="priority">
                      <SelectValue placeholder="Selecciona la prioridad" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="baja">Baja - Consulta general</SelectItem>
                      <SelectItem value="media">Media - Problema que afecta el trabajo</SelectItem>
                      <SelectItem value="alta">Alta - Problema crítico</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="category">Categoría</Label>
                <Select>
                  <SelectTrigger id="category">
                    <SelectValue placeholder="Selecciona una categoría" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="tecnico">Problema técnico</SelectItem>
                    <SelectItem value="facturacion">Facturación</SelectItem>
                    <SelectItem value="integracion">Integraciones</SelectItem>
                    <SelectItem value="scripts">Scripts y automatizaciones</SelectItem>
                    <SelectItem value="cuenta">Gestión de cuenta</SelectItem>
                    <SelectItem value="otro">Otro</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Descripción detallada</Label>
                <Textarea
                  id="description"
                  placeholder="Describe tu problema o consulta con el mayor detalle posible. Incluye pasos para reproducir el problema si aplica."
                  className="min-h-[120px]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="attachment">Archivo adjunto (opcional)</Label>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm">
                    <Paperclip className="mr-2 h-4 w-4" />
                    Adjuntar archivo
                  </Button>
                  <span className="text-xs text-muted-foreground">Máximo 10MB. Formatos: jpg, png, pdf, txt</span>
                </div>
              </div>

              <Button className="w-full bg-primary hover:bg-primary/90">
                <Send className="mr-2 h-4 w-4" />
                Crear Ticket
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="knowledge" className="space-y-6 pt-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-heading">Preguntas Frecuentes</CardTitle>
                <CardDescription className="font-body">Respuestas a las consultas más comunes</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-3 border rounded-lg">
                  <h4 className="font-medium mb-1">¿Cómo conectar mi cuenta de Siigo?</h4>
                  <p className="text-sm text-muted-foreground">
                    Ve a Facturación → Configuración y haz clic en "Conectar con Siigo"
                  </p>
                </div>
                <div className="p-3 border rounded-lg">
                  <h4 className="font-medium mb-1">¿Por qué mi script no se ejecuta?</h4>
                  <p className="text-sm text-muted-foreground">
                    Verifica que el script esté activo y que tengas las integraciones necesarias configuradas
                  </p>
                </div>
                <div className="p-3 border rounded-lg">
                  <h4 className="font-medium mb-1">¿Cómo cambiar mi plan de suscripción?</h4>
                  <p className="text-sm text-muted-foreground">
                    Ve a Configuración → Plan y selecciona el plan que mejor se adapte a tus necesidades
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-heading">Guías y Tutoriales</CardTitle>
                <CardDescription className="font-body">Documentación paso a paso</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-3 border rounded-lg">
                  <h4 className="font-medium mb-1">Configuración inicial de TrendLift</h4>
                  <p className="text-sm text-muted-foreground">Guía completa para nuevos usuarios</p>
                  <Button variant="link" className="p-0 h-auto text-xs">
                    <FileText className="mr-1 h-3 w-3" />
                    Ver guía
                  </Button>
                </div>
                <div className="p-3 border rounded-lg">
                  <h4 className="font-medium mb-1">Creación de automatizaciones</h4>
                  <p className="text-sm text-muted-foreground">Aprende a configurar scripts efectivos</p>
                  <Button variant="link" className="p-0 h-auto text-xs">
                    <FileText className="mr-1 h-3 w-3" />
                    Ver guía
                  </Button>
                </div>
                <div className="p-3 border rounded-lg">
                  <h4 className="font-medium mb-1">Integración con herramientas externas</h4>
                  <p className="text-sm text-muted-foreground">Conecta TrendLift con tus apps favoritas</p>
                  <Button variant="link" className="p-0 h-auto text-xs">
                    <FileText className="mr-1 h-3 w-3" />
                    Ver guía
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
