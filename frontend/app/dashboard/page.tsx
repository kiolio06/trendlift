import { DashboardContent } from "@/components/dashboard-content"
import { DashboardSidebar } from "@/components/dashboard-sidebar"
import { TrendsSidebar } from "@/components/trends-sidebar"

export default function DashboardPage() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)]">
      <DashboardSidebar />
      <DashboardContent />
      <TrendsSidebar />
    </div>
  )
}
