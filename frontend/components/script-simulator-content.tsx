"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import {
  TestTube,
  Play,
  Code,
  Save,
  FileJson,
  CheckCircle,
  AlertCircle,
  RefreshCw,
  Download,
  Copy,
  ChevronRight,
} from "lucide-react"
import { useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function ScriptSimulatorContent() {
  const [selectedScript, setSelectedScript] = useState<string | null>(null)
  const [isSimulating, setIsSimulating] = useState(false)
  const [simulationComplete, setSimulationComplete] = useState(false)
  const [simulationSuccess, setSimulationSuccess] = useState(false)
  const [simulationOutput, setSimulationOutput] = useState<string | null>(null)

  const scripts = [
    {
      id: "1",
      name: "E-commerce Trend Analyzer",
      description: "Analiza tendencias de productos en tiendas online",
      category: "Análisis",
      fields: [
        { name: "store_url", label: "URL de la tienda", type: "text", required: true },
        { name: "api_key", label: "API Key", type: "text", required: true },
        { name: "days", label: "Días a analizar", type: "number", required: true },
        { name: "include_competitors", label: "Incluir competidores", type: "checkbox", required: false },
      ],
    },
    {
      id: "2",
      name: "Social Media Monitor",
      description: "Monitorea tendencias en redes sociales",
      category: "Marketing",
      fields: [
        { name: "keywords", label: "Palabras clave", type: "text", required: true },
        {
          name: "platforms",
          label: "Plataformas",
          type: "select",
          required: true,
          options: ["Twitter", "Instagram", "Facebook", "TikTok"],
        },
        { name: "timeframe", label: "Período", type: "select", required: true, options: ["24h", "7d", "30d"] },
      ],
    },
    {
      id: "3",
      name: "Retail Analytics Suite",
      description: "Suite completa para análisis de retail",
      category: "Ventas",
      fields: [
        { name: "store_id", label: "ID de tienda", type: "text", required: true },
        { name: "start_date", label: "Fecha inicio", type: "date", required: true },
        { name: "end_date", label: "Fecha fin", type: "date", required: true },
        { name: "include_inventory", label: "Incluir inventario", type: "checkbox", required: false },
        { name: "include_sales", label: "Incluir ventas", type: "checkbox", required: false },
        { name: "include_customers", label: "Incluir clientes", type: "checkbox", required: false },
      ],
    },
  ]

  const handleSelectScript = (scriptId: string) => {
    setSelectedScript(scriptId)
    setSimulationComplete(false)
    setSimulationOutput(null)
  }

  const handleSimulate = () => {
    setIsSimulating(true)
    setSimulationComplete(false)
    setSimulationOutput(null)

    // Simulación de procesamiento
    setTimeout(() => {
      const success = Math.random() > 0.2 // 80% de probabilidad de éxito

      setIsSimulating(false)
      setSimulationComplete(true)
      setSimulationSuccess(success)

      if (success) {
        // Ejemplo de salida JSON para E-commerce Trend Analyzer
        const mockOutput = {
          status: "success",
          execution_time: "2.3s",
          results: {
            trending_products: [
              { name: "Smartphone XYZ", trend_score: 89, growth: "+23%" },
              { name: "Wireless Earbuds", trend_score: 76, growth: "+18%" },
              { name: "Smart Watch", trend_score: 72, growth: "+15%" },
            ],
            trending_categories: [
              { name: "Electrónicos", trend_score: 92, growth: "+12%" },
              { name: "Ropa Deportiva", trend_score: 78, growth: "+9%" },
            ],
            recommendations: [
              "Aumentar inventario de Smartphone XYZ en un 20%",
              "Crear campaña promocional para Wireless Earbuds",
              "Destacar categoría de Electrónicos en la página principal",
            ],
          },
        }
        setSimulationOutput(JSON.stringify(mockOutput, null, 2))
      } else {
        setSimulationOutput(
          JSON.stringify(
            {
              status: "error",
              error_code: "API_CONNECTION_ERROR",
              message: "No se pudo conectar con la API de la tienda. Verifique la URL y la API Key.",
            },
            null,
            2,
          ),
        )
      }
    }, 2500)
  }

  const getSelectedScript = () => {
    return scripts.find((script) => script.id === selectedScript)
  }

  return (
    <div className="flex-1 p-4 md:p-8 overflow-auto pt-16 md:pt-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold font-heading">Simulador de Scripts</h1>
          <p className="text-muted-foreground font-body">
            Prueba tus scripts con datos de ejemplo antes de publicarlos
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Save className="mr-2 h-4 w-4" />
            Guardar Prueba
          </Button>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Exportar Resultados
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-12">
        {/* Panel izquierdo - Selección de script */}
        <div className="md:col-span-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-heading">Seleccionar Script</CardTitle>
              <CardDescription className="font-body">
                Elige uno de tus scripts para probar su funcionamiento
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {scripts.map((script) => (
                <div
                  key={script.id}
                  className={`p-3 border rounded-lg cursor-pointer transition-all ${
                    selectedScript === script.id ? "border-primary bg-primary/5" : "hover:border-muted-foreground/20"
                  }`}
                  onClick={() => handleSelectScript(script.id)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Code className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium">{script.name}</h4>
                        <p className="text-xs text-muted-foreground">{script.category}</p>
                      </div>
                    </div>
                    <ChevronRight className="h-4 w-4 text-muted-foreground" />
                  </div>
                </div>
              ))}

              <div className="p-4 border border-dashed rounded-lg text-center">
                <p className="text-sm text-muted-foreground">
                  ¿No encuentras lo que buscas?{" "}
                  <Button variant="link" className="p-0 h-auto">
                    Crear nuevo script
                  </Button>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Panel derecho - Simulador */}
        <div className="md:col-span-8">
          {selectedScript ? (
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-lg font-heading">{getSelectedScript()?.name}</CardTitle>
                    <CardDescription className="font-body">{getSelectedScript()?.description}</CardDescription>
                  </div>
                  <Badge variant="outline" className="bg-primary/10 text-primary">
                    {getSelectedScript()?.category}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <Tabs defaultValue="parameters" className="space-y-4">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="parameters" className="text-xs md:text-sm">
                      Parámetros
                    </TabsTrigger>
                    <TabsTrigger value="code" className="text-xs md:text-sm">
                      Código
                    </TabsTrigger>
                    <TabsTrigger value="results" className="text-xs md:text-sm">
                      Resultados
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="parameters" className="space-y-4">
                    <div className="space-y-4">
                      {getSelectedScript()?.fields.map((field) => (
                        <div key={field.name} className="space-y-2">
                          <Label htmlFor={field.name}>
                            {field.label}
                            {field.required && <span className="text-destructive ml-1">*</span>}
                          </Label>
                          {field.type === "text" && (
                            <Input
                              id={field.name}
                              placeholder={`Ingrese ${field.label.toLowerCase()}`}
                              defaultValue={field.name === "api_key" ? "sk_test_1234567890abcdef" : ""}
                            />
                          )}
                          {field.type === "number" && (
                            <Input
                              id={field.name}
                              type="number"
                              placeholder={`Ingrese ${field.label.toLowerCase()}`}
                              defaultValue={field.name === "days" ? "30" : ""}
                            />
                          )}
                          {field.type === "date" && <Input id={field.name} type="date" />}
                          {field.type === "checkbox" && (
                            <div className="flex items-center space-x-2">
                              <Switch id={field.name} defaultChecked={field.name === "include_sales"} />
                              <Label htmlFor={field.name}>Activar</Label>
                            </div>
                          )}
                          {field.type === "select" && field.options && (
                            <Select defaultValue={field.options[0]}>
                              <SelectTrigger>
                                <SelectValue placeholder={`Seleccione ${field.label.toLowerCase()}`} />
                              </SelectTrigger>
                              <SelectContent>
                                {field.options.map((option) => (
                                  <SelectItem key={option} value={option}>
                                    {option}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          )}
                        </div>
                      ))}

                      <Button className="w-full" onClick={handleSimulate} disabled={isSimulating}>
                        {isSimulating ? (
                          <>
                            <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                            Simulando...
                          </>
                        ) : (
                          <>
                            <TestTube className="mr-2 h-4 w-4" />
                            Simular Ejecución
                          </>
                        )}
                      </Button>
                    </div>
                  </TabsContent>

                  <TabsContent value="code" className="space-y-4">
                    <div className="space-y-4">
                      <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                          <AccordionTrigger className="text-sm font-medium">
                            <div className="flex items-center">
                              <FileJson className="mr-2 h-4 w-4" />
                              Estructura del Script
                            </div>
                          </AccordionTrigger>
                          <AccordionContent>
                            <pre className="bg-muted p-4 rounded-lg text-xs overflow-auto">
                              {JSON.stringify(
                                {
                                  script_info: {
                                    name: getSelectedScript()?.name,
                                    description: getSelectedScript()?.description,
                                    category: getSelectedScript()?.category,
                                    version: "1.0.0",
                                  },
                                  fields: getSelectedScript()?.fields.map((field) => ({
                                    name: field.name,
                                    label: field.label,
                                    type: field.type,
                                    required: field.required,
                                    options: field.options,
                                  })),
                                  execution: {
                                    steps: [
                                      "Validar parámetros de entrada",
                                      "Conectar con API externa",
                                      "Procesar datos",
                                      "Generar análisis",
                                      "Formatear resultados",
                                    ],
                                    estimated_time: "2-5 segundos",
                                  },
                                },
                                null,
                                2,
                              )}
                            </pre>
                          </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                          <AccordionTrigger className="text-sm font-medium">
                            <div className="flex items-center">
                              <Code className="mr-2 h-4 w-4" />
                              Código de Implementación
                            </div>
                          </AccordionTrigger>
                          <AccordionContent>
                            <div className="bg-muted p-4 rounded-lg text-xs overflow-auto">
                              <pre className="text-green-600">
                                {`// Este es un ejemplo simplificado del código que ejecutaría el script
// En un entorno real, este código se ejecutaría en el backend

async function executeScript(params) {
  try {
    // Validar parámetros
    if (!params.store_url || !params.api_key || !params.days) {
      throw new Error("Parámetros requeridos faltantes");
    }

    // Conectar con API externa
    const apiConnection = await connectToStoreAPI(params.store_url, params.api_key);
    
    // Obtener datos
    const salesData = await apiConnection.getSalesData(params.days);
    const productData = await apiConnection.getProductData();
    
    // Analizar tendencias
    const trendingProducts = analyzeTrends(salesData, productData);
    
    // Generar recomendaciones
    const recommendations = generateRecommendations(trendingProducts);
    
    // Incluir datos de competidores si se solicita
    let competitorData = null;
    if (params.include_competitors) {
      competitorData = await apiConnection.getCompetitorData();
    }
    
    // Retornar resultados
    return {
      status: "success",
      execution_time: measureExecutionTime(),
      results: {
        trending_products: trendingProducts,
        trending_categories: extractCategories(trendingProducts),
        recommendations: recommendations,
        competitor_data: competitorData
      }
    };
  } catch (error) {
    return {
      status: "error",
      error_code: error.code || "UNKNOWN_ERROR",
      message: error.message
    };
  }
}`}
                              </pre>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>

                      <div className="p-4 border rounded-lg bg-yellow-50 border-yellow-200">
                        <h4 className="font-medium mb-2 flex items-center">
                          <AlertCircle className="mr-2 h-4 w-4 text-yellow-600" />
                          Nota sobre el simulador
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Este simulador ejecuta una versión simplificada del script con datos de prueba. En un entorno
                          real, el script se ejecutaría en el backend con los datos proporcionados por el Lifter.
                        </p>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="results" className="space-y-4">
                    {!simulationComplete && !isSimulating && (
                      <div className="p-8 border rounded-lg text-center">
                        <TestTube className="h-12 w-12 mx-auto mb-4 text-muted-foreground opacity-50" />
                        <h3 className="text-lg font-medium mb-2">Aún no hay resultados</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          Completa los parámetros y ejecuta la simulación para ver los resultados
                        </p>
                        <Button onClick={handleSimulate}>
                          <Play className="mr-2 h-4 w-4" />
                          Iniciar Simulación
                        </Button>
                      </div>
                    )}

                    {isSimulating && (
                      <div className="p-8 border rounded-lg text-center">
                        <RefreshCw className="h-12 w-12 mx-auto mb-4 animate-spin text-primary" />
                        <h3 className="text-lg font-medium mb-2">Simulación en progreso</h3>
                        <p className="text-sm text-muted-foreground">
                          Ejecutando script con los parámetros proporcionados...
                        </p>
                      </div>
                    )}

                    {simulationComplete && (
                      <div className="space-y-4">
                        <div
                          className={`p-4 border rounded-lg ${
                            simulationSuccess ? "bg-green-50 border-green-200" : "bg-red-50 border-red-200"
                          }`}
                        >
                          <div className="flex items-center gap-2 mb-2">
                            {simulationSuccess ? (
                              <CheckCircle className="h-5 w-5 text-green-600" />
                            ) : (
                              <AlertCircle className="h-5 w-5 text-red-600" />
                            )}
                            <h4 className="font-medium">
                              {simulationSuccess ? "Simulación exitosa" : "Error en la simulación"}
                            </h4>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            {simulationSuccess
                              ? "El script se ejecutó correctamente con los parámetros proporcionados."
                              : "Se encontraron errores durante la ejecución del script."}
                          </p>
                        </div>

                        <div className="space-y-2">
                          <div className="flex justify-between items-center">
                            <h4 className="font-medium">Resultado de la ejecución</h4>
                            <Button variant="outline" size="sm">
                              <Copy className="mr-2 h-3 w-3" />
                              Copiar JSON
                            </Button>
                          </div>
                          <pre className="bg-muted p-4 rounded-lg text-xs overflow-auto h-[300px]">
                            {simulationOutput}
                          </pre>
                        </div>

                        {simulationSuccess && (
                          <div className="p-4 border rounded-lg">
                            <h4 className="font-medium mb-3">Análisis de rendimiento</h4>
                            <div className="space-y-3">
                              <div>
                                <div className="flex justify-between mb-1">
                                  <span className="text-sm">Tiempo de ejecución</span>
                                  <span className="text-sm font-medium">2.3s</span>
                                </div>
                                <div className="w-full bg-muted rounded-full h-2">
                                  <div className="bg-green-500 h-2 rounded-full" style={{ width: "30%" }}></div>
                                </div>
                                <p className="text-xs text-muted-foreground mt-1">
                                  Excelente (por debajo del umbral de 5s)
                                </p>
                              </div>
                              <div>
                                <div className="flex justify-between mb-1">
                                  <span className="text-sm">Uso de memoria</span>
                                  <span className="text-sm font-medium">128MB</span>
                                </div>
                                <div className="w-full bg-muted rounded-full h-2">
                                  <div className="bg-green-500 h-2 rounded-full" style={{ width: "25%" }}></div>
                                </div>
                                <p className="text-xs text-muted-foreground mt-1">
                                  Óptimo (por debajo del límite de 512MB)
                                </p>
                              </div>
                            </div>
                          </div>
                        )}

                        <div className="flex justify-between">
                          <Button variant="outline" onClick={handleSimulate}>
                            <RefreshCw className="mr-2 h-4 w-4" />
                            Ejecutar de nuevo
                          </Button>
                          <Button className="bg-primary hover:bg-primary/90">
                            <Save className="mr-2 h-4 w-4" />
                            Guardar y publicar
                          </Button>
                        </div>
                      </div>
                    )}
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardContent className="flex flex-col items-center justify-center py-12 text-center">
                <TestTube className="h-16 w-16 mb-4 text-muted-foreground opacity-50" />
                <h3 className="text-xl font-medium mb-2">Selecciona un script para comenzar</h3>
                <p className="text-muted-foreground max-w-md mb-6">
                  Elige uno de tus scripts del panel izquierdo para probar su funcionamiento con datos de ejemplo
                </p>
                <Button variant="outline" asChild>
                  <a href="/maker-dashboard/scripts/new">Crear nuevo script</a>
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
