"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Users, Search, Mail, FileText, Edit, Eye, MoreHorizontal, UserPlus, Filter } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function ClientsContent() {
  const clients = [
    {
      id: 1,
      name: "María González",
      email: "maria@empresa.com",
      phone: "+57 300 123 4567",
      company: "Empresa Innovadora SAS",
      status: "Activo",
      totalValue: "$3,750.00",
      invoices: 3,
      lastInteraction: "Hace 1 hora",
      joinDate: "15/12/2023",
      scripts: ["Redes Sociales", "Análisis"],
    },
    {
      id: 2,
      name: "Carlos Ruiz",
      email: "carlos@negocio.com",
      phone: "+57 301 234 5678",
      company: "Negocio Digital Ltda",
      status: "Pendiente",
      totalValue: "$1,890.00",
      invoices: 2,
      lastInteraction: "Hace 3 horas",
      joinDate: "08/01/2024",
      scripts: ["Facturación"],
    },
    {
      id: 3,
      name: "Ana López",
      email: "ana@startup.com",
      phone: "+57 302 345 6789",
      company: "StartUp Tech",
      status: "Activo",
      totalValue: "$5,100.00",
      invoices: 5,
      lastInteraction: "Hace 1 día",
      joinDate: "22/11/2023",
      scripts: ["CRM", "Análisis", "Marketing"],
    },
    {
      id: 4,
      name: "Pedro Martín",
      email: "pedro@tienda.com",
      phone: "+57 303 456 7890",
      company: "Tienda Online",
      status: "Inactivo",
      totalValue: "$750.00",
      invoices: 1,
      lastInteraction: "Hace 2 días",
      joinDate: "05/01/2024",
      scripts: ["E-commerce"],
    },
    {
      id: 5,
      name: "Laura Sánchez",
      email: "laura@consultora.com",
      phone: "+57 304 567 8901",
      company: "Consultora Estratégica",
      status: "Activo",
      totalValue: "$2,500.00",
      invoices: 4,
      lastInteraction: "Hace 5 horas",
      joinDate: "30/12/2023",
      scripts: ["Reportes", "CRM"],
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Activo":
        return "bg-success/10 text-success border-success"
      case "Inactivo":
        return "bg-muted text-muted-foreground border-muted"
      default:
        return "bg-yellow-100 text-yellow-800 border-yellow-300"
    }
  }

  return (
    <div className="flex-1 p-4 md:p-8 overflow-auto pt-16 md:pt-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold font-heading">Clientes</h1>
          <p className="text-muted-foreground font-body">Gestiona tu base de clientes y su historial</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90">
          <UserPlus className="mr-2 h-4 w-4" />
          Nuevo Cliente
        </Button>
      </div>

      {/* Métricas rápidas */}
      <div className="grid gap-4 grid-cols-2 lg:grid-cols-4 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Clientes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">47</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-success">+8</span> este mes
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Clientes Activos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">35</div>
            <p className="text-xs text-muted-foreground">74% del total</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Valor Promedio</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$1,890</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-success">+12%</span> vs anterior
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Retención</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">89%</div>
            <p className="text-xs text-muted-foreground">Últimos 6 meses</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="list" className="space-y-4">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-3">
          <TabsTrigger value="list" className="text-xs md:text-sm">
            Lista de Clientes
          </TabsTrigger>
          <TabsTrigger value="analytics" className="text-xs md:text-sm">
            Análisis
          </TabsTrigger>
          <TabsTrigger value="segments" className="text-xs md:text-sm">
            Segmentación
          </TabsTrigger>
        </TabsList>

        <TabsContent value="list" className="space-y-4">
          {/* Filtros y búsqueda */}
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Buscar clientes..." className="pl-10" />
            </div>
            <Select defaultValue="all">
              <SelectTrigger className="w-full md:w-[180px]">
                <SelectValue placeholder="Filtrar por estado" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos los estados</SelectItem>
                <SelectItem value="activo">Activo</SelectItem>
                <SelectItem value="pendiente">Pendiente</SelectItem>
                <SelectItem value="inactivo">Inactivo</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline">
              <Filter className="mr-2 h-4 w-4" />
              Más filtros
            </Button>
          </div>

          {/* Lista de clientes */}
          <div className="grid gap-4">
            {clients.map((client) => (
              <Card key={client.id} className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Users className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-lg font-heading">{client.name}</CardTitle>
                        <CardDescription className="font-body">
                          {client.company} • Cliente desde {client.joinDate}
                        </CardDescription>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className={`text-xs ${getStatusColor(client.status)}`}>
                        {client.status}
                      </Badge>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="outline" size="sm">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <Eye className="mr-2 h-4 w-4" />
                            Ver perfil
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Edit className="mr-2 h-4 w-4" />
                            Editar
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <FileText className="mr-2 h-4 w-4" />
                            Emitir factura
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Mail className="mr-2 h-4 w-4" />
                            Enviar email
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    <div>
                      <p className="text-xs text-muted-foreground">Contacto</p>
                      <p className="text-sm font-medium">{client.email}</p>
                      <p className="text-xs text-muted-foreground">{client.phone}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Valor total</p>
                      <p className="text-lg font-bold">{client.totalValue}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Facturas</p>
                      <p className="text-sm font-medium">{client.invoices} emitidas</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Última interacción</p>
                      <p className="text-sm font-medium">{client.lastInteraction}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-3">
                    <span className="text-xs text-muted-foreground mr-2">Scripts activos:</span>
                    {client.scripts.map((script, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {script}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <Button variant="outline" size="sm">
                      <Eye className="mr-2 h-4 w-4" />
                      Ver perfil
                    </Button>
                    <Button variant="outline" size="sm">
                      <FileText className="mr-2 h-4 w-4" />
                      Nueva factura
                    </Button>
                    <Button variant="outline" size="sm">
                      <Mail className="mr-2 h-4 w-4" />
                      Contactar
                    </Button>
                    <Button variant="outline" size="sm">
                      <Edit className="mr-2 h-4 w-4" />
                      Editar
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-heading">Crecimiento de Clientes</CardTitle>
                <CardDescription className="font-body">Nuevos clientes por mes</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Enero 2024</span>
                    <span className="font-medium">8 nuevos</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Diciembre 2023</span>
                    <span className="font-medium">12 nuevos</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Noviembre 2023</span>
                    <span className="font-medium">15 nuevos</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-heading">Distribución por Valor</CardTitle>
                <CardDescription className="font-body">Segmentación de clientes</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Alto valor (+$3,000)</span>
                    <span className="font-medium">8 clientes</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Medio valor ($1,000-$3,000)</span>
                    <span className="font-medium">25 clientes</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Bajo valor (-$1,000)</span>
                    <span className="font-medium">14 clientes</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="segments" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-heading">Clientes VIP</CardTitle>
                <CardDescription className="font-body">Alto valor y frecuencia</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold mb-2">8</div>
                <p className="text-sm text-muted-foreground">Valor promedio: $4,200</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-heading">Clientes Regulares</CardTitle>
                <CardDescription className="font-body">Actividad constante</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold mb-2">25</div>
                <p className="text-sm text-muted-foreground">Valor promedio: $1,800</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-heading">Clientes Nuevos</CardTitle>
                <CardDescription className="font-body">Últimos 30 días</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold mb-2">14</div>
                <p className="text-sm text-muted-foreground">Valor promedio: $950</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
