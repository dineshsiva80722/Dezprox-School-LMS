"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useRouter, useSearchParams } from "next/navigation"

import Image from "next/image"
import Link from "next/link"

export default function LoginPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const defaultRole = searchParams.get("role") || "student"
  const [role, setRole] = useState(defaultRole)

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    router.push(`/dashboard/${role}`)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 p-4">
      <div className="w-full max-w-md">
        <div className="flex justify-center mb-8">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/dezproxlogo.png" alt="Dezprox Logo" width={32} height={32} />
            <h1 className="text-2xl font-bold">EduLearn LMS</h1>
          </Link>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-center">Welcome Back</CardTitle>
            <CardDescription className="text-center">Sign in to your account to continue</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue={role} onValueChange={setRole} className="w-full">
              <TabsList className="grid grid-cols-3 mb-6">
                <TabsTrigger value="student">Student</TabsTrigger>
                <TabsTrigger value="teacher">Teacher</TabsTrigger>
                <TabsTrigger value="admin">Admin</TabsTrigger>
              </TabsList>

              <TabsContent value="student">
                <form onSubmit={handleLogin}>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="student-email">Email</Label>
                      <Input id="student-email" type="email" placeholder="student@school.edu" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="student-password">Password</Label>
                      <Input id="student-password" type="password" required />
                    </div>
                    <Button type="submit" className="w-full">
                      Sign In as Student
                    </Button>
                  </div>
                </form>
              </TabsContent>

              <TabsContent value="teacher">
                <form onSubmit={handleLogin}>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="teacher-email">Email</Label>
                      <Input id="teacher-email" type="email" placeholder="teacher@school.edu" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="teacher-password">Password</Label>
                      <Input id="teacher-password" type="password" required />
                    </div>
                    <Button type="submit" className="w-full">
                      Sign In as Teacher
                    </Button>
                  </div>
                </form>
              </TabsContent>

              <TabsContent value="admin">
                <form onSubmit={handleLogin}>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="admin-email">Email</Label>
                      <Input id="admin-email" type="email" placeholder="admin@school.edu" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="admin-password">Password</Label>
                      <Input id="admin-password" type="password" required />
                    </div>
                    <Button type="submit" className="w-full">
                      Sign In as Administrator
                    </Button>
                  </div>
                </form>
              </TabsContent>
            </Tabs>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <div className="text-center text-sm">
              <Link href="/forgot-password" className="text-blue-600 dark:text-blue-400 hover:underline">
                Forgot your password?
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
