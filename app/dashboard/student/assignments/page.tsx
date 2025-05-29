import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { Download, Filter, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import Link from "next/link"

export default function StudentAssignmentsPage() {
  // Mock data
  const assignments = [
    {
      id: 1,
      title: "Math Problem Set 5",
      course: "Mathematics 101",
      dueDate: "Tomorrow, 11:59 PM",
      status: "pending",
    },
    { id: 2, title: "Physics Lab Report", course: "Physics 202", dueDate: "Friday, 5:00 PM", status: "pending" },
    { id: 3, title: "Historical Essay", course: "History 101", dueDate: "Next Monday, 9:00 AM", status: "pending" },
    { id: 4, title: "Biology Worksheet", course: "Biology 303", dueDate: "Yesterday", status: "completed", grade: "A" },
    {
      id: 5,
      title: "Literature Analysis",
      course: "English Literature",
      dueDate: "Last week",
      status: "completed",
      grade: "B+",
    },
    {
      id: 6,
      title: "Programming Exercise",
      course: "Computer Science",
      dueDate: "2 weeks ago",
      status: "completed",
      grade: "A-",
    },
  ]

  return (
    <div className="container mx-auto p-4 md:p-6">
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold">Assignments</h1>
            <p className="text-gray-500 dark:text-gray-400">Manage your assignments and submissions</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Export
            </Button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
            <Input type="search" placeholder="Search assignments..." className="pl-8" />
          </div>
          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>
        </div>

        <Tabs defaultValue="pending">
          <TabsList>
            <TabsTrigger value="pending">Pending</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
            <TabsTrigger value="all">All Assignments</TabsTrigger>
          </TabsList>
          <TabsContent value="pending" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Pending Assignments</CardTitle>
                <CardDescription>Assignments that need your attention</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border">
                  <div className="grid grid-cols-1 md:grid-cols-5 p-4 font-medium">
                    <div className="md:col-span-2">Assignment</div>
                    <div>Course</div>
                    <div>Due Date</div>
                    <div className="text-right">Action</div>
                  </div>
                  <Separator />
                  {assignments
                    .filter((a) => a.status === "pending")
                    .map((assignment) => (
                      <div key={assignment.id} className="grid grid-cols-1 md:grid-cols-5 p-4 items-center">
                        <div className="md:col-span-2 font-medium">{assignment.title}</div>
                        <div>{assignment.course}</div>
                        <div>{assignment.dueDate}</div>
                        <div className="text-right">
                          <Button size="sm" asChild>
                            <Link href={`/dashboard/student/assignments/${assignment.id}`}>Start</Link>
                          </Button>
                        </div>
                      </div>
                    ))}
                  {assignments.filter((a) => a.status === "pending").length === 0 && (
                    <div className="p-4 text-center">
                      <p className="text-gray-500 dark:text-gray-400">No pending assignments</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="completed" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Completed Assignments</CardTitle>
                <CardDescription>Assignments you have submitted</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border">
                  <div className="grid grid-cols-1 md:grid-cols-5 p-4 font-medium">
                    <div className="md:col-span-2">Assignment</div>
                    <div>Course</div>
                    <div>Submitted</div>
                    <div className="text-right">Grade</div>
                  </div>
                  <Separator />
                  {assignments
                    .filter((a) => a.status === "completed")
                    .map((assignment) => (
                      <div key={assignment.id} className="grid grid-cols-1 md:grid-cols-5 p-4 items-center">
                        <div className="md:col-span-2 font-medium">{assignment.title}</div>
                        <div>{assignment.course}</div>
                        <div>{assignment.dueDate}</div>
                        <div className="text-right">
                          <Badge>{assignment.grade}</Badge>
                        </div>
                      </div>
                    ))}
                  {assignments.filter((a) => a.status === "completed").length === 0 && (
                    <div className="p-4 text-center">
                      <p className="text-gray-500 dark:text-gray-400">No completed assignments</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="all" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>All Assignments</CardTitle>
                <CardDescription>Complete history of your assignments</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border">
                  <div className="grid grid-cols-1 md:grid-cols-6 p-4 font-medium">
                    <div className="md:col-span-2">Assignment</div>
                    <div>Course</div>
                    <div>Due Date</div>
                    <div>Status</div>
                    <div className="text-right">Action</div>
                  </div>
                  <Separator />
                  {assignments.map((assignment) => (
                    <div key={assignment.id} className="grid grid-cols-1 md:grid-cols-6 p-4 items-center">
                      <div className="md:col-span-2 font-medium">{assignment.title}</div>
                      <div>{assignment.course}</div>
                      <div>{assignment.dueDate}</div>
                      <div>
                        <Badge variant={assignment.status === "pending" ? "secondary" : "outline"}>
                          {assignment.status === "pending" ? "Pending" : "Completed"}
                        </Badge>
                      </div>
                      <div className="text-right">
                        <Button size="sm" variant="outline" asChild>
                          <Link href={`/dashboard/student/assignments/${assignment.id}`}>View</Link>
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
