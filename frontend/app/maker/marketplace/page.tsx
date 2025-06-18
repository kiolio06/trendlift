import { Header } from "@/components/header"
import { MakerDashboardSidebar } from "@/components/maker-dashboard-sidebar"
import { MakerMarketplaceContent } from "@/components/maker-marketplace-content"

export default function MakerMarketplace() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="flex">
        <MakerDashboardSidebar />
        <main className="flex-1 p-6">
          <MakerMarketplaceContent />
        </main>
      </div>
    </div>
  )
}
