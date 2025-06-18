"use client"

import { Button } from "@/components/ui/button"
import { BarChart3, Home, Code, TestTube, HelpCircle, Menu, User, Store } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function MakerDashboardSidebar() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path
  }

  const navItems = [
    { name: "Inicio", path: "/maker", icon: Home },
    { name: "Mis Scripts", path: "/maker/scripts", icon: Code },
    { name: "Marketplace", path: "/maker/marketplace", icon: Store },
    { name: "Simulador", path: "/maker/scripts/simular", icon: TestTube },
    { name: "Estadísticas", path: "/maker/estadisticas", icon: BarChart3 },
    { name: "Soporte", path: "/maker/soporte", icon: HelpCircle },
    { name: "Perfil", path: "/maker/perfil", icon: User },
  ]

  const SidebarContent = () => (
    <div className="flex flex-col h-full bg-background">
      <div className="p-4 flex-1">
        <h2 className="text-lg font-semibold mb-4 font-heading">Dashboard Maker</h2>
        <nav className="space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon
            return (
              <Button
                key={item.path}
                variant={isActive(item.path) ? "secondary" : "ghost"}
                className="w-full justify-start"
                asChild
              >
                <Link href={item.path}>
                  <Icon className="mr-2 h-4 w-4" />
                  {item.name}
                </Link>
              </Button>
            )
          })}
        </nav>
      </div>
      <div className="bg-background">
        <div className="p-4 bg-gradient-to-b from-background via-muted/10 to-muted/30 border-t">
          <div className="flex items-center p-3 rounded-xl bg-card/80 backdrop-blur-sm border shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center text-primary-foreground font-bold shadow-md">
              M
            </div>
            <div className="ml-3 flex-1 min-w-0">
              <p className="text-sm font-semibold text-foreground truncate">Maker Demo</p>
              <p className="text-xs text-muted-foreground truncate">maker@demo.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden md:flex flex-col w-64 border-r h-screen bg-background">
        <SidebarContent />
      </div>

      {/* Mobile Sidebar */}
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="fixed top-20 left-4 z-40 md:hidden">
              <Menu className="h-4 w-4" />
              <span className="sr-only">Abrir menú</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[280px] p-0">
            <SidebarContent />
          </SheetContent>
        </Sheet>
      </div>
    </>
  )
}
