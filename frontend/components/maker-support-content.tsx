"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  HelpCircle,
  MessageCircle,
  Book,
  Video,
  ExternalLink,
  Search,
  Clock,
  Send,
  Download,
  FileText,
  Zap,
} from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function MakerSupportContent() {
  return (
    <div className="flex-1 p-4 md:p-8 overflow-auto pt-16 md:pt-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold font-heading">Centro de Soporte</h1>
          <p className="text-muted-foreground font-body">Encuentra ayuda y recursos para Makers</p>
        </div>
        <Button>
          <MessageCircle className="mr-2 h-4 w-4" />
          Contactar soporte
        </Button>
      </div>

      <Tabs defaultValue="help" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
          <TabsTrigger value="help">Centro de Ayuda</TabsTrigger>
          <TabsTrigger value="tickets">Mis Tickets</TabsTrigger>
          <TabsTrigger value="resources">Recursos</TabsTrigger>
          <TabsTrigger value="contact">Contacto</TabsTrigger>
        </TabsList>

        <TabsContent value="help" className="space-y-6">
          {/* Search Bar */}
          <Card>
            <CardContent className="pt-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input placeholder="Buscar en la base de conocimientos..." className="pl-10" />
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <div className="grid gap-4 md:grid-cols-3">
            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center">
                  <Zap className="mr-2 h-5 w-5 text-primary" />
                  Guía de inicio rápido
                </CardTitle>
                <CardDescription>Aprende a crear tu primer script en 5 minutos</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">
                  Comenzar ahora
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center">
                  <Video className="mr-2 h-5 w-5 text-success" />
                  Tutoriales en video
                </CardTitle>
                <CardDescription>Colección completa de videos tutoriales</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">
                  Ver videos
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center">
                  <Book className="mr-2 h-5 w-5 text-blue-500" />
                  Documentación
                </CardTitle>
                <CardDescription>Referencias técnicas y guías detalladas</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">
                  Leer docs
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* FAQ Categories */}
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Preguntas Frecuentes</CardTitle>
                <CardDescription>Las dudas más comunes de los Makers</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { question: "¿Cómo publico mi primer script?", category: "Scripts" },
                    { question: "¿Cuándo recibo mis pagos?", category: "Finanzas" },
                    { question: "¿Cómo funciona el sistema de calificaciones?", category: "Marketplace" },
                    { question: "¿Puedo actualizar un script publicado?", category: "Scripts" },
                    { question: "¿Qué datos se incluyen en el simulador?", category: "Herramientas" },
                  ].map((faq, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50 cursor-pointer"
                    >
                      <div>
                        <p className="font-medium text-sm">{faq.question}</p>
                        <Badge variant="outline" className="text-xs mt-1">
                          {faq.category}
                        </Badge>
                      </div>
                      <ExternalLink className="h-4 w-4 text-muted-foreground" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Guías por tema</CardTitle>
                <CardDescription>Aprende paso a paso</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { title: "Desarrollo de Scripts", articles: 12, difficulty: "Intermedio" },
                    { title: "Optimización para Marketplace", articles: 8, difficulty: "Avanzado" },
                    { title: "Monetización y Precios", articles: 6, difficulty: "Básico" },
                    { title: "Análisis de Rendimiento", articles: 10, difficulty: "Intermedio" },
                    { title: "Mejores Prácticas", articles: 15, difficulty: "Todos los niveles" },
                  ].map((guide, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50 cursor-pointer"
                    >
                      <div>
                        <p className="font-medium text-sm">{guide.title}</p>
                        <p className="text-xs text-muted-foreground">
                          {guide.articles} artículos • {guide.difficulty}
                        </p>
                      </div>
                      <ExternalLink className="h-4 w-4 text-muted-foreground" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="tickets" className="space-y-6">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-xl font-bold">Mis Tickets de Soporte</h2>
              <p className="text-muted-foreground">Historial de consultas y estado actual</p>
            </div>
            <Button>
              <Send className="mr-2 h-4 w-4" />
              Nuevo ticket
            </Button>
          </div>

          <Card>
            <CardContent className="pt-6">
              <div className="space-y-4">
                {[
                  {
                    id: "TICK-001234",
                    subject: "Error al subir script - formato no válido",
                    status: "En progreso",
                    priority: "Media",
                    created: "2024-02-10",
                    updated: "2024-02-11",
                  },
                  {
                    id: "TICK-001235",
                    subject: "Consulta sobre comisiones de marketplace",
                    status: "Resuelto",
                    priority: "Baja",
                    created: "2024-02-08",
                    updated: "2024-02-09",
                  },
                  {
                    id: "TICK-001236",
                    subject: "Script no aparece en búsquedas",
                    status: "Pendiente",
                    priority: "Alta",
                    created: "2024-02-07",
                    updated: "2024-02-07",
                  },
                ].map((ticket, index) => (
                  <div key={index} className="p-4 border rounded-lg">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <p className="font-medium text-sm">{ticket.subject}</p>
                          <Badge
                            variant={
                              ticket.status === "Resuelto"
                                ? "default"
                                : ticket.status === "En progreso"
                                  ? "secondary"
                                  : "destructive"
                            }
                          >
                            {ticket.status}
                          </Badge>
                        </div>
                        <p className="text-xs text-muted-foreground">#{ticket.id}</p>
                      </div>
                      <div className="text-right">
                        <Badge
                          variant="outline"
                          className={
                            ticket.priority === "Alta"
                              ? "border-red-500 text-red-500"
                              : ticket.priority === "Media"
                                ? "border-yellow-500 text-yellow-500"
                                : "border-green-500 text-green-500"
                          }
                        >
                          {ticket.priority}
                        </Badge>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>Creado: {ticket.created}</span>
                      <span>Actualizado: {ticket.updated}</span>
                    </div>
                  </div>
                ))}

                {/* Empty state if no tickets */}
                <div className="text-center py-8 text-muted-foreground">
                  <HelpCircle className="mx-auto h-12 w-12 mb-4" />
                  <p>No tienes tickets de soporte activos</p>
                  <Button variant="outline" className="mt-4">
                    Crear primer ticket
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="resources" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Recursos para Developers</CardTitle>
                <CardDescription>Herramientas y librerías útiles</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { name: "API Documentation", type: "Documentación", format: "Web" },
                    { name: "Script Templates", type: "Plantillas", format: "ZIP" },
                    { name: "Testing Framework", type: "Herramienta", format: "NPM" },
                    { name: "Code Examples", type: "Ejemplos", format: "GitHub" },
                  ].map((resource, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center">
                          <FileText className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium text-sm">{resource.name}</p>
                          <p className="text-xs text-muted-foreground">
                            {resource.type} • {resource.format}
                          </p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        <Download className="mr-2 h-3 w-3" />
                        Acceder
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Comunidad de Makers</CardTitle>
                <CardDescription>Conecta con otros desarrolladores</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-2">Discord Community</h4>
                    <p className="text-sm text-muted-foreground mb-3">Únete a nuestra comunidad de +2,000 Makers</p>
                    <Button variant="outline" className="w-full">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Unirse al Discord
                    </Button>
                  </div>

                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-2">Forum de Discusión</h4>
                    <p className="text-sm text-muted-foreground mb-3">Haz preguntas y comparte conocimiento</p>
                    <Button variant="outline" className="w-full">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Visitar foro
                    </Button>
                  </div>

                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-2">Newsletter</h4>
                    <p className="text-sm text-muted-foreground mb-3">Recibe actualizaciones y tips semanales</p>
                    <Button variant="outline" className="w-full">
                      Suscribirse
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="contact" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Crear Ticket de Soporte</CardTitle>
                <CardDescription>Obtén ayuda personalizada de nuestro equipo</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="subject">Asunto</Label>
                  <Input id="subject" placeholder="Describe brevemente tu consulta" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="category">Categoría</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona una categoría" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="technical">Problema técnico</SelectItem>
                      <SelectItem value="scripts">Scripts y desarrollo</SelectItem>
                      <SelectItem value="marketplace">Marketplace</SelectItem>
                      <SelectItem value="payments">Pagos y finanzas</SelectItem>
                      <SelectItem value="account">Cuenta y configuración</SelectItem>
                      <SelectItem value="other">Otro</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="priority">Prioridad</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona prioridad" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="low">Baja</SelectItem>
                      <SelectItem value="medium">Media</SelectItem>
                      <SelectItem value="high">Alta</SelectItem>
                      <SelectItem value="urgent">Urgente</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Descripción detallada</Label>
                  <Textarea
                    id="description"
                    placeholder="Proporciona todos los detalles relevantes sobre tu consulta..."
                    rows={6}
                  />
                </div>

                <Button className="w-full">
                  <Send className="mr-2 h-4 w-4" />
                  Enviar ticket
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Otros Canales de Contacto</CardTitle>
                <CardDescription>Múltiples formas de obtener ayuda</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-3 border rounded-lg">
                    <div className="w-8 h-8 rounded bg-blue-100 flex items-center justify-center">
                      <MessageCircle className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-medium">Chat en vivo</h4>
                      <p className="text-sm text-muted-foreground">Lunes a Viernes, 9:00 - 18:00</p>
                      <Button variant="outline" size="sm" className="mt-2">
                        Iniciar chat
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 border rounded-lg">
                    <div className="w-8 h-8 rounded bg-green-100 flex items-center justify-center">
                      <HelpCircle className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-medium">Email de soporte</h4>
                      <p className="text-sm text-muted-foreground">makers@trendlift.com</p>
                      <p className="text-xs text-muted-foreground mt-1">Respuesta en 24-48 horas</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 border rounded-lg">
                    <div className="w-8 h-8 rounded bg-purple-100 flex items-center justify-center">
                      <Clock className="h-4 w-4 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-medium">Videollamada</h4>
                      <p className="text-sm text-muted-foreground">Para casos complejos</p>
                      <Button variant="outline" size="sm" className="mt-2">
                        Agendar cita
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-muted rounded-lg">
                  <h4 className="font-medium mb-2">Tiempos de respuesta</h4>
                  <div className="space-y-1 text-sm">
                    <p>
                      <span className="font-medium">Urgente:</span> 2-4 horas
                    </p>
                    <p>
                      <span className="font-medium">Alta:</span> 4-8 horas
                    </p>
                    <p>
                      <span className="font-medium">Media:</span> 24-48 horas
                    </p>
                    <p>
                      <span className="font-medium">Baja:</span> 2-3 días
                    </p>
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
