import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import {
  BookOpen,
  Calendar,
  Clock,
  FileText,
  Users,
  BarChart,
  Search,
  Filter,
  Plus,
  Download,
  ArrowUpDown,
  Video,
  PieChart,
  LineChart,
} from "lucide-react"
import Link from "next/link"

// This file contains all the dashboard widgets for different tabs

export const DashboardWidgets = {
  // Courses widget for all roles
  Courses: ({ role, data }: { role: string; data: any }) => {
    return (
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold">Courses</h2>
            <p className="text-gray-500 dark:text-gray-400">
              {role === "student"
                ? "Courses you're enrolled in"
                : role === "teacher"
                  ? "Courses you're teaching"
                  : "All courses in the system"}
            </p>
          </div>
          <div className="flex gap-2">
            {role !== "student" && (
              <Button asChild>
                <Link href={`/dashboard/${role}/courses/create`}>
                  <Plus className="mr-2 h-4 w-4" />
                  Create Course
                </Link>
              </Button>
            )}
            {role === "student" && (
              <Button asChild>
                <Link href={`/dashboard/${role}/courses/browse`}>
                  <Plus className="mr-2 h-4 w-4" />
                  Browse Courses
                </Link>
              </Button>
            )}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
            <Input type="search" placeholder="Search courses..." className="pl-8" />
          </div>
          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {role === "student" &&
            data.courses.map((course: any) => (
              <Card key={course.id}>
                <CardHeader>
                  <CardTitle>{course.name}</CardTitle>
                  <CardDescription>Instructor: {course.instructor}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Progress</span>
                        <span>{course.progress}%</span>
                      </div>
                      <Progress value={course.progress} className="h-2" />
                    </div>
                    <div className="flex items-center text-sm">
                      <Clock className="mr-2 h-4 w-4 text-gray-500 dark:text-gray-400" />
                      <span>Next class: {course.nextClass}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" asChild>
                    <Link href={`/dashboard/student/courses/${course.id}`}>View Course</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}

          {role === "teacher" &&
            data.courses.map((course: any) => (
              <Card key={course.id}>
                <CardHeader>
                  <CardTitle>{course.name}</CardTitle>
                  <CardDescription>{course.students} students enrolled</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center text-sm">
                      <Clock className="mr-2 h-4 w-4 text-gray-500 dark:text-gray-400" />
                      <span>Next class: {course.nextClass}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <BookOpen className="mr-2 h-4 w-4 text-gray-500 dark:text-gray-400" />
                      <span>Location: {course.room}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" asChild>
                    <Link href={`/dashboard/teacher/courses/${course.id}`}>Manage Course</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}

          {role === "admin" && (
            <>
              {/* Sample courses for admin view */}
              <Card>
                <CardHeader>
                  <CardTitle>Mathematics 101</CardTitle>
                  <CardDescription>Dr. Smith • 28 students</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <Badge>Active</Badge>
                    <div className="flex items-center text-sm">
                      <Calendar className="mr-2 h-4 w-4 text-gray-500 dark:text-gray-400" />
                      <span>Spring Semester 2023</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" asChild>
                    <Link href={`/dashboard/admin/courses/1`}>View Details</Link>
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Introduction to Physics</CardTitle>
                  <CardDescription>Prof. Johnson • 22 students</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <Badge>Active</Badge>
                    <div className="flex items-center text-sm">
                      <Calendar className="mr-2 h-4 w-4 text-gray-500 dark:text-gray-400" />
                      <span>Spring Semester 2023</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" asChild>
                    <Link href={`/dashboard/admin/courses/2`}>View Details</Link>
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>World History</CardTitle>
                  <CardDescription>Dr. Williams • 35 students</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <Badge>Active</Badge>
                    <div className="flex items-center text-sm">
                      <Calendar className="mr-2 h-4 w-4 text-gray-500 dark:text-gray-400" />
                      <span>Spring Semester 2023</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" asChild>
                    <Link href={`/dashboard/admin/courses/3`}>View Details</Link>
                  </Button>
                </CardFooter>
              </Card>
            </>
          )}
        </div>

        <div className="flex justify-center">
          <Button variant="outline">Load More Courses</Button>
        </div>
      </div>
    )
  },

  // Assignments widget for students
  Assignments: ({ data }: { data: any }) => {
    return (
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold">Assignments</h2>
            <p className="text-gray-500 dark:text-gray-400">Manage your assignments and submissions</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Export
            </Button>
          </div>
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
                  {data.assignments
                    .filter((a: any) => a.status === "pending")
                    .map((assignment: any) => (
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
                  {data.assignments
                    .filter((a: any) => a.status === "completed")
                    .map((assignment: any) => (
                      <div key={assignment.id} className="grid grid-cols-1 md:grid-cols-5 p-4 items-center">
                        <div className="md:col-span-2 font-medium">{assignment.title}</div>
                        <div>{assignment.course}</div>
                        <div>{assignment.dueDate}</div>
                        <div className="text-right">
                          <Badge>A</Badge>
                        </div>
                      </div>
                    ))}
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
                  {data.assignments.map((assignment: any) => (
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
    )
  },

  // Grading widget for teachers
  Grading: ({ data }: { data: any }) => {
    return (
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold">Grading</h2>
            <p className="text-gray-500 dark:text-gray-400">Review and grade student submissions</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Export Grades
            </Button>
          </div>
        </div>

        <Tabs defaultValue="pending">
          <TabsList>
            <TabsTrigger value="pending">Pending</TabsTrigger>
            <TabsTrigger value="graded">Graded</TabsTrigger>
            <TabsTrigger value="all">All Submissions</TabsTrigger>
          </TabsList>
          <TabsContent value="pending" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Pending Submissions</CardTitle>
                <CardDescription>Assignments waiting for your review</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {data.pendingGrading.map((item: any) => (
                    <div key={item.id} className="border rounded-lg p-4">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div>
                          <h3 className="font-medium text-lg">{item.title}</h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400">{item.course}</p>
                        </div>
                        <Badge variant="secondary">{item.submissions} Submissions</Badge>
                      </div>
                      <div className="mt-4 flex flex-col md:flex-row justify-between items-start md:items-center">
                        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                          <Clock className="mr-2 h-4 w-4" />
                          <span>Due: {item.dueDate}</span>
                        </div>
                        <Button asChild>
                          <Link href={`/dashboard/teacher/grading/${item.id}`}>Grade Now</Link>
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="graded" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Graded Submissions</CardTitle>
                <CardDescription>Assignments you have already graded</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border">
                  <div className="grid grid-cols-1 md:grid-cols-5 p-4 font-medium">
                    <div className="md:col-span-2">Assignment</div>
                    <div>Course</div>
                    <div>Graded</div>
                    <div className="text-right">Action</div>
                  </div>
                  <Separator />
                  <div className="grid grid-cols-1 md:grid-cols-5 p-4 items-center">
                    <div className="md:col-span-2 font-medium">Problem Set 4</div>
                    <div>Mathematics 101</div>
                    <div>Last week</div>
                    <div className="text-right">
                      <Button size="sm" variant="outline" asChild>
                        <Link href={`/dashboard/teacher/grading/completed/1`}>Review</Link>
                      </Button>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-5 p-4 items-center">
                    <div className="md:col-span-2 font-medium">Quiz 2</div>
                    <div>Advanced Calculus</div>
                    <div>2 weeks ago</div>
                    <div className="text-right">
                      <Button size="sm" variant="outline" asChild>
                        <Link href={`/dashboard/teacher/grading/completed/2`}>Review</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="all" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>All Submissions</CardTitle>
                <CardDescription>Complete history of student submissions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border">
                  <div className="grid grid-cols-1 md:grid-cols-6 p-4 font-medium">
                    <div className="md:col-span-2">Assignment</div>
                    <div>Course</div>
                    <div>Submissions</div>
                    <div>Status</div>
                    <div className="text-right">Action</div>
                  </div>
                  <Separator />
                  {data.pendingGrading.map((item: any) => (
                    <div key={item.id} className="grid grid-cols-1 md:grid-cols-6 p-4 items-center">
                      <div className="md:col-span-2 font-medium">{item.title}</div>
                      <div>{item.course}</div>
                      <div>{item.submissions}</div>
                      <div>
                        <Badge variant="secondary">Pending</Badge>
                      </div>
                      <div className="text-right">
                        <Button size="sm" asChild>
                          <Link href={`/dashboard/teacher/grading/${item.id}`}>Grade</Link>
                        </Button>
                      </div>
                    </div>
                  ))}
                  <div className="grid grid-cols-1 md:grid-cols-6 p-4 items-center">
                    <div className="md:col-span-2 font-medium">Problem Set 4</div>
                    <div>Mathematics 101</div>
                    <div>28</div>
                    <div>
                      <Badge variant="outline">Completed</Badge>
                    </div>
                    <div className="text-right">
                      <Button size="sm" variant="outline" asChild>
                        <Link href={`/dashboard/teacher/grading/completed/1`}>Review</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    )
  },

  // Users widget for admins
  Users: ({ data }: { data: any }) => {
    return (
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold">User Management</h2>
            <p className="text-gray-500 dark:text-gray-400">Manage all users in the system</p>
          </div>
          <div className="flex gap-2">
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
                  <Button variant="outline" size="sm">
                    <Download className="mr-2 h-4 w-4" />
                    Export
                  </Button>
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
                  <div className="grid grid-cols-1 md:grid-cols-6 p-4 items-center">
                    <div className="md:col-span-2 flex items-center gap-3">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                        <AvatarFallback>AJ</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">Alex Johnson</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">alex.johnson@example.com</p>
                      </div>
                    </div>
                    <div>Student</div>
                    <div>
                      <Badge
                        variant="outline"
                        className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300"
                      >
                        Active
                      </Badge>
                    </div>
                    <div>Today</div>
                    <div className="text-right">
                      <Button size="sm" variant="outline" asChild>
                        <Link href="/dashboard/admin/users/1">Edit</Link>
                      </Button>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-6 p-4 items-center">
                    <div className="md:col-span-2 flex items-center gap-3">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                        <AvatarFallback>SM</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">Dr. Sarah Miller</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">sarah.miller@example.com</p>
                      </div>
                    </div>
                    <div>Teacher</div>
                    <div>
                      <Badge
                        variant="outline"
                        className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300"
                      >
                        Active
                      </Badge>
                    </div>
                    <div>Yesterday</div>
                    <div className="text-right">
                      <Button size="sm" variant="outline" asChild>
                        <Link href="/dashboard/admin/users/2">Edit</Link>
                      </Button>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-6 p-4 items-center">
                    <div className="md:col-span-2 flex items-center gap-3">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                        <AvatarFallback>MC</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">Michael Chen</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">michael.chen@example.com</p>
                      </div>
                    </div>
                    <div>Administrator</div>
                    <div>
                      <Badge
                        variant="outline"
                        className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300"
                      >
                        Active
                      </Badge>
                    </div>
                    <div>Today</div>
                    <div className="text-right">
                      <Button size="sm" variant="outline" asChild>
                        <Link href="/dashboard/admin/users/3">Edit</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <div className="flex items-center justify-between w-full">
                  <div className="text-sm text-gray-500 dark:text-gray-400">Showing 3 of 1,250 users</div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" disabled>
                      Previous
                    </Button>
                    <Button variant="outline" size="sm">
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
                <CardTitle>Students</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center p-4">
                  <p>Student user list would appear here</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="teachers" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Teachers</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center p-4">
                  <p>Teacher user list would appear here</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="admins" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Administrators</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center p-4">
                  <p>Administrator user list would appear here</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    )
  },

  // Calendar widget for all roles
  Calendar: ({ role, data }: { role: string; data: any }) => {
    return (
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold">Calendar</h2>
            <p className="text-gray-500 dark:text-gray-400">Your schedule and upcoming events</p>
          </div>
          <div className="flex gap-2">
            {role !== "admin" && (
              <Button asChild>
                <Link href={`/dashboard/${role}/calendar/create`}>
                  <Plus className="mr-2 h-4 w-4" />
                  Add Event
                </Link>
              </Button>
            )}
          </div>
        </div>

        <Tabs defaultValue="month">
          <TabsList>
            <TabsTrigger value="day">Day</TabsTrigger>
            <TabsTrigger value="week">Week</TabsTrigger>
            <TabsTrigger value="month">Month</TabsTrigger>
            <TabsTrigger value="agenda">Agenda</TabsTrigger>
          </TabsList>
          <TabsContent value="month" className="mt-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>May 2023</CardTitle>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      Today
                    </Button>
                    <Button variant="outline" size="icon" size-sm>
                      <ArrowUpDown className="h-4 w-4" />
                      <span className="sr-only">Previous</span>
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-7 gap-px bg-gray-200 dark:bg-gray-700 rounded-md overflow-hidden">
                  {/* Calendar header */}
                  {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                    <div key={day} className="bg-white dark:bg-gray-950 p-2 text-center text-sm font-medium">
                      {day}
                    </div>
                  ))}

                  {/* Calendar days - just a placeholder */}
                  {Array.from({ length: 35 }).map((_, i) => {
                    const day = i - 1 + 1 // Adjust for May starting on Monday
                    const isCurrentMonth = day > 0 && day <= 31
                    const isToday = day === 22 // Assuming today is May 22

                    return (
                      <div
                        key={i}
                        className={`bg-white dark:bg-gray-950 min-h-24 p-2 ${
                          !isCurrentMonth ? "text-gray-400 dark:text-gray-600" : ""
                        } ${isToday ? "bg-blue-50 dark:bg-blue-900/20" : ""}`}
                      >
                        {isCurrentMonth ? day : day <= 0 ? 30 + day : day - 31}

                        {/* Example events */}
                        {isCurrentMonth && day === 10 && (
                          <div className="mt-1 text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 p-1 rounded truncate">
                            Math Midterm
                          </div>
                        )}
                        {isCurrentMonth && day === 15 && (
                          <div className="mt-1 text-xs bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 p-1 rounded truncate">
                            Physics Lab
                          </div>
                        )}
                        {isCurrentMonth && day === 22 && (
                          <div className="mt-1 text-xs bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 p-1 rounded truncate">
                            Study Group
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="agenda" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Events</CardTitle>
                <CardDescription>Your schedule for the next 30 days</CardDescription>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[400px]">
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-medium mb-2">Today</h3>
                      <div className="space-y-2">
                        <div className="flex items-start gap-4 p-3 rounded-lg border">
                          <div className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 p-2 rounded">
                            <Video className="h-5 w-5" />
                          </div>
                          <div className="flex-1">
                            <p className="font-medium">Physics Lab Session</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">2:00 PM - 4:00 PM</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Science Building, Room 302</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-medium mb-2">Tomorrow</h3>
                      <div className="space-y-2">
                        <div className="flex items-start gap-4 p-3 rounded-lg border">
                          <div className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 p-2 rounded">
                            <FileText className="h-5 w-5" />
                          </div>
                          <div className="flex-1">
                            <p className="font-medium">Math Midterm Exam</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">10:00 AM - 12:00 PM</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Main Hall, Room 101</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-medium mb-2">Friday, May 26</h3>
                      <div className="space-y-2">
                        <div className="flex items-start gap-4 p-3 rounded-lg border">
                          <div className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 p-2 rounded">
                            <Users className="h-5 w-5" />
                          </div>
                          <div className="flex-1">
                            <p className="font-medium">Study Group Meeting</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">4:00 PM - 6:00 PM</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Library, Study Room 3</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="day" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Daily View</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center p-4">
                  <p>Daily calendar view would appear here</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="week" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Weekly View</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center p-4">
                  <p>Weekly calendar view would appear here</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    )
  },

  // Reports widget for admins
  Reports: ({ data }: { data: any }) => {
    return (
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold">Reports & Analytics</h2>
            <p className="text-gray-500 dark:text-gray-400">System-wide statistics and reports</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Export Reports
            </Button>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Create Report
            </Button>
          </div>
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
              <Button variant="outline" className="w-full">
                View Details
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
              <Button variant="outline" className="w-full">
                View Details
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
              <Button variant="outline" className="w-full">
                View Details
              </Button>
            </CardFooter>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Recent Reports</CardTitle>
                <CardDescription>Generated reports and analytics</CardDescription>
              </div>
              <Button variant="outline" size="sm">
                <Filter className="mr-2 h-4 w-4" />
                Filter
              </Button>
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
              <div className="grid grid-cols-1 md:grid-cols-5 p-4 items-center">
                <div className="md:col-span-2 font-medium">Monthly User Activity</div>
                <div>System</div>
                <div>Today</div>
                <div className="text-right">
                  <Button size="sm" variant="outline">
                    <Download className="mr-2 h-4 w-4" />
                    Download
                  </Button>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-5 p-4 items-center">
                <div className="md:col-span-2 font-medium">Course Completion Rates</div>
                <div>Academic</div>
                <div>Yesterday</div>
                <div className="text-right">
                  <Button size="sm" variant="outline">
                    <Download className="mr-2 h-4 w-4" />
                    Download
                  </Button>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-5 p-4 items-center">
                <div className="md:col-span-2 font-medium">System Performance</div>
                <div>Technical</div>
                <div>Last week</div>
                <div className="text-right">
                  <Button size="sm" variant="outline">
                    <Download className="mr-2 h-4 w-4" />
                    Download
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  },
}
