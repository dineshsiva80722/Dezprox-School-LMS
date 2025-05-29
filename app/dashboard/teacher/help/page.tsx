import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Search, ChevronDown, FileText, MessageSquare, Phone, Mail } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function TeacherHelpPage() {
  // Mock data for FAQs
  const faqs = [
    {
      question: "How do I create a new course?",
      answer:
        "To create a new course, go to the Courses page and click on the 'Create New Course' button. Fill in the required information such as course title, description, and schedule, then click 'Create Course'.",
    },
    {
      question: "How do I add assignments to my course?",
      answer:
        "Navigate to your course page, select the Assignments tab, and click 'Add Assignment'. Fill in the assignment details including title, instructions, due date, and point value, then click 'Save'.",
    },
    {
      question: "How do I grade student submissions?",
      answer:
        "Go to the Grading page, select the course and assignment you want to grade. You'll see a list of student submissions. Click on a submission to view it, add comments, and assign a grade.",
    },
    {
      question: "How do I schedule a live class session?",
      answer:
        "Navigate to the Live Classes page and click 'Schedule New Session'. Select the course, date, time, and duration, then click 'Schedule'. Students enrolled in the course will be notified automatically.",
    },
    {
      question: "How do I track student attendance?",
      answer:
        "Go to the Attendance page, select the course and date. You'll see a list of enrolled students where you can mark them as present, absent, or late. The system will automatically calculate attendance rates.",
    },
    {
      question: "How do I create a quiz?",
      answer:
        "Navigate to your course, select the Quizzes tab, and click 'Create Quiz'. Add questions, set time limits and availability dates, then publish the quiz when ready for students to take.",
    },
    {
      question: "How do I communicate with my students?",
      answer:
        "You can use the Messages feature to send individual or group messages to your students. You can also post announcements in your course forum that will be visible to all enrolled students.",
    },
  ]

  // Mock data for resources
  const resources = [
    {
      title: "Teacher Handbook",
      description: "Complete guide to teaching policies and procedures",
      icon: FileText,
      link: "#",
    },
    {
      title: "Video Tutorials",
      description: "Step-by-step guides for using the LMS",
      icon: FileText,
      link: "#",
    },
    {
      title: "Best Practices Guide",
      description: "Tips for effective online teaching",
      icon: FileText,
      link: "#",
    },
    {
      title: "Technical Requirements",
      description: "System requirements for optimal LMS experience",
      icon: FileText,
      link: "#",
    },
  ]

  return (
    <div className="container mx-auto p-4 md:p-6">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Help & Support</h1>
          <p className="text-gray-500 dark:text-gray-400">Find answers and get assistance</p>
        </div>

        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500 dark:text-gray-400" />
          <Input type="search" placeholder="Search for help topics..." className="pl-10" />
        </div>

        <Tabs defaultValue="faq">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="faq">FAQ</TabsTrigger>
            <TabsTrigger value="support">Support Tickets</TabsTrigger>
            <TabsTrigger value="resources">Resources</TabsTrigger>
            <TabsTrigger value="contact">Contact Us</TabsTrigger>
          </TabsList>

          <TabsContent value="faq" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Frequently Asked Questions</CardTitle>
                <CardDescription>Find answers to common questions</CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                      <AccordionContent>{faq.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="support" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Support Tickets</CardTitle>
                <CardDescription>Submit a new support request or view your existing tickets</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Submit a New Ticket</h3>
                    <div className="grid gap-4">
                      <div className="grid gap-2">
                        <label htmlFor="subject" className="text-sm font-medium">
                          Subject
                        </label>
                        <Input id="subject" placeholder="Brief description of your issue" />
                      </div>
                      <div className="grid gap-2">
                        <label htmlFor="category" className="text-sm font-medium">
                          Category
                        </label>
                        <div className="relative">
                          <select
                            id="category"
                            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 appearance-none"
                          >
                            <option value="">Select a category</option>
                            <option value="technical">Technical Issue</option>
                            <option value="course">Course Management</option>
                            <option value="grading">Grading System</option>
                            <option value="students">Student Issues</option>
                            <option value="other">Other</option>
                          </select>
                          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 opacity-50" />
                        </div>
                      </div>
                      <div className="grid gap-2">
                        <label htmlFor="description" className="text-sm font-medium">
                          Description
                        </label>
                        <Textarea
                          id="description"
                          placeholder="Please provide details about your issue"
                          className="min-h-[120px]"
                        />
                      </div>
                      <div className="grid gap-2">
                        <label htmlFor="attachment" className="text-sm font-medium">
                          Attachment (optional)
                        </label>
                        <Input id="attachment" type="file" />
                      </div>
                      <Button className="w-full sm:w-auto">Submit Ticket</Button>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Your Recent Tickets</h3>
                    <div className="rounded-md border">
                      <div className="p-4 text-center text-sm text-gray-500 dark:text-gray-400">
                        You don't have any support tickets yet.
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="resources" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Resources</CardTitle>
                <CardDescription>Helpful guides and documentation</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  {resources.map((resource, index) => (
                    <Card key={index} className="overflow-hidden">
                      <CardContent className="p-0">
                        <a
                          href={resource.link}
                          className="flex items-start gap-4 p-4 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                        >
                          <div className="rounded-full bg-blue-100 dark:bg-blue-900 p-2">
                            <resource.icon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                          </div>
                          <div>
                            <h4 className="font-medium">{resource.title}</h4>
                            <p className="text-sm text-gray-500 dark:text-gray-400">{resource.description}</p>
                          </div>
                        </a>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="contact" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Contact Us</CardTitle>
                <CardDescription>Get in touch with our support team</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Contact Information</h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="rounded-full bg-blue-100 dark:bg-blue-900 p-2">
                          <MessageSquare className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div>
                          <p className="text-sm font-medium">Live Chat</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Available 9 AM - 5 PM</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="rounded-full bg-blue-100 dark:bg-blue-900 p-2">
                          <Phone className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div>
                          <p className="text-sm font-medium">Phone Support</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">+1 (555) 123-4567</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="rounded-full bg-blue-100 dark:bg-blue-900 p-2">
                          <Mail className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div>
                          <p className="text-sm font-medium">Email Support</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">faculty-support@edulearn.com</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Send a Message</h3>
                    <div className="grid gap-4">
                      <div className="grid gap-2">
                        <label htmlFor="name" className="text-sm font-medium">
                          Name
                        </label>
                        <Input id="name" placeholder="Your name" />
                      </div>
                      <div className="grid gap-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Email
                        </label>
                        <Input id="email" type="email" placeholder="Your email address" />
                      </div>
                      <div className="grid gap-2">
                        <label htmlFor="message" className="text-sm font-medium">
                          Message
                        </label>
                        <Textarea id="message" placeholder="How can we help you?" className="min-h-[120px]" />
                      </div>
                      <Button className="w-full sm:w-auto">Send Message</Button>
                    </div>
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
