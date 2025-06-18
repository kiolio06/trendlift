"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import {
  Plus,
  Trash2,
  Eye,
  Save,
  Upload,
  Code,
  Settings,
  FileText,
  Calendar,
  Hash,
  Type,
  ToggleLeft,
  List,
  ImageIcon,
} from "lucide-react"
import { useState } from "react"

interface FormField {
  id: string
  label: string
  type: "text" | "number" | "checkbox" | "select" | "file" | "date"
  required: boolean
  options?: string[]
  placeholder?: string
}

export function ScriptFormContent() {
  const [scriptData, setScriptData] = useState({
    name: "",
    description: "",
    category: "",
    requirements: "",
    price: "",
  })

  const [formFields, setFormFields] = useState<FormField[]>([])
  const [newField, setNewField] = useState<Partial<FormField>>({
    label: "",
    type: "text",
    required: false,
  })

  const addField = () => {
    if (newField.label) {
      const field: FormField = {
        id: Date.now().toString(),
        label: newField.label,
        type: newField.type as FormField["type"],
        required: newField.required || false,
        options: newField.type === "select" ? ["Opción 1", "Opción 2"] : undefined,
        placeholder: newField.placeholder,
      }
      setFormFields([...formFields, field])
      setNewField({ label: "", type: "text", required: false })
    }
  }

  const removeField = (id: string) => {
    setFormFields(formFields.filter((field) => field.id !== id))
  }

  const getFieldIcon = (type: string) => {
    switch (type) {
      case "text":
        return <Type className="h-4 w-4" />
      case "number":
        return <Hash className="h-4 w-4" />
      case "checkbox":
        return <ToggleLeft className="h-4 w-4" />
      case "select":
        return <List className="h-4 w-4" />
      case "file":
        return <ImageIcon className="h-4 w-4" />
      case "date":
        return <Calendar className="h-4 w-4" />
      default:
        return <Type className="h-4 w-4" />
    }
  }

  const generateJSON = () => {
    return {
      script_info: {
        name: scriptData.name,
        description: scriptData.description,
        category: scriptData.category,
        requirements: scriptData.requirements,
        price: scriptData.price,
      },
      fields: formFields.map((field) => ({
        label: field.label,
        type: field.type,
        required: field.required,
        options: field.options,
        placeholder: field.placeholder,
      })),
    }
  }

  return (
    <div className="flex-1 p-4 md:p-8 overflow-auto pt-20 md:pt-24">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6 md:mb-8 gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold font-heading">Crear Nuevo Script</h1>
          <p className="text-muted-foreground font-body text-sm md:text-base">
            Define los parámetros que los Lifters necesitarán para usar tu script
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-2 w-full lg:w-auto">
          <Button variant="outline" size="sm" className="text-xs md:text-sm">
            <Eye className="mr-2 h-4 w-4" />
            Previsualizar
          </Button>
          <Button variant="outline" size="sm" className="text-xs md:text-sm">
            <Save className="mr-2 h-4 w-4" />
            Guardar Borrador
          </Button>
          <Button className="bg-success hover:bg-success/90 text-xs md:text-sm">
            <Upload className="mr-2 h-4 w-4" />
            Publicar Script
          </Button>
        </div>
      </div>

      <Tabs defaultValue="basic" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3 h-auto">
          <TabsTrigger value="basic" className="text-xs md:text-sm py-2">
            Información Básica
          </TabsTrigger>
          <TabsTrigger value="parameters" className="text-xs md:text-sm py-2">
            Parámetros Dinámicos
          </TabsTrigger>
          <TabsTrigger value="preview" className="text-xs md:text-sm py-2">
            Vista Previa
          </TabsTrigger>
        </TabsList>

        <TabsContent value="basic" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-heading flex items-center">
                <FileText className="mr-2 h-5 w-5" />
                Información del Script
              </CardTitle>
              <CardDescription className="font-body text-sm">
                Describe tu script para que los Lifters entiendan qué hace y cómo les ayuda
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm">
                  Nombre del Script *
                </Label>
                <Input
                  id="name"
                  placeholder="Ej: Analizador de Tendencias E-commerce"
                  value={scriptData.name}
                  onChange={(e) => setScriptData({ ...scriptData, name: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description" className="text-sm">
                  Descripción *
                </Label>
                <Textarea
                  id="description"
                  placeholder="Explica qué hace tu script, qué problemas resuelve y qué beneficios aporta..."
                  className="min-h-[100px]"
                  value={scriptData.description}
                  onChange={(e) => setScriptData({ ...scriptData, description: e.target.value })}
                />
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="category" className="text-sm">
                    Categoría *
                  </Label>
                  <Select
                    value={scriptData.category}
                    onValueChange={(value) => setScriptData({ ...scriptData, category: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona una categoría" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ventas">Ventas</SelectItem>
                      <SelectItem value="facturacion">Facturación</SelectItem>
                      <SelectItem value="analisis">Análisis</SelectItem>
                      <SelectItem value="marketing">Marketing</SelectItem>
                      <SelectItem value="crm">CRM</SelectItem>
                      <SelectItem value="ecommerce">E-commerce</SelectItem>
                      <SelectItem value="redes-sociales">Redes Sociales</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="price" className="text-sm">
                    Precio (USD) *
                  </Label>
                  <Input
                    id="price"
                    type="number"
                    placeholder="49.99"
                    value={scriptData.price}
                    onChange={(e) => setScriptData({ ...scriptData, price: e.target.value })}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="requirements" className="text-sm">
                  ¿Qué necesita el script?
                </Label>
                <Textarea
                  id="requirements"
                  placeholder="Ej: API Key de Google Analytics, acceso a base de datos, archivo CSV con datos históricos..."
                  value={scriptData.requirements}
                  onChange={(e) => setScriptData({ ...scriptData, requirements: e.target.value })}
                />
                <p className="text-xs text-muted-foreground">
                  Especifica APIs, archivos, credenciales o datos que el Lifter debe proporcionar
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="parameters" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-heading flex items-center">
                <Settings className="mr-2 h-5 w-5" />
                Parámetros Configurables
              </CardTitle>
              <CardDescription className="font-body text-sm">
                Define los campos que el Lifter deberá llenar para personalizar tu script
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Agregar nuevo campo */}
              <div className="p-4 border rounded-lg bg-muted/30">
                <h4 className="font-medium mb-4 text-sm md:text-base">Agregar Nuevo Parámetro</h4>
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="space-y-2">
                    <Label htmlFor="fieldLabel" className="text-sm">
                      Nombre del parámetro
                    </Label>
                    <Input
                      id="fieldLabel"
                      placeholder="Ej: Nombre del producto"
                      value={newField.label}
                      onChange={(e) => setNewField({ ...newField, label: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="fieldType" className="text-sm">
                      Tipo de campo
                    </Label>
                    <Select
                      value={newField.type}
                      onValueChange={(value) => setNewField({ ...newField, type: value as FormField["type"] })}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="text">Texto corto</SelectItem>
                        <SelectItem value="number">Número</SelectItem>
                        <SelectItem value="checkbox">Checkbox (Sí/No)</SelectItem>
                        <SelectItem value="select">Lista desplegable</SelectItem>
                        <SelectItem value="file">Archivo</SelectItem>
                        <SelectItem value="date">Fecha</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="fieldPlaceholder" className="text-sm">
                      Placeholder (opcional)
                    </Label>
                    <Input
                      id="fieldPlaceholder"
                      placeholder="Texto de ayuda"
                      value={newField.placeholder}
                      onChange={(e) => setNewField({ ...newField, placeholder: e.target.value })}
                    />
                  </div>
                </div>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mt-4 gap-4">
                  <div className="flex items-center space-x-2">
                    <Switch
                      id="required"
                      checked={newField.required}
                      onCheckedChange={(checked) => setNewField({ ...newField, required: checked })}
                    />
                    <Label htmlFor="required" className="text-sm">
                      Campo obligatorio
                    </Label>
                  </div>
                  <Button onClick={addField} disabled={!newField.label} size="sm" className="w-full md:w-auto">
                    <Plus className="mr-2 h-4 w-4" />
                    Agregar Campo
                  </Button>
                </div>
              </div>

              {/* Lista de campos agregados */}
              {formFields.length > 0 && (
                <div className="space-y-4">
                  <h4 className="font-medium text-sm md:text-base">Parámetros Configurados</h4>
                  {formFields.map((field, index) => (
                    <div
                      key={field.id}
                      className="flex flex-col md:flex-row md:items-center md:justify-between p-3 border rounded-lg gap-3"
                    >
                      <div className="flex items-center gap-3 flex-1">
                        <div className="p-2 bg-primary/10 rounded">{getFieldIcon(field.type)}</div>
                        <div className="flex-1">
                          <p className="font-medium text-sm md:text-base">{field.label}</p>
                          <div className="flex items-center gap-2">
                            <Badge variant="outline" className="text-xs">
                              {field.type}
                            </Badge>
                            {field.required && (
                              <Badge variant="outline" className="text-xs text-destructive">
                                Obligatorio
                              </Badge>
                            )}
                          </div>
                        </div>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => removeField(field.id)}
                        className="w-full md:w-auto"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              )}

              {formFields.length === 0 && (
                <div className="text-center py-8 text-muted-foreground">
                  <Settings className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p className="text-sm md:text-base">Aún no has agregado parámetros configurables</p>
                  <p className="text-xs md:text-sm">Los Lifters podrán personalizar tu script con estos campos</p>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="preview" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            {/* Vista como aparecerá en el marketplace */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-heading">Vista en Marketplace</CardTitle>
                <CardDescription className="font-body text-sm">Así verán tu script los Lifters</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="p-4 border rounded-lg">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Code className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-sm md:text-base">{scriptData.name || "Nombre del Script"}</h4>
                      <p className="text-xs md:text-sm text-muted-foreground">{scriptData.category || "Categoría"}</p>
                    </div>
                  </div>
                  <p className="text-xs md:text-sm mb-3">{scriptData.description || "Descripción del script..."}</p>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-sm md:text-base">${scriptData.price || "0.00"}</span>
                    <Button size="sm" className="text-xs">
                      Comprar
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Formulario que verá el Lifter */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-heading">Formulario del Lifter</CardTitle>
                <CardDescription className="font-body text-sm">
                  Campos que deberá completar para usar el script
                </CardDescription>
              </CardHeader>
              <CardContent>
                {formFields.length > 0 ? (
                  <div className="space-y-4">
                    {formFields.map((field) => (
                      <div key={field.id} className="space-y-2">
                        <Label className="text-sm">
                          {field.label}
                          {field.required && <span className="text-destructive">*</span>}
                        </Label>
                        {field.type === "text" && <Input placeholder={field.placeholder} disabled />}
                        {field.type === "number" && <Input type="number" placeholder={field.placeholder} disabled />}
                        {field.type === "checkbox" && (
                          <div className="flex items-center space-x-2">
                            <input type="checkbox" disabled />
                            <span className="text-sm">{field.placeholder || "Activar opción"}</span>
                          </div>
                        )}
                        {field.type === "select" && (
                          <Select disabled>
                            <SelectTrigger>
                              <SelectValue placeholder="Seleccionar opción" />
                            </SelectTrigger>
                          </Select>
                        )}
                        {field.type === "file" && <Input type="file" disabled />}
                        {field.type === "date" && <Input type="date" disabled />}
                      </div>
                    ))}
                    <Button className="w-full text-sm" disabled>
                      Ejecutar Script
                    </Button>
                  </div>
                ) : (
                  <div className="text-center py-8 text-muted-foreground">
                    <FileText className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p className="text-sm md:text-base">Sin parámetros configurables</p>
                    <p className="text-xs md:text-sm">El script se ejecutará sin campos adicionales</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* JSON Schema generado */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-heading">JSON Schema Generado</CardTitle>
              <CardDescription className="font-body text-sm">
                Este JSON se guardará en el backend para generar el formulario dinámico
              </CardDescription>
            </CardHeader>
            <CardContent>
              <pre className="bg-muted p-4 rounded-lg text-xs md:text-sm overflow-auto">
                {JSON.stringify(generateJSON(), null, 2)}
              </pre>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
