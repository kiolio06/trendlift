import { DashboardSidebar } from "@/components/dashboard-sidebar"
import { BillingContent } from "@/components/billing-content"
import { TrendsSidebar } from "@/components/trends-sidebar"

export default function BillingPage() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)]">
      <DashboardSidebar />
      <BillingContent />
      <TrendsSidebar />
    </div>
  )
}
