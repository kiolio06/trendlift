import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { ReactNode } from "react"

interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px]">
      <CardHeader className="pb-2">
        <div className="mb-2">{icon}</div>
        <CardTitle className="text-base font-semibold break-words leading-snug text-gray-900 h-22">{title}</CardTitle>
      </CardHeader>
      <CardContent className="font-body">
        <p>{description}</p>
      </CardContent>
    </Card>
  )
}
