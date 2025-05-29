"use client"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronLeft, ChevronRight, Plus } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useState } from "react"

export default function StudentCalendarPage() {
  // Mock data
  const events = [
    {
      id: 1,
      title: "Mathematics Quiz",
      date: new Date(2025, 4, 22, 10, 0),
      endDate: new Date(2025, 4, 22, 11, 30),
      type: "quiz",
      course: "Mathematics 101",
      location: "Room 203",
    },
    {
      id: 2,
      title: "Physics Lab Session",
      date: new Date(2025, 4, 22, 14, 0),
      endDate: new Date(2025, 4, 22, 16, 0),
      type: "class",
      course: "Physics 202",
      location: "Science Lab 3",
    },
    {
      id: 3,
      title: "Group Project Meeting",
      date: new Date(2025, 4, 23, 13, 0),
      endDate: new Date(2025, 4, 23, 14, 30),
      type: "meeting",
      course: "Computer Science 303",
      location: "Library Study Room 5",
    },
    {
      id: 4,
      title: "Literature Essay Deadline",
      date: new Date(2025, 4, 24, 23, 59),
      type: "assignment",
      course: "English Literature 101",
    },
    {
      id: 5,
      title: "Chemistry Midterm",
      date: new Date(2025, 4, 25, 9, 0),
      endDate: new Date(2025, 4, 25, 11, 0),
      type: "exam",
      course: "Chemistry 201",
      location: "Main Hall",
    },
  ]

  // Get today's events
  const today = new Date()
  const todayEvents = events.filter(
    (event) =>
      event.date.getDate() === today.getDate() &&
      event.date.getMonth() === today.getMonth() &&
      event.date.getFullYear() === today.getFullYear(),
  )

  // Get upcoming events (next 7 days)
  const nextWeek = new Date()
  nextWeek.setDate(nextWeek.getDate() + 7)
  const upcomingEvents = events
    .filter((event) => event.date > today && event.date <= nextWeek)
    .sort((a, b) => a.date.getTime() - b.date.getTime())

  // State for selected date
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(today)

  // Get events for selected date
  const selectedDateEvents = selectedDate
    ? events.filter(
        (event) =>
          event.date.getDate() === selectedDate.getDate() &&
          event.date.getMonth() === selectedDate.getMonth() &&
          event.date.getFullYear() === selectedDate.getFullYear(),
      )
    : []

  // Function to format date and time
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  }

  // Function to get event type badge color
  const getEventTypeColor = (type: string) => {
    switch (type) {
      case "quiz":
        return "bg-orange-500 text-white"
      case "exam":
        return "bg-red-500 text-white"
      case "assignment":
        return "bg-blue-500 text-white"
      case "class":
        return "bg-green-500 text-white"
      case "meeting":
        return "bg-purple-500 text-white"
      default:
        return "bg-gray-500 text-white"
    }
  }

  return (
    <div className="container mx-auto p-4 md:p-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-3xl font-bold">Calendar</h1>
          <p className="text-gray-500 dark:text-gray-400">Manage your schedule and events</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Event
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Calendar */}
        <Card className="lg:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Academic Calendar</CardTitle>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="icon">
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <Calendar mode="single" selected={selectedDate} onSelect={setSelectedDate} className="rounded-md border" />
          </CardContent>
        </Card>

        {/* Events */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>Events</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="selected">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="selected">Selected</TabsTrigger>
                <TabsTrigger value="today">Today</TabsTrigger>
                <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
              </TabsList>
              <TabsContent value="selected">
                <ScrollArea className="h-[400px] mt-4">
                  {selectedDateEvents.length > 0 ? (
                    <div className="space-y-4">
                      {selectedDateEvents.map((event) => (
                        <div key={event.id} className="border rounded-lg p-3">
                          <div className="flex justify-between items-start">
                            <h3 className="font-medium">{event.title}</h3>
                            <Badge className={getEventTypeColor(event.type)}>
                              {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                            </Badge>
                          </div>
                          <p className="text-sm text-gray-500 mt-1">{event.course}</p>
                          {event.endDate ? (
                            <p className="text-sm mt-2">
                              {formatTime(event.date)} - {formatTime(event.endDate)}
                            </p>
                          ) : (
                            <p className="text-sm mt-2">{formatTime(event.date)}</p>
                          )}
                          {event.location && <p className="text-sm text-gray-500 mt-1">{event.location}</p>}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8 text-gray-500">No events for the selected date</div>
                  )}
                </ScrollArea>
              </TabsContent>
              <TabsContent value="today">
                <ScrollArea className="h-[400px] mt-4">
                  {todayEvents.length > 0 ? (
                    <div className="space-y-4">
                      {todayEvents.map((event) => (
                        <div key={event.id} className="border rounded-lg p-3">
                          <div className="flex justify-between items-start">
                            <h3 className="font-medium">{event.title}</h3>
                            <Badge className={getEventTypeColor(event.type)}>
                              {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                            </Badge>
                          </div>
                          <p className="text-sm text-gray-500 mt-1">{event.course}</p>
                          {event.endDate ? (
                            <p className="text-sm mt-2">
                              {formatTime(event.date)} - {formatTime(event.endDate)}
                            </p>
                          ) : (
                            <p className="text-sm mt-2">{formatTime(event.date)}</p>
                          )}
                          {event.location && <p className="text-sm text-gray-500 mt-1">{event.location}</p>}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8 text-gray-500">No events for today</div>
                  )}
                </ScrollArea>
              </TabsContent>
              <TabsContent value="upcoming">
                <ScrollArea className="h-[400px] mt-4">
                  {upcomingEvents.length > 0 ? (
                    <div className="space-y-4">
                      {upcomingEvents.map((event) => (
                        <div key={event.id} className="border rounded-lg p-3">
                          <div className="flex justify-between items-start">
                            <h3 className="font-medium">{event.title}</h3>
                            <Badge className={getEventTypeColor(event.type)}>
                              {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                            </Badge>
                          </div>
                          <p className="text-sm text-gray-500 mt-1">{event.course}</p>
                          <p className="text-sm font-medium mt-2">
                            {event.date.toLocaleDateString(undefined, {
                              weekday: "short",
                              month: "short",
                              day: "numeric",
                            })}
                          </p>
                          {event.endDate ? (
                            <p className="text-sm mt-1">
                              {formatTime(event.date)} - {formatTime(event.endDate)}
                            </p>
                          ) : (
                            <p className="text-sm mt-1">{formatTime(event.date)}</p>
                          )}
                          {event.location && <p className="text-sm text-gray-500 mt-1">{event.location}</p>}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8 text-gray-500">No upcoming events</div>
                  )}
                </ScrollArea>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
