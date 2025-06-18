import { DashboardSidebar } from "@/components/dashboard-sidebar"
import { SupportContent } from "@/components/support-content"
import { TrendsSidebar } from "@/components/trends-sidebar"

export default function SupportPage() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)]">
      <DashboardSidebar />
      <SupportContent />
      <TrendsSidebar />
    </div>
  )
}
