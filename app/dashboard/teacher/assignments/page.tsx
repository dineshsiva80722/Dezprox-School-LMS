"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Calendar, Download, Filter, Plus, Search } from "lucide-react"
import Link from "next/link"

export default function TeacherAssignmentsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [courseFilter, setCourseFilter] = useState("all")

  // Mock data
  const courses = [
    { id: "math101", name: "Mathematics 101" },
    { id: "calc202", name: "Advanced Calculus" },
    { id: "stat101", name: "Statistics" },
    { id: "alg2", name: "Algebra II" },
  ]

  const assignments = [
    {
      id: 1,
      title: "Problem Set 5",
      course: "math101",
      dueDate: "2023-05-15",
      status: "active",
      submissions: 18,
      totalStudents: 28,
      description: "Linear algebra problems covering vector spaces and linear transformations.",
    },
    {
      id: 2,
      title: "Midterm Exam",
      course: "calc202",
      dueDate: "2023-05-10",
      status: "active",
      submissions: 12,
      totalStudents: 15,
      description: "Comprehensive exam covering differential equations and multivariable calculus.",
    },
    {
      id: 3,
      title: "Statistical Analysis Project",
      course: "stat101",
      dueDate: "2023-05-20",
      status: "active",
      submissions: 5,
      totalStudents: 22,
      description: "Data analysis project using real-world datasets and statistical methods.",
    },
    {
      id: 4,
      title: "Quadratic Equations Worksheet",
      course: "alg2",
      dueDate: "2023-05-08",
      status: "past",
      submissions: 30,
      totalStudents: 32,
      description: "Practice problems on solving and graphing quadratic equations.",
    },
    {
      id: 5,
      title: "Final Project Proposal",
      course: "math101",
      dueDate: "2023-06-01",
      status: "upcoming",
      submissions: 0,
      totalStudents: 28,
      description: "Proposal for the final project on applications of linear algebra.",
    },
    {
      id: 6,
      title: "Integration Techniques",
      course: "calc202",
      dueDate: "2023-04-28",
      status: "past",
      submissions: 14,
      totalStudents: 15,
      description: "Problems on various integration techniques including substitution and parts.",
    },
  ]

  // Filter assignments based on search query and course filter
  const filteredAssignments = assignments.filter(
    (assignment) =>
      assignment.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (courseFilter === "all" || assignment.course === courseFilter),
  )

  // Group assignments by status
  const activeAssignments = filteredAssignments.filter((a) => a.status === "active")
  const upcomingAssignments = filteredAssignments.filter((a) => a.status === "upcoming")
  const pastAssignments = filteredAssignments.filter((a) => a.status === "past")

  // Get course name by ID
  const getCourseName = (courseId: string) => {
    const course = courses.find((c) => c.id === courseId)
    return course ? course.name : courseId
  }

  // Format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })
  }

  // Calculate days remaining or overdue
  const getDaysRemaining = (dueDate: string) => {
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    const due = new Date(dueDate)
    due.setHours(0, 0, 0, 0)

    const diffTime = due.getTime() - today.getTime()
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

    if (diffDays > 0) {
      return `${diffDays} day${diffDays !== 1 ? "s" : ""} remaining`
    } else if (diffDays < 0) {
      return `${Math.abs(diffDays)} day${Math.abs(diffDays) !== 1 ? "s" : ""} overdue`
    } else {
      return "Due today"
    }
  }

  return (
    <div className="container mx-auto p-6">
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold">Assignments</h1>
            <p className="text-gray-500 dark:text-gray-400">Create and manage assignments for your courses</p>
          </div>
          <Button asChild>
            <Link href="/dashboard/teacher/assignments/create">
              <Plus className="mr-2 h-4 w-4" />
              Create Assignment
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Active Assignments</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{assignments.filter((a) => a.status === "active").length}</div>
              <p className="text-xs text-gray-500 dark:text-gray-400">Currently active assignments</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Pending Grading</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {assignments
                  .filter((a) => a.status === "active" || a.status === "past")
                  .reduce((acc, curr) => acc + curr.submissions, 0)}
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400">Submissions to grade</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Upcoming Due Dates</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {assignments.filter((a) => a.status === "active" || a.status === "upcoming").length}
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400">Assignments with upcoming deadlines</p>
            </CardContent>
          </Card>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
            <Input
              type="search"
              placeholder="Search assignments..."
              className="pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="sm:w-1/4">
            <Select value={courseFilter} onValueChange={setCourseFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Filter by course" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Courses</SelectItem>
                {courses.map((course) => (
                  <SelectItem key={course.id} value={course.id}>
                    {course.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" />
            More Filters
          </Button>
        </div>

        <Tabs defaultValue="active">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="active">Active</TabsTrigger>
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="past">Past</TabsTrigger>
            <TabsTrigger value="all">All Assignments</TabsTrigger>
          </TabsList>

          <TabsContent value="active" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Active Assignments</CardTitle>
                <CardDescription>Assignments that are currently open for submission</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Assignment</TableHead>
                      <TableHead>Course</TableHead>
                      <TableHead>Due Date</TableHead>
                      <TableHead>Submissions</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {activeAssignments.map((assignment) => (
                      <TableRow key={assignment.id}>
                        <TableCell>
                          <div className="font-medium">{assignment.title}</div>
                          <div className="text-sm text-gray-500 dark:text-gray-400 truncate max-w-xs">
                            {assignment.description}
                          </div>
                        </TableCell>
                        <TableCell>{getCourseName(assignment.course)}</TableCell>
                        <TableCell>
                          <div className="flex flex-col">
                            <span>{formatDate(assignment.dueDate)}</span>
                            <span className="text-sm text-gray-500 dark:text-gray-400">
                              {getDaysRemaining(assignment.dueDate)}
                            </span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline">
                            {assignment.submissions}/{assignment.totalStudents}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Button size="sm" variant="outline" asChild>
                              <Link href={`/dashboard/teacher/assignments/${assignment.id}/submissions`}>
                                View Submissions
                              </Link>
                            </Button>
                            <Button size="sm" asChild>
                              <Link href={`/dashboard/teacher/assignments/${assignment.id}`}>Manage</Link>
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}

                    {activeAssignments.length === 0 && (
                      <TableRow>
                        <TableCell colSpan={5} className="text-center py-8">
                          <div className="text-lg font-medium">No active assignments</div>
                          <p className="text-gray-500 dark:text-gray-400 mt-1">
                            Create a new assignment to get started
                          </p>
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
                <CardTitle>Upcoming Assignments</CardTitle>
                <CardDescription>Assignments scheduled for future release</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Assignment</TableHead>
                      <TableHead>Course</TableHead>
                      <TableHead>Due Date</TableHead>
                      <TableHead>Students</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {upcomingAssignments.map((assignment) => (
                      <TableRow key={assignment.id}>
                        <TableCell>
                          <div className="font-medium">{assignment.title}</div>
                          <div className="text-sm text-gray-500 dark:text-gray-400 truncate max-w-xs">
                            {assignment.description}
                          </div>
                        </TableCell>
                        <TableCell>{getCourseName(assignment.course)}</TableCell>
                        <TableCell>
                          <div className="flex flex-col">
                            <span>{formatDate(assignment.dueDate)}</span>
                            <span className="text-sm text-gray-500 dark:text-gray-400">
                              {getDaysRemaining(assignment.dueDate)}
                            </span>
                          </div>
                        </TableCell>
                        <TableCell>{assignment.totalStudents} students</TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Button size="sm" variant="outline" asChild>
                              <Link href={`/dashboard/teacher/assignments/${assignment.id}/edit`}>Edit</Link>
                            </Button>
                            <Button size="sm" asChild>
                              <Link href={`/dashboard/teacher/assignments/${assignment.id}`}>Publish Now</Link>
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}

                    {upcomingAssignments.length === 0 && (
                      <TableRow>
                        <TableCell colSpan={5} className="text-center py-8">
                          <div className="text-lg font-medium">No upcoming assignments</div>
                          <p className="text-gray-500 dark:text-gray-400 mt-1">
                            Schedule assignments for future release
                          </p>
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="past" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Past Assignments</CardTitle>
                <CardDescription>Assignments with passed due dates</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Assignment</TableHead>
                      <TableHead>Course</TableHead>
                      <TableHead>Due Date</TableHead>
                      <TableHead>Submissions</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {pastAssignments.map((assignment) => (
                      <TableRow key={assignment.id}>
                        <TableCell>
                          <div className="font-medium">{assignment.title}</div>
                          <div className="text-sm text-gray-500 dark:text-gray-400 truncate max-w-xs">
                            {assignment.description}
                          </div>
                        </TableCell>
                        <TableCell>{getCourseName(assignment.course)}</TableCell>
                        <TableCell>
                          <div className="flex flex-col">
                            <span>{formatDate(assignment.dueDate)}</span>
                            <span className="text-sm text-red-500 dark:text-red-400">
                              {getDaysRemaining(assignment.dueDate)}
                            </span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline">
                            {assignment.submissions}/{assignment.totalStudents}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Button size="sm" variant="outline" asChild>
                              <Link href={`/dashboard/teacher/assignments/${assignment.id}/submissions`}>
                                Grade Submissions
                              </Link>
                            </Button>
                            <Button size="sm" variant="outline" asChild>
                              <Link href={`/dashboard/teacher/assignments/${assignment.id}`}>View Details</Link>
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}

                    {pastAssignments.length === 0 && (
                      <TableRow>
                        <TableCell colSpan={5} className="text-center py-8">
                          <div className="text-lg font-medium">No past assignments</div>
                          <p className="text-gray-500 dark:text-gray-400 mt-1">Past assignments will appear here</p>
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button variant="outline">
                  <Download className="mr-2 h-4 w-4" />
                  Export Assignment History
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="all" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>All Assignments</CardTitle>
                <CardDescription>Complete list of all assignments</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Assignment</TableHead>
                      <TableHead>Course</TableHead>
                      <TableHead>Due Date</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Submissions</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredAssignments.map((assignment) => (
                      <TableRow key={assignment.id}>
                        <TableCell>
                          <div className="font-medium">{assignment.title}</div>
                          <div className="text-sm text-gray-500 dark:text-gray-400 truncate max-w-xs">
                            {assignment.description}
                          </div>
                        </TableCell>
                        <TableCell>{getCourseName(assignment.course)}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                            {formatDate(assignment.dueDate)}
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge
                            className={
                              assignment.status === "active"
                                ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                                : assignment.status === "upcoming"
                                  ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
                                  : "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300"
                            }
                          >
                            {assignment.status.charAt(0).toUpperCase() + assignment.status.slice(1)}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline">
                            {assignment.submissions}/{assignment.totalStudents}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button size="sm" asChild>
                            <Link href={`/dashboard/teacher/assignments/${assignment.id}`}>View</Link>
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}

                    {filteredAssignments.length === 0 && (
                      <TableRow>
                        <TableCell colSpan={6} className="text-center py-8">
                          <div className="text-lg font-medium">No assignments found</div>
                          <p className="text-gray-500 dark:text-gray-400 mt-1">
                            Try adjusting your search or filter criteria
                          </p>
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </CardContent>
              <CardFooter className="flex justify-between">
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Showing {filteredAssignments.length} of {assignments.length} assignments
                </div>
                <Button variant="outline">
                  <Download className="mr-2 h-4 w-4" />
                  Export All
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
