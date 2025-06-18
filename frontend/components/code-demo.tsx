"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, Clock, Facebook, Instagram, Send, Twitter } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { cn } from "@/lib/utils"

export function CodeDemo() {
  const [message, setMessage] = useState("")
  const [network, setNetwork] = useState("instagram")
  const [time, setTime] = useState("08:00")
  const [isSimulated, setIsSimulated] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  const handleSimulate = () => {
    if (!message) return

    setIsAnimating(true)
    setTimeout(() => {
      setIsSimulated(true)
      setIsAnimating(false)
    }, 1500)
  }

  const handleReset = () => {
    setMessage("")
    setNetwork("instagram")
    setTime("08:00")
    setIsSimulated(false)
  }

  const getNetworkIcon = () => {
    switch (network) {
      case "instagram":
        return <Instagram className="h-5 w-5" />
      case "twitter":
        return <Twitter className="h-5 w-5" />
      case "facebook":
        return <Facebook className="h-5 w-5" />
      default:
        return <Instagram className="h-5 w-5" />
    }
  }

  const getNetworkName = () => {
    switch (network) {
      case "instagram":
        return "Instagram"
      case "twitter":
        return "X"
      case "facebook":
        return "Facebook"
      default:
        return "Instagram"
    }
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-10">
        <h3 className="text-3xl md:text-4xl font-bold font-heading mb-4">Automatiza en segundos</h3>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-body">
          Mira cómo un simple script puede ayudarte a programar publicaciones sin complicaciones. Sin riesgos, sin
          configuraciones reales.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Form Section */}
        <Card className="border shadow-md overflow-hidden">
          <CardHeader className="bg-muted/50 border-b">
            <CardTitle className="font-heading">Crea tu publicación</CardTitle>
            <CardDescription className="font-body">Configura los detalles de tu publicación programada</CardDescription>
          </CardHeader>
          <CardContent className="p-6 space-y-4">
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium block">
                Mensaje a publicar
              </label>
              <Input
                id="message"
                placeholder="Escribe tu mensaje aquí..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="resize-none"
                disabled={isSimulated}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="network" className="text-sm font-medium block">
                Red social
              </label>
              <Select value={network} onValueChange={setNetwork} disabled={isSimulated}>
                <SelectTrigger id="network" className="w-full">
                  <SelectValue placeholder="Selecciona una red social" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="instagram">
                    <div className="flex items-center">
                      <Instagram className="h-4 w-4 mr-2" />
                      Instagram
                    </div>
                  </SelectItem>
                  <SelectItem value="twitter">
                    <div className="flex items-center">
                      <Twitter className="h-4 w-4 mr-2" />X
                    </div>
                  </SelectItem>
                  <SelectItem value="facebook">
                    <div className="flex items-center">
                      <Facebook className="h-4 w-4 mr-2" />
                      Facebook
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label htmlFor="time" className="text-sm font-medium block">
                Hora de publicación
              </label>
              <Select value={time} onValueChange={setTime} disabled={isSimulated}>
                <SelectTrigger id="time" className="w-full">
                  <SelectValue placeholder="Selecciona una hora" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="08:00">08:00 AM</SelectItem>
                  <SelectItem value="12:00">12:00 PM</SelectItem>
                  <SelectItem value="15:00">03:00 PM</SelectItem>
                  <SelectItem value="18:00">06:00 PM</SelectItem>
                  <SelectItem value="21:00">09:00 PM</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
          <CardFooter className="border-t p-6 bg-muted/30">
            {isSimulated ? (
              <Button variant="outline" onClick={handleReset} className="w-full">
                Crear nueva publicación
              </Button>
            ) : (
              <Button
                className="w-full bg-primary hover:bg-primary/90"
                onClick={handleSimulate}
                disabled={!message || isAnimating}
              >
                {isAnimating ? (
                  <>
                    <div className="animate-spin mr-2 h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
                    Simulando...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Simular publicación
                  </>
                )}
              </Button>
            )}
          </CardFooter>
        </Card>

        {/* Preview Section */}
        <Card
          className={cn(
            "border shadow-md overflow-hidden transition-all duration-500",
            isAnimating && "animate-pulse",
            isSimulated && "border-success shadow-lg shadow-success/10",
          )}
        >
          <CardHeader className="bg-muted/50 border-b">
            <CardTitle className="font-heading">Vista previa</CardTitle>
            <CardDescription className="font-body">Así se verá tu publicación programada</CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <div className="border rounded-lg p-4 bg-background">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                  <span className="text-primary font-bold">TL</span>
                </div>
                <div>
                  <p className="font-medium">TrendLift</p>
                  <div className="flex items-center text-xs text-muted-foreground">
                    {getNetworkIcon()}
                    <span className="ml-1">{getNetworkName()}</span>
                  </div>
                </div>
                {isSimulated && (
                  <div className="ml-auto bg-success/10 text-success text-xs px-2 py-1 rounded-full flex items-center">
                    <Check className="h-3 w-3 mr-1" />
                    Programado
                  </div>
                )}
              </div>

              <div className="mb-3 min-h-[100px]">
                {message ? (
                  <p className="text-sm">{message}</p>
                ) : (
                  <p className="text-sm text-muted-foreground italic">Tu mensaje aparecerá aquí...</p>
                )}
              </div>

              <div className="flex items-center text-xs text-muted-foreground">
                <Clock className="h-3 w-3 mr-1" />
                <span>
                  Programado para las{" "}
                  {time === "08:00"
                    ? "08:00 AM"
                    : time === "12:00"
                      ? "12:00 PM"
                      : time === "15:00"
                        ? "03:00 PM"
                        : time === "18:00"
                          ? "06:00 PM"
                          : "09:00 PM"}
                </span>
              </div>
            </div>

            {isSimulated && (
              <div className="mt-4 bg-success/10 border border-success/20 rounded-lg p-4 text-center animate-in fade-in duration-300">
                <div className="flex items-center justify-center mb-2">
                  <div className="w-8 h-8 rounded-full bg-success/20 flex items-center justify-center">
                    <Check className="h-5 w-5 text-success" />
                  </div>
                </div>
                <p className="font-medium text-success">¡Publicación simulada!</p>
                <p className="text-xs text-muted-foreground mt-1">Tu publicación ha sido programada exitosamente</p>
              </div>
            )}
          </CardContent>
          <CardFooter className="border-t p-4 bg-muted/30">
            <p className="text-xs text-muted-foreground text-center w-full">
              Esta es una simulación. No se requiere acceso real a redes sociales. TrendLift prioriza tu privacidad y
              confianza.
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
