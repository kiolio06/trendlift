import { Header } from "@/components/header"
import { DashboardSidebar } from "@/components/dashboard-sidebar"
import { LifterMarketplaceContent } from "@/components/lifter-marketplace-content"

export default function LifterMarketplace() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="flex">
        <DashboardSidebar />
        <main className="flex-1 p-6">
          <LifterMarketplaceContent />
        </main>
      </div>
    </div>
  )
}
