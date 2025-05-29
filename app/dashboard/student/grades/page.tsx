import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { BarChart, BookOpen, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function StudentGradesPage() {
  // Mock data
  const courses = [
    {
      id: 1,
      name: "Mathematics 101",
      instructor: "Dr. Smith",
      grade: "A",
      percentage: 92,
      assignments: [
        { id: 1, name: "Problem Set 1", grade: "A", score: 95, maxScore: 100 },
        { id: 2, name: "Problem Set 2", grade: "A-", score: 90, maxScore: 100 },
        { id: 3, name: "Midterm Exam", grade: "A", score: 92, maxScore: 100 },
        { id: 4, name: "Problem Set 3", grade: "A", score: 94, maxScore: 100 },
      ],
    },
    {
      id: 2,
      name: "Physics 202",
      instructor: "Prof. Johnson",
      grade: "B+",
      percentage: 87,
      assignments: [
        { id: 1, name: "Lab Report 1", grade: "B+", score: 88, maxScore: 100 },
        { id: 2, name: "Problem Set 1", grade: "A-", score: 91, maxScore: 100 },
        { id: 3, name: "Midterm Exam", grade: "B", score: 85, maxScore: 100 },
        { id: 4, name: "Lab Report 2", grade: "B+", score: 87, maxScore: 100 },
      ],
    },
    {
      id: 3,
      name: "History 101",
      instructor: "Dr. Williams",
      grade: "A-",
      percentage: 91,
      assignments: [
        { id: 1, name: "Essay 1", grade: "A", score: 95, maxScore: 100 },
        { id: 2, name: "Quiz 1", grade: "B+", score: 88, maxScore: 100 },
        { id: 3, name: "Midterm Exam", grade: "A-", score: 92, maxScore: 100 },
        { id: 4, name: "Group Project", grade: "A-", score: 91, maxScore: 100 },
      ],
    },
    {
      id: 4,
      name: "Biology 303",
      instructor: "Prof. Davis",
      grade: "A",
      percentage: 94,
      assignments: [
        { id: 1, name: "Lab Report 1", grade: "A", score: 96, maxScore: 100 },
        { id: 2, name: "Quiz 1", grade: "A", score: 95, maxScore: 100 },
        { id: 3, name: "Midterm Exam", grade: "A-", score: 92, maxScore: 100 },
        { id: 4, name: "Lab Report 2", grade: "A", score: 94, maxScore: 100 },
      ],
    },
  ]

  // Calculate GPA
  const gpaMap: { [key: string]: number } = {
    "A+": 4.0,
    A: 4.0,
    "A-": 3.7,
    "B+": 3.3,
    B: 3.0,
    "B-": 2.7,
    "C+": 2.3,
    C: 2.0,
    "C-": 1.7,
    "D+": 1.3,
    D: 1.0,
    "D-": 0.7,
    F: 0.0,
  }

  const gpa = courses.reduce((sum, course) => sum + (gpaMap[course.grade] || 0), 0) / courses.length

  return (
    <div className="container mx-auto p-4 md:p-6">
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold">Grades</h1>
            <p className="text-gray-500 dark:text-gray-400">View your academic performance</p>
          </div>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export Transcript
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Current GPA</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{gpa.toFixed(2)}</div>
              <p className="text-xs text-gray-500 dark:text-gray-400">4.0 Scale</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Courses Completed</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{courses.length}</div>
              <p className="text-xs text-gray-500 dark:text-gray-400">This semester</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Assignments Submitted</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {courses.reduce((sum, course) => sum + course.assignments.length, 0)}
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400">This semester</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Average Grade</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {(courses.reduce((sum, course) => sum + course.percentage, 0) / courses.length).toFixed(1)}%
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400">Across all courses</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Grade Distribution</CardTitle>
            <CardDescription>Your grades across all courses</CardDescription>
          </CardHeader>
          <CardContent className="h-80 flex items-center justify-center">
            <div className="text-center">
              <BarChart className="h-16 w-16 mx-auto text-gray-400" />
              <p className="mt-2">Grade distribution chart would appear here</p>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="all-courses">
          <TabsList>
            <TabsTrigger value="all-courses">All Courses</TabsTrigger>
            <TabsTrigger value="current-semester">Current Semester</TabsTrigger>
            <TabsTrigger value="previous-semesters">Previous Semesters</TabsTrigger>
          </TabsList>
          <TabsContent value="all-courses" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Course Grades</CardTitle>
                <CardDescription>Grades for all your courses</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {courses.map((course) => (
                    <div key={course.id} className="border rounded-lg overflow-hidden">
                      <div className="bg-gray-50 dark:bg-gray-800 p-4">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                          <div>
                            <h3 className="font-medium text-lg">{course.name}</h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Instructor: {course.instructor}</p>
                          </div>
                          <div className="flex items-center gap-4">
                            <div className="text-sm">
                              <span className="text-gray-500 dark:text-gray-400">Grade: </span>
                              <Badge className="ml-1">{course.grade}</Badge>
                            </div>
                            <div className="text-sm">
                              <span className="text-gray-500 dark:text-gray-400">Percentage: </span>
                              <span className="font-medium">{course.percentage}%</span>
                            </div>
                          </div>
                        </div>
                        <div className="mt-2">
                          <Progress value={course.percentage} className="h-2" />
                        </div>
                      </div>
                      <div className="p-4">
                        <h4 className="font-medium mb-2">Assignments</h4>
                        <div className="rounded-md border">
                          <div className="grid grid-cols-1 md:grid-cols-4 p-3 font-medium">
                            <div className="md:col-span-2">Assignment</div>
                            <div>Grade</div>
                            <div>Score</div>
                          </div>
                          <Separator />
                          {course.assignments.map((assignment) => (
                            <div key={assignment.id} className="grid grid-cols-1 md:grid-cols-4 p-3">
                              <div className="md:col-span-2 font-medium">{assignment.name}</div>
                              <div>
                                <Badge variant="outline">{assignment.grade}</Badge>
                              </div>
                              <div>
                                {assignment.score}/{assignment.maxScore}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="current-semester" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Current Semester Grades</CardTitle>
                <CardDescription>Grades for your current semester courses</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <BookOpen className="h-12 w-12 mx-auto text-gray-400" />
                  <p className="mt-2">Same content as All Courses tab for this demo</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="previous-semesters" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Previous Semester Grades</CardTitle>
                <CardDescription>Grades from your previous semesters</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <BookOpen className="h-12 w-12 mx-auto text-gray-400" />
                  <p className="mt-2">No previous semester data available</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
