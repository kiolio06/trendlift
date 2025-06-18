"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowUpRight, Code } from "lucide-react"

interface SurveyModalProps {
  isOpen: boolean
  onClose: () => void
  role: "maker" | "lifter"
}

export function SurveyModal({ isOpen, onClose, role }: SurveyModalProps) {
  // Maker state
  const [scriptTypes, setScriptTypes] = useState<string[]>([])
  const [hasDevelopmentExperience, setHasDevelopmentExperience] = useState<string | null>(null)
  const [knownTools, setKnownTools] = useState("")
  const [makerObjective, setMakerObjective] = useState("")

  // Lifter state
  const [tasksToAutomate, setTasksToAutomate] = useState<string[]>([])
  const [hasDigitalExperience, setHasDigitalExperience] = useState<string | null>(null)
  const [businessPain, setBusinessPain] = useState("")
  const [automationFrequency, setAutomationFrequency] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Survey completed", {
      role,
      ...(role === "maker"
        ? { scriptTypes, hasDevelopmentExperience, knownTools, makerObjective }
        : { tasksToAutomate, hasDigitalExperience, businessPain, automationFrequency }),
    })
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center gap-2 mb-2">
            <div
              className={`p-2 rounded-full ${
                role === "maker" ? "bg-primary/10" : "bg-success/10"
              } flex items-center justify-center`}
            >
              {role === "maker" ? (
                <Code className={`h-5 w-5 ${role === "maker" ? "text-primary" : "text-success"}`} />
              ) : (
                <ArrowUpRight className={`h-5 w-5 ${role === "maker" ? "text-primary" : "text-success"}`} />
              )}
            </div>
            <DialogTitle className="font-heading">
              Cuéntanos más sobre ti como {role === "maker" ? "Maker" : "Lifter"}
            </DialogTitle>
          </div>
          <DialogDescription className="font-body">
            Estas preguntas nos ayudarán a personalizar tu experiencia en TrendLift.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-6 py-4">
            {role === "maker" ? (
              // Maker questions
              <>
                <div className="grid gap-2">
                  <Label className="font-medium">¿Qué tipo de scripts te interesa crear?</Label>
                  <div className="grid grid-cols-2 gap-2">
                    {["Marketing", "Ventas", "Contabilidad", "Redes Sociales", "CRM", "Otros"].map((type) => (
                      <div key={type} className="flex items-center space-x-2">
                        <Checkbox
                          id={`script-${type}`}
                          checked={scriptTypes.includes(type)}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              setScriptTypes([...scriptTypes, type])
                            } else {
                              setScriptTypes(scriptTypes.filter((t) => t !== type))
                            }
                          }}
                        />
                        <Label htmlFor={`script-${type}`} className="font-normal">
                          {type}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid gap-2">
                  <Label className="font-medium">¿Tienes experiencia previa desarrollando software?</Label>
                  <RadioGroup
                    value={hasDevelopmentExperience || ""}
                    onValueChange={setHasDevelopmentExperience}
                    className="flex gap-4"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="yes" id="dev-yes" />
                      <Label htmlFor="dev-yes" className="font-normal">
                        Sí
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="dev-no" />
                      <Label htmlFor="dev-no" className="font-normal">
                        No
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="known-tools" className="font-medium">
                    ¿Qué herramientas conoces?
                  </Label>
                  <Input
                    id="known-tools"
                    value={knownTools}
                    onChange={(e) => setKnownTools(e.target.value)}
                    placeholder="Ej: JavaScript, Python, React, etc."
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="maker-objective" className="font-medium">
                    ¿Cuál es tu objetivo al usar TrendLift? (opcional)
                  </Label>
                  <Textarea
                    id="maker-objective"
                    value={makerObjective}
                    onChange={(e) => setMakerObjective(e.target.value)}
                    placeholder="Cuéntanos qué esperas lograr con TrendLift"
                    className="min-h-[100px]"
                  />
                </div>
              </>
            ) : (
              // Lifter questions
              <>
                <div className="grid gap-2">
                  <Label className="font-medium">¿Qué tareas te gustaría automatizar?</Label>
                  <div className="grid grid-cols-2 gap-2">
                    {["Redes Sociales", "Facturación", "CRM", "Reportes", "Email Marketing", "Inventario"].map(
                      (task) => (
                        <div key={task} className="flex items-center space-x-2">
                          <Checkbox
                            id={`task-${task}`}
                            checked={tasksToAutomate.includes(task)}
                            onCheckedChange={(checked) => {
                              if (checked) {
                                setTasksToAutomate([...tasksToAutomate, task])
                              } else {
                                setTasksToAutomate(tasksToAutomate.filter((t) => t !== task))
                              }
                            }}
                          />
                          <Label htmlFor={`task-${task}`} className="font-normal">
                            {task}
                          </Label>
                        </div>
                      ),
                    )}
                  </div>
                </div>

                <div className="grid gap-2">
                  <Label className="font-medium">¿Tienes experiencia usando herramientas digitales?</Label>
                  <RadioGroup
                    value={hasDigitalExperience || ""}
                    onValueChange={setHasDigitalExperience}
                    className="flex gap-4"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="yes" id="digital-yes" />
                      <Label htmlFor="digital-yes" className="font-normal">
                        Sí
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="digital-no" />
                      <Label htmlFor="digital-no" className="font-normal">
                        No
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="business-pain" className="font-medium">
                    ¿Cuál es tu mayor dolor actualmente en tu negocio?
                  </Label>
                  <Textarea
                    id="business-pain"
                    value={businessPain}
                    onChange={(e) => setBusinessPain(e.target.value)}
                    placeholder="Describe el principal problema que enfrentas en tu negocio"
                    className="min-h-[100px]"
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="automation-frequency" className="font-medium">
                    ¿Con qué frecuencia quieres usar automatizaciones?
                  </Label>
                  <Select value={automationFrequency} onValueChange={setAutomationFrequency}>
                    <SelectTrigger id="automation-frequency">
                      <SelectValue placeholder="Selecciona una frecuencia" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="daily">Diario</SelectItem>
                      <SelectItem value="weekly">Semanal</SelectItem>
                      <SelectItem value="monthly">Mensual</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </>
            )}
          </div>
          <DialogFooter>
            <Button
              type="submit"
              className={`w-full ${role === "maker" ? "bg-primary hover:bg-primary/90" : "bg-success hover:bg-success/90"}`}
            >
              Completar y continuar
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

// Componente Input para reutilizar en el formulario
function Input({ className, ...props }: React.InputHTMLAttributes<HTMLInputElement> & { className?: string }) {
  return (
    <input
      className={`flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
      {...props}
    />
  )
}
