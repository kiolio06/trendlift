import { DashboardSidebar } from "@/components/dashboard-sidebar"
import { AnalyticsContent } from "@/components/analytics-content"
import { TrendsSidebar } from "@/components/trends-sidebar"

export default function AnalyticsPage() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)]">
      <DashboardSidebar />
      <AnalyticsContent />
      <TrendsSidebar />
    </div>
  )
}
