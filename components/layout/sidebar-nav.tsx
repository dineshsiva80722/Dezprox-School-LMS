"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import Image from "next/image"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  BarChart,
  BookOpen,
  Calendar,
  FileText,
  GraduationCap,
  HelpCircle,
  LayoutDashboard,
  MessageSquare,
  Settings,
  Users,
  Clock,
  Video,
  PenTool,
  CheckSquare,
  Shield,
  FileCode,
  Database,
} from "lucide-react"

interface SidebarNavProps {
  role: string
}

export function SidebarNav({ role }: SidebarNavProps) {
  const pathname = usePathname()

  const getNavItems = (role: string) => {
    const commonItems = [
      {
        title: "Dashboard",
        href: `/dashboard/${role}`,
        icon: <LayoutDashboard className="h-5 w-5" />,
      },
      {
        title: "Calendar",
        href: `/dashboard/${role}/calendar`,
        icon: <Calendar className="h-5 w-5" />,
      },
      {
        title: "Messages",
        href: `/dashboard/${role}/messages`,
        icon: <MessageSquare className="h-5 w-5" />,
      },
      {
        title: "Help",
        href: `/dashboard/${role}/help`,
        icon: <HelpCircle className="h-5 w-5" />,
      },
      {
        title: "Settings",
        href: `/dashboard/${role}/settings`,
        icon: <Settings className="h-5 w-5" />,
      },
    ]

    if (role === "student") {
      return [
        ...commonItems.slice(0, 1),
        {
          title: "Courses",
          href: `/dashboard/${role}/courses`,
          icon: <BookOpen className="h-5 w-5" />,
        },
        {
          title: "Assignments",
          href: `/dashboard/${role}/assignments`,
          icon: <FileText className="h-5 w-5" />,
        },
        {
          title: "Quizzes",
          href: `/dashboard/${role}/quizzes`,
          icon: <CheckSquare className="h-5 w-5" />,
        },
        {
          title: "Grades",
          href: `/dashboard/${role}/grades`,
          icon: <BarChart className="h-5 w-5" />,
        },
        {
          title: "Attendance",
          href: `/dashboard/${role}/attendance`,
          icon: <Clock className="h-5 w-5" />,
        },
        {
          title: "Live Classes",
          href: `/dashboard/${role}/live-classes`,
          icon: <Video className="h-5 w-5" />,
        },
        {
          title: "Forums",
          href: `/dashboard/${role}/forums`,
          icon: <MessageSquare className="h-5 w-5" />,
        },
        ...commonItems.slice(1),
      ]
    } else if (role === "teacher") {
      return [
        ...commonItems.slice(0, 1),
        {
          title: "Courses",
          href: `/dashboard/${role}/courses`,
          icon: <BookOpen className="h-5 w-5" />,
        },
        {
          title: "Create Lesson",
          href: `/dashboard/${role}/create-lesson`,
          icon: <PenTool className="h-5 w-5" />,
        },
        {
          title: "Students",
          href: `/dashboard/${role}/students`,
          icon: <Users className="h-5 w-5" />,
        },
        {
          title: "Assignments",
          href: `/dashboard/${role}/assignments`,
          icon: <FileText className="h-5 w-5" />,
        },
        {
          title: "Quizzes",
          href: `/dashboard/${role}/quizzes`,
          icon: <CheckSquare className="h-5 w-5" />,
        },
        {
          title: "Grading",
          href: `/dashboard/${role}/grading`,
          icon: <BarChart className="h-5 w-5" />,
        },
        {
          title: "Attendance",
          href: `/dashboard/${role}/attendance`,
          icon: <Clock className="h-5 w-5" />,
        },
        {
          title: "Live Classes",
          href: `/dashboard/${role}/live-classes`,
          icon: <Video className="h-5 w-5" />,
        },
        {
          title: "Forums",
          href: `/dashboard/${role}/forums`,
          icon: <MessageSquare className="h-5 w-5" />,
        },
        ...commonItems.slice(1),
      ]
    } else {
      return [
        ...commonItems.slice(0, 1),
        {
          title: "Users",
          href: `/dashboard/${role}/users`,
          icon: <Users className="h-5 w-5" />,
        },
        {
          title: "Courses",
          href: `/dashboard/${role}/courses`,
          icon: <BookOpen className="h-5 w-5" />,
        },
        {
          title: "Content",
          href: `/dashboard/${role}/content`,
          icon: <FileCode className="h-5 w-5" />,
        },
        {
          title: "Roles & Permissions",
          href: `/dashboard/${role}/roles`,
          icon: <Shield className="h-5 w-5" />,
        },
        {
          title: "Reports & Analytics",
          href: `/dashboard/${role}/reports`,
          icon: <BarChart className="h-5 w-5" />,
        },
        {
          title: "System",
          href: `/dashboard/${role}/system`,
          icon: <Database className="h-5 w-5" />,
        },
        ...commonItems.slice(1),
      ]
    }
  }

  const navItems = getNavItems(role)

  return (
    <ScrollArea className="h-full py-4 items-center justify-center flex">
      <div className="flex items-center mb-6 px-2 gap-2">
        <Image src="/dezproxlogo.png" alt="Dezprox Logo" width={32} height={32} />
        <span className="text-sm font-bold">Dezprox EduLearn LMS</span>
      </div>
      <div className="space-y-1 px-2">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              buttonVariants({ variant: "ghost" }),
              pathname === item.href ? "bg-muted hover:bg-muted" : "hover:bg-transparent hover:underline",
              "justify-start w-full px-2 py-2",
            )}
          >
            <span className="mr-2">{item.icon}</span>
            {item.title}
          </Link>
        ))}
      </div>
    </ScrollArea>
  )
}
