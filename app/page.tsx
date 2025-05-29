import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ThemeSelector } from "@/components/theme-selector"
import { GraduationCap, CheckCircle, Users, BookOpen, Calendar } from "lucide-react"
import Image from "next/image"

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/dezproxlogo.png" alt="Dezprox Logo" width={32} height={32} />
            <h1 className="text-2xl font-bold">
              <span className="green-title">dezprox</span> School LMS
            </h1>
          </Link>
          <div className="flex items-center gap-4">
            <nav className="hidden md:flex items-center gap-6">
              <Link href="#features" className="text-foreground/80 hover:text-foreground">
                Features
              </Link>
              <Link href="#testimonials" className="text-foreground/80 hover:text-foreground">
                Testimonials
              </Link>
              <Link href="#pricing" className="text-foreground/80 hover:text-foreground">
                Pricing
              </Link>
              <Link href="#contact" className="text-foreground/80 hover:text-foreground">
                Contact
              </Link>
            </nav>
            <ThemeSelector />
            <Button asChild className="green-button">
              <Link href="/login">Sign In</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Transform education with <span className="green-title">dezprox</span> School LMS
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                A comprehensive learning management system designed for modern educational institutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="green-button" size="lg">
                  <Link href="/login">Get Started</Link>
                </Button>
                <Button variant="outline" size="lg">
                  Book a Demo
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-[#2d7831]/10 dark:bg-[#3c9540]/10 rounded-full blur-3xl"></div>
              <img
                src="/placeholder.svg?height=600&width=600"
                alt="dezprox School LMS Dashboard"
                className="rounded-lg shadow-xl border border-gray-200 dark:border-gray-800"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Powerful <span className="green-title">Features</span> for Modern Education
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Everything you need to manage your educational institution efficiently
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border border-gray-200 dark:border-gray-800">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-[#2d7831]/10 dark:bg-[#3c9540]/10 flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 green-accent" />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
                </CardContent>
                <CardFooter>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="h-5 w-5 mr-2 mt-0.5 green-accent" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Trusted by <span className="green-title">Educators</span> Worldwide
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              See what our users have to say about dezprox School LMS
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border border-gray-200 dark:border-gray-800">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
                      <img
                        src={`/placeholder.svg?height=100&width=100&text=${testimonial.name.charAt(0)}`}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                      <CardDescription>{testimonial.role}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="relative">
                    <div className="absolute top-0 left-0 transform -translate-x-4 -translate-y-4 text-4xl text-[#2d7831]/20 dark:text-[#3c9540]/20">
                      "
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 pl-4 border-l-4 green-border">{testimonial.quote}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-[#2d7831] dark:bg-[#3c9540] text-white">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to transform your educational institution?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Join thousands of schools already using dezprox School LMS to improve their educational outcomes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="outline"
              className="bg-white text-[#2d7831] hover:bg-white/90 dark:bg-white dark:text-[#3c9540] dark:hover:bg-white/90 border-white"
              asChild
            >
              <Link href="/login">Get Started</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-gray-200 dark:border-gray-800">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <Link href="/" className="flex items-center gap-2 mb-4">
                <GraduationCap className="h-6 w-6 green-accent" />
                <span className="text-xl font-bold">
                  <span className="green-title">dezprox</span> School LMS
                </span>
              </Link>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                A comprehensive learning management system designed for modern educational institutions.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Product</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                    Testimonials
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 text-center text-gray-600 dark:text-gray-400">
            <p> 2024 dezprox School LMS. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Sample data
const features = [
  {
    icon: Users,
    title: "User Management",
    description: "Easily manage students, teachers, and administrators with role-based access control.",
    benefits: ["Automated user provisioning", "Custom permission sets", "Bulk user import/export"],
  },
  {
    icon: BookOpen,
    title: "Course Management",
    description: "Create, organize, and deliver engaging courses with rich multimedia content.",
    benefits: ["Interactive lesson builder", "Content library integration", "Progress tracking"],
  },
  {
    icon: Calendar,
    title: "Scheduling & Attendance",
    description: "Streamline scheduling and track attendance for classes and events.",
    benefits: ["Automated attendance tracking", "Calendar integration", "Absence notifications"],
  },
]

const testimonials = [
  {
    name: "Dr. Emily Johnson",
    role: "Principal, Lincoln High School",
    quote:
      "The dezprox School LMS has transformed how we deliver education, making learning more accessible and engaging for all our students.",
  },
  {
    name: "Prof. Michael Chen",
    role: "Department Head, Westfield University",
    quote:
      "We've seen a 40% increase in student engagement since implementing dezprox School LMS. The analytics tools have been invaluable for improving our teaching methods.",
  },
]
