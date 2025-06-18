import { Header } from "@/components/header"
import { MakerDashboardSidebar } from "@/components/maker-dashboard-sidebar"
import { MakerDashboardContent } from "@/components/maker-dashboard-content"

export default function MakerDashboard() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="flex pt-16">
        <MakerDashboardSidebar />
        <main className="flex-1">
          <MakerDashboardContent />
        </main>
      </div>
    </div>
  )
}
