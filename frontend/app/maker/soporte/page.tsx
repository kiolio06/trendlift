import { Header } from "@/components/header"
import { MakerDashboardSidebar } from "@/components/maker-dashboard-sidebar"
import { MakerSoporteContent } from "@/components/maker-soporte-content"

export default function MakerSoporte() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="flex">
        <MakerDashboardSidebar />
        <main className="flex-1 p-6">
          <MakerSoporteContent />
        </main>
      </div>
    </div>
  )
}
