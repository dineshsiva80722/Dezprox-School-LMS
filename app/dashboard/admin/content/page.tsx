"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Download, File, FileText, Filter, Folder, ImageIcon, Plus, Search, Video } from "lucide-react"
import Link from "next/link"

export default function AdminContentPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [typeFilter, setTypeFilter] = useState("all")
  const [courseFilter, setCourseFilter] = useState("all")

  // Mock data
  const courses = [
    { id: "math101", name: "Mathematics 101" },
    { id: "calc202", name: "Advanced Calculus" },
    { id: "stat101", name: "Statistics" },
    { id: "alg2", name: "Algebra II" },
    { id: "bio101", name: "Introduction to Biology" },
  ]

  const contentItems = [
    {
      id: 1,
      title: "Introduction to Linear Algebra",
      type: "document",
      course: "math101",
      author: "Dr. Sarah Miller",
      size: "2.4 MB",
      created: "2023-04-15",
      updated: "2023-04-15",
      status: "published",
    },
    {
      id: 2,
      title: "Calculus Lecture 1: Limits",
      type: "video",
      course: "calc202",
      author: "Prof. James Brown",
      size: "156 MB",
      created: "2023-04-10",
      updated: "2023-04-12",
      status: "published",
    },
    {
      id: 3,
      title: "Statistical Methods Presentation",
      type: "presentation",
      course: "stat101",
      author: "Dr. Emily Johnson",
      size: "8.7 MB",
      created: "2023-04-05",
      updated: "2023-04-08",
      status: "published",
    },
    {
      id: 4,
      title: "Algebra Formulas Cheat Sheet",
      type: "document",
      course: "alg2",
      author: "Prof. Michael Chen",
      size: "1.2 MB",
      created: "2023-04-02",
      updated: "2023-04-02",
      status: "published",
    },
    {
      id: 5,
      title: "Cell Structure Diagrams",
      type: "image",
      course: "bio101",
      author: "Dr. Olivia Martinez",
      size: "5.6 MB",
      created: "2023-03-28",
      updated: "2023-03-30",
      status: "published",
    },
    {
      id: 6,
      title: "Calculus Practice Problems",
      type: "document",
      course: "calc202",
      author: "Prof. James Brown",
      size: "3.1 MB",
      created: "2023-03-25",
      updated: "2023-03-27",
      status: "published",
    },
    {
      id: 7,
      title: "Probability Theory Lecture",
      type: "video",
      course: "stat101",
      author: "Dr. Emily Johnson",
      size: "142 MB",
      created: "2023-03-20",
      updated: "2023-03-22",
      status: "published",
    },
    {
      id: 8,
      title: "Quadratic Equations Tutorial",
      type: "video",
      course: "alg2",
      author: "Prof. Michael Chen",
      size: "98 MB",
      created: "2023-03-18",
      updated: "2023-03-18",
      status: "draft",
    },
    {
      id: 9,
      title: "Vector Spaces Notes",
      type: "document",
      course: "math101",
      author: "Dr. Sarah Miller",
      size: "1.8 MB",
      created: "2023-03-15",
      updated: "2023-03-16",
      status: "draft",
    },
    {
      id: 10,
      title: "DNA Replication Animation",
      type: "video",
      course: "bio101",
      author: "Dr. Olivia Martinez",
      size: "78 MB",
      created: "2023-03-10",
      updated: "2023-03-12",
      status: "draft",
    },
  ]

  // Filter content items based on search query and filters
  const filteredContent = contentItems.filter(
    (item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (typeFilter === "all" || item.type === typeFilter) &&
      (courseFilter === "all" || item.course === courseFilter),
  )

  // Group content by status
  const publishedContent = filteredContent.filter((c) => c.status === "published")
  const draftContent = filteredContent.filter((c) => c.status === "draft")

  // Get course name by ID
  const getCourseName = (courseId: string) => {
    const course = courses.find((c) => c.id === courseId)
    return course ? course.name : courseId
  }

  // Format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })
  }

  // Get icon based on content type
  const getContentIcon = (type: string) => {
    switch (type) {
      case "document":
        return <FileText className="h-4 w-4 text-blue-500" />
      case "video":
        return <Video className="h-4 w-4 text-red-500" />
      case "presentation":
        return <File className="h-4 w-4 text-orange-500" />
      case "image":
        return <ImageIcon className="h-4 w-4 text-green-500" />
      default:
        return <File className="h-4 w-4 text-gray-500" />
    }
  }

  return (
    <div className="container mx-auto p-6">
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold">Content Management</h1>
            <p className="text-gray-500 dark:text-gray-400">Manage all educational content across courses</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <Folder className="mr-2 h-4 w-4" />
              Organize Content
            </Button>
            <Button asChild>
              <Link href="/dashboard/admin/content/upload">
                <Plus className="mr-2 h-4 w-4" />
                Upload Content
              </Link>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Total Content</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{contentItems.length}</div>
              <p className="text-xs text-gray-500 dark:text-gray-400">Items in the content library</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Documents</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{contentItems.filter((c) => c.type === "document").length}</div>
              <p className="text-xs text-gray-500 dark:text-gray-400">PDF, DOC, and text files</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Videos</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{contentItems.filter((c) => c.type === "video").length}</div>
              <p className="text-xs text-gray-500 dark:text-gray-400">Video lectures and tutorials</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Storage Used</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {contentItems
                  .reduce((acc, curr) => {
                    const sizeInMB = Number.parseFloat(curr.size.split(" ")[0])
                    return acc + sizeInMB
                  }, 0)
                  .toFixed(1)}{" "}
                MB
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400">Total storage consumption</p>
            </CardContent>
          </Card>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
            <Input
              type="search"
              placeholder="Search content..."
              className="pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="sm:w-1/5">
            <Select value={typeFilter} onValueChange={setTypeFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Content Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="document">Documents</SelectItem>
                <SelectItem value="video">Videos</SelectItem>
                <SelectItem value="presentation">Presentations</SelectItem>
                <SelectItem value="image">Images</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="sm:w-1/5">
            <Select value={courseFilter} onValueChange={setCourseFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Course" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Courses</SelectItem>
                {courses.map((course) => (
                  <SelectItem key={course.id} value={course.id}>
                    {course.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" />
            More Filters
          </Button>
        </div>

        <Tabs defaultValue="all">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="all">All Content</TabsTrigger>
            <TabsTrigger value="published">Published</TabsTrigger>
            <TabsTrigger value="draft">Drafts</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>All Content</CardTitle>
                <CardDescription>Complete list of all educational content</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Title</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Course</TableHead>
                      <TableHead>Author</TableHead>
                      <TableHead>Size</TableHead>
                      <TableHead>Last Updated</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredContent.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            {getContentIcon(item.type)}
                            <span className="font-medium">{item.title}</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline">{item.type.charAt(0).toUpperCase() + item.type.slice(1)}</Badge>
                        </TableCell>
                        <TableCell>{getCourseName(item.course)}</TableCell>
                        <TableCell>{item.author}</TableCell>
                        <TableCell>{item.size}</TableCell>
                        <TableCell>{formatDate(item.updated)}</TableCell>
                        <TableCell>
                          <Badge
                            className={
                              item.status === "published"
                                ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                                : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
                            }
                          >
                            {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Button size="sm" variant="outline" asChild>
                              <Link href={`/dashboard/admin/content/${item.id}/edit`}>Edit</Link>
                            </Button>
                            <Button size="sm" asChild>
                              <Link href={`/dashboard/admin/content/${item.id}`}>View</Link>
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}

                    {filteredContent.length === 0 && (
                      <TableRow>
                        <TableCell colSpan={8} className="text-center py-8">
                          <div className="text-lg font-medium">No content found</div>
                          <p className="text-gray-500 dark:text-gray-400 mt-1">
                            Try adjusting your search or filter criteria
                          </p>
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="published" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Published Content</CardTitle>
                <CardDescription>Content that is live and available to students</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Title</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Course</TableHead>
                      <TableHead>Author</TableHead>
                      <TableHead>Size</TableHead>
                      <TableHead>Last Updated</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {publishedContent.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            {getContentIcon(item.type)}
                            <span className="font-medium">{item.title}</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline">{item.type.charAt(0).toUpperCase() + item.type.slice(1)}</Badge>
                        </TableCell>
                        <TableCell>{getCourseName(item.course)}</TableCell>
                        <TableCell>{item.author}</TableCell>
                        <TableCell>{item.size}</TableCell>
                        <TableCell>{formatDate(item.updated)}</TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Button size="sm" variant="outline">
                              <Download className="h-4 w-4" />
                              <span className="sr-only">Download</span>
                            </Button>
                            <Button size="sm" variant="outline" asChild>
                              <Link href={`/dashboard/admin/content/${item.id}/analytics`}>Analytics</Link>
                            </Button>
                            <Button size="sm" asChild>
                              <Link href={`/dashboard/admin/content/${item.id}`}>View</Link>
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}

                    {publishedContent.length === 0 && (
                      <TableRow>
                        <TableCell colSpan={7} className="text-center py-8">
                          <div className="text-lg font-medium">No published content</div>
                          <p className="text-gray-500 dark:text-gray-400 mt-1">Published content will appear here</p>
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="draft" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Draft Content</CardTitle>
                <CardDescription>Content that is still being prepared</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Title</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Course</TableHead>
                      <TableHead>Author</TableHead>
                      <TableHead>Created</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {draftContent.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            {getContentIcon(item.type)}
                            <span className="font-medium">{item.title}</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline">{item.type.charAt(0).toUpperCase() + item.type.slice(1)}</Badge>
                        </TableCell>
                        <TableCell>{getCourseName(item.course)}</TableCell>
                        <TableCell>{item.author}</TableCell>
                        <TableCell>{formatDate(item.created)}</TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Button size="sm" variant="outline" asChild>
                              <Link href={`/dashboard/admin/content/${item.id}/edit`}>Edit</Link>
                            </Button>
                            <Button size="sm" asChild>
                              <Link href={`/dashboard/admin/content/${item.id}/publish`}>Publish</Link>
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}

                    {draftContent.length === 0 && (
                      <TableRow>
                        <TableCell colSpan={6} className="text-center py-8">
                          <div className="text-lg font-medium">No draft content</div>
                          <p className="text-gray-500 dark:text-gray-400 mt-1">Draft content will appear here</p>
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
