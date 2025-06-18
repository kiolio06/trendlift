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
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowUpRight, Code, Eye, EyeOff } from "lucide-react"
import { SurveyModal } from "@/components/survey-modal"
import { useRouter } from "next/navigation"

interface RegistrationModalProps {
  isOpen: boolean
  onClose: () => void
  role: "maker" | "lifter"
}

export function RegistrationModal({ isOpen, onClose, role }: RegistrationModalProps) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [showSurvey, setShowSurvey] = useState(false)
  const router = useRouter()

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!name.trim()) {
      newErrors.name = "El nombre es obligatorio"
    }

    if (!email.trim()) {
      newErrors.email = "El correo electrónico es obligatorio"
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Correo electrónico inválido"
    }

    if (!password) {
      newErrors.password = "La contraseña es obligatoria"
    } else if (password.length < 8) {
      newErrors.password = "La contraseña debe tener al menos 8 caracteres"
    }

    if (password !== confirmPassword) {
      newErrors.confirmPassword = "Las contraseñas no coinciden"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()

  if (!validateForm()) return

  try {
    const response = await fetch("http://localhost:8000/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: name,
        email,
        password,
      }),
    })

    if (!response.ok) {
      const errorData = await response.json()
      setErrors({ api: errorData.detail || "Error en el registro" })
      return
    }

    console.log("Registro exitoso")
    setShowSurvey(true)
  } catch (error) {
    setErrors({ api: "Error al conectar con el servidor" })
  }
}


  const handleSurveyComplete = () => {
    setShowSurvey(false)
    onClose()
    // Redirigir según el rol después del registro
    if (role === "lifter") {
      router.push("/dashboard")
    } else {
      router.push("/maker-dashboard")
    }
  }

  if (showSurvey) {
    return <SurveyModal isOpen={true} onClose={handleSurveyComplete} role={role} />
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
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
            <DialogTitle className="font-heading">Regístrate como {role === "maker" ? "Maker" : "Lifter"}</DialogTitle>
          </div>
          <DialogDescription className="font-body">
            {role === "maker"
              ? "Crea y vende scripts para automatizar tareas de negocio."
              : "Usa automatizaciones inteligentes para ahorrar tiempo y potenciar tu negocio."}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Nombre completo</Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Tu nombre completo"
                className={errors.name ? "border-destructive" : ""}
              />
              {errors.name && <p className="text-destructive text-sm">{errors.name}</p>}
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Correo electrónico</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tu@email.com"
                className={errors.email ? "border-destructive" : ""}
              />
              {errors.email && <p className="text-destructive text-sm">{errors.email}</p>}
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Contraseña</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Contraseña"
                  className={errors.password ? "border-destructive pr-10" : "pr-10"}
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
              {errors.password && <p className="text-destructive text-sm">{errors.password}</p>}
            </div>
            <div className="grid gap-2">
              <Label htmlFor="confirmPassword">Confirmar contraseña</Label>
              <div className="relative">
                <Input
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirma tu contraseña"
                  className={errors.confirmPassword ? "border-destructive pr-10" : "pr-10"}
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
              {errors.confirmPassword && <p className="text-destructive text-sm">{errors.confirmPassword}</p>}
            </div>
          </div>
          <DialogFooter>
            <Button
              type="submit"
              className={`w-full ${role === "maker" ? "bg-primary hover:bg-primary/90" : "bg-success hover:bg-success/90"}`}
            >
              Crear cuenta
            </Button>
          </DialogFooter>
        </form>
        <div className="mt-4 text-center text-sm text-muted-foreground">
          ¿Ya tienes una cuenta?{" "}
          <a href="#" className="text-primary hover:underline">
            Iniciar sesión
          </a>
        </div>
      </DialogContent>
    </Dialog>
  )
}
