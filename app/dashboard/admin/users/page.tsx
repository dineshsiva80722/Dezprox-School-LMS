import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Download, Filter, Plus, Search } from "lucide-react"
import Link from "next/link"

export default function AdminUsersPage() {
  // Mock data
  const users = [
    {
      id: 1,
      name: "Alex Johnson",
      email: "alex.johnson@example.com",
      role: "Student",
      status: "Active",
      lastLogin: "Today",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "AJ",
    },
    {
      id: 2,
      name: "Dr. Sarah Miller",
      email: "sarah.miller@example.com",
      role: "Teacher",
      status: "Active",
      lastLogin: "Yesterday",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "SM",
    },
    {
      id: 3,
      name: "Michael Chen",
      email: "michael.chen@example.com",
      role: "Administrator",
      status: "Active",
      lastLogin: "Today",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "MC",
    },
    {
      id: 4,
      name: "Emma Wilson",
      email: "emma.wilson@example.com",
      role: "Student",
      status: "Active",
      lastLogin: "3 days ago",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "EW",
    },
    {
      id: 5,
      name: "Prof. James Brown",
      email: "james.brown@example.com",
      role: "Teacher",
      status: "Active",
      lastLogin: "1 week ago",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "JB",
    },
    {
      id: 6,
      name: "Sophia Lee",
      email: "sophia.lee@example.com",
      role: "Student",
      status: "Inactive",
      lastLogin: "2 weeks ago",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "SL",
    },
    {
      id: 7,
      name: "Noah Garcia",
      email: "noah.garcia@example.com",
      role: "Student",
      status: "Active",
      lastLogin: "Yesterday",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "NG",
    },
    {
      id: 8,
      name: "Dr. Olivia Martinez",
      email: "olivia.martinez@example.com",
      role: "Teacher",
      status: "Active",
      lastLogin: "Today",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "OM",
    },
  ]

  return (
    <div className="container mx-auto p-4 md:p-6">
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold">User Management</h1>
            <p className="text-gray-500 dark:text-gray-400">Manage all users in the system</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Export
            </Button>
            <Button asChild>
              <Link href="/dashboard/admin/users/create">
                <Plus className="mr-2 h-4 w-4" />
                Add User
              </Link>
            </Button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
            <Input type="search" placeholder="Search users..." className="pl-8" />
          </div>
          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>
        </div>

        <Tabs defaultValue="all">
          <TabsList>
            <TabsTrigger value="all">All Users</TabsTrigger>
            <TabsTrigger value="students">Students</TabsTrigger>
            <TabsTrigger value="teachers">Teachers</TabsTrigger>
            <TabsTrigger value="admins">Administrators</TabsTrigger>
          </TabsList>
          <TabsContent value="all" className="mt-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>All Users</CardTitle>
                  <CardDescription>{users.length} users total</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border">
                  <div className="grid grid-cols-1 md:grid-cols-6 p-4 font-medium">
                    <div className="md:col-span-2">Name</div>
                    <div>Role</div>
                    <div>Status</div>
                    <div>Last Login</div>
                    <div className="text-right">Actions</div>
                  </div>
                  <Separator />
                  {users.map((user) => (
                    <div key={user.id} className="grid grid-cols-1 md:grid-cols-6 p-4 items-center">
                      <div className="md:col-span-2 flex items-center gap-3">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                          <AvatarFallback>{user.initials}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{user.name}</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">{user.email}</p>
                        </div>
                      </div>
                      <div>{user.role}</div>
                      <div>
                        <Badge
                          variant="outline"
                          className={
                            user.status === "Active"
                              ? "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300"
                              : "bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-300"
                          }
                        >
                          {user.status}
                        </Badge>
                      </div>
                      <div>{user.lastLogin}</div>
                      <div className="text-right">
                        <Button size="sm" variant="outline" asChild>
                          <Link href={`/dashboard/admin/users/${user.id}`}>Edit</Link>
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <div className="flex items-center justify-between w-full">
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Showing {users.length} of {users.length} users
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" disabled>
                      Previous
                    </Button>
                    <Button variant="outline" size="sm" disabled>
                      Next
                    </Button>
                  </div>
                </div>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="students" className="mt-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Students</CardTitle>
                  <CardDescription>{users.filter((u) => u.role === "Student").length} students total</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border">
                  <div className="grid grid-cols-1 md:grid-cols-6 p-4 font-medium">
                    <div className="md:col-span-2">Name</div>
                    <div>Status</div>
                    <div>Last Login</div>
                    <div>Courses</div>
                    <div className="text-right">Actions</div>
                  </div>
                  <Separator />
                  {users
                    .filter((user) => user.role === "Student")
                    .map((user) => (
                      <div key={user.id} className="grid grid-cols-1 md:grid-cols-6 p-4 items-center">
                        <div className="md:col-span-2 flex items-center gap-3">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                            <AvatarFallback>{user.initials}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium">{user.name}</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">{user.email}</p>
                          </div>
                        </div>
                        <div>
                          <Badge
                            variant="outline"
                            className={
                              user.status === "Active"
                                ? "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300"
                                : "bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-300"
                            }
                          >
                            {user.status}
                          </Badge>
                        </div>
                        <div>{user.lastLogin}</div>
                        <div>4 courses</div>
                        <div className="text-right">
                          <Button size="sm" variant="outline" asChild>
                            <Link href={`/dashboard/admin/users/${user.id}`}>Edit</Link>
                          </Button>
                        </div>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="teachers" className="mt-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Teachers</CardTitle>
                  <CardDescription>{users.filter((u) => u.role === "Teacher").length} teachers total</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border">
                  <div className="grid grid-cols-1 md:grid-cols-6 p-4 font-medium">
                    <div className="md:col-span-2">Name</div>
                    <div>Status</div>
                    <div>Last Login</div>
                    <div>Courses</div>
                    <div className="text-right">Actions</div>
                  </div>
                  <Separator />
                  {users
                    .filter((user) => user.role === "Teacher")
                    .map((user) => (
                      <div key={user.id} className="grid grid-cols-1 md:grid-cols-6 p-4 items-center">
                        <div className="md:col-span-2 flex items-center gap-3">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                            <AvatarFallback>{user.initials}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium">{user.name}</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">{user.email}</p>
                          </div>
                        </div>
                        <div>
                          <Badge
                            variant="outline"
                            className={
                              user.status === "Active"
                                ? "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300"
                                : "bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-300"
                            }
                          >
                            {user.status}
                          </Badge>
                        </div>
                        <div>{user.lastLogin}</div>
                        <div>3 courses</div>
                        <div className="text-right">
                          <Button size="sm" variant="outline" asChild>
                            <Link href={`/dashboard/admin/users/${user.id}`}>Edit</Link>
                          </Button>
                        </div>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="admins" className="mt-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Administrators</CardTitle>
                  <CardDescription>
                    {users.filter((u) => u.role === "Administrator").length} administrators total
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border">
                  <div className="grid grid-cols-1 md:grid-cols-5 p-4 font-medium">
                    <div className="md:col-span-2">Name</div>
                    <div>Status</div>
                    <div>Last Login</div>
                    <div className="text-right">Actions</div>
                  </div>
                  <Separator />
                  {users
                    .filter((user) => user.role === "Administrator")
                    .map((user) => (
                      <div key={user.id} className="grid grid-cols-1 md:grid-cols-5 p-4 items-center">
                        <div className="md:col-span-2 flex items-center gap-3">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                            <AvatarFallback>{user.initials}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium">{user.name}</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">{user.email}</p>
                          </div>
                        </div>
                        <div>
                          <Badge
                            variant="outline"
                            className={
                              user.status === "Active"
                                ? "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300"
                                : "bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-300"
                            }
                          >
                            {user.status}
                          </Badge>
                        </div>
                        <div>{user.lastLogin}</div>
                        <div className="text-right">
                          <Button size="sm" variant="outline" asChild>
                            <Link href={`/dashboard/admin/users/${user.id}`}>Edit</Link>
                          </Button>
                        </div>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
