import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { BookOpen, Calendar, Clock, FileText, Plus, Users } from "lucide-react"
import Link from "next/link"

export default function TeacherDashboard() {
  // Mock data
  const courses = [
    { id: 1, name: "Mathematics 101", students: 28, nextClass: "Today, 10:00 AM", room: "Room 101" },
    { id: 2, name: "Advanced Calculus", students: 15, nextClass: "Tomorrow, 2:00 PM", room: "Room 203" },
    { id: 3, name: "Statistics for Science", students: 22, nextClass: "Friday, 11:00 AM", room: "Room 105" },
  ]

  const pendingGrading = [
    { id: 1, title: "Problem Set 5", course: "Mathematics 101", submissions: 25, dueDate: "Yesterday" },
    { id: 2, title: "Midterm Exam", course: "Advanced Calculus", submissions: 15, dueDate: "3 days ago" },
    { id: 3, title: "Project Proposal", course: "Statistics for Science", submissions: 20, dueDate: "Last week" },
  ]

  const upcomingEvents = [
    { id: 1, title: "Department Meeting", date: "Today, 3:00 PM", location: "Conference Room A" },
    { id: 2, title: "Office Hours", date: "Tomorrow, 1:00 PM", location: "Office 302" },
    { id: 3, title: "Math Club Mentoring", date: "Friday, 4:00 PM", location: "Student Center" },
  ]

  const recentStudentActivity = [
    { id: 1, name: "Emma Wilson", action: "submitted assignment", course: "Mathematics 101", time: "2 hours ago" },
    { id: 2, name: "James Brown", action: "asked a question", course: "Advanced Calculus", time: "5 hours ago" },
    { id: 3, name: "Sophia Lee", action: "completed quiz", course: "Statistics for Science", time: "Yesterday" },
    { id: 4, name: "Noah Garcia", action: "viewed lecture notes", course: "Mathematics 101", time: "Yesterday" },
  ]

  return (
    <div className="container mx-auto p-4 md:p-6">
      <div className="grid gap-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Welcome back, Professor Johnson</h1>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Create New Course
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Active Courses</CardTitle>
              <BookOpen className="h-4 w-4 text-gray-500 dark:text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{courses.length}</div>
              <p className="text-xs text-gray-500 dark:text-gray-400">This semester</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total Students</CardTitle>
              <Users className="h-4 w-4 text-gray-500 dark:text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{courses.reduce((acc, course) => acc + course.students, 0)}</div>
              <p className="text-xs text-gray-500 dark:text-gray-400">Across all courses</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Pending Grading</CardTitle>
              <FileText className="h-4 w-4 text-gray-500 dark:text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{pendingGrading.length}</div>
              <p className="text-xs text-gray-500 dark:text-gray-400">Assignments to grade</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Upcoming Events</CardTitle>
              <Calendar className="h-4 w-4 text-gray-500 dark:text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{upcomingEvents.length}</div>
              <p className="text-xs text-gray-500 dark:text-gray-400">This week</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Your Courses</CardTitle>
              <CardDescription>Manage your active courses</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {courses.map((course) => (
                  <div
                    key={course.id}
                    className="flex flex-col md:flex-row justify-between items-start md:items-center border-b pb-4 last:border-0"
                  >
                    <div>
                      <h3 className="font-medium">{course.name}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{course.students} students enrolled</p>
                    </div>
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4 mt-2 md:mt-0">
                      <div className="flex items-center">
                        <Clock className="mr-2 h-4 w-4 text-gray-500 dark:text-gray-400" />
                        <span className="text-sm">{course.nextClass}</span>
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">{course.room}</div>
                      <Button variant="outline" size="sm" asChild>
                        <Link href={`/dashboard/teacher/courses/${course.id}`}>Manage</Link>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full" asChild>
                <Link href="/dashboard/teacher/courses">View All Courses</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Pending Grading</CardTitle>
              <CardDescription>Assignments waiting for review</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {pendingGrading.map((item) => (
                  <div key={item.id} className="border-b pb-4 last:border-0">
                    <h3 className="font-medium">{item.title}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{item.course}</p>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-sm">{item.submissions} submissions</span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">Due: {item.dueDate}</span>
                    </div>
                    <Button variant="outline" size="sm" className="mt-2 w-full" asChild>
                      <Link href={`/dashboard/teacher/grading/${item.id}`}>Grade Now</Link>
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Recent Student Activity</CardTitle>
              <CardDescription>Latest actions from your students</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentStudentActivity.map((activity) => (
                  <div key={activity.id} className="flex items-center gap-4 border-b pb-4 last:border-0">
                    <Avatar>
                      <AvatarImage src={`/placeholder.svg?height=40&width=40`} alt={activity.name} />
                      <AvatarFallback>
                        {activity.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="text-sm font-medium">
                        {activity.name} {activity.action}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {activity.course} • {activity.time}
                      </p>
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

          <Card>
            <CardHeader>
              <CardTitle>Upcoming Schedule</CardTitle>
              <CardDescription>Your events for this week</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingEvents.map((event) => (
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
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full" asChild>
                <Link href="/dashboard/teacher/calendar">View Calendar</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}
