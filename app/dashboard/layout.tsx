"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { SidebarNav } from "@/components/layout/sidebar-nav"
import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { ChevronLeft, Menu } from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const pathname = usePathname()
  const [role, setRole] = useState<string>("student")
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const isMobile = useMobile()

  useEffect(() => {
    // Extract role from URL
    const pathParts = pathname.split("/")
    if (pathParts.length > 2) {
      const extractedRole = pathParts[2]
      if (["student", "teacher", "admin"].includes(extractedRole)) {
        setRole(extractedRole)
      }
    }

    // Close sidebar on mobile by default
    if (isMobile) {
      setSidebarOpen(false)
    }
  }, [pathname, isMobile])

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 flex flex-col border-r bg-background transition-all duration-300 ease-in-out ${
          sidebarOpen ? "w-64" : "w-0"
        } ${isMobile ? "lg:relative" : "relative"}`}
      >
        <SidebarNav role={role} />
      </div>

      {/* Main Content */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Header */}
        <header className="sticky top-0 z-40 flex h-16 items-center gap-4 border-b bg-background px-4 sm:px-6">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="shrink-0"
            aria-label={sidebarOpen ? "Close sidebar" : "Open sidebar"}
          >
            {sidebarOpen ? <ChevronLeft className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
          <div className="flex-1">
            <h1 className="text-lg font-semibold">
              Dezprox School LMS - {role.charAt(0).toUpperCase() + role.slice(1)} Dashboard
            </h1>
          </div>
          <ModeToggle />
        </header>

        {/* Main Content Area */}
        <ScrollArea className="flex-1 overflow-auto">
          <main className="flex-1">{children}</main>
        </ScrollArea>
      </div>
    </div>
  )
}
