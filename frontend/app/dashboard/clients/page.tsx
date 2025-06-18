import { DashboardSidebar } from "@/components/dashboard-sidebar"
import { ClientsContent } from "@/components/clients-content"
import { TrendsSidebar } from "@/components/trends-sidebar"

export default function ClientsPage() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)]">
      <DashboardSidebar />
      <ClientsContent />
      <TrendsSidebar />
    </div>
  )
}
