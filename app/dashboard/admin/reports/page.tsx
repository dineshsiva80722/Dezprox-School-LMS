import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import { BarChart, Download, Filter, LineChart, PieChart, Plus, Search } from "lucide-react"
import Link from "next/link"

export default function AdminReportsPage() {
  // Mock data
  const reports = [
    {
      id: 1,
      name: "Monthly User Activity",
      type: "System",
      generated: "Today",
      description: "Overview of user logins, registrations, and activity",
    },
    {
      id: 2,
      name: "Course Completion Rates",
      type: "Academic",
      generated: "Yesterday",
      description: "Analysis of course completion rates across departments",
    },
    {
      id: 3,
      name: "System Performance",
      type: "Technical",
      generated: "Last week",
      description: "Server performance, uptime, and resource utilization",
    },
    {
      id: 4,
      name: "Student Progress Report",
      type: "Academic",
      generated: "2 days ago",
      description: "Detailed analysis of student performance and progress",
    },
    {
      id: 5,
      name: "Teacher Engagement",
      type: "Academic",
      generated: "Last month",
      description: "Analysis of teacher activity and student engagement",
    },
    {
      id: 6,
      name: "Storage Usage Report",
      type: "Technical",
      generated: "Today",
      description: "Overview of system storage usage and trends",
    },
  ]

  return (
    <div className="container mx-auto p-4 md:p-6">
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold">Reports & Analytics</h1>
            <p className="text-gray-500 dark:text-gray-400">System-wide statistics and reports</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Export Reports
            </Button>
            <Button asChild>
              <Link href="/dashboard/admin/reports/create">
                <Plus className="mr-2 h-4 w-4" />
                Create Report
              </Link>
            </Button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
            <Input type="search" placeholder="Search reports..." className="pl-8" />
          </div>
          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>User Growth</CardTitle>
              <CardDescription>New user registrations over time</CardDescription>
            </CardHeader>
            <CardContent className="h-80 flex items-center justify-center">
              <div className="text-center">
                <LineChart className="h-16 w-16 mx-auto text-gray-400" />
                <p className="mt-2">User growth chart would appear here</p>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full" asChild>
                <Link href="/dashboard/admin/reports/user-growth">View Details</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Course Engagement</CardTitle>
              <CardDescription>Student activity across courses</CardDescription>
            </CardHeader>
            <CardContent className="h-80 flex items-center justify-center">
              <div className="text-center">
                <BarChart className="h-16 w-16 mx-auto text-gray-400" />
                <p className="mt-2">Course engagement chart would appear here</p>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full" asChild>
                <Link href="/dashboard/admin/reports/course-engagement">View Details</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Grade Distribution</CardTitle>
              <CardDescription>Overall grade distribution</CardDescription>
            </CardHeader>
            <CardContent className="h-80 flex items-center justify-center">
              <div className="text-center">
                <PieChart className="h-16 w-16 mx-auto text-gray-400" />
                <p className="mt-2">Grade distribution chart would appear here</p>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full" asChild>
                <Link href="/dashboard/admin/reports/grade-distribution">View Details</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>

        <Tabs defaultValue="all">
          <TabsList>
            <TabsTrigger value="all">All Reports</TabsTrigger>
            <TabsTrigger value="academic">Academic</TabsTrigger>
            <TabsTrigger value="system">System</TabsTrigger>
            <TabsTrigger value="technical">Technical</TabsTrigger>
          </TabsList>
          <TabsContent value="all" className="mt-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Recent Reports</CardTitle>
                  <CardDescription>Generated reports and analytics</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border">
                  <div className="grid grid-cols-1 md:grid-cols-5 p-4 font-medium">
                    <div className="md:col-span-2">Report Name</div>
                    <div>Type</div>
                    <div>Generated</div>
                    <div className="text-right">Actions</div>
                  </div>
                  <Separator />
                  {reports.map((report) => (
                    <div key={report.id} className="grid grid-cols-1 md:grid-cols-5 p-4 items-center">
                      <div className="md:col-span-2">
                        <p className="font-medium">{report.name}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{report.description}</p>
                      </div>
                      <div>{report.type}</div>
                      <div>{report.generated}</div>
                      <div className="text-right">
                        <Button size="sm" variant="outline">
                          <Download className="mr-2 h-4 w-4" />
                          Download
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="academic" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Academic Reports</CardTitle>
                <CardDescription>Reports related to academic performance and progress</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border">
                  <div className="grid grid-cols-1 md:grid-cols-5 p-4 font-medium">
                    <div className="md:col-span-2">Report Name</div>
                    <div>Type</div>
                    <div>Generated</div>
                    <div className="text-right">Actions</div>
                  </div>
                  <Separator />
                  {reports
                    .filter((report) => report.type === "Academic")
                    .map((report) => (
                      <div key={report.id} className="grid grid-cols-1 md:grid-cols-5 p-4 items-center">
                        <div className="md:col-span-2">
                          <p className="font-medium">{report.name}</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">{report.description}</p>
                        </div>
                        <div>{report.type}</div>
                        <div>{report.generated}</div>
                        <div className="text-right">
                          <Button size="sm" variant="outline">
                            <Download className="mr-2 h-4 w-4" />
                            Download
                          </Button>
                        </div>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="system" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>System Reports</CardTitle>
                <CardDescription>Reports related to system usage and activity</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border">
                  <div className="grid grid-cols-1 md:grid-cols-5 p-4 font-medium">
                    <div className="md:col-span-2">Report Name</div>
                    <div>Type</div>
                    <div>Generated</div>
                    <div className="text-right">Actions</div>
                  </div>
                  <Separator />
                  {reports
                    .filter((report) => report.type === "System")
                    .map((report) => (
                      <div key={report.id} className="grid grid-cols-1 md:grid-cols-5 p-4 items-center">
                        <div className="md:col-span-2">
                          <p className="font-medium">{report.name}</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">{report.description}</p>
                        </div>
                        <div>{report.type}</div>
                        <div>{report.generated}</div>
                        <div className="text-right">
                          <Button size="sm" variant="outline">
                            <Download className="mr-2 h-4 w-4" />
                            Download
                          </Button>
                        </div>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="technical" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Technical Reports</CardTitle>
                <CardDescription>Reports related to technical performance and infrastructure</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border">
                  <div className="grid grid-cols-1 md:grid-cols-5 p-4 font-medium">
                    <div className="md:col-span-2">Report Name</div>
                    <div>Type</div>
                    <div>Generated</div>
                    <div className="text-right">Actions</div>
                  </div>
                  <Separator />
                  {reports
                    .filter((report) => report.type === "Technical")
                    .map((report) => (
                      <div key={report.id} className="grid grid-cols-1 md:grid-cols-5 p-4 items-center">
                        <div className="md:col-span-2">
                          <p className="font-medium">{report.name}</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">{report.description}</p>
                        </div>
                        <div>{report.type}</div>
                        <div>{report.generated}</div>
                        <div className="text-right">
                          <Button size="sm" variant="outline">
                            <Download className="mr-2 h-4 w-4" />
                            Download
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
