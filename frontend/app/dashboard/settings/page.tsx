import { DashboardSidebar } from "@/components/dashboard-sidebar"
import { SettingsContent } from "@/components/settings-content"
import { TrendsSidebar } from "@/components/trends-sidebar"

export default function SettingsPage() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)]">
      <DashboardSidebar />
      <SettingsContent />
      <TrendsSidebar />
    </div>
  )
}
