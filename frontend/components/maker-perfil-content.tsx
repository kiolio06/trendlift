"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Bell, CreditCard, Key, User, Shield, Globe, Mail, Phone, MapPin } from "lucide-react"

export function MakerPerfilContent() {
  const [activeTab, setActiveTab] = useState("cuenta")

  return (
    <div className="container mx-auto pt-24 px-4 pb-8">
      <h1 className="text-3xl font-bold mb-6">Configuración</h1>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Sidebar */}
        <div className="lg:col-span-3">
          <Card className="sticky top-24">
            <CardHeader>
              <div className="flex flex-col items-center space-y-3">
                <Avatar className="h-20 w-20 border-4 border-background">
                  <AvatarImage src="/placeholder.svg?height=80&width=80" alt="Avatar" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className="text-center">
                  <h3 className="font-medium text-lg">Juan Díaz</h3>
                  <p className="text-sm text-muted-foreground">Maker Premium</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <nav className="space-y-1">
                <Button
                  variant={activeTab === "cuenta" ? "secondary" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => setActiveTab("cuenta")}
                >
                  <User className="mr-2 h-4 w-4" />
                  Cuenta
                </Button>
                <Button
                  variant={activeTab === "seguridad" ? "secondary" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => setActiveTab("seguridad")}
                >
                  <Shield className="mr-2 h-4 w-4" />
                  Seguridad
                </Button>
                <Button
                  variant={activeTab === "notificaciones" ? "secondary" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => setActiveTab("notificaciones")}
                >
                  <Bell className="mr-2 h-4 w-4" />
                  Notificaciones
                </Button>
                <Button
                  variant={activeTab === "facturacion" ? "secondary" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => setActiveTab("facturacion")}
                >
                  <CreditCard className="mr-2 h-4 w-4" />
                  Facturación
                </Button>
              </nav>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-9">
          {activeTab === "cuenta" && (
            <Card>
              <CardHeader>
                <CardTitle>Información Personal</CardTitle>
                <CardDescription>Actualiza tu información personal y de contacto.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nombre</Label>
                      <Input id="name" defaultValue="Juan" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastname">Apellido</Label>
                      <Input id="lastname" defaultValue="Díaz" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Correo electrónico</Label>
                    <div className="flex items-center space-x-2">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      <Input id="email" type="email" defaultValue="juan.diaz@example.com" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Teléfono</Label>
                    <div className="flex items-center space-x-2">
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      <Input id="phone" type="tel" defaultValue="+34 612 345 678" />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Información de Maker</h3>

                  <div className="space-y-2">
                    <Label htmlFor="bio">Biografía</Label>
                    <textarea
                      id="bio"
                      className="w-full min-h-[100px] p-3 rounded-md border border-input bg-transparent"
                      defaultValue="Desarrollador de scripts con más de 5 años de experiencia en automatización y análisis de tendencias."
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="website">Sitio web</Label>
                    <div className="flex items-center space-x-2">
                      <Globe className="h-4 w-4 text-muted-foreground" />
                      <Input id="website" type="url" defaultValue="https://juandiaz.dev" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="location">Ubicación</Label>
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <Input id="location" defaultValue="Madrid, España" />
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button>Guardar cambios</Button>
              </CardFooter>
            </Card>
          )}

          {activeTab === "seguridad" && (
            <Card>
              <CardHeader>
                <CardTitle>Seguridad</CardTitle>
                <CardDescription>Gestiona tu contraseña y la seguridad de tu cuenta.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Cambiar contraseña</h3>

                  <div className="space-y-2">
                    <Label htmlFor="current-password">Contraseña actual</Label>
                    <div className="flex items-center space-x-2">
                      <Key className="h-4 w-4 text-muted-foreground" />
                      <Input id="current-password" type="password" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="new-password">Nueva contraseña</Label>
                    <div className="flex items-center space-x-2">
                      <Key className="h-4 w-4 text-muted-foreground" />
                      <Input id="new-password" type="password" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="confirm-password">Confirmar nueva contraseña</Label>
                    <div className="flex items-center space-x-2">
                      <Key className="h-4 w-4 text-muted-foreground" />
                      <Input id="confirm-password" type="password" />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Autenticación de dos factores</h3>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="2fa">Activar 2FA</Label>
                      <p className="text-sm text-muted-foreground">Añade una capa extra de seguridad a tu cuenta.</p>
                    </div>
                    <Switch id="2fa" />
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button>Guardar cambios</Button>
              </CardFooter>
            </Card>
          )}

          {activeTab === "notificaciones" && (
            <Card>
              <CardHeader>
                <CardTitle>Notificaciones</CardTitle>
                <CardDescription>Configura cómo y cuándo quieres recibir notificaciones.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Notificaciones por correo</h3>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="email-sales">Ventas</Label>
                        <p className="text-sm text-muted-foreground">
                          Recibe notificaciones cuando se realice una venta de tus scripts.
                        </p>
                      </div>
                      <Switch id="email-sales" defaultChecked />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="email-updates">Actualizaciones de la plataforma</Label>
                        <p className="text-sm text-muted-foreground">
                          Recibe notificaciones sobre nuevas funcionalidades y mejoras.
                        </p>
                      </div>
                      <Switch id="email-updates" defaultChecked />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="email-marketing">Marketing</Label>
                        <p className="text-sm text-muted-foreground">Recibe ofertas especiales y promociones.</p>
                      </div>
                      <Switch id="email-marketing" />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Notificaciones en la plataforma</h3>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="platform-comments">Comentarios</Label>
                        <p className="text-sm text-muted-foreground">
                          Recibe notificaciones cuando alguien comente en tus scripts.
                        </p>
                      </div>
                      <Switch id="platform-comments" defaultChecked />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="platform-ratings">Valoraciones</Label>
                        <p className="text-sm text-muted-foreground">
                          Recibe notificaciones cuando alguien valore tus scripts.
                        </p>
                      </div>
                      <Switch id="platform-ratings" defaultChecked />
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button>Guardar cambios</Button>
              </CardFooter>
            </Card>
          )}

          {activeTab === "facturacion" && (
            <Card>
              <CardHeader>
                <CardTitle>Facturación</CardTitle>
                <CardDescription>Gestiona tus métodos de pago y suscripciones.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Plan actual</h3>

                  <div className="bg-muted/50 p-4 rounded-lg">
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="font-medium">Maker Premium</h4>
                        <p className="text-sm text-muted-foreground">Facturado anualmente</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">€199.99/año</p>
                        <p className="text-sm text-muted-foreground">Próxima factura: 15/10/2023</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button variant="outline">Cambiar plan</Button>
                    <Button variant="destructive">Cancelar suscripción</Button>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Métodos de pago</h3>

                  <div className="bg-muted/50 p-4 rounded-lg">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <div className="bg-background p-2 rounded">
                          <CreditCard className="h-5 w-5" />
                        </div>
                        <div>
                          <h4 className="font-medium">•••• •••• •••• 4242</h4>
                          <p className="text-sm text-muted-foreground">Expira: 12/25</p>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">
                        Editar
                      </Button>
                    </div>
                  </div>

                  <Button variant="outline">Añadir método de pago</Button>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Historial de facturación</h3>

                  <div className="border rounded-lg overflow-hidden">
                    <table className="w-full">
                      <thead className="bg-muted/50">
                        <tr>
                          <th className="text-left p-3">Fecha</th>
                          <th className="text-left p-3">Descripción</th>
                          <th className="text-right p-3">Importe</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-t">
                          <td className="p-3">15/10/2022</td>
                          <td className="p-3">Suscripción Maker Premium (Anual)</td>
                          <td className="p-3 text-right">€199.99</td>
                        </tr>
                        <tr className="border-t">
                          <td className="p-3">15/10/2021</td>
                          <td className="p-3">Suscripción Maker Premium (Anual)</td>
                          <td className="p-3 text-right">€199.99</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
