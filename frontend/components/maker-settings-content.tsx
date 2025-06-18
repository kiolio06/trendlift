"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Shield, Key, Save, Trash2, AlertTriangle, Camera, Github, Twitter, Linkedin, Download } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function MakerSettingsContent() {
  return (
    <div className="flex-1 p-4 md:p-8 overflow-auto pt-16 md:pt-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold font-heading">Configuración</h1>
          <p className="text-muted-foreground font-body">Gestiona tu perfil y preferencias</p>
        </div>
        <Button>
          <Save className="mr-2 h-4 w-4" />
          Guardar cambios
        </Button>
      </div>

      <Tabs defaultValue="profile" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-5">
          <TabsTrigger value="profile">Perfil</TabsTrigger>
          <TabsTrigger value="notifications">Notificaciones</TabsTrigger>
          <TabsTrigger value="security">Seguridad</TabsTrigger>
          <TabsTrigger value="billing">Facturación</TabsTrigger>
          <TabsTrigger value="preferences">Preferencias</TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Información del perfil</CardTitle>
              <CardDescription>Esta información será visible en tu perfil público de Maker</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Profile Picture */}
              <div className="flex items-center gap-6">
                <Avatar className="w-24 h-24">
                  <AvatarImage src="/placeholder.svg?height=96&width=96" />
                  <AvatarFallback className="text-lg">MD</AvatarFallback>
                </Avatar>
                <div className="space-y-2">
                  <Button variant="outline">
                    <Camera className="mr-2 h-4 w-4" />
                    Cambiar foto
                  </Button>
                  <p className="text-sm text-muted-foreground">JPG, PNG o GIF. Máximo 5MB.</p>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="firstName">Nombre</Label>
                  <Input id="firstName" defaultValue="Maker" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Apellido</Label>
                  <Input id="lastName" defaultValue="Demo" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="username">Nombre de usuario</Label>
                <div className="flex">
                  <span className="inline-flex items-center px-3 text-sm text-muted-foreground bg-muted border border-r-0 border-input rounded-l-md">
                    trendlift.com/makers/
                  </span>
                  <Input id="username" defaultValue="maker-demo" className="rounded-l-none" />
                </div>
                <p className="text-sm text-muted-foreground">Esta será tu URL pública de perfil</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" defaultValue="maker@demo.com" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="bio">Biografía</Label>
                <Textarea
                  id="bio"
                  placeholder="Cuéntanos sobre ti y tu experiencia como Maker..."
                  rows={4}
                  defaultValue="Desarrollador especializado en automatización de procesos y análisis de datos. Creador de scripts para e-commerce y marketing digital."
                />
                <p className="text-sm text-muted-foreground">Máximo 500 caracteres</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="location">Ubicación</Label>
                <Input id="location" placeholder="Madrid, España" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="website">Sitio web</Label>
                <Input id="website" placeholder="https://tusitio.com" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Redes sociales</CardTitle>
              <CardDescription>Conecta tus redes sociales para mostrar en tu perfil</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Github className="h-4 w-4" />
                  <Label htmlFor="github">GitHub</Label>
                </div>
                <Input id="github" placeholder="tu-usuario-github" />
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Twitter className="h-4 w-4" />
                  <Label htmlFor="twitter">Twitter</Label>
                </div>
                <Input id="twitter" placeholder="@tu_usuario" />
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Linkedin className="h-4 w-4" />
                  <Label htmlFor="linkedin">LinkedIn</Label>
                </div>
                <Input id="linkedin" placeholder="tu-perfil-linkedin" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Configuración pública</CardTitle>
              <CardDescription>Controla qué información es visible en tu perfil público</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label>Mostrar biografía</Label>
                  <p className="text-sm text-muted-foreground">Tu biografía será visible en tu perfil público</p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Label>Mostrar ubicación</Label>
                  <p className="text-sm text-muted-foreground">Tu ubicación aparecerá en tu perfil</p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Label>Mostrar estadísticas</Label>
                  <p className="text-sm text-muted-foreground">Número de scripts, valoraciones promedio, etc.</p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Label>Permitir contacto directo</Label>
                  <p className="text-sm text-muted-foreground">Los usuarios podrán enviarte mensajes</p>
                </div>
                <Switch />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Notificaciones por email</CardTitle>
              <CardDescription>Configura qué notificaciones quieres recibir por email</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label>Nuevas descargas de scripts</Label>
                  <p className="text-sm text-muted-foreground">Recibe un email cuando alguien descargue tu script</p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Label>Nuevas valoraciones</Label>
                  <p className="text-sm text-muted-foreground">Notificación cuando recibas una nueva valoración</p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Label>Comentarios y reseñas</Label>
                  <p className="text-sm text-muted-foreground">Cuando alguien comente en tus scripts</p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Label>Pagos procesados</Label>
                  <p className="text-sm text-muted-foreground">Confirmación de pagos y transferencias</p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Label>Actualizaciones del producto</Label>
                  <p className="text-sm text-muted-foreground">Novedades y mejoras de TrendLift</p>
                </div>
                <Switch />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Label>Newsletter semanal</Label>
                  <p className="text-sm text-muted-foreground">Resumen semanal y tips para Makers</p>
                </div>
                <Switch />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Notificaciones push</CardTitle>
              <CardDescription>Notificaciones en tiempo real en el navegador</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label>Actividad en tiempo real</Label>
                  <p className="text-sm text-muted-foreground">Descargas, valoraciones y comentarios instantáneos</p>
                </div>
                <Switch />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Label>Mensajes del sistema</Label>
                  <p className="text-sm text-muted-foreground">Mantenimientos, alertas importantes</p>
                </div>
                <Switch defaultChecked />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Frecuencia de resúmenes</CardTitle>
              <CardDescription>Con qué frecuencia recibir resúmenes de actividad</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Resumen de actividad</Label>
                <Select defaultValue="weekly">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="daily">Diario</SelectItem>
                    <SelectItem value="weekly">Semanal</SelectItem>
                    <SelectItem value="monthly">Mensual</SelectItem>
                    <SelectItem value="never">Nunca</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Reporte de ingresos</Label>
                <Select defaultValue="monthly">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="weekly">Semanal</SelectItem>
                    <SelectItem value="monthly">Mensual</SelectItem>
                    <SelectItem value="quarterly">Trimestral</SelectItem>
                    <SelectItem value="never">Nunca</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Cambiar contraseña</CardTitle>
              <CardDescription>Mantén tu cuenta segura con una contraseña fuerte</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
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

              <Button>
                <Key className="mr-2 h-4 w-4" />
                Actualizar contraseña
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Autenticación de dos factores (2FA)</CardTitle>
              <CardDescription>Añade una capa extra de seguridad a tu cuenta</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Shield className="h-4 w-4 text-success" />
                    <span className="font-medium">2FA activado</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Tu cuenta está protegida con autenticación de dos factores
                  </p>
                </div>
                <Button variant="outline">Configurar</Button>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium">Códigos de recuperación</h4>
                <p className="text-sm text-muted-foreground">
                  Guarda estos códigos en un lugar seguro. Puedes usarlos para acceder a tu cuenta si pierdes tu
                  dispositivo 2FA.
                </p>
                <Button variant="outline">
                  <Download className="mr-2 h-4 w-4" />
                  Generar códigos
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Sesiones activas</CardTitle>
              <CardDescription>Gestiona dónde has iniciado sesión</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { device: "MacBook Pro", location: "Madrid, España", lastActive: "Ahora", current: true },
                { device: "iPhone 15", location: "Madrid, España", lastActive: "Hace 2 horas", current: false },
                { device: "Chrome - Windows", location: "Barcelona, España", lastActive: "Hace 1 día", current: false },
              ].map((session, index) => (
                <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="font-medium text-sm">{session.device}</p>
                      {session.current && (
                        <Badge variant="secondary" className="text-xs">
                          Actual
                        </Badge>
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground">
                      {session.location} • {session.lastActive}
                    </p>
                  </div>
                  {!session.current && (
                    <Button variant="outline" size="sm">
                      Cerrar sesión
                    </Button>
                  )}
                </div>
              ))}

              <Button variant="destructive" className="w-full">
                Cerrar todas las demás sesiones
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="billing" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Información de pago</CardTitle>
              <CardDescription>Gestiona cómo recibes tus pagos</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Método de pago preferido</Label>
                <Select defaultValue="bank">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="bank">Transferencia bancaria</SelectItem>
                    <SelectItem value="paypal">PayPal</SelectItem>
                    <SelectItem value="stripe">Stripe</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="bankName">Nombre del banco</Label>
                <Input id="bankName" defaultValue="Banco Santander" />
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="accountNumber">Número de cuenta</Label>
                  <Input id="accountNumber" defaultValue="ES91 2100 0418 4502 0005 1332" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="swift">Código SWIFT/BIC</Label>
                  <Input id="swift" defaultValue="CAIXESBBXXX" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="accountHolder">Titular de la cuenta</Label>
                <Input id="accountHolder" defaultValue="Maker Demo" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Configuración de pagos</CardTitle>
              <CardDescription>Personaliza cuándo y cómo recibir pagos</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Umbral mínimo de pago</Label>
                <Select defaultValue="500">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="100">$100</SelectItem>
                    <SelectItem value="250">$250</SelectItem>
                    <SelectItem value="500">$500</SelectItem>
                    <SelectItem value="1000">$1000</SelectItem>
                  </SelectContent>
                </Select>
                <p className="text-sm text-muted-foreground">Los pagos se procesarán cuando alcances este monto</p>
              </div>

              <div className="space-y-2">
                <Label>Frecuencia de pago</Label>
                <Select defaultValue="monthly">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="weekly">Semanal</SelectItem>
                    <SelectItem value="monthly">Mensual</SelectItem>
                    <SelectItem value="manual">Manual (bajo demanda)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Label>Pagos automáticos</Label>
                  <p className="text-sm text-muted-foreground">
                    Procesar pagos automáticamente cuando se cumpla el umbral
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Información fiscal</CardTitle>
              <CardDescription>Datos necesarios para la facturación y declaración fiscal</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="taxId">NIF/CIF</Label>
                <Input id="taxId" defaultValue="12345678Z" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="companyName">Nombre de la empresa (opcional)</Label>
                <Input id="companyName" placeholder="Tu empresa S.L." />
              </div>

              <div className="space-y-2">
                <Label htmlFor="address">Dirección fiscal</Label>
                <Textarea id="address" rows={3} defaultValue="Calle Mayor 123, 28001 Madrid, España" />
              </div>

              <div className="space-y-2">
                <Label>País de residencia fiscal</Label>
                <Select defaultValue="es">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="es">España</SelectItem>
                    <SelectItem value="mx">México</SelectItem>
                    <SelectItem value="ar">Argentina</SelectItem>
                    <SelectItem value="co">Colombia</SelectItem>
                    <SelectItem value="other">Otro</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="preferences" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Preferencias generales</CardTitle>
              <CardDescription>Personaliza tu experiencia en TrendLift</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Idioma</Label>
                <Select defaultValue="es">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="es">Español</SelectItem>
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="pt">Português</SelectItem>
                    <SelectItem value="fr">Français</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Zona horaria</Label>
                <Select defaultValue="europe/madrid">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="europe/madrid">Europa/Madrid (CET)</SelectItem>
                    <SelectItem value="america/mexico_city">América/Ciudad_México (CST)</SelectItem>
                    <SelectItem value="america/argentina/buenos_aires">América/Buenos_Aires (ART)</SelectItem>
                    <SelectItem value="america/bogota">América/Bogotá (COT)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Moneda</Label>
                <Select defaultValue="usd">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="usd">USD ($)</SelectItem>
                    <SelectItem value="eur">EUR (€)</SelectItem>
                    <SelectItem value="mxn">MXN ($)</SelectItem>
                    <SelectItem value="ars">ARS ($)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Label>Modo desarrollador</Label>
                  <p className="text-sm text-muted-foreground">Habilita funciones avanzadas y logs detallados</p>
                </div>
                <Switch />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Label>Analíticas avanzadas</Label>
                  <p className="text-sm text-muted-foreground">
                    Recopilar datos detallados de uso para mejorar el servicio
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Preferencias del editor</CardTitle>
              <CardDescription>Configura el editor de código para crear scripts</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Tema del editor</Label>
                <Select defaultValue="dark">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Claro</SelectItem>
                    <SelectItem value="dark">Oscuro</SelectItem>
                    <SelectItem value="auto">Automático</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Tamaño de fuente</Label>
                <Select defaultValue="14">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="12">12px</SelectItem>
                    <SelectItem value="14">14px</SelectItem>
                    <SelectItem value="16">16px</SelectItem>
                    <SelectItem value="18">18px</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Label>Autocompletado</Label>
                  <p className="text-sm text-muted-foreground">Sugerencias automáticas mientras escribes código</p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Label>Números de línea</Label>
                  <p className="text-sm text-muted-foreground">Mostrar numeración en el editor</p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Label>Guardado automático</Label>
                  <p className="text-sm text-muted-foreground">Guardar cambios automáticamente cada 30 segundos</p>
                </div>
                <Switch defaultChecked />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Privacidad y datos</CardTitle>
              <CardDescription>Controla cómo se usan tus datos</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label>Mejorar TrendLift</Label>
                  <p className="text-sm text-muted-foreground">
                    Compartir datos de uso anónimos para mejorar el producto
                  </p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Label>Sugerencias personalizadas</Label>
                  <p className="text-sm text-muted-foreground">Recibir recomendaciones basadas en tu actividad</p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Label>Indexación por buscadores</Label>
                  <p className="text-sm text-muted-foreground">Permitir que tu perfil aparezca en buscadores</p>
                </div>
                <Switch />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Danger Zone */}
      <Card className="border-destructive">
        <CardHeader>
          <CardTitle className="text-destructive flex items-center">
            <AlertTriangle className="mr-2 h-5 w-5" />
            Zona de peligro
          </CardTitle>
          <CardDescription>Acciones irreversibles que afectarán permanentemente tu cuenta</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between p-4 border border-destructive rounded-lg">
            <div>
              <h4 className="font-medium text-destructive">Eliminar cuenta</h4>
              <p className="text-sm text-muted-foreground">
                Elimina permanentemente tu cuenta y todos los datos asociados
              </p>
            </div>
            <Button variant="destructive">
              <Trash2 className="mr-2 h-4 w-4" />
              Eliminar cuenta
            </Button>
          </div>

          <div className="flex items-center justify-between p-4 border border-destructive rounded-lg">
            <div>
              <h4 className="font-medium text-destructive">Eliminar todos los scripts</h4>
              <p className="text-sm text-muted-foreground">Elimina todos tus scripts del marketplace permanentemente</p>
            </div>
            <Button variant="destructive">
              <Trash2 className="mr-2 h-4 w-4" />
              Eliminar scripts
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
