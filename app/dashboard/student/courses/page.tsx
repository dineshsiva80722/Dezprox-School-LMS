import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Clock, Search, Filter } from "lucide-react"
import Link from "next/link"

export default function StudentCoursesPage() {
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
    { id: 5, name: "Biology 101", progress: 65, instructor: "Dr. Martinez", nextClass: "Monday, 9:00 AM" },
    { id: 6, name: "Computer Science Basics", progress: 80, instructor: "Prof. Wilson", nextClass: "Tuesday, 3:00 PM" },
  ]

  return (
    <div className="container mx-auto p-4 md:p-6">
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold">My Courses</h1>
            <p className="text-gray-500 dark:text-gray-400">Manage and access your enrolled courses</p>
          </div>
          <Button asChild>
            <Link href="/dashboard/student/courses/browse">Browse More Courses</Link>
          </Button>
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

        <Tabs defaultValue="all">
          <TabsList>
            <TabsTrigger value="all">All Courses</TabsTrigger>
            <TabsTrigger value="in-progress">In Progress</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
          </TabsList>
          <TabsContent value="all" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full" asChild>
                      <Link href={`/dashboard/student/courses/${course.id}`}>View Course</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="in-progress" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses
                .filter((course) => course.progress > 0 && course.progress < 100)
                .map((course) => (
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
            </div>
          </TabsContent>
          <TabsContent value="completed" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses
                .filter((course) => course.progress === 100)
                .map((course) => (
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
                          <BookOpen className="mr-2 h-4 w-4 text-gray-500 dark:text-gray-400" />
                          <span>Course completed</span>
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
              {courses.filter((course) => course.progress === 100).length === 0 && (
                <div className="col-span-3 text-center py-12">
                  <h3 className="text-lg font-medium">No completed courses yet</h3>
                  <p className="text-gray-500 dark:text-gray-400 mt-1">Keep learning to complete your courses!</p>
                </div>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
