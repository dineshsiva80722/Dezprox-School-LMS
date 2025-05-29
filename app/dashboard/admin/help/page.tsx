import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Search, ChevronDown, FileText, MessageSquare, Phone, Mail } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function AdminHelpPage() {
  // Mock data for FAQs
  const faqs = [
    {
      question: "How do I add a new user to the system?",
      answer:
        "To add a new user, go to the User Management page and click on 'Add New User'. Fill in the required information such as name, email, role, and initial password, then click 'Create User'.",
    },
    {
      question: "How do I manage user roles and permissions?",
      answer:
        "Navigate to the Roles & Permissions page where you can view and modify existing roles or create new ones. For each role, you can set specific permissions for different system features.",
    },
    {
      question: "How do I generate system reports?",
      answer:
        "Go to the Reports & Analytics page, select the type of report you want to generate (e.g., user activity, course completion, grades), set the parameters and date range, then click 'Generate Report'.",
    },
    {
      question: "How do I configure system-wide settings?",
      answer:
        "Navigate to the System Settings page where you can adjust various configurations including security settings, notification preferences, grading scales, and integration with external services.",
    },
    {
      question: "How do I manage course offerings?",
      answer:
        "Go to the Courses page where you can view all courses, create new ones, or modify existing courses. You can also assign teachers, set enrollment periods, and manage course categories.",
    },
    {
      question: "How do I back up system data?",
      answer:
        "In the System Settings page, find the Backup & Restore section. You can schedule automatic backups or perform manual backups of the entire system or specific components like courses or user data.",
    },
    {
      question: "How do I troubleshoot user access issues?",
      answer:
        "Check the user's account in User Management to verify their status and permissions. You can reset their password, check login history, or temporarily elevate their permissions to resolve access problems.",
    },
  ]

  // Mock data for resources
  const resources = [
    {
      title: "Administrator Manual",
      description: "Complete guide to system administration",
      icon: FileText,
      link: "#",
    },
    {
      title: "Technical Documentation",
      description: "Detailed system architecture and API references",
      icon: FileText,
      link: "#",
    },
    {
      title: "Security Guidelines",
      description: "Best practices for maintaining system security",
      icon: FileText,
      link: "#",
    },
    {
      title: "Upgrade Procedures",
      description: "Step-by-step guides for system upgrades",
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
                            <option value="system">System Configuration</option>
                            <option value="security">Security Concern</option>
                            <option value="data">Data Management</option>
                            <option value="other">Other</option>
                          </select>
                          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 opacity-50" />
                        </div>
                      </div>
                      <div className="grid gap-2">
                        <label htmlFor="priority" className="text-sm font-medium">
                          Priority
                        </label>
                        <div className="relative">
                          <select
                            id="priority"
                            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 appearance-none"
                          >
                            <option value="low">Low</option>
                            <option value="medium">Medium</option>
                            <option value="high">High</option>
                            <option value="critical">Critical</option>
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
                          <p className="text-sm text-gray-500 dark:text-gray-400">Available 24/7 for administrators</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="rounded-full bg-blue-100 dark:bg-blue-900 p-2">
                          <Phone className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div>
                          <p className="text-sm font-medium">Priority Support Line</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">+1 (555) 987-6543</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="rounded-full bg-blue-100 dark:bg-blue-900 p-2">
                          <Mail className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div>
                          <p className="text-sm font-medium">Email Support</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">admin-support@edulearn.com</p>
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
