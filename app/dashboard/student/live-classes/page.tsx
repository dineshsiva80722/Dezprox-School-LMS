import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Filter, Search, Calendar, Clock, Video, Users } from "lucide-react"
import Link from "next/link"

export default function StudentLiveClassesPage() {
  // Mock data
  const liveClasses = [
    {
      id: 1,
      title: "Mathematics 101 - Calculus Fundamentals",
      course: "Mathematics 101",
      instructor: "Dr. Smith",
      date: "Today",
      time: "10:00 AM - 11:30 AM",
      status: "upcoming",
      participants: 28,
    },
    {
      id: 2,
      title: "Physics 202 - Wave Mechanics",
      course: "Physics 202",
      instructor: "Prof. Johnson",
      date: "Today",
      time: "2:00 PM - 3:30 PM",
      status: "upcoming",
      participants: 15,
    },
    {
      id: 3,
      title: "History 101 - Ancient Civilizations",
      course: "History 101",
      instructor: "Dr. Williams",
      date: "Tomorrow",
      time: "11:00 AM - 12:30 PM",
      status: "upcoming",
      participants: 22,
    },
    {
      id: 4,
      title: "Biology 303 - Cell Structure",
      course: "Biology 303",
      instructor: "Prof. Davis",
      date: "Yesterday",
      time: "1:00 PM - 2:30 PM",
      status: "completed",
      participants: 32,
      recording: "https://example.com/recordings/biology-303-cell-structure",
    },
    {
      id: 5,
      title: "English Literature - Shakespeare Analysis",
      course: "English Literature",
      instructor: "Dr. Wilson",
      date: "Last Week",
      time: "3:00 PM - 4:30 PM",
      status: "completed",
      participants: 25,
      recording: "https://example.com/recordings/english-literature-shakespeare",
    },
  ]

  return (
    <div className="container mx-auto p-4 md:p-6">
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold">Live Classes</h1>
            <p className="text-gray-500 dark:text-gray-400">Join virtual classroom sessions</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
            <Input type="search" placeholder="Search live classes..." className="pl-8" />
          </div>
          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>
        </div>

        <Tabs defaultValue="upcoming">
          <TabsList>
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="recordings">Recordings</TabsTrigger>
            <TabsTrigger value="all">All Classes</TabsTrigger>
          </TabsList>
          <TabsContent value="upcoming" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {liveClasses
                .filter((liveClass) => liveClass.status === "upcoming")
                .map((liveClass) => (
                  <Card key={liveClass.id} className="overflow-hidden">
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-2 flex justify-between items-center">
                      <Badge
                        variant="outline"
                        className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
                      >
                        {liveClass.date === "Today" ? "Today" : liveClass.date}
                      </Badge>
                      <div className="flex items-center text-sm text-blue-800 dark:text-blue-300">
                        <Clock className="mr-1 h-4 w-4" />
                        {liveClass.time}
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle>{liveClass.title}</CardTitle>
                      <CardDescription>
                        {liveClass.course} • {liveClass.instructor}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <Users className="mr-2 h-4 w-4" />
                        <span>{liveClass.participants} participants</span>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full" asChild>
                        <Link href={`/dashboard/student/live-classes/${liveClass.id}`}>
                          <Video className="mr-2 h-4 w-4" />
                          Join Class
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              {liveClasses.filter((liveClass) => liveClass.status === "upcoming").length === 0 && (
                <div className="col-span-3 text-center py-12">
                  <Video className="h-12 w-12 mx-auto text-gray-400" />
                  <h3 className="text-lg font-medium mt-2">No upcoming live classes</h3>
                  <p className="text-gray-500 dark:text-gray-400 mt-1">Check back later for scheduled sessions</p>
                </div>
              )}
            </div>
          </TabsContent>
          <TabsContent value="recordings" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {liveClasses
                .filter((liveClass) => liveClass.status === "completed" && liveClass.recording)
                .map((liveClass) => (
                  <Card key={liveClass.id}>
                    <CardHeader>
                      <CardTitle>{liveClass.title}</CardTitle>
                      <CardDescription>
                        {liveClass.course} • {liveClass.instructor}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                          <Calendar className="mr-2 h-4 w-4" />
                          <span>Recorded on {liveClass.date}</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                          <Clock className="mr-2 h-4 w-4" />
                          <span>{liveClass.time}</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full" asChild>
                        <Link href={liveClass.recording || "#"}>
                          <Video className="mr-2 h-4 w-4" />
                          Watch Recording
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              {liveClasses.filter((liveClass) => liveClass.status === "completed" && liveClass.recording).length ===
                0 && (
                <div className="col-span-3 text-center py-12">
                  <Video className="h-12 w-12 mx-auto text-gray-400" />
                  <h3 className="text-lg font-medium mt-2">No recordings available</h3>
                  <p className="text-gray-500 dark:text-gray-400 mt-1">Recordings of past classes will appear here</p>
                </div>
              )}
            </div>
          </TabsContent>
          <TabsContent value="all" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>All Live Classes</CardTitle>
                <CardDescription>Complete list of your live classes</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border">
                  <div className="grid grid-cols-1 md:grid-cols-6 p-4 font-medium">
                    <div className="md:col-span-2">Class</div>
                    <div>Course</div>
                    <div>Date</div>
                    <div>Status</div>
                    <div className="text-right">Action</div>
                  </div>
                  {liveClasses.map((liveClass) => (
                    <div key={liveClass.id} className="grid grid-cols-1 md:grid-cols-6 p-4 items-center border-t">
                      <div className="md:col-span-2">
                        <div className="font-medium">{liveClass.title}</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">{liveClass.instructor}</div>
                      </div>
                      <div>{liveClass.course}</div>
                      <div>
                        <div>{liveClass.date}</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">{liveClass.time}</div>
                      </div>
                      <div>
                        <Badge variant={liveClass.status === "upcoming" ? "default" : "outline"}>
                          {liveClass.status === "upcoming" ? "Upcoming" : "Completed"}
                        </Badge>
                      </div>
                      <div className="text-right">
                        {liveClass.status === "upcoming" ? (
                          <Button size="sm" asChild>
                            <Link href={`/dashboard/student/live-classes/${liveClass.id}`}>Join</Link>
                          </Button>
                        ) : (
                          <Button size="sm" variant="outline" asChild>
                            <Link href={liveClass.recording || "#"}>Recording</Link>
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
