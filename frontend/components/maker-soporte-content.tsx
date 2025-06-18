"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { HelpCircle, MessageSquare, FileText, ExternalLink, Search, Send, Clock } from "lucide-react"
import { useState } from "react"

export function MakerSoporteContent() {
  const [searchQuery, setSearchQuery] = useState("")

  const tickets = [
    {
      id: "TK-001",
      subject: "Error en validación de API",
      status: "Abierto",
      priority: "Alta",
      created: "2024-01-15",
      lastUpdate: "Hace 2 horas",
    },
    {
      id: "TK-002",
      subject: "Consulta sobre monetización",
      status: "En progreso",
      priority: "Media",
      created: "2024-01-12",
      lastUpdate: "Hace 1 día",
    },
    {
      id: "TK-003",
      subject: "Problema con publicación",
      status: "Resuelto",
      priority: "Baja",
      created: "2024-01-10",
      lastUpdate: "Hace 3 días",
    },
  ]

  const faqs = [
    {
      question: "¿Cómo creo mi primer script?",
      answer:
        "Para crear tu primer script, ve a 'Mis Scripts' y haz clic en 'Nuevo Script'. Completa la información básica, crea el formulario dinámico, prueba en el simulador y publícalo en el marketplace.",
    },
    {
      question: "¿Cómo integro APIs externas en mis scripts?",
      answer:
        "Puedes integrar APIs externas definiendo los campos necesarios en el formulario dinámico. Asegúrate de documentar claramente qué APIs requiere tu script y sus costos asociados.",
    },
    {
      question: "¿Cuándo recibo mis pagos?",
      answer:
        "Los pagos se procesan mensualmente. Recibirás tu pago el día 15 de cada mes por las ganancias del mes anterior, siempre que superes el mínimo de $50.",
    },
    {
      question: "¿Cómo optimizo mis scripts para más descargas?",
      answer:
        "Asegúrate de tener una descripción clara, capturas de pantalla, documentación completa y mantén tu script actualizado. Los scripts con mejor rating aparecen primero en el marketplace.",
    },
    {
      question: "¿Puedo ofrecer soporte directo a mis usuarios?",
      answer:
        "Sí, puedes incluir información de contacto en la descripción de tu script. También puedes responder a las reseñas para brindar soporte público.",
    },
  ]

  const resources = [
    {
      title: "Guía de Desarrollo",
      description: "Aprende las mejores prácticas para crear scripts exitosos",
      type: "Documentación",
      link: "#",
    },
    {
      title: "Plantillas de Scripts",
      description: "Plantillas predefinidas para acelerar tu desarrollo",
      type: "Recursos",
      link: "#",
    },
    {
      title: "API Reference",
      description: "Documentación completa de las APIs disponibles",
      type: "Documentación",
      link: "#",
    },
    {
      title: "Video Tutoriales",
      description: "Tutoriales paso a paso para makers",
      type: "Video",
      link: "#",
    },
  ]

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="p-4 md:p-6 pt-20 md:pt-24 space-y-6">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight">Soporte</h1>
        <p className="text-muted-foreground text-sm md:text-base">
          Encuentra ayuda, recursos y contacta con nuestro equipo de soporte
        </p>
      </div>

      <Tabs defaultValue="faq" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 h-auto gap-1">
          <TabsTrigger value="faq" className="text-xs md:text-sm py-2 px-2">
            FAQ
          </TabsTrigger>
          <TabsTrigger value="tickets" className="text-xs md:text-sm py-2 px-2">
            Tickets
          </TabsTrigger>
          <TabsTrigger value="resources" className="text-xs md:text-sm py-2 px-2">
            Recursos
          </TabsTrigger>
          <TabsTrigger value="contact" className="text-xs md:text-sm py-2 px-2">
            Contacto
          </TabsTrigger>
        </TabsList>

        <TabsContent value="faq" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg md:text-xl">
                <HelpCircle className="h-5 w-5" />
                Preguntas Frecuentes
              </CardTitle>
              <CardDescription className="text-sm">
                Encuentra respuestas rápidas a las preguntas más comunes
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Buscar en FAQ..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>

              <Accordion type="single" collapsible className="w-full">
                {filteredFaqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left text-sm md:text-base">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-sm">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="tickets" className="space-y-4">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
            <div>
              <h2 className="text-lg md:text-xl font-semibold">Mis Tickets de Soporte</h2>
              <p className="text-muted-foreground text-sm">Gestiona tus consultas y solicitudes</p>
            </div>
            <Button className="w-full md:w-auto">
              <MessageSquare className="mr-2 h-4 w-4" />
              Nuevo Ticket
            </Button>
          </div>

          <div className="space-y-4">
            {tickets.map((ticket) => (
              <Card key={ticket.id}>
                <CardContent className="p-4">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
                    <div className="space-y-2 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-medium text-sm">{ticket.id}</span>
                        <Badge
                          variant={
                            ticket.status === "Abierto"
                              ? "destructive"
                              : ticket.status === "En progreso"
                                ? "default"
                                : "secondary"
                          }
                          className="text-xs"
                        >
                          {ticket.status}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {ticket.priority}
                        </Badge>
                      </div>
                      <h3 className="font-medium text-sm md:text-base">{ticket.subject}</h3>
                      <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 text-xs md:text-sm text-muted-foreground">
                        <span>Creado: {ticket.created}</span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {ticket.lastUpdate}
                        </span>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="w-full md:w-auto text-xs">
                      Ver detalles
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="resources" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg md:text-xl">
                <FileText className="h-5 w-5" />
                Recursos para Desarrolladores
              </CardTitle>
              <CardDescription className="text-sm">
                Documentación, plantillas y herramientas para makers
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                {resources.map((resource, index) => (
                  <div key={index} className="p-4 border rounded-lg hover:bg-accent/50 transition-colors">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
                      <div className="space-y-2 flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="font-medium text-sm md:text-base">{resource.title}</h3>
                          <Badge variant="outline" className="text-xs">
                            {resource.type}
                          </Badge>
                        </div>
                        <p className="text-xs md:text-sm text-muted-foreground">{resource.description}</p>
                      </div>
                      <Button variant="ghost" size="sm">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="contact" className="space-y-4">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg md:text-xl">Contactar Soporte</CardTitle>
                <CardDescription className="text-sm">
                  Envía tu consulta y te responderemos en menos de 24 horas
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Asunto</label>
                  <Input placeholder="Describe brevemente tu consulta" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Mensaje</label>
                  <Textarea placeholder="Describe tu problema o consulta en detalle..." className="min-h-[120px]" />
                </div>
                <Button className="w-full">
                  <Send className="mr-2 h-4 w-4" />
                  Enviar Mensaje
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg md:text-xl">Otros Canales</CardTitle>
                <CardDescription className="text-sm">
                  Más formas de obtener ayuda y conectar con la comunidad
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start text-sm">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Discord Community
                  </Button>
                  <Button variant="outline" className="w-full justify-start text-sm">
                    <FileText className="mr-2 h-4 w-4" />
                    Centro de Documentación
                  </Button>
                  <Button variant="outline" className="w-full justify-start text-sm">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Foro de Makers
                  </Button>
                </div>

                <div className="pt-4 border-t">
                  <h4 className="font-medium mb-2 text-sm">Horarios de Soporte</h4>
                  <div className="text-xs md:text-sm text-muted-foreground space-y-1">
                    <p>Lunes - Viernes: 9:00 AM - 6:00 PM</p>
                    <p>Sábados: 10:00 AM - 2:00 PM</p>
                    <p>Domingos: Cerrado</p>
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
