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
import { cn } from "@/lib/utils"

interface LoginModalProps {
  isOpen: boolean
  onClose: () => void
  onLoginSuccess: (role: "maker" | "lifter") => void
}

export function LoginModal({ isOpen, onClose, onLoginSuccess }: LoginModalProps) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [selectedRole, setSelectedRole] = useState<"maker" | "lifter">("lifter")
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!email.trim()) {
      newErrors.email = "El correo electrónico es obligatorio"
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Correo electrónico inválido"
    }

    if (!password) {
      newErrors.password = "La contraseña es obligatoria"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()

  if (!validateForm()) return

  try {
    const response = await fetch("http://127.0.0.1:8000/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })

    const data = await response.json()
    console.log("RESPUESTA LOGIN:", data)

    if (!response.ok) {
      setErrors({ api: data.detail || "Error al iniciar sesión" })
      return
    }

    // ✅ GUARDAR en localStorage
    localStorage.setItem("token", data.access_token)
    localStorage.setItem("username", data.username)
    localStorage.setItem("role", selectedRole)

    console.log("login exitoso")
    onLoginSuccess(selectedRole)
  } catch (error) {
    setErrors({ api: "Error al conectar con el servidor" })
  }
}


  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="font-heading text-center">Iniciar sesión en TrendLift</DialogTitle>
          <DialogDescription className="font-body text-center">
            Accede a tu cuenta y continúa automatizando tu negocio
          </DialogDescription>
        </DialogHeader>

        {/* Role Selector */}
        <div className="flex gap-2 p-1 bg-muted rounded-lg mb-4">
          <button
            type="button"
            className={cn(
              "flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-md text-sm font-medium transition-all",
              selectedRole === "lifter"
                ? "bg-success text-success-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground",
            )}
            onClick={() => setSelectedRole("lifter")}
          >
            <ArrowUpRight className="h-4 w-4" />
            Lifter
          </button>
          <button
            type="button"
            className={cn(
              "flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-md text-sm font-medium transition-all",
              selectedRole === "maker"
                ? "bg-primary text-primary-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground",
            )}
            onClick={() => setSelectedRole("maker")}
          >
            <Code className="h-4 w-4" />
            Maker
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="login-email">Correo electrónico</Label>
              <Input
                id="login-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tu@email.com"
                className={errors.email ? "border-destructive" : ""}
              />
              {errors.email && <p className="text-destructive text-sm">{errors.email}</p>}
            </div>
            <div className="grid gap-2">
              <Label htmlFor="login-password">Contraseña</Label>
              <div className="relative">
                <Input
                  id="login-password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Tu contraseña"
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
          </div>
          <DialogFooter className="flex-col gap-3">
            <Button
              type="submit"
              className={cn(
                "w-full",
                selectedRole === "maker" ? "bg-primary hover:bg-primary/90" : "bg-success hover:bg-success/90",
              )}
            >
              Iniciar sesión como {selectedRole === "maker" ? "Maker" : "Lifter"}
            </Button>
            <div className="text-center text-sm text-muted-foreground">
              ¿No tienes una cuenta?{" "}
              <a href="#" className="text-primary hover:underline">
                Regístrate aquí
              </a>
            </div>
            <div className="text-center">
              <a href="#" className="text-sm text-muted-foreground hover:underline">
                ¿Olvidaste tu contraseña?
              </a>
            </div>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
