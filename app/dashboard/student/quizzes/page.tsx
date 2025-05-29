import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"
import { Filter, Search, CheckCircle, AlertCircle } from "lucide-react"
import Link from "next/link"

export default function StudentQuizzesPage() {
  // Mock data
  const quizzes = [
    {
      id: 1,
      title: "Mathematics Midterm Quiz",
      course: "Mathematics 101",
      dueDate: "Tomorrow, 11:59 PM",
      timeLimit: "60 minutes",
      questions: 25,
      status: "upcoming",
    },
    {
      id: 2,
      title: "Physics Concepts Quiz",
      course: "Physics 202",
      dueDate: "Friday, 3:00 PM",
      timeLimit: "45 minutes",
      questions: 20,
      status: "upcoming",
    },
    {
      id: 3,
      title: "Historical Figures Quiz",
      course: "History 101",
      dueDate: "Next Monday, 9:00 AM",
      timeLimit: "30 minutes",
      questions: 15,
      status: "upcoming",
    },
    {
      id: 4,
      title: "Biology Terms Quiz",
      course: "Biology 303",
      dueDate: "Yesterday",
      timeLimit: "40 minutes",
      questions: 30,
      status: "completed",
      score: 85,
      grade: "B",
    },
    {
      id: 5,
      title: "Literature Analysis Quiz",
      course: "English Literature",
      dueDate: "Last week",
      timeLimit: "50 minutes",
      questions: 20,
      status: "completed",
      score: 92,
      grade: "A",
    },
    {
      id: 6,
      title: "Programming Concepts Quiz",
      course: "Computer Science",
      dueDate: "2 weeks ago",
      timeLimit: "60 minutes",
      questions: 25,
      status: "completed",
      score: 78,
      grade: "C+",
    },
  ]

  return (
    <div className="container mx-auto p-4 md:p-6">
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold">Quizzes</h1>
            <p className="text-gray-500 dark:text-gray-400">Take quizzes and view your results</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
            <Input type="search" placeholder="Search quizzes..." className="pl-8" />
          </div>
          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>
        </div>

        <Tabs defaultValue="upcoming">
          <TabsList>
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
            <TabsTrigger value="all">All Quizzes</TabsTrigger>
          </TabsList>
          <TabsContent value="upcoming" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {quizzes
                .filter((quiz) => quiz.status === "upcoming")
                .map((quiz) => (
                  <Card key={quiz.id}>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle>{quiz.title}</CardTitle>
                        <Badge>Upcoming</Badge>
                      </div>
                      <CardDescription>{quiz.course}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500 dark:text-gray-400">Due Date:</span>
                          <span className="text-sm font-medium">{quiz.dueDate}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500 dark:text-gray-400">Time Limit:</span>
                          <span className="text-sm font-medium">{quiz.timeLimit}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500 dark:text-gray-400">Questions:</span>
                          <span className="text-sm font-medium">{quiz.questions}</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full" asChild>
                        <Link href={`/dashboard/student/quizzes/${quiz.id}`}>Start Quiz</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              {quizzes.filter((quiz) => quiz.status === "upcoming").length === 0 && (
                <div className="col-span-3 text-center py-12">
                  <CheckCircle className="h-12 w-12 mx-auto text-gray-400" />
                  <h3 className="text-lg font-medium mt-2">No upcoming quizzes</h3>
                  <p className="text-gray-500 dark:text-gray-400 mt-1">You're all caught up!</p>
                </div>
              )}
            </div>
          </TabsContent>
          <TabsContent value="completed" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {quizzes
                .filter((quiz) => quiz.status === "completed")
                .map((quiz) => (
                  <Card key={quiz.id}>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle>{quiz.title}</CardTitle>
                        <Badge variant="outline">Completed</Badge>
                      </div>
                      <CardDescription>{quiz.course}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-500 dark:text-gray-400">Score:</span>
                            <span className="text-sm font-medium">{quiz.score}%</span>
                          </div>
                          <Progress value={quiz.score} className="h-2" />
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500 dark:text-gray-400">Grade:</span>
                          <Badge>{quiz.grade}</Badge>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500 dark:text-gray-400">Completed:</span>
                          <span className="text-sm font-medium">{quiz.dueDate}</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full" asChild>
                        <Link href={`/dashboard/student/quizzes/${quiz.id}/results`}>View Results</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              {quizzes.filter((quiz) => quiz.status === "completed").length === 0 && (
                <div className="col-span-3 text-center py-12">
                  <AlertCircle className="h-12 w-12 mx-auto text-gray-400" />
                  <h3 className="text-lg font-medium mt-2">No completed quizzes</h3>
                  <p className="text-gray-500 dark:text-gray-400 mt-1">You haven't completed any quizzes yet</p>
                </div>
              )}
            </div>
          </TabsContent>
          <TabsContent value="all" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>All Quizzes</CardTitle>
                <CardDescription>Complete list of your quizzes</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border">
                  <div className="grid grid-cols-1 md:grid-cols-6 p-4 font-medium">
                    <div className="md:col-span-2">Quiz</div>
                    <div>Course</div>
                    <div>Due Date</div>
                    <div>Status</div>
                    <div className="text-right">Action</div>
                  </div>
                  <Separator />
                  {quizzes.map((quiz) => (
                    <div key={quiz.id} className="grid grid-cols-1 md:grid-cols-6 p-4 items-center">
                      <div className="md:col-span-2 font-medium">{quiz.title}</div>
                      <div>{quiz.course}</div>
                      <div>{quiz.dueDate}</div>
                      <div>
                        <Badge variant={quiz.status === "upcoming" ? "default" : "outline"}>
                          {quiz.status === "upcoming" ? "Upcoming" : "Completed"}
                        </Badge>
                      </div>
                      <div className="text-right">
                        <Button size="sm" variant={quiz.status === "upcoming" ? "default" : "outline"} asChild>
                          <Link
                            href={
                              quiz.status === "upcoming"
                                ? `/dashboard/student/quizzes/${quiz.id}`
                                : `/dashboard/student/quizzes/${quiz.id}/results`
                            }
                          >
                            {quiz.status === "upcoming" ? "Start" : "Results"}
                          </Link>
                        </Button>
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
