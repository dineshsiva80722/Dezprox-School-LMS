"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import { useState } from "react"
import { CalendarIcon, CheckCircle, Download, Search } from "lucide-react"

export default function TeacherAttendancePage() {
  const [date, setDate] = useState<Date>()
  const [selectedCourse, setSelectedCourse] = useState<string>("all")

  // Mock data
  const courses = [
    { id: "math101", name: "Mathematics 101" },
    { id: "phys202", name: "Physics 202" },
    { id: "hist101", name: "History 101" },
  ]

  const students = [
    { id: 1, name: "Emma Wilson", studentId: "S10001", avatar: "/placeholder.svg?height=40&width=40" },
    { id: 2, name: "James Brown", studentId: "S10002", avatar: "/placeholder.svg?height=40&width=40" },
    { id: 3, name: "Sophia Lee", studentId: "S10003", avatar: "/placeholder.svg?height=40&width=40" },
    { id: 4, name: "Noah Garcia", studentId: "S10004", avatar: "/placeholder.svg?height=40&width=40" },
    { id: 5, name: "Olivia Martinez", studentId: "S10005", avatar: "/placeholder.svg?height=40&width=40" },
    { id: 6, name: "William Johnson", studentId: "S10006", avatar: "/placeholder.svg?height=40&width=40" },
    { id: 7, name: "Ava Thompson", studentId: "S10007", avatar: "/placeholder.svg?height=40&width=40" },
    { id: 8, name: "Ethan Davis", studentId: "S10008", avatar: "/placeholder.svg?height=40&width=40" },
  ]

  const attendanceRecords = [
    {
      date: "2023-05-01",
      course: "math101",
      records: [
        { studentId: 1, status: "present" },
        { studentId: 2, status: "present" },
        { studentId: 3, status: "absent" },
        { studentId: 4, status: "present" },
        { studentId: 5, status: "present" },
        { studentId: 6, status: "late" },
        { studentId: 7, status: "present" },
        { studentId: 8, status: "present" },
      ],
    },
    {
      date: "2023-05-03",
      course: "math101",
      records: [
        { studentId: 1, status: "present" },
        { studentId: 2, status: "present" },
        { studentId: 3, status: "present" },
        { studentId: 4, status: "present" },
        { studentId: 5, status: "absent" },
        { studentId: 6, status: "present" },
        { studentId: 7, status: "present" },
        { studentId: 8, status: "late" },
      ],
    },
    {
      date: "2023-05-02",
      course: "phys202",
      records: [
        { studentId: 1, status: "present" },
        { studentId: 2, status: "absent" },
        { studentId: 3, status: "present" },
        { studentId: 4, status: "present" },
      ],
    },
    {
      date: "2023-05-04",
      course: "hist101",
      records: [
        { studentId: 5, status: "present" },
        { studentId: 6, status: "present" },
        { studentId: 7, status: "absent" },
        { studentId: 8, status: "present" },
      ],
    },
  ]

  // Filter students based on selected course
  const filteredStudents = students

  return (
    <div className="container mx-auto p-4 md:p-6">
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold">Attendance Management</h1>
            <p className="text-gray-500 dark:text-gray-400">Track and manage student attendance</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Export Report
            </Button>
            <Button>Take Attendance</Button>
          </div>
        </div>

        <Tabs defaultValue="take">
          <TabsList>
            <TabsTrigger value="take">Take Attendance</TabsTrigger>
            <TabsTrigger value="view">View Records</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
          </TabsList>

          <TabsContent value="take" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Take Attendance</CardTitle>
                <CardDescription>Record attendance for today's class</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="sm:w-1/3">
                      <label htmlFor="course" className="text-sm font-medium block mb-2">
                        Select Course
                      </label>
                      <Select value={selectedCourse} onValueChange={setSelectedCourse}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a course" />
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

                    <div className="sm:w-1/3">
                      <label className="text-sm font-medium block mb-2">Select Date</label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-full justify-start text-left font-normal",
                              !date && "text-muted-foreground",
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {date ? format(date, "PPP") : "Select date"}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                        </PopoverContent>
                      </Popover>
                    </div>

                    <div className="sm:w-1/3 relative">
                      <label className="text-sm font-medium block mb-2">Search Student</label>
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500 dark:text-gray-400" />
                        <Input type="search" placeholder="Search by name or ID..." className="pl-10" />
                      </div>
                    </div>
                  </div>

                  <div className="rounded-md border">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[50px]">No.</TableHead>
                          <TableHead>Student</TableHead>
                          <TableHead>ID</TableHead>
                          <TableHead className="text-center">Status</TableHead>
                          <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {filteredStudents.map((student, index) => (
                          <TableRow key={student.id}>
                            <TableCell>{index + 1}</TableCell>
                            <TableCell>
                              <div className="flex items-center gap-3">
                                <img
                                  src={student.avatar || "/placeholder.svg"}
                                  alt={student.name}
                                  className="h-8 w-8 rounded-full object-cover"
                                />
                                <span>{student.name}</span>
                              </div>
                            </TableCell>
                            <TableCell>{student.studentId}</TableCell>
                            <TableCell className="text-center">
                              <div className="flex justify-center gap-2">
                                <Badge
                                  variant="outline"
                                  className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                                >
                                  <CheckCircle className="mr-1 h-3 w-3" /> Present
                                </Badge>
                              </div>
                            </TableCell>
                            <TableCell className="text-right">
                              <div className="flex justify-end gap-2">
                                <Button size="sm" variant="outline">
                                  Present
                                </Button>
                                <Button size="sm" variant="outline">
                                  Late
                                </Button>
                                <Button size="sm" variant="outline">
                                  Absent
                                </Button>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>

                  <div className="flex justify-end">
                    <Button>Save Attendance</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="view" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Attendance Records</CardTitle>
                <CardDescription>View and manage past attendance records</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="sm:w-1/3">
                      <Select value={selectedCourse} onValueChange={setSelectedCourse}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a course" />
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

                    <div className="sm:w-1/3">
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-full justify-start text-left font-normal",
                              !date && "text-muted-foreground",
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {date ? format(date, "PPP") : "Select date"}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                        </PopoverContent>
                      </Popover>
                    </div>

                    <div className="sm:w-1/3 relative">
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500 dark:text-gray-400" />
                        <Input type="search" placeholder="Search records..." className="pl-10" />
                      </div>
                    </div>
                  </div>

                  <div className="rounded-md border">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Date</TableHead>
                          <TableHead>Course</TableHead>
                          <TableHead>Present</TableHead>
                          <TableHead>Absent</TableHead>
                          <TableHead>Late</TableHead>
                          <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {attendanceRecords.map((record, index) => {
                          const courseName = courses.find((c) => c.id === record.course)?.name || record.course
                          const present = record.records.filter((r) => r.status === "present").length
                          const absent = record.records.filter((r) => r.status === "absent").length
                          const late = record.records.filter((r) => r.status === "late").length

                          return (
                            <TableRow key={index}>
                              <TableCell>{record.date}</TableCell>
                              <TableCell>{courseName}</TableCell>
                              <TableCell>{present}</TableCell>
                              <TableCell>{absent}</TableCell>
                              <TableCell>{late}</TableCell>
                              <TableCell className="text-right">
                                <div className="flex justify-end gap-2">
                                  <Button size="sm" variant="outline">
                                    View
                                  </Button>
                                  <Button size="sm" variant="outline">
                                    Edit
                                  </Button>
                                </div>
                              </TableCell>
                            </TableRow>
                          )
                        })}
                      </TableBody>
                    </Table>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reports" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Attendance Reports</CardTitle>
                <CardDescription>Generate and view attendance statistics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium">Overall Attendance Rate</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">87%</div>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Across all courses</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium">Students at Risk</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">3</div>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Below 75% attendance</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium">Perfect Attendance</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">12</div>
                        <p className="text-xs text-gray-500 dark:text-gray-400">100% attendance rate</p>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Attendance by Course</h3>
                    <div className="rounded-md border">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Course</TableHead>
                            <TableHead>Students</TableHead>
                            <TableHead>Attendance Rate</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {courses.map((course) => (
                            <TableRow key={course.id}>
                              <TableCell>{course.name}</TableCell>
                              <TableCell>28</TableCell>
                              <TableCell>
                                <div className="flex items-center gap-2">
                                  <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "85%" }}></div>
                                  </div>
                                  <span>85%</span>
                                </div>
                              </TableCell>
                              <TableCell className="text-right">
                                <Button size="sm" variant="outline">
                                  View Details
                                </Button>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  </div>

                  <div className="flex justify-end gap-2">
                    <Button variant="outline">
                      <Download className="mr-2 h-4 w-4" />
                      Export CSV
                    </Button>
                    <Button variant="outline">
                      <Download className="mr-2 h-4 w-4" />
                      Export PDF
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
