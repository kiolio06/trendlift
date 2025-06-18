"use client"

import type React from "react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, Landmark, School, Stethoscope } from "lucide-react"
import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const industries = [
  {
    id: 1,
    name: "Comercio minorista",
    icon: Building2,
    description: "Automatiza inventarios, predice tendencias de ventas y optimiza la experiencia del cliente.",
    useCases: [
      "Predicción de demanda basada en tendencias históricas",
      "Optimización de precios en tiempo real",
      "Personalización de ofertas por cliente",
    ],
  },
  {
    id: 2,
    name: "Servicios financieros",
    icon: Landmark,
    description: "Detecta fraudes, automatiza análisis de riesgo y optimiza carteras de inversión.",
    useCases: [
      "Detección de transacciones sospechosas",
      "Evaluación automatizada de solicitudes de crédito",
      "Análisis predictivo de mercados",
    ],
  },
  {
    id: 3,
    name: "Educación",
    icon: School,
    description: "Personaliza experiencias de aprendizaje y automatiza tareas administrativas.",
    useCases: [
      "Seguimiento personalizado del progreso del estudiante",
      "Generación automática de planes de estudio",
      "Análisis de patrones de aprendizaje",
    ],
  },
  {
    id: 4,
    name: "Salud",
    icon: Stethoscope,
    description: "Optimiza la gestión de pacientes y automatiza análisis de datos clínicos.",
    useCases: [
      "Predicción de readmisiones hospitalarias",
      "Optimización de agendas médicas",
      "Análisis de tendencias en historiales clínicos",
    ],
  },
]

export function IndustrySlider() {
  const [activeIndex, setActiveIndex] = useState(0)
  const sliderRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setStartX(e.pageX - (sliderRef.current?.offsetLeft || 0))
    setScrollLeft(sliderRef.current?.scrollLeft || 0)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return
    e.preventDefault()
    const x = e.pageX - (sliderRef.current?.offsetLeft || 0)
    const walk = (x - startX) * 2
    if (sliderRef.current) {
      sliderRef.current.scrollLeft = scrollLeft - walk
    }
  }

  useEffect(() => {
    const handleResize = () => {
      if (sliderRef.current && activeIndex !== null) {
        const cardWidth = sliderRef.current.offsetWidth / (window.innerWidth < 768 ? 1 : 2)
        sliderRef.current.scrollLeft = activeIndex * cardWidth
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [activeIndex])

  const scrollToIndex = (index: number) => {
    setActiveIndex(index)
    if (sliderRef.current) {
      const cardWidth = sliderRef.current.offsetWidth / (window.innerWidth < 768 ? 1 : 2)
      sliderRef.current.scrollTo({
        left: index * cardWidth,
        behavior: "smooth",
      })
    }
  }

  return (
    <div className="space-y-6">
      <div
        ref={sliderRef}
        className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-6 cursor-grab"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onMouseMove={handleMouseMove}
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <div className="flex gap-6 w-full">
          {industries.map((industry, index) => {
            const Icon = industry.icon
            return (
              <Card
                key={industry.id}
                className={cn(
                  "min-w-[85%] md:min-w-[calc(50%-12px)] snap-center transition-all duration-300",
                  activeIndex === index ? "border-primary shadow-lg" : "border-border",
                )}
              >
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="p-2 rounded-full bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="font-heading">{industry.name}</CardTitle>
                  </div>
                  <CardDescription className="font-body">{industry.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-medium mb-2 font-heading">Casos de uso:</h4>
                  <ul className="space-y-2 font-body">
                    {industry.useCases.map((useCase, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span className="text-sm">{useCase}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>

      <div className="flex justify-center gap-2">
        {industries.map((_, index) => (
          <Button
            key={index}
            variant="outline"
            size="icon"
            className={cn(
              "w-3 h-3 rounded-full p-0 border-primary",
              activeIndex === index ? "bg-primary" : "bg-transparent",
            )}
            onClick={() => scrollToIndex(index)}
          >
            <span className="sr-only">Ver industria {index + 1}</span>
          </Button>
        ))}
      </div>
    </div>
  )
}
