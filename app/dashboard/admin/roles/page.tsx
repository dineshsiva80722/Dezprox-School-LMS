import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { Checkbox } from "@/components/ui/checkbox"
import { Plus, Shield, Users } from "lucide-react"
import Link from "next/link"

export default function AdminRolesPage() {
  // Mock data
  const roles = [
    {
      id: 1,
      name: "Administrator",
      description: "Full system access with all permissions",
      users: 3,
      permissions: [
        "User Management",
        "Course Management",
        "Content Management",
        "System Settings",
        "Reports",
        "Billing",
      ],
    },
    {
      id: 2,
      name: "Teacher",
      description: "Access to teaching tools and student management",
      users: 15,
      permissions: [
        "Course Creation",
        "Assignment Management",
        "Grading",
        "Student Progress Tracking",
        "Announcements",
        "Live Classes",
      ],
    },
    {
      id: 3,
      name: "Student",
      description: "Access to learning materials and assignments",
      users: 250,
      permissions: [
        "Course Access",
        "Assignment Submission",
        "Forum Participation",
        "Progress Tracking",
        "Live Class Attendance",
      ],
    },
    {
      id: 4,
      name: "Teaching Assistant",
      description: "Limited teaching permissions to assist teachers",
      users: 8,
      permissions: ["Assignment Grading", "Forum Moderation", "Content Viewing", "Student Support"],
    },
    {
      id: 5,
      name: "Parent",
      description: "View student progress and communicate with teachers",
      users: 180,
      permissions: ["Student Progress Viewing", "Teacher Communication", "Announcement Viewing"],
    },
  ]

  return (
    <div className="container mx-auto p-4 md:p-6">
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold">Roles & Permissions</h1>
            <p className="text-gray-500 dark:text-gray-400">Manage user roles and access control</p>
          </div>
          <Button asChild>
            <Link href="/dashboard/admin/roles/create">
              <Plus className="mr-2 h-4 w-4" />
              Create Role
            </Link>
          </Button>
        </div>

        <Tabs defaultValue="roles">
          <TabsList>
            <TabsTrigger value="roles">Roles</TabsTrigger>
            <TabsTrigger value="permissions">Permissions</TabsTrigger>
          </TabsList>
          <TabsContent value="roles" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {roles.map((role) => (
                <Card key={role.id}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="flex items-center gap-2">
                        <Shield className="h-5 w-5 text-blue-500" />
                        {role.name}
                      </CardTitle>
                      <Badge variant="outline" className="flex items-center gap-1">
                        <Users className="h-3 w-3" />
                        {role.users}
                      </Badge>
                    </div>
                    <CardDescription>{role.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <h4 className="text-sm font-medium mb-2">Permissions:</h4>
                    <ul className="space-y-1 text-sm">
                      {role.permissions.slice(0, 4).map((permission, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <Checkbox id={`${role.id}-${index}`} checked disabled />
                          <label htmlFor={`${role.id}-${index}`} className="text-sm">
                            {permission}
                          </label>
                        </li>
                      ))}
                      {role.permissions.length > 4 && (
                        <li className="text-sm text-gray-500 dark:text-gray-400 pl-6">
                          +{role.permissions.length - 4} more permissions
                        </li>
                      )}
                    </ul>
                    <div className="mt-4 flex gap-2">
                      <Button variant="outline" size="sm" className="flex-1" asChild>
                        <Link href={`/dashboard/admin/roles/${role.id}/users`}>Users</Link>
                      </Button>
                      <Button size="sm" className="flex-1" asChild>
                        <Link href={`/dashboard/admin/roles/${role.id}`}>Edit</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="permissions" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Permission Management</CardTitle>
                <CardDescription>Configure system permissions and access control</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border">
                  <div className="grid grid-cols-1 md:grid-cols-7 p-4 font-medium">
                    <div className="md:col-span-3">Permission</div>
                    <div className="text-center">Admin</div>
                    <div className="text-center">Teacher</div>
                    <div className="text-center">Student</div>
                    <div className="text-center">TA</div>
                  </div>
                  <Separator />
                  <div className="grid grid-cols-1 md:grid-cols-7 p-4 items-center">
                    <div className="md:col-span-3 font-medium">User Management</div>
                    <div className="text-center">
                      <Checkbox id="admin-user-management" checked disabled />
                    </div>
                    <div className="text-center">
                      <Checkbox id="teacher-user-management" disabled />
                    </div>
                    <div className="text-center">
                      <Checkbox id="student-user-management" disabled />
                    </div>
                    <div className="text-center">
                      <Checkbox id="ta-user-management" disabled />
                    </div>
                  </div>
                  <Separator />
                  <div className="grid grid-cols-1 md:grid-cols-7 p-4 items-center">
                    <div className="md:col-span-3 font-medium">Course Creation</div>
                    <div className="text-center">
                      <Checkbox id="admin-course-creation" checked disabled />
                    </div>
                    <div className="text-center">
                      <Checkbox id="teacher-course-creation" checked disabled />
                    </div>
                    <div className="text-center">
                      <Checkbox id="student-course-creation" disabled />
                    </div>
                    <div className="text-center">
                      <Checkbox id="ta-course-creation" disabled />
                    </div>
                  </div>
                  <Separator />
                  <div className="grid grid-cols-1 md:grid-cols-7 p-4 items-center">
                    <div className="md:col-span-3 font-medium">Assignment Grading</div>
                    <div className="text-center">
                      <Checkbox id="admin-assignment-grading" checked disabled />
                    </div>
                    <div className="text-center">
                      <Checkbox id="teacher-assignment-grading" checked disabled />
                    </div>
                    <div className="text-center">
                      <Checkbox id="student-assignment-grading" disabled />
                    </div>
                    <div className="text-center">
                      <Checkbox id="ta-assignment-grading" checked disabled />
                    </div>
                  </div>
                  <Separator />
                  <div className="grid grid-cols-1 md:grid-cols-7 p-4 items-center">
                    <div className="md:col-span-3 font-medium">System Settings</div>
                    <div className="text-center">
                      <Checkbox id="admin-system-settings" checked disabled />
                    </div>
                    <div className="text-center">
                      <Checkbox id="teacher-system-settings" disabled />
                    </div>
                    <div className="text-center">
                      <Checkbox id="student-system-settings" disabled />
                    </div>
                    <div className="text-center">
                      <Checkbox id="ta-system-settings" disabled />
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex justify-end">
                  <Button asChild>
                    <Link href="/dashboard/admin/roles/permissions/edit">Edit Permissions</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
