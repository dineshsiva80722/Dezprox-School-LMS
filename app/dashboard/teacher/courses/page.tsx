"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Clock, Filter, Plus, Search, Users } from "lucide-react"
import Link from "next/link"

export default function TeacherCoursesPage() {
  const [searchQuery, setSearchQuery] = useState("")

  // Mock data
  const courses = [
    {
      id: 1,
      name: "Mathematics 101",
      students: 28,
      nextClass: "Today, 10:00 AM",
      room: "Room 101",
      status: "active",
    },
    {
      id: 2,
      name: "Advanced Calculus",
      students: 15,
      nextClass: "Tomorrow, 2:00 PM",
      room: "Room 203",
      status: "active",
    },
    {
      id: 3,
      name: "Statistics",
      students: 22,
      nextClass: "Friday, 11:00 AM",
      room: "Room 105",
      status: "active",
    },
    {
      id: 4,
      name: "Algebra II",
      students: 32,
      nextClass: "Thursday, 1:00 PM",
      room: "Room 107",
      status: "active",
    },
    {
      id: 5,
      name: "Geometry Basics",
      students: 25,
      nextClass: "N/A",
      room: "Room 102",
      status: "upcoming",
    },
    {
      id: 6,
      name: "Trigonometry",
      students: 18,
      nextClass: "N/A",
      room: "Room 104",
      status: "completed",
    },
  ]

  // Filter courses based on search query
  const filteredCourses = courses.filter((course) => course.name.toLowerCase().includes(searchQuery.toLowerCase()))

  return (
    <div className="container p-6 mx-auto">
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold">My Courses</h1>
            <p className="text-gray-500 dark:text-gray-400">Manage your teaching courses</p>
          </div>
          <Button asChild>
            <Link href="/dashboard/teacher/courses/create">
              <Plus className="mr-2 h-4 w-4" />
              Create Course
            </Link>
          </Button>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
            <Input
              type="search"
              placeholder="Search courses..."
              className="pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>
        </div>

        <Tabs defaultValue="active">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="active">Active</TabsTrigger>
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
            <TabsTrigger value="all">All Courses</TabsTrigger>
          </TabsList>

          {["active", "upcoming", "completed", "all"].map((tab) => (
            <TabsContent key={tab} value={tab} className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCourses
                  .filter((course) => tab === "all" || course.status === tab)
                  .map((course) => (
                    <div
                      key={course.id}
                      className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden shadow-sm"
                    >
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-4">
                          <h3 className="text-xl font-bold">{course.name}</h3>
                          <Badge className="bg-blue-500">
                            {course.status.charAt(0).toUpperCase() + course.status.slice(1)}
                          </Badge>
                        </div>

                        <div className="space-y-3 mb-6">
                          <div className="flex items-center text-sm">
                            <Users className="mr-2 h-4 w-4 text-gray-500 dark:text-gray-400" />
                            <span>{course.students} students</span>
                          </div>

                          {course.status === "active" && (
                            <div className="flex items-center text-sm">
                              <Clock className="mr-2 h-4 w-4 text-gray-500 dark:text-gray-400" />
                              <span>Next class: {course.nextClass}</span>
                            </div>
                          )}

                          <div className="text-sm text-gray-500 dark:text-gray-400">Location: {course.room}</div>
                        </div>

                        <div className="flex gap-3">
                          <Button variant="outline" className="flex-1" asChild>
                            <Link href={`/dashboard/teacher/courses/${course.id}/students`}>Students</Link>
                          </Button>
                          <Button className="flex-1" asChild>
                            <Link href={`/dashboard/teacher/courses/${course.id}`}>Manage</Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}

                {filteredCourses.filter((course) => tab === "all" || course.status === tab).length === 0 && (
                  <div className="col-span-3 text-center py-12">
                    <h3 className="text-lg font-medium">No {tab} courses found</h3>
                    <p className="text-gray-500 dark:text-gray-400 mt-1">
                      {tab === "active" || tab === "all"
                        ? "Create a new course to get started"
                        : `Your ${tab} courses will appear here`}
                    </p>
                  </div>
                )}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  )
}
