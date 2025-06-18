"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  User,
  Bell,
  Shield,
  CreditCard,
  Zap,
  ExternalLink,
  CheckCircle,
  AlertCircle,
  Save,
  Eye,
  EyeOff,
} from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { useState } from "react"

export function SettingsContent() {
  const [showApiKey, setShowApiKey] = useState(false)
  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    scripts: true,
    billing: true,
    marketing: false,
  })

  const integrations = [
    {
      name: "Siigo",
      description: "Sistema de facturación electrónica",
      status: "connected",
      lastSync: "Hace 2 horas",
    },
    {
      name: "WhatsApp Business",
      description: "Mensajería automatizada",
      status: "connected",
      lastSync: "Hace 30 min",
    },
    {
      name: "Google Sheets",
      description: "Sincronización de datos",
      status: "connected",
      lastSync: "Hace 1 hora",
    },
    {
      name: "Shopify",
      description: "E-commerce y inventario",
      status: "disconnected",
      lastSync: "No conectado",
    },
    {
      name: "Mailchimp",
      description: "Email marketing",
      status: "disconnected",
      lastSync: "No conectado",
    },
  ]

  return (
    <div className="flex-1 p-4 md:p-8 overflow-auto pt-16 md:pt-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold font-heading">Configuración</h1>
          <p className="text-muted-foreground font-body">Gestiona tu cuenta, integraciones y preferencias</p>
        </div>
      </div>

      <Tabs defaultValue="profile" className="space-y-6 pt-4">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-5">
          <TabsTrigger value="profile" className="text-xs md:text-sm">
            Perfil
          </TabsTrigger>
          <TabsTrigger value="notifications" className="text-xs md:text-sm">
            Notificaciones
          </TabsTrigger>
          <TabsTrigger value="integrations" className="text-xs md:text-sm">
            Integraciones
          </TabsTrigger>
          <TabsTrigger value="billing" className="text-xs md:text-sm">
            Facturación
          </TabsTrigger>
          <TabsTrigger value="security" className="text-xs md:text-sm">
            Seguridad
          </TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="space-y-8 pt-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-heading flex items-center">
                <User className="mr-2 h-5 w-5" />
                Información Personal
              </CardTitle>
              <CardDescription className="font-body">
                Actualiza tu información de perfil y preferencias de cuenta
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="firstName">Nombre</Label>
                  <Input id="firstName" defaultValue="Lifter" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Apellido</Label>
                  <Input id="lastName" defaultValue="Demo" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Correo electrónico</Label>
                <Input id="email" type="email" defaultValue="lifter@demo.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Teléfono</Label>
                <Input id="phone" defaultValue="+57 300 123 4567" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company">Empresa</Label>
                <Input id="company" defaultValue="Demo Company SAS" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="bio">Descripción</Label>
                <Textarea
                  id="bio"
                  placeholder="Cuéntanos sobre tu negocio..."
                  defaultValue="Empresa enfocada en automatización de procesos y optimización de ventas."
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="timezone">Zona horaria</Label>
                <Select defaultValue="america/bogota">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="america/bogota">América/Bogotá (GMT-5)</SelectItem>
                    <SelectItem value="america/mexico_city">América/Ciudad_de_México (GMT-6)</SelectItem>
                    <SelectItem value="america/lima">América/Lima (GMT-5)</SelectItem>
                    <SelectItem value="america/caracas">América/Caracas (GMT-4)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button className="bg-primary hover:bg-primary/90">
                <Save className="mr-2 h-4 w-4" />
                Guardar cambios
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-8 pt-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-heading flex items-center">
                <Bell className="mr-2 h-5 w-5" />
                Preferencias de Notificaciones
              </CardTitle>
              <CardDescription className="font-body">
                Configura cómo y cuándo quieres recibir notificaciones
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h4 className="font-medium">Canales de notificación</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Notificaciones por email</p>
                      <p className="text-sm text-muted-foreground">Recibe actualizaciones en tu correo</p>
                    </div>
                    <Switch
                      checked={notifications.email}
                      onCheckedChange={(checked) => setNotifications({ ...notifications, email: checked })}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Notificaciones push</p>
                      <p className="text-sm text-muted-foreground">Alertas en tiempo real en el navegador</p>
                    </div>
                    <Switch
                      checked={notifications.push}
                      onCheckedChange={(checked) => setNotifications({ ...notifications, push: checked })}
                    />
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h4 className="font-medium">Tipos de notificación</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Ejecución de scripts</p>
                      <p className="text-sm text-muted-foreground">Cuando un script se ejecuta o falla</p>
                    </div>
                    <Switch
                      checked={notifications.scripts}
                      onCheckedChange={(checked) => setNotifications({ ...notifications, scripts: checked })}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Facturación y pagos</p>
                      <p className="text-sm text-muted-foreground">Facturas, pagos y recordatorios</p>
                    </div>
                    <Switch
                      checked={notifications.billing}
                      onCheckedChange={(checked) => setNotifications({ ...notifications, billing: checked })}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Marketing y promociones</p>
                      <p className="text-sm text-muted-foreground">Nuevas funciones y ofertas especiales</p>
                    </div>
                    <Switch
                      checked={notifications.marketing}
                      onCheckedChange={(checked) => setNotifications({ ...notifications, marketing: checked })}
                    />
                  </div>
                </div>
              </div>

              <Button className="bg-primary hover:bg-primary/90">
                <Save className="mr-2 h-4 w-4" />
                Guardar preferencias
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="integrations" className="space-y-8 pt-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-heading flex items-center">
                <Zap className="mr-2 h-5 w-5" />
                Integraciones Conectadas
              </CardTitle>
              <CardDescription className="font-body">
                Gestiona las conexiones con tus herramientas externas
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {integrations.map((integration, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center">
                        <span className="font-bold text-sm">{integration.name.charAt(0)}</span>
                      </div>
                      <div>
                        <p className="font-medium">{integration.name}</p>
                        <p className="text-sm text-muted-foreground">{integration.description}</p>
                        <p className="text-xs text-muted-foreground">Última sincronización: {integration.lastSync}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge
                        variant="outline"
                        className={
                          integration.status === "connected"
                            ? "bg-success/10 text-success border-success"
                            : "bg-muted text-muted-foreground"
                        }
                      >
                        {integration.status === "connected" ? (
                          <CheckCircle className="mr-1 h-3 w-3" />
                        ) : (
                          <AlertCircle className="mr-1 h-3 w-3" />
                        )}
                        {integration.status === "connected" ? "Conectado" : "Desconectado"}
                      </Badge>
                      <Button variant="outline" size="sm">
                        {integration.status === "connected" ? "Configurar" : "Conectar"}
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-heading">API y Webhooks</CardTitle>
              <CardDescription className="font-body">Configuración avanzada para desarrolladores</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="apiKey">Clave API</Label>
                <div className="flex gap-2">
                  <Input
                    id="apiKey"
                    type={showApiKey ? "text" : "password"}
                    defaultValue="tl_sk_1234567890abcdef"
                    readOnly
                  />
                  <Button variant="outline" size="icon" onClick={() => setShowApiKey(!showApiKey)}>
                    {showApiKey ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </Button>
                  <Button variant="outline">Regenerar</Button>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="webhook">URL Webhook</Label>
                <Input id="webhook" placeholder="https://tu-sitio.com/webhook" />
              </div>
              <Button variant="outline">
                <ExternalLink className="mr-2 h-4 w-4" />
                Ver documentación API
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="billing" className="space-y-8 pt-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-heading flex items-center">
                <CreditCard className="mr-2 h-5 w-5" />
                Plan Actual
              </CardTitle>
              <CardDescription className="font-body">Gestiona tu suscripción y métodos de pago</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 border rounded-lg bg-success/5 border-success/20">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-bold text-lg">Plan Profesional</h4>
                  <Badge className="bg-success text-success-foreground">Activo</Badge>
                </div>
                <p className="text-muted-foreground mb-3">Acceso completo a todas las funciones y scripts ilimitados</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold">$49/mes</span>
                  <Button variant="outline">Cambiar plan</Button>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-medium">Próxima facturación</h4>
                <div className="flex justify-between items-center p-3 border rounded-lg">
                  <div>
                    <p className="font-medium">15 de febrero, 2024</p>
                    <p className="text-sm text-muted-foreground">Plan Profesional - Mensual</p>
                  </div>
                  <span className="font-bold">$49.00</span>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-medium">Método de pago</h4>
                <div className="flex justify-between items-center p-3 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary/10 rounded flex items-center justify-center">
                      <CreditCard className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">•••• •••• •••• 4242</p>
                      <p className="text-sm text-muted-foreground">Visa - Expira 12/26</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Cambiar
                  </Button>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-medium">Historial de facturación</h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-center p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">15 Ene 2024</p>
                      <p className="text-sm text-muted-foreground">Plan Profesional</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium">$49.00</span>
                      <Button variant="outline" size="sm">
                        Descargar
                      </Button>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">15 Dic 2023</p>
                      <p className="text-sm text-muted-foreground">Plan Profesional</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium">$49.00</span>
                      <Button variant="outline" size="sm">
                        Descargar
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="space-y-8 pt-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-heading flex items-center">
                <Shield className="mr-2 h-5 w-5" />
                Seguridad de la Cuenta
              </CardTitle>
              <CardDescription className="font-body">
                Protege tu cuenta con configuraciones de seguridad avanzadas
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h4 className="font-medium">Cambiar contraseña</h4>
                <div className="space-y-3">
                  <div className="space-y-2">
                    <Label htmlFor="currentPassword">Contraseña actual</Label>
                    <Input id="currentPassword" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="newPassword">Nueva contraseña</Label>
                    <Input id="newPassword" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirmar nueva contraseña</Label>
                    <Input id="confirmPassword" type="password" />
                  </div>
                  <Button className="bg-primary hover:bg-primary/90">Actualizar contraseña</Button>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h4 className="font-medium">Autenticación de dos factores</h4>
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <p className="font-medium">2FA con aplicación</p>
                    <p className="text-sm text-muted-foreground">
                      Usa Google Authenticator o similar para mayor seguridad
                    </p>
                  </div>
                  <Button variant="outline">Configurar</Button>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h4 className="font-medium">Sesiones activas</h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-center p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">Chrome en Windows</p>
                      <p className="text-sm text-muted-foreground">Bogotá, Colombia - Activa ahora</p>
                    </div>
                    <Badge variant="outline" className="bg-success/10 text-success">
                      Actual
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">Safari en iPhone</p>
                      <p className="text-sm text-muted-foreground">Bogotá, Colombia - Hace 2 días</p>
                    </div>
                    <Button variant="outline" size="sm">
                      Cerrar sesión
                    </Button>
                  </div>
                </div>
              </div>

              <div className="p-4 border rounded-lg bg-destructive/5 border-destructive/20">
                <h4 className="font-medium text-destructive mb-2">Zona de peligro</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Estas acciones son permanentes y no se pueden deshacer
                </p>
                <Button variant="destructive" size="sm">
                  Eliminar cuenta
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
