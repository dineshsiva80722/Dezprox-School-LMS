"use client"

import Link from "next/link"
import { GraduationCap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeSelector } from "@/components/theme-selector"
import { NotificationsPopover } from "@/components/dashboard/notifications-popover"
import { HelpPopover } from "@/components/dashboard/help-popover"
import { DashboardSearch } from "@/components/dashboard/dashboard-search"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface DashboardHeaderProps {
  role: string
}

export function DashboardHeader({ role }: DashboardHeaderProps) {
  const roleCapitalized = role.charAt(0).toUpperCase() + role.slice(1)

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
      <div className="flex items-center gap-2 md:hidden">
        <GraduationCap className="h-6 w-6" />
        <span className="text-lg font-semibold">dezprox LMS</span>
      </div>

      <div className="w-full flex-1 md:grow-0 md:basis-1/3">
        <DashboardSearch />
      </div>

      <div className="hidden md:flex md:flex-1 md:items-center md:gap-4 md:justify-center">
        <h1 className="text-xl font-semibold">{roleCapitalized} Dashboard</h1>
      </div>

      <div className="flex items-center gap-4 md:justify-end md:flex-1">
        <ThemeSelector />
        <NotificationsPopover />
        <HelpPopover />

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-8 w-8 rounded-full">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end" forceMount>
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none">John Doe</p>
                <p className="text-xs leading-none text-muted-foreground">john.doe@example.com</p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link href="/" className="flex w-full">
                Log out
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}
