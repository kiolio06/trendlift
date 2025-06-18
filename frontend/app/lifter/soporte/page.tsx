import type { Metadata } from "next"
import { Header } from "@/components/header"
import { DashboardSidebar } from "@/components/dashboard-sidebar"
import { SupportContent } from "@/components/support-content"

export const metadata: Metadata = {
  title: "Soporte | TrendLift",
  description: "Centro de soporte para usuarios Lifter de TrendLift",
}

export default function LifterSupport() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="flex">
        <DashboardSidebar />
        <main className="flex-1 p-6 pt-24">
          <SupportContent />
        </main>
      </div>
    </div>
  )
}
