"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { useRouter } from "next/navigation"

export default function ConfigScriptPage({ params }: { params: { script_id: string } }) {
    const router = useRouter()

    const [form, setForm] = useState({
    businessName: "",
    phone: "",
    description: "",
    useAi: false,
    })

    const [price, setPrice] = useState(15)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
}

    const handleSwitch = (checked: boolean) => {
    setForm((prev) => ({ ...prev, useAi: checked }))
    setPrice(checked ? 25 : 15)
    }

    const handleSubmit = () => {
    console.log("Formulario enviado:", form)
    router.push("/lifter/scripts?success=1")
}

    return (
    <main className="max-w-2xl mx-auto px-4 py-10 space-y-6">
        <div>
        <h1 className="text-2xl font-bold">Configura tu script: {params.script_id}</h1>
        <p className="text-muted-foreground text-sm mt-1">
        Completa los datos necesarios para personalizar el funcionamiento del script.
        </p>
    </div>

        <div className="space-y-4">
        <div className="space-y-2">
        <Label>Nombre del negocio</Label>
        <Input name="businessName" value={form.businessName} onChange={handleChange} />
        </div>

        <div className="space-y-2">
        <Label>Número de WhatsApp</Label>
        <Input name="phone" value={form.phone} onChange={handleChange} />
        </div>

        <div className="space-y-2">
        <Label>Descripción personalizada</Label>
        <Textarea name="description" value={form.description} onChange={handleChange} />
        </div>

        <div className="flex items-center justify-between">
        <Label>¿Activar IA para respuestas?</Label>
        <Switch checked={form.useAi} onCheckedChange={handleSwitch} />
        </div>

        <div className="text-right text-sm text-muted-foreground">
        Precio estimado: <span className="font-bold">${price}/mes</span>
        </div>
    </div>

        <div className="flex justify-end gap-4 pt-6">
        <Button variant="ghost" onClick={() => router.back()}>
        Cancelar
        </Button>
        <Button onClick={handleSubmit}>
        Guardar configuración y activar
        </Button>
    </div>
    </main>
    )
}

