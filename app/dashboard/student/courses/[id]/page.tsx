import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Calendar, Clock, Download, FileText, MessageSquare, Play, User } from "lucide-react"
import Link from "next/link"

export default function CourseDetailPage({ params }: { params: { id: string } }) {
  // Mock course data
  const course = {
    id: params.id,
    name: "Mathematics 101",
    description: "Introduction to fundamental mathematical concepts and problem-solving techniques.",
    instructor: "Dr. Smith",
    progress: 75,
    nextClass: "Tomorrow, 10:00 AM",
    room: "Room 101",
    startDate: "January 15, 2023",
    endDate: "May 30, 2023",
  }

  // Mock modules data
  const modules = [
    {
      id: 1,
      title: "Introduction to Algebra",
      description: "Basic algebraic concepts and operations",
      completed: true,
      materials: [
        { id: 1, title: "Lecture Notes: Intro to Algebra", type: "pdf", size: "2.4 MB" },
        { id: 2, title: "Algebraic Operations Video", type: "video", duration: "45 min" },
      ],
    },
    {
      id: 2,
      title: "Linear Equations",
      description: "Solving linear equations and applications",
      completed: true,
      materials: [
        { id: 3, title: "Linear Equations Slides", type: "pdf", size: "1.8 MB" },
        { id: 4, title: "Problem Set 1", type: "pdf", size: "500 KB" },
      ],
    },
    {
      id: 3,
      title: "Quadratic Equations",
      description: "Solving quadratic equations using various methods",
      completed: false,
      materials: [
        { id: 5, title: "Quadratic Equations Lecture", type: "video", duration: "50 min" },
        { id: 6, title: "Practice Problems", type: "pdf", size: "750 KB" },
      ],
    },
    {
      id: 4,
      title: "Functions and Graphs",
      description: "Understanding functions and their graphical representations",
      completed: false,
      materials: [
        { id: 7, title: "Functions Overview", type: "pdf", size: "3.2 MB" },
        { id: 8, title: "Graphing Tutorial", type: "video", duration: "35 min" },
      ],
    },
  ]

  // Mock assignments data
  const assignments = [
    {
      id: 1,
      title: "Problem Set 1: Algebraic Operations",
      dueDate: "February 10, 2023",
      status: "Completed",
      grade: "92%",
    },
    {
      id: 2,
      title: "Problem Set 2: Linear Equations",
      dueDate: "March 5, 2023",
      status: "Completed",
      grade: "88%",
    },
    {
      id: 3,
      title: "Problem Set 3: Quadratic Equations",
      dueDate: "April 2, 2023",
      status: "Pending",
      grade: "-",
    },
    {
      id: 4,
      title: "Midterm Exam",
      dueDate: "March 15, 2023",
      status: "Completed",
      grade: "90%",
    },
    {
      id: 5,
      title: "Final Project",
      dueDate: "May 20, 2023",
      status: "Not Started",
      grade: "-",
    },
  ]

  // Mock discussion data
  const discussions = [
    {
      id: 1,
      title: "Help with Problem 3 in Assignment 2",
      author: "Emma Wilson",
      date: "March 2, 2023",
      replies: 5,
      lastActivity: "2 days ago",
    },
    {
      id: 2,
      title: "Clarification on Quadratic Formula",
      author: "James Brown",
      date: "March 10, 2023",
      replies: 3,
      lastActivity: "Yesterday",
    },
    {
      id: 3,
      title: "Study Group for Midterm",
      author: "Sophia Lee",
      date: "March 8, 2023",
      replies: 8,
      lastActivity: "5 hours ago",
    },
  ]

  return (
    <div className="container mx-auto p-4 md:p-6">
      <div className="grid gap-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Link
                href="/dashboard/student/courses"
                className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
              >
                My Courses
              </Link>
              <span className="text-sm text-gray-500 dark:text-gray-400">/</span>
              <span className="text-sm">{course.name}</span>
            </div>
            <h1 className="text-3xl font-bold">{course.name}</h1>
            <p className="text-gray-500 dark:text-gray-400 mt-1">{course.description}</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" asChild>
              <Link href={`/dashboard/student/courses/${course.id}/grades`}>View Grades</Link>
            </Button>
            <Button>
              <MessageSquare className="mr-2 h-4 w-4" />
              Contact Instructor
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Course Progress</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Overall Progress</span>
                  <span>{course.progress}%</span>
                </div>
                <Progress value={course.progress} className="h-2" />
              </div>

              <div className="pt-4 space-y-4">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src="/placeholder.svg?height=40&width=40" alt={course.instructor} />
                    <AvatarFallback>
                      {course.instructor
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{course.instructor}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Instructor</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                    <span className="text-sm">Next class: {course.nextClass}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                    <span className="text-sm">Location: {course.room}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                    <span className="text-sm">
                      Course dates: {course.startDate} - {course.endDate}
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="md:col-span-2">
            <Tabs defaultValue="modules">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Course Content</CardTitle>
                  <TabsList>
                    <TabsTrigger value="modules">Modules</TabsTrigger>
                    <TabsTrigger value="assignments">Assignments</TabsTrigger>
                    <TabsTrigger value="discussions">Discussions</TabsTrigger>
                  </TabsList>
                </div>
              </CardHeader>
              <CardContent>
                <TabsContent value="modules" className="space-y-6">
                  {modules.map((module) => (
                    <div key={module.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="font-medium">{module.title}</h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400">{module.description}</p>
                        </div>
                        <Badge variant={module.completed ? "default" : "outline"}>
                          {module.completed ? "Completed" : "In Progress"}
                        </Badge>
                      </div>

                      <div className="mt-4 space-y-2">
                        {module.materials.map((material) => (
                          <div
                            key={material.id}
                            className="flex items-center justify-between bg-gray-50 dark:bg-gray-800 p-2 rounded"
                          >
                            <div className="flex items-center gap-2">
                              {material.type === "video" ? (
                                <Play className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                              ) : (
                                <FileText className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                              )}
                              <span className="text-sm">{material.title}</span>
                              <span className="text-xs text-gray-500 dark:text-gray-400">
                                {material.type === "video" ? material.duration : material.size}
                              </span>
                            </div>
                            <Button variant="ghost" size="sm">
                              <Download className="h-4 w-4" />
                              <span className="sr-only">Download</span>
                            </Button>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </TabsContent>

                <TabsContent value="assignments" className="space-y-1">
                  <div className="border rounded-lg overflow-hidden">
                    <table className="w-full">
                      <thead>
                        <tr className="bg-gray-50 dark:bg-gray-800">
                          <th className="text-left p-3 text-sm font-medium">Assignment</th>
                          <th className="text-left p-3 text-sm font-medium">Due Date</th>
                          <th className="text-left p-3 text-sm font-medium">Status</th>
                          <th className="text-left p-3 text-sm font-medium">Grade</th>
                          <th className="text-right p-3 text-sm font-medium">Action</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y">
                        {assignments.map((assignment) => (
                          <tr key={assignment.id} className="hover:bg-gray-50 dark:hover:bg-gray-800">
                            <td className="p-3 text-sm">{assignment.title}</td>
                            <td className="p-3 text-sm">{assignment.dueDate}</td>
                            <td className="p-3 text-sm">
                              <Badge
                                variant={
                                  assignment.status === "Completed"
                                    ? "default"
                                    : assignment.status === "Pending"
                                      ? "secondary"
                                      : "outline"
                                }
                              >
                                {assignment.status}
                              </Badge>
                            </td>
                            <td className="p-3 text-sm">{assignment.grade}</td>
                            <td className="p-3 text-sm text-right">
                              <Button variant="outline" size="sm">
                                View
                              </Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </TabsContent>

                <TabsContent value="discussions" className="space-y-4">
                  {discussions.map((discussion) => (
                    <div key={discussion.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-medium">{discussion.title}</h3>
                          <div className="flex items-center gap-2 mt-1">
                            <User className="h-3 w-3 text-gray-500 dark:text-gray-400" />
                            <span className="text-xs text-gray-500 dark:text-gray-400">{discussion.author}</span>
                            <span className="text-xs text-gray-500 dark:text-gray-400">•</span>
                            <span className="text-xs text-gray-500 dark:text-gray-400">{discussion.date}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="text-xs bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-full">
                            {discussion.replies} replies
                          </div>
                          <div className="text-xs text-gray-500 dark:text-gray-400">
                            Last activity: {discussion.lastActivity}
                          </div>
                        </div>
                      </div>
                      <div className="mt-3 flex justify-end">
                        <Button variant="outline" size="sm">
                          View Discussion
                        </Button>
                      </div>
                    </div>
                  ))}
                  <div className="flex justify-center mt-4">
                    <Button>Start New Discussion</Button>
                  </div>
                </TabsContent>
              </CardContent>
            </Tabs>
          </Card>
        </div>
      </div>
    </div>
  )
}
