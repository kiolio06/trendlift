import { Header } from "@/components/header"
import { MakerDashboardSidebar } from "@/components/maker-dashboard-sidebar"
import { MakerScriptsContent } from "@/components/maker-scripts-content"

export default function MakerScripts() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="flex">
        <MakerDashboardSidebar />
        <main className="flex-1 p-6">
          <MakerScriptsContent />
        </main>
      </div>
    </div>
  )
}
