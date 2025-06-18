import type { Metadata } from "next"
import { Header } from "@/components/header"
import { DashboardSidebar } from "@/components/dashboard-sidebar"
import { SettingsContent } from "@/components/settings-content"

export const metadata: Metadata = {
  title: "Perfil | TrendLift",
  description: "Gestiona tu perfil y configuración de usuario en TrendLift",
}

export default function LifterProfile() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="flex">
        <DashboardSidebar />
        <main className="flex-1 p-6 pt-24">
          <SettingsContent />
        </main>
      </div>
    </div>
  )
}
