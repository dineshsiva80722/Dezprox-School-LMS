"use client"

import { SidebarNav } from "@/components/layout/sidebar-nav"
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarRail } from "@/components/ui/sidebar"
import { GraduationCap } from "lucide-react"
import Link from "next/link"

interface MainSidebarProps {
  role: string
}

export function MainSidebar({ role }: MainSidebarProps) {
  return (
    <Sidebar collapsible="icon" className="border-r">
      <SidebarHeader className="border-b p-4">
        <Link href={`/dashboard/${role}`} className="flex items-center gap-2">
          <GraduationCap className="h-6 w-6 text-blue-600" />
          <span className="font-bold text-xl">EduLearn LMS</span>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarNav role={role} />
      </SidebarContent>
      <SidebarFooter className="border-t p-4">
        <div className="text-xs text-gray-500 dark:text-gray-400">© 2023 EduLearn LMS</div>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
