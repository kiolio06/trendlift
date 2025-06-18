"use client"

import { Button } from "@/components/ui/button"
import { ArrowUpRight, BarChart3, Brain, Check, Code, LineChart, Lightbulb, Lock, User, Zap } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { IndustrySlider } from "@/components/industry-slider"
import { CodeDemo } from "@/components/code-demo"
import { FeatureCard } from "@/components/feature-card"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useRef, useState } from "react"
import { RegistrationModal } from "@/components/registration-modal"
import { LoginModal } from "@/components/login-modal"
import { useRouter } from "next/navigation"

export default function Home() {
  const [registrationRole, setRegistrationRole] = useState<"maker" | "lifter" | null>(null)
  const [showLoginModal, setShowLoginModal] = useState(false)
  const rolesRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  const scrollToRoles = () => {
    rolesRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    })
  }

  const handleLoginSuccess = (role: "maker" | "lifter") => {
    // Redirigir según el rol
    if (role === "lifter") {
      router.push("/lifter")
    } else {
      router.push("/maker")
    }
  }

  return (
    <div className="min-h-screen w-full">
      <main className="flex min-h-screen flex-col items-center w-full">
        {/* Hero Section */}
        <section className="w-full bg-gradient-to-b from-primary to-white dark:from-primary dark:to-background py-20 md:py-32 px-4 relative">
          <div className="absolute inset-0 opacity-10 overflow-hidden">
            <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-success blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-primary blur-3xl"></div>
          </div>
          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
              <div className="flex-1 space-y-4 md:space-y-6 text-center md:text-left">
                <h1 className="text-3xl md:text-6xl font-bold text-white dark:text-white leading-tight font-heading">
                  Eleva tu negocio con automatizaciones inteligentes
                </h1>
                <p className="text-lg md:text-xl text-white/90 dark:text-white/90 max-w-xl mx-auto md:mx-0 font-body">
                  Scripts potentes + IA de tendencias + conexión con tus herramientas favoritas.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-4">
                  <Button size="lg" className="bg-success hover:bg-success/90 text-white" onClick={scrollToRoles}>
                    <Zap className="mr-2 h-4 w-4" />
                    Comenzar gratis
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white/10 bg-white/5"
                    onClick={() => setShowLoginModal(true)}
                  >
                    <User className="mr-2 h-4 w-4" />
                    Iniciar sesión
                  </Button>
                  <Button size="lg" variant="secondary" className="bg-white/20 text-white hover:bg-white/30 border-0">
                    Ver demostración
                  </Button>
                </div>
              </div>
              <div className="flex-1 relative h-[250px] md:h-[400px] w-full max-w-md mx-auto">
                <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                  <div className="relative w-full h-full">
                    <div className="absolute top-0 left-0 w-24 h-24 bg-success/20 rounded-full blur-xl"></div>
                    <div className="absolute bottom-0 right-0 w-24 h-24 bg-primary/20 rounded-full blur-xl"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 border-4 border-white/20 rounded-full animate-[spin_20s_linear_infinite]"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-36 h-36 border-4 border-white/10 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 border-4 border-white/5 rounded-full animate-[spin_10s_linear_infinite]"></div>
                    <Image
                      src="/placeholder.svg?height=400&width=500"
                      alt="Dashboard TrendLift"
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What is TrendLift? Section */}
        <section className="w-full py-16 md:py-20 px-4 bg-white dark:bg-background">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-2xl md:text-4xl font-bold font-heading mb-4">¿Qué es TrendLift?</h2>
              <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto font-body">
                TrendLift es una plataforma que conecta negocios con automatizaciones listas para usar, creadas por
                expertos. Además, analiza tus datos y tendencias para ayudarte a vender más.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              <FeatureCard
                icon={<Code className="h-8 md:h-12 w-8 md:w-12 text-primary" />}
                title="Scripts"
                description="Automatizaciones listas para implementar en tu negocio"
              />

              <FeatureCard
                icon={<BarChart3 className="h-8 md:h-12 w-8 md:w-12 text-primary" />}
                title="Tendencias"
                description="Análisis de datos para identificar oportunidades"
              />

              <FeatureCard
                icon={<Zap className="h-8 md:h-12 w-8 md:w-12 text-primary" />}
                title="IA"
                description="Inteligencia artificial que aprende de tu negocio"
              />

              <FeatureCard
                icon={<ArrowUpRight className="h-8 md:h-12 w-8 md:w-12 text-primary" />}
                title="Automatización"
                description="Conecta tus herramientas y optimiza procesos"
              />
            </div>
          </div>
        </section>

        {/* Roles: Maker & Lifter Section */}
        <section
          id="roles-section"
          ref={rolesRef}
          className="w-full py-16 md:py-20 px-4 bg-muted/30 dark:bg-muted/5 scroll-mt-8"
        >
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-2xl md:text-4xl font-bold font-heading mb-4">Roles claros: Maker & Lifter</h2>
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto font-body">
                Elige tu rol en el ecosistema TrendLift y comienza a transformar tu negocio
              </p>
              <p className="text-sm md:text-base text-muted-foreground max-w-3xl mx-auto font-body mt-2">
                ¿No estás seguro? Comienza como <span className="text-success font-medium">Lifter</span> para usar
                scripts, o como <span className="text-primary font-medium">Maker</span> si quieres crearlos y venderlos.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
              <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px] overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full transform translate-x-16 -translate-y-16"></div>
                <CardHeader className="pb-2 relative z-10">
                  <div className="p-3 bg-primary/10 rounded-full w-fit mb-4">
                    <Code className="h-6 md:h-8 w-6 md:w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl md:text-2xl font-heading">Maker</CardTitle>
                  <CardDescription className="text-sm md:text-base font-body">
                    Crea y vende scripts para automatizar tareas de negocio.
                  </CardDescription>
                </CardHeader>
                <CardContent className="font-body pb-6 md:pb-8 relative z-10">
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <Check className="h-4 md:h-5 w-4 md:w-5 text-success mr-2 mt-0.5" />
                      <span className="text-sm md:text-base">Desarrolla soluciones para problemas comunes</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 md:h-5 w-4 md:w-5 text-success mr-2 mt-0.5" />
                      <span className="text-sm md:text-base">Monetiza tu conocimiento y experiencia</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 md:h-5 w-4 md:w-5 text-success mr-2 mt-0.5" />
                      <span className="text-sm md:text-base">Accede a una comunidad de negocios en crecimiento</span>
                    </li>
                  </ul>
                  <Button
                    className="bg-primary hover:bg-primary/90 text-white w-full"
                    onClick={() => setRegistrationRole("maker")}
                  >
                    Registrarse como Maker
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px] overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-success/5 rounded-full transform translate-x-16 -translate-y-16"></div>
                <CardHeader className="pb-2 relative z-10">
                  <div className="p-3 bg-success/10 rounded-full w-fit mb-4">
                    <ArrowUpRight className="h-6 md:h-8 w-6 md:w-8 text-success" />
                  </div>
                  <CardTitle className="text-xl md:text-2xl font-heading">Lifter</CardTitle>
                  <CardDescription className="text-sm md:text-base font-body">
                    Usa automatizaciones inteligentes para ahorrar tiempo y potenciar tu negocio.
                  </CardDescription>
                </CardHeader>
                <CardContent className="font-body pb-6 md:pb-8 relative z-10">
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <Check className="h-4 md:h-5 w-4 md:w-5 text-success mr-2 mt-0.5" />
                      <span className="text-sm md:text-base">Implementa soluciones sin conocimientos técnicos</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 md:h-5 w-4 md:w-5 text-success mr-2 mt-0.5" />
                      <span className="text-sm md:text-base">Ahorra tiempo en tareas repetitivas</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 md:h-5 w-4 md:w-5 text-success mr-2 mt-0.5" />
                      <span className="text-sm md:text-base">Optimiza tu negocio con análisis de tendencias</span>
                    </li>
                  </ul>
                  <Button
                    className="bg-success hover:bg-success/90 text-white w-full"
                    onClick={() => setRegistrationRole("lifter")}
                  >
                    Registrarse como Lifter
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Interactive Demo Section */}
        <section className="w-full py-16 md:py-20 px-4 bg-white dark:bg-background">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-4xl font-bold font-heading mb-4">Prueba cómo funciona</h2>
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto font-body">
                Experimenta la simplicidad de TrendLift con esta demostración interactiva
              </p>
            </div>

            <CodeDemo />
          </div>
        </section>

        {/* Industry Use Cases Section */}
        <section className="w-full py-16 md:py-20 px-4 bg-muted/30 dark:bg-muted/5">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-2xl md:text-4xl font-bold font-heading mb-4">Casos de uso por industria</h2>
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto font-body">
                Descubre cómo TrendLift se adapta a las necesidades específicas de tu sector
              </p>
            </div>

            <IndustrySlider />
          </div>
        </section>

        {/* AI Trends Engine Section */}
        <section className="w-full py-16 md:py-20 px-4 bg-white dark:bg-background">
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
              <div className="flex-1 relative h-[250px] md:h-[400px] order-2 md:order-1">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-full h-full max-w-md">
                    <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/10 rounded-full blur-xl"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-success/10 rounded-full blur-xl"></div>
                    <Image
                      src="/placeholder.svg?height=400&width=500"
                      alt="IA de TrendLift"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
              <div className="flex-1 space-y-4 md:space-y-6 order-1 md:order-2 text-center md:text-left">
                <h2 className="text-2xl md:text-4xl font-bold font-heading">Motor de tendencias con IA</h2>
                <p className="text-base md:text-lg text-muted-foreground font-body">
                  Nuestra IA analiza tus acciones y resultados para darte recomendaciones de marketing personalizadas
                  basadas en tendencias reales. Deja que TrendLift piense por ti.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="p-2 bg-primary/10 rounded-full mr-3 mt-1">
                      <Brain className="h-4 md:h-5 w-4 md:w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium font-heading text-sm md:text-base">Análisis predictivo</h3>
                      <p className="text-muted-foreground font-body text-sm md:text-base">
                        Anticipa tendencias antes que tu competencia
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="p-2 bg-primary/10 rounded-full mr-3 mt-1">
                      <LineChart className="h-4 md:h-5 w-4 md:w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium font-heading text-sm md:text-base">Recomendaciones personalizadas</h3>
                      <p className="text-muted-foreground font-body text-sm md:text-base">
                        Acciones concretas basadas en tus datos
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="p-2 bg-primary/10 rounded-full mr-3 mt-1">
                      <Lightbulb className="h-4 md:h-5 w-4 md:w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium font-heading text-sm md:text-base">Aprendizaje continuo</h3>
                      <p className="text-muted-foreground font-body text-sm md:text-base">
                        Mejora constante basada en resultados
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Available Integrations Section */}
        <section className="w-full py-16 md:py-20 px-4 bg-muted/30 dark:bg-muted/5">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-2xl md:text-4xl font-bold font-heading mb-4">Integraciones disponibles</h2>
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto font-body">
                Conecta TrendLift con tus herramientas favoritas y potencia tu negocio
              </p>
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 md:gap-8">
              {[
                "Shopify",
                "WhatsApp",
                "Google Sheets",
                "Slack",
                "Zapier",
                "HubSpot",
                "Mailchimp",
                "Trello",
                "Notion",
                "Airtable",
                "Stripe",
                "PayPal",
              ].map((integration, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center p-3 md:p-4 bg-background rounded-lg border hover:shadow-md transition-shadow"
                >
                  <div className="w-8 md:w-12 h-8 md:h-12 bg-muted rounded-full flex items-center justify-center mb-2 md:mb-3">
                    <span className="text-sm md:text-xl">{integration.charAt(0)}</span>
                  </div>
                  <span className="text-xs md:text-sm font-medium text-center">{integration}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-16 md:py-20 px-4 bg-muted/50 dark:bg-muted/10 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-success/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
          </div>
          <div className="container mx-auto max-w-4xl text-center space-y-6 md:space-y-8 relative z-10">
            <h2 className="text-2xl md:text-5xl font-bold font-heading">
              Únete a la revolución de las automatizaciones inteligentes
            </h2>
            <p className="text-lg md:text-xl font-body max-w-2xl mx-auto">
              Comienza a transformar tu negocio hoy mismo con TrendLift.
            </p>
            <div className="pt-4 md:pt-6 flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-success hover:bg-success/90 text-white text-base md:text-lg px-6 md:px-8 py-4 md:py-6 h-auto"
                onClick={scrollToRoles}
              >
                Crear cuenta gratis
              </Button>
              <Button size="lg" variant="outline" className="text-base md:text-lg px-6 md:px-8 py-4 md:py-6 h-auto">
                Explorar scripts ahora
              </Button>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-8 pt-6 md:pt-8">
              <div className="flex items-center">
                <Lock className="h-4 md:h-5 w-4 md:w-5 text-muted-foreground mr-2" />
                <span className="text-xs md:text-sm text-muted-foreground">Seguridad garantizada</span>
              </div>
              <div className="flex items-center">
                <ArrowUpRight className="h-4 md:h-5 w-4 md:w-5 text-muted-foreground mr-2" />
                <span className="text-xs md:text-sm text-muted-foreground">Cancelación sencilla</span>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="w-full py-8 md:py-12 px-4 bg-background dark:bg-background border-t">
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
              <div className="flex items-center">
                <ArrowUpRight className="h-5 md:h-6 w-5 md:w-6 text-primary mr-2" />
                <span className="text-lg md:text-xl font-bold font-heading">TRENDLIFT</span>
              </div>
              <div className="flex flex-wrap justify-center gap-4 md:gap-8 font-body">
                <Link href="#" className="text-muted-foreground hover:text-foreground text-sm md:text-base">
                  Características
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground text-sm md:text-base">
                  Precios
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground text-sm md:text-base">
                  Blog
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground text-sm md:text-base">
                  Contacto
                </Link>
              </div>
            </div>
            <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t text-center text-muted-foreground font-body">
              <p className="text-xs md:text-sm">
                © {new Date().getFullYear()} TrendLift. Todos los derechos reservados.
              </p>
            </div>
          </div>
        </footer>

        {/* Registration Modal */}
        {registrationRole && (
          <RegistrationModal
            isOpen={!!registrationRole}
            onClose={() => setRegistrationRole(null)}
            role={registrationRole}
          />
        )}

        {/* Login Modal */}
        <LoginModal
          isOpen={showLoginModal}
          onClose={() => setShowLoginModal(false)}
          onLoginSuccess={handleLoginSuccess}
        />
      </main>
    </div>
  )
}
