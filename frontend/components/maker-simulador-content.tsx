"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, AlertCircle, Code, Play, Clock, Cpu, HardDrive } from "lucide-react"

export function MakerSimuladorContent() {
  const [selectedScript, setSelectedScript] = useState("email-marketing")
  const [isSimulating, setIsSimulating] = useState(false)
  const [simulationSuccess, setSimulationSuccess] = useState<boolean | null>(null)
  const [simulationOutput, setSimulationOutput] = useState<any>(null)
  const [simulationMetrics, setSimulationMetrics] = useState<any>(null)

  const scripts = [
    {
      id: "email-marketing",
      name: "Email Marketing Automation",
      description: "Automatiza campañas de email marketing basadas en comportamiento del usuario",
      category: "Marketing",
      version: "v2.1",
      params: [
        { name: "audienceSize", label: "Tamaño de audiencia", type: "number", required: true },
        { name: "emailSubject", label: "Asunto del email", type: "text", required: true },
        { name: "emailContent", label: "Contenido del email", type: "textarea", required: true },
        {
          name: "sendTime",
          label: "Hora de envío",
          type: "select",
          options: ["Inmediato", "Mañana", "Tarde", "Noche"],
        },
      ],
    },
    {
      id: "whatsapp-business",
      name: "WhatsApp Business Integration",
      description: "Automatiza mensajes y respuestas para WhatsApp Business API",
      category: "Comunicación",
      version: "v1.8",
      params: [
        { name: "phoneNumbers", label: "Números de teléfono (separados por coma)", type: "text", required: true },
        {
          name: "messageTemplate",
          label: "Plantilla de mensaje",
          type: "select",
          options: ["Bienvenida", "Promoción", "Recordatorio", "Soporte"],
        },
        { name: "messageContent", label: "Contenido del mensaje", type: "textarea", required: true },
        { name: "attachMedia", label: "Adjuntar multimedia", type: "checkbox" },
      ],
    },
    {
      id: "social-analytics",
      name: "Social Media Analytics",
      description: "Analiza el rendimiento de tus redes sociales y genera reportes",
      category: "Analytics",
      version: "v3.0",
      params: [
        {
          name: "platforms",
          label: "Plataformas",
          type: "select",
          options: ["Facebook", "Instagram", "Twitter", "LinkedIn", "TikTok"],
        },
        {
          name: "dateRange",
          label: "Rango de fechas",
          type: "select",
          options: ["Última semana", "Último mes", "Último trimestre", "Último año"],
        },
        {
          name: "metrics",
          label: "Métricas a analizar",
          type: "select",
          options: ["Engagement", "Alcance", "Conversiones", "Todas"],
        },
        { name: "generateReport", label: "Generar reporte PDF", type: "checkbox" },
      ],
    },
  ]

  const selectedScriptData = scripts.find((script) => script.id === selectedScript)

  const handleSimulate = () => {
    setIsSimulating(true)
    setSimulationSuccess(null)
    setSimulationOutput(null)
    setSimulationMetrics(null)

    // Simulación de procesamiento
    setTimeout(() => {
      const isSuccess = Math.random() > 0.15 // 85% de éxito
      setIsSimulating(false)
      setSimulationSuccess(isSuccess)

      if (isSuccess) {
        // Generar output de éxito según el script seleccionado
        if (selectedScript === "email-marketing") {
          setSimulationOutput({
            status: "success",
            emailsSent: Math.floor(Math.random() * 1000) + 500,
            openRate: (Math.random() * 30 + 15).toFixed(1) + "%",
            clickRate: (Math.random() * 10 + 5).toFixed(1) + "%",
            bounceRate: (Math.random() * 2).toFixed(1) + "%",
          })
        } else if (selectedScript === "whatsapp-business") {
          setSimulationOutput({
            status: "success",
            messagesSent: Math.floor(Math.random() * 200) + 50,
            deliveryRate: (Math.random() * 10 + 90).toFixed(1) + "%",
            responseRate: (Math.random() * 40 + 10).toFixed(1) + "%",
            averageResponseTime: Math.floor(Math.random() * 120) + 30 + " min",
          })
        } else {
          setSimulationOutput({
            status: "success",
            postsAnalyzed: Math.floor(Math.random() * 500) + 100,
            totalEngagement: Math.floor(Math.random() * 10000) + 1000,
            topPerformingPlatform: ["Instagram", "Facebook", "TikTok"][Math.floor(Math.random() * 3)],
            growthRate: "+" + (Math.random() * 20 + 5).toFixed(1) + "%",
          })
        }

        // Métricas de rendimiento
        setSimulationMetrics({
          executionTime: (Math.random() * 2 + 0.5).toFixed(2) + "s",
          memoryUsage: (Math.random() * 100 + 50).toFixed(0) + "MB",
          cpuUsage: (Math.random() * 30 + 10).toFixed(0) + "%",
        })
      } else {
        // Generar error
        const errors = [
          "Error de conexión con la API externa",
          "Parámetros inválidos en la configuración",
          "Límite de cuota excedido",
          "Timeout en la operación",
          "Error de autenticación",
        ]
        setSimulationOutput({
          status: "error",
          message: errors[Math.floor(Math.random() * errors.length)],
          code: "ERR_" + Math.floor(Math.random() * 1000),
        })
      }
    }, 2500)
  }

  const getScriptCode = () => {
    if (selectedScript === "email-marketing") {
      return `async function sendEmailCampaign(params) {
  const { audienceSize, emailSubject, emailContent, sendTime } = params;
  
  // Validar parámetros
  if (!audienceSize || !emailSubject || !emailContent) {
    throw new Error("Parámetros incompletos");
  }
  
  // Configurar tiempo de envío
  const scheduleTime = calculateSendTime(sendTime);
  
  // Conectar con API de email
  const emailAPI = new EmailProvider();
  await emailAPI.authenticate();
  
  // Segmentar audiencia
  const audience = await getAudienceSegment(audienceSize);
  
  // Enviar campaña
  const campaign = await emailAPI.createCampaign({
    subject: emailSubject,
    content: emailContent,
    audience: audience,
    scheduleTime: scheduleTime
  });
  
  return {
    status: "success",
    campaignId: campaign.id,
    emailsSent: audience.length,
    scheduledTime: scheduleTime
  };
}`
    } else if (selectedScript === "whatsapp-business") {
      return `async function sendWhatsAppMessages(params) {
  const { phoneNumbers, messageTemplate, messageContent, attachMedia } = params;
  
  // Validar números de teléfono
  const phones = phoneNumbers.split(",").map(p => p.trim());
  if (phones.length === 0) {
    throw new Error("No se proporcionaron números de teléfono");
  }
  
  // Inicializar WhatsApp Business API
  const whatsapp = new WhatsAppBusinessAPI();
  await whatsapp.connect();
  
  // Cargar plantilla
  const template = await whatsapp.getTemplate(messageTemplate);
  
  // Preparar mensaje
  const message = {
    template: template,
    content: messageContent,
    media: attachMedia ? await loadMedia() : null
  };
  
  // Enviar mensajes
  const results = await Promise.all(
    phones.map(phone => whatsapp.sendMessage(phone, message))
  );
  
  return {
    status: "success",
    messagesSent: results.filter(r => r.sent).length,
    failed: results.filter(r => !r.sent).length,
    messageId: results[0].messageId
  };
}`
    } else {
      return `async function analyzeSocialMedia(params) {
  const { platforms, dateRange, metrics, generateReport } = params;
  
  // Configurar rango de fechas
  const dates = parseDateRange(dateRange);
  
  // Inicializar conexiones API
  const apis = {};
  for (const platform of platforms) {
    apis[platform] = await connectToSocialPlatform(platform);
  }
  
  // Recopilar datos
  const data = {};
  for (const platform of platforms) {
    data[platform] = await apis[platform].getMetrics({
      startDate: dates.start,
      endDate: dates.end,
      metrics: metrics === "Todas" ? ["engagement", "reach", "conversions"] : [metrics.toLowerCase()]
    });
  }
  
  // Analizar datos
  const analysis = performAnalysis(data);
  
  // Generar reporte si es necesario
  let reportUrl = null;
  if (generateReport) {
    reportUrl = await generatePDFReport(analysis);
  }
  
  return {
    status: "success",
    analysis: analysis,
    reportUrl: reportUrl,
    platforms: Object.keys(data),
    period: \`\${dates.start} - \${dates.end}\`
  };
}`
    }
  }

  return (
    <div className="p-6 pt-20 space-y-6">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold font-heading mb-2">Simulador de Scripts</h1>
        <p className="text-muted-foreground">Prueba y valida tus scripts antes de publicarlos</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Sidebar de scripts */}
        <div className="md:col-span-1 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Mis Scripts</CardTitle>
              <CardDescription>Selecciona un script para simular</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              {scripts.map((script) => (
                <div
                  key={script.id}
                  className={`p-3 rounded-lg border cursor-pointer transition-colors ${
                    selectedScript === script.id ? "bg-primary/10 border-primary" : "hover:bg-accent"
                  }`}
                  onClick={() => setSelectedScript(script.id)}
                >
                  <div className="font-medium text-sm">{script.name}</div>
                  <div className="text-xs text-muted-foreground mt-1">
                    {script.category} • {script.version}
                  </div>
                </div>
              ))}
              <Button variant="outline" className="w-full mt-4">
                Crear nuevo script
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Área principal */}
        <div className="md:col-span-3 space-y-4">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>{selectedScriptData?.name}</CardTitle>
                  <CardDescription>{selectedScriptData?.description}</CardDescription>
                </div>
                <Badge variant="outline">{selectedScriptData?.category}</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="parameters">
                <TabsList className="mb-4">
                  <TabsTrigger value="parameters">Parámetros</TabsTrigger>
                  <TabsTrigger value="code">Código</TabsTrigger>
                  <TabsTrigger value="results">Resultados</TabsTrigger>
                </TabsList>

                <TabsContent value="parameters" className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedScriptData?.params.map((param) => (
                      <div key={param.name} className="space-y-2">
                        <Label htmlFor={param.name}>
                          {param.label}
                          {param.required && <span className="text-destructive ml-1">*</span>}
                        </Label>
                        {param.type === "text" && (
                          <Input id={param.name} placeholder={`Ingresa ${param.label.toLowerCase()}`} />
                        )}
                        {param.type === "number" && (
                          <Input id={param.name} type="number" placeholder={`Ingresa ${param.label.toLowerCase()}`} />
                        )}
                        {param.type === "textarea" && (
                          <Textarea id={param.name} placeholder={`Ingresa ${param.label.toLowerCase()}`} />
                        )}
                        {param.type === "select" && (
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder={`Selecciona ${param.label.toLowerCase()}`} />
                            </SelectTrigger>
                            <SelectContent>
                              {param.options?.map((option) => (
                                <SelectItem key={option} value={option}>
                                  {option}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        )}
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-end mt-6">
                    <Button onClick={handleSimulate} disabled={isSimulating} className="flex items-center gap-2">
                      {isSimulating ? (
                        <>
                          <Clock className="h-4 w-4 animate-spin" />
                          Simulando...
                        </>
                      ) : (
                        <>
                          <Play className="h-4 w-4" />
                          Simular Ejecución
                        </>
                      )}
                    </Button>
                  </div>
                </TabsContent>

                <TabsContent value="code">
                  <div className="relative">
                    <div className="absolute top-2 right-2">
                      <Badge variant="outline" className="flex items-center gap-1">
                        <Code className="h-3 w-3" />
                        JavaScript
                      </Badge>
                    </div>
                    <pre className="p-4 rounded-lg bg-muted overflow-x-auto text-sm">
                      <code>{getScriptCode()}</code>
                    </pre>
                  </div>
                </TabsContent>

                <TabsContent value="results">
                  {simulationSuccess === null && !isSimulating ? (
                    <div className="text-center py-8">
                      <p className="text-muted-foreground">Ejecuta una simulación para ver los resultados</p>
                    </div>
                  ) : isSimulating ? (
                    <div className="text-center py-8">
                      <div className="inline-block p-3 rounded-full bg-primary/10 mb-4">
                        <Clock className="h-8 w-8 text-primary animate-spin" />
                      </div>
                      <p className="font-medium">Simulando ejecución del script...</p>
                      <p className="text-muted-foreground mt-2">Esto puede tomar unos segundos</p>
                    </div>
                  ) : simulationSuccess ? (
                    <div className="space-y-6">
                      <div className="flex items-center gap-2 p-3 rounded-lg bg-green-50 dark:bg-green-950/30 text-green-600 dark:text-green-400">
                        <CheckCircle className="h-5 w-5" />
                        <span className="font-medium">Simulación exitosa</span>
                      </div>

                      <div className="space-y-4">
                        <h3 className="text-lg font-medium">Resultado:</h3>
                        <pre className="p-4 rounded-lg bg-muted overflow-x-auto text-sm">
                          <code>{JSON.stringify(simulationOutput, null, 2)}</code>
                        </pre>
                      </div>

                      <div className="space-y-4">
                        <h3 className="text-lg font-medium">Métricas de rendimiento:</h3>
                        <div className="grid grid-cols-3 gap-4">
                          <div className="p-4 rounded-lg border flex flex-col items-center">
                            <Clock className="h-5 w-5 text-muted-foreground mb-2" />
                            <div className="text-xl font-bold">{simulationMetrics?.executionTime}</div>
                            <p className="text-xs text-muted-foreground">Tiempo de ejecución</p>
                          </div>
                          <div className="p-4 rounded-lg border flex flex-col items-center">
                            <HardDrive className="h-5 w-5 text-muted-foreground mb-2" />
                            <div className="text-xl font-bold">{simulationMetrics?.memoryUsage}</div>
                            <p className="text-xs text-muted-foreground">Uso de memoria</p>
                          </div>
                          <div className="p-4 rounded-lg border flex flex-col items-center">
                            <Cpu className="h-5 w-5 text-muted-foreground mb-2" />
                            <div className="text-xl font-bold">{simulationMetrics?.cpuUsage}</div>
                            <p className="text-xs text-muted-foreground">Uso de CPU</p>
                          </div>
                        </div>
                      </div>

                      <div className="flex justify-end">
                        <Button variant="outline" className="mr-2">
                          Guardar resultados
                        </Button>
                        <Button>Listo para publicar</Button>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-6">
                      <div className="flex items-center gap-2 p-3 rounded-lg bg-red-50 dark:bg-red-950/30 text-red-600 dark:text-red-400">
                        <AlertCircle className="h-5 w-5" />
                        <span className="font-medium">Error en la simulación</span>
                      </div>

                      <div className="space-y-4">
                        <h3 className="text-lg font-medium">Detalles del error:</h3>
                        <pre className="p-4 rounded-lg bg-muted overflow-x-auto text-sm">
                          <code>{JSON.stringify(simulationOutput, null, 2)}</code>
                        </pre>
                      </div>

                      <div className="flex justify-end">
                        <Button variant="outline" className="mr-2">
                          Ver documentación
                        </Button>
                        <Button onClick={handleSimulate}>Intentar de nuevo</Button>
                      </div>
                    </div>
                  )}
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default MakerSimuladorContent
