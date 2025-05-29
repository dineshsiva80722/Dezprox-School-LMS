"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Download, Filter, Plus, Search, Users } from "lucide-react"
import Link from "next/link"

export default function AdminCoursesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [departmentFilter, setDepartmentFilter] = useState("all")
  const [statusFilter, setStatusFilter] = useState("all")

  // Mock data
  const departments = [
    { id: "math", name: "Mathematics" },
    { id: "sci", name: "Science" },
    { id: "hist", name: "History" },
    { id: "eng", name: "English" },
    { id: "cs", name: "Computer Science" },
  ]

  const courses = [
    {
      id: 1,
      name: "Mathematics 101",
      code: "MATH101",
      department: "math",
      instructor: {
        name: "Dr. Sarah Miller",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "SM",
      },
      students: 28,
      status: "active",
      startDate: "2023-01-15",
      endDate: "2023-05-30",
    },
    {
      id: 2,
      name: "Advanced Calculus",
      code: "MATH202",
      department: "math",
      instructor: {
        name: "Prof. James Brown",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "JB",
      },
      students: 15,
      status: "active",
      startDate: "2023-01-15",
      endDate: "2023-05-30",
    },
    {
      id: 3,
      name: "Introduction to Biology",
      code: "BIO101",
      department: "sci",
      instructor: {
        name: "Dr. Emily Johnson",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "EJ",
      },
      students: 32,
      status: "active",
      startDate: "2023-01-15",
      endDate: "2023-05-30",
    },
    {
      id: 4,
      name: "World History",
      code: "HIST101",
      department: "hist",
      instructor: {
        name: "Prof. Michael Chen",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "MC",
      },
      students: 45,
      status: "active",
      startDate: "2023-01-15",
      endDate: "2023-05-30",
    },
    {
      id: 5,
      name: "English Literature",
      code: "ENG201",
      department: "eng",
      instructor: {
        name: "Dr. Olivia Martinez",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "OM",
      },
      students: 22,
      status: "active",
      startDate: "2023-01-15",
      endDate: "2023-05-30",
    },
    {
      id: 6,
      name: "Programming Fundamentals",
      code: "CS101",
      department: "cs",
      instructor: {
        name: "Prof. William Johnson",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "WJ",
      },
      students: 38,
      status: "active",
      startDate: "2023-01-15",
      endDate: "2023-05-30",
    },
    {
      id: 7,
      name: "Organic Chemistry",
      code: "CHEM201",
      department: "sci",
      instructor: {
        name: "Dr. Noah Garcia",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "NG",
      },
      students: 18,
      status: "upcoming",
      startDate: "2023-06-15",
      endDate: "2023-08-30",
    },
    {
      id: 8,
      name: "Data Structures",
      code: "CS202",
      department: "cs",
      instructor: {
        name: "Prof. Sophia Lee",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "SL",
      },
      students: 25,
      status: "upcoming",
      startDate: "2023-06-15",
      endDate: "2023-08-30",
    },
    {
      id: 9,
      name: "Ancient Civilizations",
      code: "HIST102",
      department: "hist",
      instructor: {
        name: "Dr. Ethan Davis",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "ED",
      },
      students: 30,
      status: "archived",
      startDate: "2022-09-01",
      endDate: "2022-12-15",
    },
    {
      id: 10,
      name: "Creative Writing",
      code: "ENG102",
      department: "eng",
      instructor: {
        name: "Prof. Ava Thompson",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "AT",
      },
      students: 20,
      status: "archived",
      startDate: "2022-09-01",
      endDate: "2022-12-15",
    },
  ]

  // Filter courses based on search query and filters
  const filteredCourses = courses.filter(
    (course) =>
      (course.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.code.toLowerCase().includes(searchQuery.toLowerCase())) &&
      (departmentFilter === "all" || course.department === departmentFilter) &&
      (statusFilter === "all" || course.status === statusFilter),
  )

  // Group courses by status
  const activeCourses = filteredCourses.filter((c) => c.status === "active")
  const upcomingCourses = filteredCourses.filter((c) => c.status === "upcoming")
  const archivedCourses = filteredCourses.filter((c) => c.status === "archived")

  // Get department name by ID
  const getDepartmentName = (departmentId: string) => {
    const department = departments.find((d) => d.id === departmentId)
    return department ? department.name : departmentId
  }

  // Format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })
  }

  return (
    <div className="container mx-auto p-6">
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold">Course Management</h1>
            <p className="text-gray-500 dark:text-gray-400">Manage all courses across departments</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Export Courses
            </Button>
            <Button asChild>
              <Link href="/dashboard/admin/courses/create">
                <Plus className="mr-2 h-4 w-4" />
                Create Course
              </Link>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Total Courses</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{courses.length}</div>
              <p className="text-xs text-gray-500 dark:text-gray-400">Across all departments</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Active Courses</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{courses.filter((c) => c.status === "active").length}</div>
              <p className="text-xs text-gray-500 dark:text-gray-400">Currently running courses</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Total Students</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{courses.reduce((acc, curr) => acc + curr.students, 0)}</div>
              <p className="text-xs text-gray-500 dark:text-gray-400">Enrolled in all courses</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Departments</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{departments.length}</div>
              <p className="text-xs text-gray-500 dark:text-gray-400">Academic departments</p>
            </CardContent>
          </Card>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
            <Input
              type="search"
              placeholder="Search by course name or code..."
              className="pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="sm:w-1/5">
            <Select value={departmentFilter} onValueChange={setDepartmentFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Department" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Departments</SelectItem>
                {departments.map((dept) => (
                  <SelectItem key={dept.id} value={dept.id}>
                    {dept.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="sm:w-1/5">
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Statuses</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="upcoming">Upcoming</SelectItem>
                <SelectItem value="archived">Archived</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" />
            More Filters
          </Button>
        </div>

        <Tabs defaultValue="all">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="all">All Courses</TabsTrigger>
            <TabsTrigger value="active">Active</TabsTrigger>
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="archived">Archived</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>All Courses</CardTitle>
                <CardDescription>Complete list of all courses</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Course</TableHead>
                      <TableHead>Department</TableHead>
                      <TableHead>Instructor</TableHead>
                      <TableHead>Students</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Duration</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredCourses.map((course) => (
                      <TableRow key={course.id}>
                        <TableCell>
                          <div className="font-medium">{course.name}</div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">{course.code}</div>
                        </TableCell>
                        <TableCell>{getDepartmentName(course.department)}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <Avatar className="h-8 w-8">
                              <AvatarImage
                                src={course.instructor.avatar || "/placeholder.svg"}
                                alt={course.instructor.name}
                              />
                              <AvatarFallback>{course.instructor.initials}</AvatarFallback>
                            </Avatar>
                            <span>{course.instructor.name}</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Users className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                            <span>{course.students}</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge
                            className={
                              course.status === "active"
                                ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                                : course.status === "upcoming"
                                  ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
                                  : "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300"
                            }
                          >
                            {course.status.charAt(0).toUpperCase() + course.status.slice(1)}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="text-sm">
                            {formatDate(course.startDate)} - {formatDate(course.endDate)}
                          </div>
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Button size="sm" variant="outline" asChild>
                              <Link href={`/dashboard/admin/courses/${course.id}/edit`}>Edit</Link>
                            </Button>
                            <Button size="sm" asChild>
                              <Link href={`/dashboard/admin/courses/${course.id}`}>View</Link>
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}

                    {filteredCourses.length === 0 && (
                      <TableRow>
                        <TableCell colSpan={7} className="text-center py-8">
                          <div className="text-lg font-medium">No courses found</div>
                          <p className="text-gray-500 dark:text-gray-400 mt-1">
                            Try adjusting your search or filter criteria
                          </p>
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="active" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Active Courses</CardTitle>
                <CardDescription>Courses that are currently running</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Course</TableHead>
                      <TableHead>Department</TableHead>
                      <TableHead>Instructor</TableHead>
                      <TableHead>Students</TableHead>
                      <TableHead>End Date</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {activeCourses.map((course) => (
                      <TableRow key={course.id}>
                        <TableCell>
                          <div className="font-medium">{course.name}</div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">{course.code}</div>
                        </TableCell>
                        <TableCell>{getDepartmentName(course.department)}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <Avatar className="h-8 w-8">
                              <AvatarImage
                                src={course.instructor.avatar || "/placeholder.svg"}
                                alt={course.instructor.name}
                              />
                              <AvatarFallback>{course.instructor.initials}</AvatarFallback>
                            </Avatar>
                            <span>{course.instructor.name}</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Users className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                            <span>{course.students}</span>
                          </div>
                        </TableCell>
                        <TableCell>{formatDate(course.endDate)}</TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Button size="sm" variant="outline" asChild>
                              <Link href={`/dashboard/admin/courses/${course.id}/students`}>Students</Link>
                            </Button>
                            <Button size="sm" asChild>
                              <Link href={`/dashboard/admin/courses/${course.id}`}>Manage</Link>
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}

                    {activeCourses.length === 0 && (
                      <TableRow>
                        <TableCell colSpan={6} className="text-center py-8">
                          <div className="text-lg font-medium">No active courses</div>
                          <p className="text-gray-500 dark:text-gray-400 mt-1">Active courses will appear here</p>
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="upcoming" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Courses</CardTitle>
                <CardDescription>Courses scheduled to start in the future</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Course</TableHead>
                      <TableHead>Department</TableHead>
                      <TableHead>Instructor</TableHead>
                      <TableHead>Students</TableHead>
                      <TableHead>Start Date</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {upcomingCourses.map((course) => (
                      <TableRow key={course.id}>
                        <TableCell>
                          <div className="font-medium">{course.name}</div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">{course.code}</div>
                        </TableCell>
                        <TableCell>{getDepartmentName(course.department)}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <Avatar className="h-8 w-8">
                              <AvatarImage
                                src={course.instructor.avatar || "/placeholder.svg"}
                                alt={course.instructor.name}
                              />
                              <AvatarFallback>{course.instructor.initials}</AvatarFallback>
                            </Avatar>
                            <span>{course.instructor.name}</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Users className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                            <span>{course.students}</span>
                          </div>
                        </TableCell>
                        <TableCell>{formatDate(course.startDate)}</TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Button size="sm" variant="outline" asChild>
                              <Link href={`/dashboard/admin/courses/${course.id}/edit`}>Edit</Link>
                            </Button>
                            <Button size="sm" asChild>
                              <Link href={`/dashboard/admin/courses/${course.id}`}>View</Link>
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}

                    {upcomingCourses.length === 0 && (
                      <TableRow>
                        <TableCell colSpan={6} className="text-center py-8">
                          <div className="text-lg font-medium">No upcoming courses</div>
                          <p className="text-gray-500 dark:text-gray-400 mt-1">Upcoming courses will appear here</p>
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="archived" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Archived Courses</CardTitle>
                <CardDescription>Past courses that have been completed</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Course</TableHead>
                      <TableHead>Department</TableHead>
                      <TableHead>Instructor</TableHead>
                      <TableHead>Students</TableHead>
                      <TableHead>End Date</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {archivedCourses.map((course) => (
                      <TableRow key={course.id}>
                        <TableCell>
                          <div className="font-medium">{course.name}</div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">{course.code}</div>
                        </TableCell>
                        <TableCell>{getDepartmentName(course.department)}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <Avatar className="h-8 w-8">
                              <AvatarImage
                                src={course.instructor.avatar || "/placeholder.svg"}
                                alt={course.instructor.name}
                              />
                              <AvatarFallback>{course.instructor.initials}</AvatarFallback>
                            </Avatar>
                            <span>{course.instructor.name}</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Users className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                            <span>{course.students}</span>
                          </div>
                        </TableCell>
                        <TableCell>{formatDate(course.endDate)}</TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Button size="sm" variant="outline" asChild>
                              <Link href={`/dashboard/admin/courses/${course.id}/reports`}>Reports</Link>
                            </Button>
                            <Button size="sm" asChild>
                              <Link href={`/dashboard/admin/courses/${course.id}`}>View</Link>
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}

                    {archivedCourses.length === 0 && (
                      <TableRow>
                        <TableCell colSpan={6} className="text-center py-8">
                          <div className="text-lg font-medium">No archived courses</div>
                          <p className="text-gray-500 dark:text-gray-400 mt-1">Archived courses will appear here</p>
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
