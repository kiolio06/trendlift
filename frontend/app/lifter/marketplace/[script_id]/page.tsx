import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Settings2 } from "lucide-react"

const scripts = [
{
    id: "1",
    name: "WhatsApp Business Automation",
    description: "Automatiza mensajes y respuestas en WhatsApp Business.",
    longDescription:
    "Este script permite automatizar mensajes personalizados según etiquetas, horarios y eventos dentro de WhatsApp Business.",
    category: "Marketing",
    author: "TechSolutions",
    price: 0,
    rating: 4.9,
    downloads: 1250,
    icon: "💬",
},
{
    id: "2",
    name: "Sales Analytics Dashboard",
    description: "Genera reportes automáticos de ventas y métricas.",
    longDescription:
    "Analiza automáticamente las ventas de tu e-commerce, identifica productos más vendidos, tendencias y rendimiento por canal.",
    category: "Analytics",
    author: "DataPro",
    price: 15,
    rating: 4.8,
    downloads: 890,
    icon: "📊",
},
]

export default function ScriptDetailPage({ params }: { params: { script_id: string } }) {
const script = scripts.find((s) => s.id === params.script_id)

    if (!script) return notFound()

    return (
    <main className="max-w-4xl mx-auto px-4 py-8 space-y-6">
    <div className="flex items-center gap-4">
        <div className="text-5xl">{script.icon}</div>
        <div>
        <h1 className="text-2xl md:text-3xl font-bold">{script.name}</h1>
        <p className="text-muted-foreground">{script.description}</p>
        </div>
    </div>

    <p className="text-sm text-muted-foreground">{script.longDescription}</p>

        <div className="flex flex-wrap gap-4 items-center">
        <Badge variant="secondary">{script.category}</Badge>
        <span className="text-sm text-muted-foreground">por {script.author}</span>
        <span className="text-sm text-muted-foreground">⭐ {script.rating}</span>
        <span className="text-sm text-muted-foreground">⬇ {script.downloads} descargas</span>
        <span className="text-sm text-muted-foreground">
        {script.price === 0 ? "Gratis" : `$${script.price}/mes`}
        </span>
    </div>

        <Button variant="default" size="lg" asChild>
        <a href={`/lifter/marketplace/${script.id}/config`}>
        <Settings2 className="mr-2 h-4 w-4" />
        Configurar script
        </a>
        </Button>
    </main>
)
}