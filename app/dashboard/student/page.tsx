import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Calendar, Clock, FileText } from "lucide-react"
import Link from "next/link"

export default function StudentDashboard() {
  // Mock data
  const courses = [
    { id: 1, name: "Mathematics 101", progress: 75, instructor: "Dr. Smith", nextClass: "Tomorrow, 10:00 AM" },
    {
      id: 2,
      name: "Introduction to Physics",
      progress: 60,
      instructor: "Prof. Johnson",
      nextClass: "Wednesday, 2:00 PM",
    },
    { id: 3, name: "World History", progress: 40, instructor: "Dr. Williams", nextClass: "Friday, 11:00 AM" },
    { id: 4, name: "English Literature", progress: 90, instructor: "Prof. Davis", nextClass: "Thursday, 1:00 PM" },
  ]

  const upcomingAssignments = [
    { id: 1, title: "Math Problem Set 5", course: "Mathematics 101", dueDate: "Tomorrow, 11:59 PM" },
    { id: 2, title: "Physics Lab Report", course: "Introduction to Physics", dueDate: "Friday, 5:00 PM" },
    { id: 3, title: "Historical Essay", course: "World History", dueDate: "Next Monday, 9:00 AM" },
  ]

  const upcomingEvents = [
    { id: 1, title: "Math Midterm Exam", date: "May 15, 10:00 AM", location: "Room 101" },
    { id: 2, title: "Physics Lab Session", date: "May 12, 2:00 PM", location: "Science Building" },
    { id: 3, title: "Study Group Meeting", date: "May 10, 4:00 PM", location: "Library" },
  ]

  return (
    <div className="container mx-auto p-4 md:p-6">
      <div className="grid gap-6">
        <h1 className="text-3xl font-bold">Welcome back, Alex</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Courses Enrolled</CardTitle>
              <BookOpen className="h-4 w-4 text-gray-500 dark:text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{courses.length}</div>
              <p className="text-xs text-gray-500 dark:text-gray-400">Active courses this semester</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Pending Assignments</CardTitle>
              <FileText className="h-4 w-4 text-gray-500 dark:text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{upcomingAssignments.length}</div>
              <p className="text-xs text-gray-500 dark:text-gray-400">Due this week</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Upcoming Events</CardTitle>
              <Calendar className="h-4 w-4 text-gray-500 dark:text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{upcomingEvents.length}</div>
              <p className="text-xs text-gray-500 dark:text-gray-400">Scheduled this week</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="courses">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="courses">My Courses</TabsTrigger>
            <TabsTrigger value="assignments">Assignments</TabsTrigger>
            <TabsTrigger value="calendar">Calendar</TabsTrigger>
          </TabsList>

          <TabsContent value="courses" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {courses.map((course) => (
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
                      <div className="flex justify-end">
                        <Link
                          href={`/dashboard/student/courses/${course.id}`}
                          className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
                        >
                          View course
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="assignments" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Assignments</CardTitle>
                <CardDescription>Assignments due in the next 7 days</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingAssignments.map((assignment) => (
                    <div key={assignment.id} className="flex justify-between items-center border-b pb-4 last:border-0">
                      <div>
                        <h3 className="font-medium">{assignment.title}</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{assignment.course}</p>
                      </div>
                      <div className="flex items-center">
                        <Clock className="mr-2 h-4 w-4 text-gray-500 dark:text-gray-400" />
                        <span className="text-sm">{assignment.dueDate}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="calendar" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Events</CardTitle>
                <CardDescription>Your schedule for the next 7 days</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingEvents.map((event) => (
                    <div key={event.id} className="flex justify-between items-center border-b pb-4 last:border-0">
                      <div>
                        <h3 className="font-medium">{event.title}</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{event.location}</p>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="mr-2 h-4 w-4 text-gray-500 dark:text-gray-400" />
                        <span className="text-sm">{event.date}</span>
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
