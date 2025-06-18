import { Header } from "@/components/header"
import { DashboardSidebar } from "@/components/dashboard-sidebar"
import { LifterScriptsContent } from "@/components/lifter-scripts-content"

export default function LifterScripts() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="flex">
        <DashboardSidebar />
        <main className="flex-1 p-6">
          <LifterScriptsContent />
        </main>
      </div>
    </div>
  )
}
