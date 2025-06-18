import { Header } from "@/components/header"
import { DashboardSidebar } from "@/components/dashboard-sidebar"
import { LifterDashboardContent } from "@/components/lifter-dashboard-content"

export default function LifterDashboard() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="flex pt-16">
        <DashboardSidebar />
        <main className="flex-1">
          <LifterDashboardContent />
        </main>
      </div>
    </div>
  )
}
