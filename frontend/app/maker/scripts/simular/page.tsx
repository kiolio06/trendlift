import { MakerDashboardSidebar } from "@/components/maker-dashboard-sidebar"
import { MakerSimuladorContent } from "@/components/maker-simulador-content"

export default function MakerSimuladorPage() {
  return (
    <div className="flex min-h-screen bg-background">
      <MakerDashboardSidebar />
      <div className="flex-1 overflow-auto">
        <MakerSimuladorContent />
      </div>
    </div>
  )
}
