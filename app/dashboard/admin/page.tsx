import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { BarChart, BookOpen, FileText, Plus, Settings, Users } from "lucide-react"
import Link from "next/link"

export default function AdminDashboard() {
  // Mock data
  const stats = [
    { title: "Total Users", value: 1250, icon: Users, change: "+12% from last month" },
    { title: "Active Courses", value: 48, icon: BookOpen, change: "+3 since last week" },
    { title: "System Uptime", value: "99.9%", icon: Settings, change: "Last 30 days" },
    { title: "Storage Used", value: "68%", icon: FileText, change: "250GB of 500GB" },
  ]

  const recentActivities = [
    { id: 1, user: "Dr. Smith", role: "Teacher", action: "created a new course", time: "2 hours ago" },
    { id: 2, user: "Admin Jane", role: "Admin", action: "updated system settings", time: "Yesterday" },
    { id: 3, user: "Prof. Johnson", role: "Teacher", action: "uploaded course materials", time: "2 days ago" },
    { id: 4, user: "Alex Wilson", role: "Student", action: "reported a technical issue", time: "3 days ago" },
    { id: 5, user: "Support Team", role: "Staff", action: "resolved 5 help tickets", time: "1 week ago" },
  ]

  const pendingApprovals = [
    { id: 1, title: "New Course: Advanced Biology", requestedBy: "Dr. Williams", date: "2 days ago" },
    { id: 2, title: "Role Change: Teaching Assistant", requestedBy: "Sarah Johnson", date: "3 days ago" },
    { id: 3, title: "Content Upload: Video Lectures", requestedBy: "Prof. Davis", date: "1 week ago" },
  ]

  const systemAlerts = [
    {
      id: 1,
      title: "Storage Space Low",
      severity: "warning",
      message: "System storage is at 68% capacity",
      date: "Today",
    },
    {
      id: 2,
      title: "Database Backup Completed",
      severity: "info",
      message: "Automatic backup completed successfully",
      date: "Yesterday",
    },
    {
      id: 3,
      title: "Software Update Available",
      severity: "info",
      message: "New version 2.5.1 is available for installation",
      date: "3 days ago",
    },
  ]

  return (
    <div className="container mx-auto p-4 md:p-6">
      <div className="grid gap-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">System Administration</h1>
          <div className="flex gap-4">
            <Button variant="outline" asChild>
              <Link href="/dashboard/admin/reports">
                <BarChart className="mr-2 h-4 w-4" />
                Generate Reports
              </Link>
            </Button>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add New User
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                <stat.icon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-gray-500 dark:text-gray-400">{stat.change}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Recent System Activity</CardTitle>
              <CardDescription>Latest actions across the platform</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivities.map((activity) => (
                  <div key={activity.id} className="flex items-center gap-4 border-b pb-4 last:border-0">
                    <Avatar>
                      <AvatarImage src={`/placeholder.svg?height=40&width=40`} alt={activity.user} />
                      <AvatarFallback>
                        {activity.user
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <p className="text-sm font-medium">{activity.user}</p>
                        <span className="text-xs bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded-full">
                          {activity.role}
                        </span>
                      </div>
                      <p className="text-sm">{activity.action}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                View All Activity
              </Button>
            </CardFooter>
          </Card>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Pending Approvals</CardTitle>
                <CardDescription>Items requiring administrator action</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {pendingApprovals.map((item) => (
                    <div key={item.id} className="border-b pb-4 last:border-0">
                      <h3 className="font-medium">{item.title}</h3>
                      <p className="text-sm">Requested by: {item.requestedBy}</p>
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-xs text-gray-500 dark:text-gray-400">{item.date}</span>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            Deny
                          </Button>
                          <Button size="sm">Approve</Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>System Alerts</CardTitle>
                <CardDescription>Notifications about system status</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {systemAlerts.map((alert) => (
                    <div key={alert.id} className="border-b pb-4 last:border-0">
                      <div className="flex items-center gap-2">
                        <span
                          className={`w-2 h-2 rounded-full ${
                            alert.severity === "warning"
                              ? "bg-yellow-500"
                              : alert.severity === "error"
                                ? "bg-red-500"
                                : "bg-blue-500"
                          }`}
                        ></span>
                        <h3 className="font-medium">{alert.title}</h3>
                      </div>
                      <p className="text-sm mt-1">{alert.message}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{alert.date}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/dashboard/admin/system">View System Status</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common administrative tasks</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Button variant="outline" className="h-auto flex flex-col items-center justify-center p-4 gap-2" asChild>
                <Link href="/dashboard/admin/users">
                  <Users className="h-6 w-6" />
                  <span>Manage Users</span>
                </Link>
              </Button>
              <Button variant="outline" className="h-auto flex flex-col items-center justify-center p-4 gap-2" asChild>
                <Link href="/dashboard/admin/courses">
                  <BookOpen className="h-6 w-6" />
                  <span>Manage Courses</span>
                </Link>
              </Button>
              <Button variant="outline" className="h-auto flex flex-col items-center justify-center p-4 gap-2" asChild>
                <Link href="/dashboard/admin/reports">
                  <BarChart className="h-6 w-6" />
                  <span>View Reports</span>
                </Link>
              </Button>
              <Button variant="outline" className="h-auto flex flex-col items-center justify-center p-4 gap-2" asChild>
                <Link href="/dashboard/admin/system">
                  <Settings className="h-6 w-6" />
                  <span>System Settings</span>
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
