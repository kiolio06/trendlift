import { DashboardSidebar } from "@/components/dashboard-sidebar"
import { ScriptsContent } from "@/components/scripts-content"
import { TrendsSidebar } from "@/components/trends-sidebar"

export default function ScriptsPage() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)]">
      <DashboardSidebar />
      <ScriptsContent />
      <TrendsSidebar />
    </div>
  )
}
