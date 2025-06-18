import { Header } from "@/components/header"
import { MakerDashboardSidebar } from "@/components/maker-dashboard-sidebar"
import { MakerEstadisticasContent } from "@/components/maker-estadisticas-content"

export default function MakerEstadisticas() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="flex">
        <MakerDashboardSidebar />
        <main className="flex-1 p-6">
          <MakerEstadisticasContent />
        </main>
      </div>
    </div>
  )
}
