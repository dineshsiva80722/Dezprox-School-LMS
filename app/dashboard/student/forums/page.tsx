import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Filter, MessageSquare, Plus, Search, User } from "lucide-react"
import Link from "next/link"

export default function StudentForumsPage() {
  // Mock data
  const forums = [
    {
      id: 1,
      title: "Mathematics 101 Discussion",
      course: "Mathematics 101",
      description: "General discussion forum for Mathematics 101",
      topics: 15,
      posts: 87,
      lastActivity: "2 hours ago",
    },
    {
      id: 2,
      title: "Physics 202 Q&A",
      course: "Physics 202",
      description: "Ask questions about Physics 202 concepts and assignments",
      topics: 23,
      posts: 142,
      lastActivity: "Yesterday",
    },
    {
      id: 3,
      title: "History 101 Discussions",
      course: "History 101",
      description: "Discuss historical events and concepts from History 101",
      topics: 18,
      posts: 95,
      lastActivity: "3 days ago",
    },
    {
      id: 4,
      title: "Biology 303 Lab Forum",
      course: "Biology 303",
      description: "Discuss lab experiments and results for Biology 303",
      topics: 12,
      posts: 67,
      lastActivity: "1 week ago",
    },
  ]

  const recentTopics = [
    {
      id: 1,
      title: "Help with Calculus Problem Set 5",
      forum: "Mathematics 101 Discussion",
      author: "Emma Wilson",
      authorAvatar: "/placeholder.svg?height=32&width=32",
      authorInitials: "EW",
      replies: 8,
      views: 42,
      lastActivity: "1 hour ago",
      isNew: true,
    },
    {
      id: 2,
      title: "Question about Wave Interference",
      forum: "Physics 202 Q&A",
      author: "James Brown",
      authorAvatar: "/placeholder.svg?height=32&width=32",
      authorInitials: "JB",
      replies: 5,
      views: 28,
      lastActivity: "3 hours ago",
      isNew: true,
    },
    {
      id: 3,
      title: "Ancient Rome Discussion Thread",
      forum: "History 101 Discussions",
      author: "Sophia Lee",
      authorAvatar: "/placeholder.svg?height=32&width=32",
      authorInitials: "SL",
      replies: 12,
      views: 67,
      lastActivity: "Yesterday",
      isNew: false,
    },
    {
      id: 4,
      title: "Cell Membrane Lab Results",
      forum: "Biology 303 Lab Forum",
      author: "Noah Garcia",
      authorAvatar: "/placeholder.svg?height=32&width=32",
      authorInitials: "NG",
      replies: 4,
      views: 19,
      lastActivity: "2 days ago",
      isNew: false,
    },
  ]

  const myPosts = [
    {
      id: 1,
      title: "Question about Derivative Rules",
      forum: "Mathematics 101 Discussion",
      replies: 3,
      views: 15,
      lastActivity: "Yesterday",
    },
    {
      id: 2,
      title: "My Thoughts on Ancient Greek Democracy",
      forum: "History 101 Discussions",
      replies: 7,
      views: 32,
      lastActivity: "3 days ago",
    },
  ]

  return (
    <div className="container mx-auto p-4 md:p-6">
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold">Discussion Forums</h1>
            <p className="text-gray-500 dark:text-gray-400">Participate in course discussions</p>
          </div>
          <Button asChild>
            <Link href="/dashboard/student/forums/new-topic">
              <Plus className="mr-2 h-4 w-4" />
              New Topic
            </Link>
          </Button>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
            <Input type="search" placeholder="Search forums and topics..." className="pl-8" />
          </div>
          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>
        </div>

        <Tabs defaultValue="forums">
          <TabsList>
            <TabsTrigger value="forums">Forums</TabsTrigger>
            <TabsTrigger value="recent">Recent Topics</TabsTrigger>
            <TabsTrigger value="my-posts">My Posts</TabsTrigger>
          </TabsList>
          <TabsContent value="forums" className="mt-6">
            <div className="space-y-4">
              {forums.map((forum) => (
                <Card key={forum.id}>
                  <CardHeader>
                    <CardTitle>{forum.title}</CardTitle>
                    <CardDescription>{forum.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-4">
                      <div className="flex items-center">
                        <MessageSquare className="mr-2 h-4 w-4 text-gray-500 dark:text-gray-400" />
                        <span className="text-sm">{forum.topics} topics</span>
                      </div>
                      <div className="flex items-center">
                        <User className="mr-2 h-4 w-4 text-gray-500 dark:text-gray-400" />
                        <span className="text-sm">{forum.posts} posts</span>
                      </div>
                      <div className="flex items-center ml-auto">
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          Last activity: {forum.lastActivity}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full" asChild>
                      <Link href={`/dashboard/student/forums/${forum.id}`}>View Forum</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="recent" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Recent Topics</CardTitle>
                <CardDescription>Recently active discussion topics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentTopics.map((topic) => (
                    <div
                      key={topic.id}
                      className="flex flex-col md:flex-row md:items-center gap-4 p-4 border rounded-md"
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <Link
                            href={`/dashboard/student/forums/topic/${topic.id}`}
                            className="font-medium hover:underline"
                          >
                            {topic.title}
                          </Link>
                          {topic.isNew && (
                            <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">New</Badge>
                          )}
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">in {topic.forum}</div>
                        <div className="flex items-center gap-4 mt-2">
                          <div className="flex items-center gap-2">
                            <Avatar className="h-6 w-6">
                              <AvatarImage src={topic.authorAvatar || "/placeholder.svg"} alt={topic.author} />
                              <AvatarFallback>{topic.authorInitials}</AvatarFallback>
                            </Avatar>
                            <span className="text-sm">{topic.author}</span>
                          </div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">{topic.replies} replies</div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">{topic.views} views</div>
                        </div>
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">{topic.lastActivity}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View More Topics
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="my-posts" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>My Posts</CardTitle>
                <CardDescription>Topics and replies you've participated in</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {myPosts.map((post) => (
                    <div
                      key={post.id}
                      className="flex flex-col md:flex-row md:items-center gap-4 p-4 border rounded-md"
                    >
                      <div className="flex-1">
                        <Link
                          href={`/dashboard/student/forums/topic/${post.id}`}
                          className="font-medium hover:underline"
                        >
                          {post.title}
                        </Link>
                        <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">in {post.forum}</div>
                        <div className="flex items-center gap-4 mt-2">
                          <div className="text-sm text-gray-500 dark:text-gray-400">{post.replies} replies</div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">{post.views} views</div>
                        </div>
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">Last activity: {post.lastActivity}</div>
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
