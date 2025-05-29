import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Progress } from "@/components/ui/progress"
import { Clock, AlertTriangle } from "lucide-react"
import Link from "next/link"

export default function StudentQuizPage({ params }: { params: { id: string } }) {
  // Mock quiz data
  const quiz = {
    id: params.id,
    title: "Mathematics Midterm Quiz",
    course: "Mathematics 101",
    timeLimit: "60 minutes",
    totalQuestions: 10,
    instructions: "Answer all questions. Each question is worth 10 points. You have 60 minutes to complete this quiz.",
    questions: [
      {
        id: 1,
        question: "What is the value of x in the equation 2x + 5 = 15?",
        options: [
          { id: "a", text: "5" },
          { id: "b", text: "10" },
          { id: "c", text: "7.5" },
          { id: "d", text: "4" },
        ],
      },
      {
        id: 2,
        question: "If f(x) = x² + 3x + 2, what is f(2)?",
        options: [
          { id: "a", text: "8" },
          { id: "b", text: "10" },
          { id: "c", text: "12" },
          { id: "d", text: "14" },
        ],
      },
      {
        id: 3,
        question: "What is the derivative of f(x) = 3x² + 2x - 1?",
        options: [
          { id: "a", text: "f'(x) = 6x + 2" },
          { id: "b", text: "f'(x) = 3x + 2" },
          { id: "c", text: "f'(x) = 6x² + 2" },
          { id: "d", text: "f'(x) = 3x² + 2x" },
        ],
      },
      {
        id: 4,
        question: "Solve for x: log₁₀(x) = 2",
        options: [
          { id: "a", text: "x = 20" },
          { id: "b", text: "x = 100" },
          { id: "c", text: "x = 10" },
          { id: "d", text: "x = 1000" },
        ],
      },
      {
        id: 5,
        question: "What is the area of a circle with radius 5 units?",
        options: [
          { id: "a", text: "25π square units" },
          { id: "b", text: "10π square units" },
          { id: "c", text: "5π square units" },
          { id: "d", text: "50π square units" },
        ],
      },
    ],
  }

  return (
    <div className="container mx-auto p-4 md:p-6">
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold">{quiz.title}</h1>
            <p className="text-gray-500 dark:text-gray-400">{quiz.course}</p>
          </div>
          <div className="flex items-center gap-2 bg-yellow-50 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-300 px-3 py-2 rounded-md">
            <Clock className="h-5 w-5" />
            <span className="font-medium">Time Remaining: {quiz.timeLimit}</span>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Quiz Instructions</CardTitle>
            <CardDescription>{quiz.instructions}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm">
                Question <span className="font-medium">1</span> of {quiz.totalQuestions}
              </span>
              <Progress value={(1 / quiz.totalQuestions) * 100} className="w-1/2 h-2" />
            </div>
            <div className="space-y-8">
              {quiz.questions.map((question, index) => (
                <div key={question.id} className={index > 0 ? "hidden" : ""}>
                  <h3 className="text-lg font-medium mb-4">
                    Question {question.id}: {question.question}
                  </h3>
                  <RadioGroup className="space-y-3">
                    {question.options.map((option) => (
                      <div key={option.id} className="flex items-center space-x-2 border p-3 rounded-md">
                        <RadioGroupItem value={option.id} id={`q${question.id}-${option.id}`} />
                        <Label htmlFor={`q${question.id}-${option.id}`} className="flex-1">
                          {option.text}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" disabled>
              Previous
            </Button>
            <div className="flex items-center gap-2">
              <Button variant="outline">Save Progress</Button>
              <Button>Next Question</Button>
            </div>
          </CardFooter>
        </Card>

        <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border">
          <div className="flex items-center gap-2 mb-4">
            <AlertTriangle className="h-5 w-5 text-yellow-500" />
            <h3 className="font-medium">Quiz Navigation</h3>
          </div>
          <div className="grid grid-cols-5 sm:grid-cols-10 gap-2">
            {Array.from({ length: quiz.totalQuestions }).map((_, i) => (
              <Button key={i} variant={i === 0 ? "default" : "outline"} size="sm" className="w-full">
                {i + 1}
              </Button>
            ))}
          </div>
          <Separator className="my-4" />
          <div className="flex justify-end">
            <Button variant="destructive" asChild>
              <Link href={`/dashboard/student/quizzes/${quiz.id}/submit`}>Submit Quiz</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
