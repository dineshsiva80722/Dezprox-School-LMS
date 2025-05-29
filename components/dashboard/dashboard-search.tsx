"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

interface DashboardSearchProps {
  onSearch: (e: React.FormEvent) => void
  setSearchQuery: (query: string) => void
  searchQuery: string
}

export function DashboardSearch({ onSearch, setSearchQuery, searchQuery }: DashboardSearchProps) {
  return (
    <form onSubmit={onSearch} className="flex w-full max-w-lg items-center space-x-2">
      <div className="relative flex-1">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
        <Input
          type="search"
          placeholder="Search courses, users, content..."
          className="pl-8"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <Button type="submit">Search</Button>
    </form>
  )
}
