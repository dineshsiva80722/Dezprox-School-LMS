"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Download, Filter, Mail, Search, UserPlus } from "lucide-react"
import Link from "next/link"

export default function TeacherStudentsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [courseFilter, setCourseFilter] = useState("all")

  // Mock data
  const courses = [
    { id: "math101", name: "Mathematics 101" },
    { id: "calc202", name: "Advanced Calculus" },
    { id: "stat101", name: "Statistics" },
    { id: "alg2", name: "Algebra II" },
  ]

  const students = [
    {
      id: 1,
      name: "Emma Wilson",
      email: "emma.wilson@example.com",
      studentId: "S10001",
      courses: ["math101", "calc202"],
      performance: "Excellent",
      lastActive: "Today",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 2,
      name: "James Brown",
      email: "james.brown@example.com",
      studentId: "S10002",
      courses: ["math101", "stat101"],
      performance: "Good",
      lastActive: "Yesterday",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 3,
      name: "Sophia Lee",
      email: "sophia.lee@example.com",
      studentId: "S10003",
      courses: ["stat101", "alg2"],
      performance: "Average",
      lastActive: "3 days ago",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 4,
      name: "Noah Garcia",
      email: "noah.garcia@example.com",
      studentId: "S10004",
      courses: ["math101", "alg2"],
      performance: "Good",
      lastActive: "Today",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 5,
      name: "Olivia Martinez",
      email: "olivia.martinez@example.com",
      studentId: "S10005",
      courses: ["calc202"],
      performance: "Excellent",
      lastActive: "Yesterday",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 6,
      name: "William Johnson",
      email: "william.johnson@example.com",
      studentId: "S10006",
      courses: ["math101", "stat101"],
      performance: "Needs Improvement",
      lastActive: "1 week ago",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 7,
      name: "Ava Thompson",
      email: "ava.thompson@example.com",
      studentId: "S10007",
      courses: ["alg2"],
      performance: "Good",
      lastActive: "2 days ago",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 8,
      name: "Ethan Davis",
      email: "ethan.davis@example.com",
      studentId: "S10008",
      courses: ["calc202", "stat101"],
      performance: "Average",
      lastActive: "Today",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ]

  // Filter students based on search query and course filter
  const filteredStudents = students.filter(
    (student) =>
      (student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        student.studentId.toLowerCase().includes(searchQuery.toLowerCase())) &&
      (courseFilter === "all" || student.courses.includes(courseFilter)),
  )

  // Get performance badge color
  const getPerformanceBadgeColor = (performance: string) => {
    switch (performance) {
      case "Excellent":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
      case "Good":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
      case "Average":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
      case "Needs Improvement":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
      default:
        return ""
    }
  }

  return (
    <div className="container mx-auto p-6">
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold">Students</h1>
            <p className="text-gray-500 dark:text-gray-400">Manage and monitor your students</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Export List
            </Button>
            <Button>
              <UserPlus className="mr-2 h-4 w-4" />
              Add Student
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Total Students</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{students.length}</div>
              <p className="text-xs text-gray-500 dark:text-gray-400">Across all courses</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Active Today</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{students.filter((s) => s.lastActive === "Today").length}</div>
              <p className="text-xs text-gray-500 dark:text-gray-400">Students active today</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Excellent Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{students.filter((s) => s.performance === "Excellent").length}</div>
              <p className="text-xs text-gray-500 dark:text-gray-400">Students with excellent performance</p>
            </CardContent>
          </Card>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
            <Input
              type="search"
              placeholder="Search by name or ID..."
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

        <Card>
          <CardHeader>
            <CardTitle>Student List</CardTitle>
            <CardDescription>View and manage all your students</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Student</TableHead>
                  <TableHead>ID</TableHead>
                  <TableHead>Courses</TableHead>
                  <TableHead>Performance</TableHead>
                  <TableHead>Last Active</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredStudents.map((student) => (
                  <TableRow key={student.id}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarImage src={student.avatar || "/placeholder.svg"} alt={student.name} />
                          <AvatarFallback>
                            {student.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">{student.name}</div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">{student.email}</div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>{student.studentId}</TableCell>
                    <TableCell>
                      <div className="flex flex-wrap gap-1">
                        {student.courses.map((courseId) => {
                          const course = courses.find((c) => c.id === courseId)
                          return (
                            <Badge key={courseId} variant="outline" className="text-xs">
                              {course ? course.name : courseId}
                            </Badge>
                          )
                        })}
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline" className={getPerformanceBadgeColor(student.performance)}>
                        {student.performance}
                      </Badge>
                    </TableCell>
                    <TableCell>{student.lastActive}</TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                          <Mail className="h-4 w-4" />
                          <span className="sr-only">Email</span>
                        </Button>
                        <Button size="sm" variant="outline" asChild>
                          <Link href={`/dashboard/teacher/students/${student.id}`}>View</Link>
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}

                {filteredStudents.length === 0 && (
                  <TableRow>
                    <TableCell colSpan={6} className="text-center py-8">
                      <div className="text-lg font-medium">No students found</div>
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
      </div>
    </div>
  )
}
