import { Header } from "@/components/header"
import { MakerDashboardSidebar } from "@/components/maker-dashboard-sidebar"
import { MakerPerfilContent } from "@/components/maker-perfil-content"

export default function MakerPerfil() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="flex">
        <MakerDashboardSidebar />
        <main className="flex-1 p-6">
          <MakerPerfilContent />
        </main>
      </div>
    </div>
  )
}
