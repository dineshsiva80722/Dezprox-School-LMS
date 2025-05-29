"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { Progress } from "@/components/ui/progress"
import { CalendarIcon, CheckCircle, Clock, Download, XCircle } from "lucide-react"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import { useState } from "react"

export default function StudentAttendancePage() {
  const [date, setDate] = useState<Date>()

  // Mock data
  const attendanceData = {
    overallRate: 92,
    totalClasses: 45,
    attended: 41,
    missed: 4,
    courses: [
      {
        id: 1,
        name: "Mathematics 101",
        attendanceRate: 95,
        totalClasses: 20,
        attended: 19,
        missed: 1,
        sessions: [
          { date: "2023-05-01", status: "present", time: "10:00 AM - 11:30 AM" },
          { date: "2023-05-03", status: "present", time: "10:00 AM - 11:30 AM" },
          { date: "2023-05-08", status: "present", time: "10:00 AM - 11:30 AM" },
          { date: "2023-05-10", status: "present", time: "10:00 AM - 11:30 AM" },
          { date: "2023-05-15", status: "absent", time: "10:00 AM - 11:30 AM" },
          { date: "2023-05-17", status: "present", time: "10:00 AM - 11:30 AM" },
          { date: "2023-05-22", status: "present", time: "10:00 AM - 11:30 AM" },
        ],
      },
      {
        id: 2,
        name: "Physics 202",
        attendanceRate: 90,
        totalClasses: 10,
        attended: 9,
        missed: 1,
        sessions: [
          { date: "2023-05-02", status: "present", time: "2:00 PM - 3:30 PM" },
          { date: "2023-05-09", status: "present", time: "2:00 PM - 3:30 PM" },
          { date: "2023-05-16", status: "present", time: "2:00 PM - 3:30 PM" },
          { date: "2023-05-23", status: "absent", time: "2:00 PM - 3:30 PM" },
        ],
      },
      {
        id: 3,
        name: "History 101",
        attendanceRate: 87,
        totalClasses: 15,
        attended: 13,
        missed: 2,
        sessions: [
          { date: "2023-05-04", status: "present", time: "11:00 AM - 12:30 PM" },
          { date: "2023-05-11", status: "absent", time: "11:00 AM - 12:30 PM" },
          { date: "2023-05-18", status: "present", time: "11:00 AM - 12:30 PM" },
          { date: "2023-05-25", status: "absent", time: "11:00 AM - 12:30 PM" },
        ],
      },
    ],
    recentSessions: [
      {
        id: 1,
        course: "Mathematics 101",
        date: "May 22, 2023",
        time: "10:00 AM - 11:30 AM",
        status: "present",
      },
      {
        id: 2,
        course: "Physics 202",
        date: "May 23, 2023",
        time: "2:00 PM - 3:30 PM",
        status: "absent",
      },
      {
        id: 3,
        course: "History 101",
        date: "May 25, 2023",
        time: "11:00 AM - 12:30 PM",
        status: "absent",
      },
    ],
  }

  return (
    <div className="container mx-auto p-4 md:p-6">
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold">Attendance</h1>
            <p className="text-gray-500 dark:text-gray-400">Track your class attendance</p>
          </div>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export Report
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Overall Attendance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{attendanceData.overallRate}%</div>
              <Progress value={attendanceData.overallRate} className="h-2 mt-2" />
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                {attendanceData.attended} of {attendanceData.totalClasses} classes attended
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Total Classes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{attendanceData.totalClasses}</div>
              <p className="text-xs text-gray-500 dark:text-gray-400">This semester</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Classes Attended</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{attendanceData.attended}</div>
              <p className="text-xs text-gray-500 dark:text-gray-400">This semester</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Classes Missed</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{attendanceData.missed}</div>
              <p className="text-xs text-gray-500 dark:text-gray-400">This semester</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="courses">
          <TabsList>
            <TabsTrigger value="courses">By Course</TabsTrigger>
            <TabsTrigger value="calendar">Calendar View</TabsTrigger>
            <TabsTrigger value="recent">Recent Sessions</TabsTrigger>
          </TabsList>
          <TabsContent value="courses" className="mt-6">
            <div className="space-y-6">
              {attendanceData.courses.map((course) => (
                <Card key={course.id}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle>{course.name}</CardTitle>
                      <Badge
                        className={
                          course.attendanceRate >= 90
                            ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                            : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
                        }
                      >
                        {course.attendanceRate}% Attendance
                      </Badge>
                    </div>
                    <CardDescription>
                      {course.attended} of {course.totalClasses} classes attended
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <Progress value={course.attendanceRate} className="h-2" />
                      <div className="rounded-md border">
                        <div className="grid grid-cols-1 md:grid-cols-3 p-3 font-medium">
                          <div>Date</div>
                          <div>Time</div>
                          <div>Status</div>
                        </div>
                        <Separator />
                        {course.sessions.map((session, index) => (
                          <div key={index} className="grid grid-cols-1 md:grid-cols-3 p-3">
                            <div>{session.date}</div>
                            <div>{session.time}</div>
                            <div>
                              {session.status === "present" ? (
                                <Badge
                                  variant="outline"
                                  className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                                >
                                  <CheckCircle className="mr-1 h-3 w-3" /> Present
                                </Badge>
                              ) : (
                                <Badge
                                  variant="outline"
                                  className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
                                >
                                  <XCircle className="mr-1 h-3 w-3" /> Absent
                                </Badge>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="calendar" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Attendance Calendar</CardTitle>
                <CardDescription>View your attendance by date</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/2">
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant={"outline"}
                          className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {date ? format(date, "PPP") : "Pick a date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                      </PopoverContent>
                    </Popover>

                    {date && (
                      <div className="mt-6 p-4 border rounded-md">
                        <h3 className="font-medium mb-2">{format(date, "MMMM d, yyyy")}</h3>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <Clock className="mr-2 h-4 w-4 text-gray-500" />
                              <span>Mathematics 101</span>
                            </div>
                            <Badge
                              variant="outline"
                              className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                            >
                              <CheckCircle className="mr-1 h-3 w-3" /> Present
                            </Badge>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <Clock className="mr-2 h-4 w-4 text-gray-500" />
                              <span>Physics 202</span>
                            </div>
                            <Badge
                              variant="outline"
                              className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
                            >
                              <XCircle className="mr-1 h-3 w-3" /> Absent
                            </Badge>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="md:w-1/2 border rounded-md p-4">
                    <h3 className="font-medium mb-4">Attendance Legend</h3>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <div className="w-4 h-4 rounded-full bg-green-500 mr-2"></div>
                        <span>Present</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-4 h-4 rounded-full bg-red-500 mr-2"></div>
                        <span>Absent</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-4 h-4 rounded-full bg-yellow-500 mr-2"></div>
                        <span>Excused</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-4 h-4 rounded-full bg-gray-300 mr-2"></div>
                        <span>No Class</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="recent" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Recent Sessions</CardTitle>
                <CardDescription>Your most recent class sessions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border">
                  <div className="grid grid-cols-1 md:grid-cols-4 p-4 font-medium">
                    <div>Course</div>
                    <div>Date</div>
                    <div>Time</div>
                    <div>Status</div>
                  </div>
                  <Separator />
                  {attendanceData.recentSessions.map((session) => (
                    <div key={session.id} className="grid grid-cols-1 md:grid-cols-4 p-4">
                      <div className="font-medium">{session.course}</div>
                      <div>{session.date}</div>
                      <div>{session.time}</div>
                      <div>
                        {session.status === "present" ? (
                          <Badge
                            variant="outline"
                            className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                          >
                            <CheckCircle className="mr-1 h-3 w-3" /> Present
                          </Badge>
                        ) : (
                          <Badge
                            variant="outline"
                            className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
                          >
                            <XCircle className="mr-1 h-3 w-3" /> Absent
                          </Badge>
                        )}
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
