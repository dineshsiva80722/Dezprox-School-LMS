"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { ScrollArea } from "@/components/ui/scroll-area"
import { DashboardWidgets } from "@/components/dashboard/dashboard-widgets"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { DashboardSearch } from "@/components/dashboard/dashboard-search"
import { NotificationsPopover } from "@/components/dashboard/notifications-popover"
import { HelpPopover } from "@/components/dashboard/help-popover"
import {
  BarChart,
  BookOpen,
  Calendar,
  Clock,
  FileText,
  GraduationCap,
  MessageSquare,
  Plus,
  Settings,
  Users,
  Bell,
  CheckCircle,
  ArrowUpRight,
} from "lucide-react"
import Link from "next/link"

export default function DashboardPage() {
  const params = useParams()
  const router = useRouter()
  const [role, setRole] = useState<string>("student")
  const [searchQuery, setSearchQuery] = useState("")
  const [activeTab, setActiveTab] = useState("overview")

  useEffect(() => {
    // Extract role from URL params
    if (params.role && typeof params.role === "string") {
      const validRoles = ["student", "teacher", "admin"]
      if (validRoles.includes(params.role)) {
        setRole(params.role)
      } else {
        // Redirect to student dashboard if invalid role
        router.push("/dashboard/student")
      }
    }
  }, [params.role, router])

  // Role-specific data
  const userData = {
    student: {
      name: "Alex Johnson",
      role: "Student",
      avatar: "/placeholder.svg?height=40&width=40",
      stats: [
        { title: "Courses", value: "6", icon: BookOpen, change: "2 in progress" },
        { title: "Assignments", value: "12", icon: FileText, change: "4 pending" },
        { title: "Attendance", value: "92%", icon: Clock, change: "This semester" },
        { title: "Overall Grade", value: "B+", icon: BarChart, change: "3.7 GPA" },
      ],
      recentActivity: [
        {
          id: 1,
          type: "assignment",
          title: "Math Assignment Submitted",
          time: "2 hours ago",
          course: "Mathematics 101",
        },
        { id: 2, type: "grade", title: "New Grade: Physics Quiz", time: "Yesterday", course: "Physics 202" },
        { id: 3, type: "forum", title: "Posted in Discussion Forum", time: "2 days ago", course: "History 101" },
        { id: 4, type: "attendance", title: "Attended Biology Lab", time: "3 days ago", course: "Biology 303" },
      ],
      upcomingEvents: [
        { id: 1, title: "Math Midterm Exam", date: "Tomorrow, 10:00 AM", location: "Room 101" },
        { id: 2, title: "Physics Lab Session", date: "Friday, 2:00 PM", location: "Science Building" },
        { id: 3, title: "Study Group Meeting", date: "Saturday, 4:00 PM", location: "Library" },
      ],
      courses: [
        { id: 1, name: "Mathematics 101", progress: 75, instructor: "Dr. Smith", nextClass: "Tomorrow, 10:00 AM" },
        { id: 2, name: "Physics 202", progress: 60, instructor: "Prof. Johnson", nextClass: "Friday, 2:00 PM" },
        { id: 3, name: "History 101", progress: 40, instructor: "Dr. Williams", nextClass: "Thursday, 11:00 AM" },
        { id: 4, name: "Biology 303", progress: 90, instructor: "Prof. Davis", nextClass: "Wednesday, 1:00 PM" },
      ],
      assignments: [
        {
          id: 1,
          title: "Math Problem Set 5",
          course: "Mathematics 101",
          dueDate: "Tomorrow, 11:59 PM",
          status: "pending",
        },
        { id: 2, title: "Physics Lab Report", course: "Physics 202", dueDate: "Friday, 5:00 PM", status: "pending" },
        { id: 3, title: "Historical Essay", course: "History 101", dueDate: "Next Monday, 9:00 AM", status: "pending" },
        { id: 4, title: "Biology Worksheet", course: "Biology 303", dueDate: "Yesterday", status: "completed" },
      ],
      notifications: [
        {
          id: 1,
          title: "New Assignment Posted",
          message: "Math Problem Set 5 is now available",
          time: "1 hour ago",
          read: false,
        },
        {
          id: 2,
          title: "Grade Posted",
          message: "You received an A on your Physics Quiz",
          time: "Yesterday",
          read: true,
        },
        { id: 3, title: "Upcoming Deadline", message: "History Essay due in 3 days", time: "2 days ago", read: false },
        {
          id: 4,
          title: "Course Announcement",
          message: "Biology field trip scheduled for next week",
          time: "3 days ago",
          read: true,
        },
      ],
    },
    teacher: {
      name: "Dr. Sarah Miller",
      role: "Teacher",
      avatar: "/placeholder.svg?height=40&width=40",
      stats: [
        { title: "Courses", value: "4", icon: BookOpen, change: "This semester" },
        { title: "Students", value: "87", icon: Users, change: "Across all courses" },
        { title: "Assignments", value: "15", icon: FileText, change: "5 need grading" },
        { title: "Avg. Attendance", value: "88%", icon: Clock, change: "This week" },
      ],
      recentActivity: [
        { id: 1, type: "grade", title: "Graded Math Assignments", time: "1 hour ago", course: "Mathematics 101" },
        { id: 2, type: "content", title: "Uploaded Lecture Slides", time: "Yesterday", course: "Advanced Calculus" },
        { id: 3, type: "forum", title: "Responded to Discussion", time: "2 days ago", course: "Statistics" },
        { id: 4, type: "assignment", title: "Created New Assignment", time: "3 days ago", course: "Mathematics 101" },
      ],
      upcomingEvents: [
        { id: 1, title: "Department Meeting", date: "Tomorrow, 9:00 AM", location: "Conference Room A" },
        { id: 2, title: "Office Hours", date: "Today, 3:00 PM", location: "Office 302" },
        { id: 3, title: "Math Club Mentoring", date: "Friday, 4:00 PM", location: "Student Center" },
      ],
      courses: [
        { id: 1, name: "Mathematics 101", students: 28, nextClass: "Today, 10:00 AM", room: "Room 101" },
        { id: 2, name: "Advanced Calculus", students: 15, nextClass: "Tomorrow, 2:00 PM", room: "Room 203" },
        { id: 3, name: "Statistics", students: 22, nextClass: "Friday, 11:00 AM", room: "Room 105" },
        { id: 4, name: "Algebra II", students: 32, nextClass: "Thursday, 1:00 PM", room: "Room 107" },
      ],
      pendingGrading: [
        { id: 1, title: "Problem Set 5", course: "Mathematics 101", submissions: 25, dueDate: "Yesterday" },
        { id: 2, title: "Midterm Exam", course: "Advanced Calculus", submissions: 15, dueDate: "3 days ago" },
        { id: 3, title: "Project Proposal", course: "Statistics", submissions: 20, dueDate: "Last week" },
      ],
      notifications: [
        {
          id: 1,
          title: "Assignment Submissions",
          message: "25 new submissions for Math Problem Set 5",
          time: "2 hours ago",
          read: false,
        },
        {
          id: 2,
          title: "Meeting Reminder",
          message: "Department meeting tomorrow at 9:00 AM",
          time: "Today",
          read: true,
        },
        {
          id: 3,
          title: "Student Question",
          message: "Emma Wilson has a question about the midterm",
          time: "Yesterday",
          read: false,
        },
        {
          id: 4,
          title: "System Update",
          message: "New grading features available in the system",
          time: "3 days ago",
          read: true,
        },
      ],
    },
    admin: {
      name: "Michael Chen",
      role: "Administrator",
      avatar: "/placeholder.svg?height=40&width=40",
      stats: [
        { title: "Total Users", value: "1,250", icon: Users, change: "+12% from last month" },
        { title: "Active Courses", value: "48", icon: BookOpen, change: "+3 since last week" },
        { title: "System Uptime", value: "99.9%", icon: Settings, change: "Last 30 days" },
        { title: "Support Tickets", value: "8", icon: MessageSquare, change: "3 high priority" },
      ],
      recentActivity: [
        { id: 1, type: "user", title: "New Teacher Account Created", time: "3 hours ago", user: "Dr. Johnson" },
        { id: 2, type: "course", title: "New Course Approved", time: "Yesterday", course: "Advanced Biology" },
        { id: 3, type: "system", title: "System Backup Completed", time: "2 days ago" },
        { id: 4, type: "report", title: "Monthly Report Generated", time: "1 week ago" },
      ],
      pendingApprovals: [
        { id: 1, title: "New Course: Advanced Biology", requestedBy: "Dr. Williams", date: "2 days ago" },
        { id: 2, title: "Role Change: Teaching Assistant", requestedBy: "Sarah Johnson", date: "3 days ago" },
        { id: 3, title: "Content Upload: Video Lectures", requestedBy: "Prof. Davis", date: "1 week ago" },
      ],
      systemAlerts: [
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
      ],
      courses: [
        { id: 1, name: "Mathematics 101", students: 28, instructor: "Dr. Smith", department: "Mathematics" },
        { id: 2, name: "Introduction to Physics", students: 22, instructor: "Prof. Johnson", department: "Science" },
        { id: 3, name: "World History", students: 35, instructor: "Dr. Williams", department: "Humanities" },
        { id: 4, name: "English Literature", students: 30, instructor: "Prof. Davis", department: "Humanities" },
      ],
      notifications: [
        {
          id: 1,
          title: "New Support Ticket",
          message: "High priority ticket: Login issues",
          time: "1 hour ago",
          read: false,
        },
        { id: 2, title: "System Alert", message: "Storage space running low (68%)", time: "Today", read: false },
        {
          id: 3,
          title: "New Course Request",
          message: "Dr. Williams requested to create Advanced Biology",
          time: "2 days ago",
          read: true,
        },
        {
          id: 4,
          title: "Report Ready",
          message: "Monthly usage report is ready for review",
          time: "1 week ago",
          read: true,
        },
      ],
    },
  }

  // Get current user data based on role
  const currentUser = userData[role as keyof typeof userData]

  // Handle search
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Searching for:", searchQuery)
    // Implement search functionality here
  }

  return (
    <div className="container mx-auto p-4 md:p-6">
      <DashboardHeader
        title={`Welcome, ${currentUser.name}`}
        description={`Your ${currentUser.role} Dashboard`}
        avatar={currentUser.avatar}
        role={currentUser.role}
      />

      <div className="flex flex-col md:flex-row gap-6 mt-6">
        {/* Main Content */}
        <div className="flex-1 space-y-6">
          {/* Search and Quick Actions */}
          <div className="flex flex-col sm:flex-row gap-4">
            <DashboardSearch onSearch={handleSearch} setSearchQuery={setSearchQuery} searchQuery={searchQuery} />

            <div className="flex gap-2 ml-auto">
              <NotificationsPopover notifications={currentUser.notifications} />
              <HelpPopover />
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {currentUser.stats?.map((stat, index) => (
              <Card key={index} className="overflow-hidden">
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

          {/* Dashboard Tabs */}
          <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 mb-6">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="courses">Courses</TabsTrigger>
              {role === "student" && <TabsTrigger value="assignments">Assignments</TabsTrigger>}
              {role === "teacher" && <TabsTrigger value="grading">Grading</TabsTrigger>}
              {role === "admin" && <TabsTrigger value="users">Users</TabsTrigger>}
              <TabsTrigger value="calendar">Calendar</TabsTrigger>
              {role === "admin" && <TabsTrigger value="reports">Reports</TabsTrigger>}
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Recent Activity */}
                <Card className="lg:col-span-2">
                  <CardHeader>
                    <CardTitle>Recent Activity</CardTitle>
                    <CardDescription>Your latest actions and updates</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-[300px]">
                      <div className="space-y-4">
                        {currentUser.recentActivity?.map((activity) => (
                          <div key={activity.id} className="flex items-start gap-4 border-b pb-4 last:border-0">
                            <div className={`rounded-full p-2 ${getActivityIconColor(activity.type)}`}>
                              {getActivityIcon(activity.type)}
                            </div>
                            <div className="flex-1">
                              <p className="font-medium">{activity.title}</p>
                              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                                {activity.course && <span className="mr-2">{activity.course}</span>}
                                {activity.user && <span className="mr-2">{activity.user}</span>}
                                <span>•</span>
                                <span className="ml-2">{activity.time}</span>
                              </div>
                            </div>
                            <Button variant="ghost" size="icon" className="ml-auto">
                              <ArrowUpRight className="h-4 w-4" />
                            </Button>
                          </div>
                        ))}
                      </div>
                    </ScrollArea>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      View All Activity
                    </Button>
                  </CardFooter>
                </Card>

                {/* Upcoming Events */}
                <Card>
                  <CardHeader>
                    <CardTitle>Upcoming Events</CardTitle>
                    <CardDescription>Your schedule</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-[300px]">
                      <div className="space-y-4">
                        {currentUser.upcomingEvents?.map((event) => (
                          <div key={event.id} className="border-b pb-4 last:border-0">
                            <h3 className="font-medium">{event.title}</h3>
                            <div className="flex items-center mt-1">
                              <Calendar className="mr-2 h-4 w-4 text-gray-500 dark:text-gray-400" />
                              <span className="text-sm">{event.date}</span>
                            </div>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{event.location}</p>
                          </div>
                        ))}
                      </div>
                    </ScrollArea>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href={`/dashboard/${role}/calendar`}>View Calendar</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>

              {/* Role-specific content */}
              {role === "student" && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Course Progress */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Course Progress</CardTitle>
                      <CardDescription>Track your learning journey</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {currentUser.courses?.map((course) => (
                          <div key={course.id} className="space-y-2">
                            <div className="flex justify-between">
                              <span className="font-medium">{course.name}</span>
                              <span>{course.progress}%</span>
                            </div>
                            <Progress value={course.progress} className="h-2" />
                            <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
                              <span>{course.instructor}</span>
                              <span>Next: {course.nextClass}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full" asChild>
                        <Link href={`/dashboard/${role}/courses`}>View All Courses</Link>
                      </Button>
                    </CardFooter>
                  </Card>

                  {/* Assignments */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Assignments</CardTitle>
                      <CardDescription>Upcoming and recent assignments</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {currentUser.assignments?.map((assignment) => (
                          <div
                            key={assignment.id}
                            className="flex justify-between items-center border-b pb-4 last:border-0"
                          >
                            <div>
                              <h3 className="font-medium">{assignment.title}</h3>
                              <p className="text-sm text-gray-500 dark:text-gray-400">{assignment.course}</p>
                            </div>
                            <div className="flex flex-col items-end">
                              <Badge variant={assignment.status === "pending" ? "secondary" : "outline"}>
                                {assignment.status === "pending" ? "Pending" : "Completed"}
                              </Badge>
                              <span className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                                Due: {assignment.dueDate}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full" asChild>
                        <Link href={`/dashboard/${role}/assignments`}>View All Assignments</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              )}

              {role === "teacher" && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Courses */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Your Courses</CardTitle>
                      <CardDescription>Courses you're teaching this semester</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {currentUser.courses?.map((course) => (
                          <div
                            key={course.id}
                            className="flex justify-between items-center border-b pb-4 last:border-0"
                          >
                            <div>
                              <h3 className="font-medium">{course.name}</h3>
                              <p className="text-sm text-gray-500 dark:text-gray-400">{course.students} students</p>
                            </div>
                            <div className="flex flex-col items-end">
                              <span className="text-sm">{course.room}</span>
                              <span className="text-xs text-gray-500 dark:text-gray-400">Next: {course.nextClass}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full" asChild>
                        <Link href={`/dashboard/${role}/courses`}>Manage Courses</Link>
                      </Button>
                    </CardFooter>
                  </Card>

                  {/* Pending Grading */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Pending Grading</CardTitle>
                      <CardDescription>Assignments waiting for review</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {currentUser.pendingGrading?.map((item) => (
                          <div key={item.id} className="border-b pb-4 last:border-0">
                            <h3 className="font-medium">{item.title}</h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400">{item.course}</p>
                            <div className="flex justify-between items-center mt-2">
                              <span className="text-sm">{item.submissions} submissions</span>
                              <span className="text-sm text-gray-500 dark:text-gray-400">Due: {item.dueDate}</span>
                            </div>
                            <Button variant="outline" size="sm" className="mt-2 w-full" asChild>
                              <Link href={`/dashboard/${role}/grading/${item.id}`}>Grade Now</Link>
                            </Button>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full" asChild>
                        <Link href={`/dashboard/${role}/grading`}>View All Grading</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              )}

              {role === "admin" && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Pending Approvals */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Pending Approvals</CardTitle>
                      <CardDescription>Items requiring administrator action</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {currentUser.pendingApprovals?.map((item) => (
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
                    <CardFooter>
                      <Button variant="outline" className="w-full" asChild>
                        <Link href={`/dashboard/${role}/approvals`}>View All Approvals</Link>
                      </Button>
                    </CardFooter>
                  </Card>

                  {/* System Alerts */}
                  <Card>
                    <CardHeader>
                      <CardTitle>System Alerts</CardTitle>
                      <CardDescription>Notifications about system status</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {currentUser.systemAlerts?.map((alert) => (
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
                        <Link href={`/dashboard/${role}/system`}>View System Status</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              )}

              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                  <CardDescription>Frequently used tools and features</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {getQuickActions(role).map((action, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        className="h-auto flex flex-col items-center justify-center p-4 gap-2"
                        asChild
                      >
                        <Link href={action.href}>
                          <action.icon className="h-6 w-6" />
                          <span className="text-center text-sm">{action.name}</span>
                        </Link>
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Courses Tab */}
            <TabsContent value="courses">
              <DashboardWidgets.Courses role={role} data={currentUser} />
            </TabsContent>

            {/* Assignments Tab (Student) */}
            {role === "student" && (
              <TabsContent value="assignments">
                <DashboardWidgets.Assignments data={currentUser} />
              </TabsContent>
            )}

            {/* Grading Tab (Teacher) */}
            {role === "teacher" && (
              <TabsContent value="grading">
                <DashboardWidgets.Grading data={currentUser} />
              </TabsContent>
            )}

            {/* Users Tab (Admin) */}
            {role === "admin" && (
              <TabsContent value="users">
                <DashboardWidgets.Users data={currentUser} />
              </TabsContent>
            )}

            {/* Calendar Tab */}
            <TabsContent value="calendar">
              <DashboardWidgets.Calendar role={role} data={currentUser} />
            </TabsContent>

            {/* Reports Tab (Admin) */}
            {role === "admin" && (
              <TabsContent value="reports">
                <DashboardWidgets.Reports data={currentUser} />
              </TabsContent>
            )}
          </Tabs>
        </div>
      </div>
    </div>
  )
}

// Helper functions
function getActivityIcon(type: string) {
  switch (type) {
    case "assignment":
      return <FileText className="h-4 w-4" />
    case "grade":
      return <BarChart className="h-4 w-4" />
    case "forum":
      return <MessageSquare className="h-4 w-4" />
    case "attendance":
      return <Clock className="h-4 w-4" />
    case "content":
      return <BookOpen className="h-4 w-4" />
    case "user":
      return <Users className="h-4 w-4" />
    case "course":
      return <GraduationCap className="h-4 w-4" />
    case "system":
      return <Settings className="h-4 w-4" />
    case "report":
      return <FileText className="h-4 w-4" />
    default:
      return <Bell className="h-4 w-4" />
  }
}

function getActivityIconColor(type: string) {
  switch (type) {
    case "assignment":
      return "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400"
    case "grade":
      return "bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400"
    case "forum":
      return "bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400"
    case "attendance":
      return "bg-yellow-100 dark:bg-yellow-900 text-yellow-600 dark:text-yellow-400"
    case "content":
      return "bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400"
    case "user":
      return "bg-pink-100 dark:bg-pink-900 text-pink-600 dark:text-pink-400"
    case "course":
      return "bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-400"
    case "system":
      return "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
    case "report":
      return "bg-teal-100 dark:bg-teal-900 text-teal-600 dark:text-teal-400"
    default:
      return "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400"
  }
}

function getQuickActions(role: string) {
  if (!role) return []

  const commonActions = [
    { name: "Calendar", href: `/dashboard/${role}/calendar`, icon: Calendar },
    { name: "Messages", href: `/dashboard/${role}/messages`, icon: MessageSquare },
    { name: "Settings", href: `/dashboard/${role}/settings`, icon: Settings },
  ]

  if (role === "student") {
    return [
      { name: "My Courses", href: `/dashboard/${role}/courses`, icon: BookOpen },
      { name: "Assignments", href: `/dashboard/${role}/assignments`, icon: FileText },
      { name: "Grades", href: `/dashboard/${role}/grades`, icon: BarChart },
      { name: "Attendance", href: `/dashboard/${role}/attendance`, icon: Clock },
      { name: "Forums", href: `/dashboard/${role}/forums`, icon: MessageSquare },
      ...commonActions,
    ]
  } else if (role === "teacher") {
    return [
      { name: "My Courses", href: `/dashboard/${role}/courses`, icon: BookOpen },
      { name: "Create Course", href: `/dashboard/${role}/courses/create`, icon: Plus },
      { name: "Students", href: `/dashboard/${role}/students`, icon: Users },
      { name: "Grading", href: `/dashboard/${role}/grading`, icon: FileText },
      { name: "Analytics", href: `/dashboard/${role}/analytics`, icon: BarChart },
      ...commonActions,
    ]
  } else {
    return [
      { name: "Users", href: `/dashboard/${role}/users`, icon: Users },
      { name: "Courses", href: `/dashboard/${role}/courses`, icon: BookOpen },
      { name: "Reports", href: `/dashboard/${role}/reports`, icon: BarChart },
      { name: "System", href: `/dashboard/${role}/system`, icon: Settings },
      { name: "Approvals", href: `/dashboard/${role}/approvals`, icon: CheckCircle },
      ...commonActions,
    ]
  }
}
