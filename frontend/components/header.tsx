"use client"

import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { ArrowUpRight, LogOut } from "lucide-react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useState, useEffect } from "react"
import { LoginModal } from "@/components/login-modal"
import { RegistrationModal } from "@/components/registration-modal"

export function Header() {
  const pathname = usePathname()
  const router = useRouter()
  const [showLoginModal, setShowLoginModal] = useState(false)
  const [showRegistrationModal, setShowRegistrationModal] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Detectar scroll para transparencia
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Detectar si estamos en un dashboard
  const isInDashboard = pathname.startsWith("/lifter") || pathname.startsWith("/maker")

  const handleLogout = () => {
    // Cerrar sesión - redirigir al inicio
    router.push("/")
  }

  const handleLogin = () => {
    if (isInDashboard) {
      router.push("/")
    } else {
      setShowLoginModal(true)
    }
  }

  const handleRegister = () => {
    if (isInDashboard) {
      router.push("/")
    } else {
      // Scroll a roles en la landing page
      const rolesSection = document.getElementById("roles-section")
      if (rolesSection) {
        rolesSection.scrollIntoView({
          behavior: "smooth",
          block: "center",
        })
      }
    }
  }

  const handleLoginSuccess = (role: "maker" | "lifter") => {
    setShowLoginModal(false)
    if (role === "lifter") {
      router.push("/lifter")
    } else {
      router.push("/maker")
    }
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 w-full border-b transition-all duration-300 ${
          scrolled
            ? "bg-white/70 backdrop-blur-md dark:bg-gray-900/70"
            : "bg-white/95 backdrop-blur-sm dark:bg-gray-900/95"
        }`}
      >
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <ArrowUpRight className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold font-heading">TRENDLIFT</span>
            </Link>
          </div>

          <div className="flex items-center gap-2">
            <ModeToggle />

            {isInDashboard ? (
              <Button variant="ghost" size="sm" onClick={handleLogout} className="flex items-center gap-2">
                <LogOut className="h-4 w-4" />
                Cerrar sesión
              </Button>
            ) : (
              <>
                <Button variant="ghost" size="sm" onClick={handleLogin}>
                  Iniciar sesión
                </Button>
                <Button size="sm" className="bg-success hover:bg-success/90 text-white" onClick={handleRegister}>
                  Registrarse
                </Button>
              </>
            )}
          </div>
        </div>
      </header>

      {/* Login Modal */}
      <LoginModal
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
        onLoginSuccess={handleLoginSuccess}
      />

      {/* Registration Modal */}
      <RegistrationModal isOpen={showRegistrationModal} onClose={() => setShowRegistrationModal(false)} role="lifter" />
    </>
  )
}
