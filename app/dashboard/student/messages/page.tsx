import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"
import { Plus } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Textarea } from "@/components/ui/textarea"

export default function StudentMessagesPage() {
  // Mock data
  const conversations = [
    {
      id: 1,
      name: "Dr. Smith",
      role: "Teacher",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "DS",
      lastMessage: "Please submit your assignment by Friday.",
      time: "10:30 AM",
      unread: 2,
      online: true,
    },
    {
      id: 2,
      name: "Prof. Johnson",
      role: "Teacher",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "PJ",
      lastMessage: "The lab session is rescheduled to next week.",
      time: "Yesterday",
      unread: 0,
      online: false,
    },
    {
      id: 3,
      name: "Emma Wilson",
      role: "Student",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "EW",
      lastMessage: "Can we meet to discuss the group project?",
      time: "Yesterday",
      unread: 0,
      online: true,
    },
    {
      id: 4,
      name: "James Brown",
      role: "Student",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "JB",
      lastMessage: "I shared the notes from today's lecture.",
      time: "Monday",
      unread: 0,
      online: false,
    },
    {
      id: 5,
      name: "Academic Advisor",
      role: "Staff",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "AA",
      lastMessage: "Your course registration is confirmed.",
      time: "Last week",
      unread: 0,
      online: false,
    },
  ]

  const activeConversation = {
    id: 1,
    name: "Dr. Smith",
    role: "Teacher",
    avatar: "/placeholder.svg?height=40&width=40",
    initials: "DS",
    online: true,
    messages: [
      {
        id: 1,
        sender: "Dr. Smith",
        content: "Hello! How can I help you with the Mathematics assignment?",
        time: "10:15 AM",
        isMe: false,
      },
      {
        id: 2,
        sender: "You",
        content: "Hi Dr. Smith, I'm having trouble with problem #5 on the calculus assignment.",
        time: "10:20 AM",
        isMe: true,
      },
      {
        id: 3,
        sender: "Dr. Smith",
        content: "I see. That's a challenging one. Let me explain the approach you should take.",
        time: "10:25 AM",
        isMe: false,
      },
      {
        id: 4,
        sender: "Dr. Smith",
        content:
          "First, you need to use the chain rule for differentiation. Then apply the product rule to solve the equation.",
        time: "10:26 AM",
        isMe: false,
      },
      {
        id: 5,
        sender: "Dr. Smith",
        content: "Please submit your assignment by Friday.",
        time: "10:30 AM",
        isMe: false,
      },
    ],
  }

  return (
    <div className="container mx-auto p-4 md:p-6">
      <div className="flex flex-col h-[calc(100vh-10rem)]">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h1 className="text-3xl font-bold">Messages</h1>
            <p className="text-gray-500 dark:text-gray-400">Communicate with teachers and classmates</p>
          </div>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            New Message
          </Button>
        </div>

        <div className="flex flex-col md:flex-row gap-6 flex-1 h-full">
          {/* Conversations List */}
          <div className="md:w-1/3 flex flex-col">
            <div className="relative mb-4">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
              <Input type="search" placeholder="Search messages..." className="pl-9" />
            </div>

            <ScrollArea className="flex-1 border rounded-lg">
              <div className="p-2">
                {conversations.map((conversation) => (
                  <div
                    key={conversation.id}
                    className={`flex items-center gap-3 p-3 rounded-md cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 ${conversation.id === activeConversation.id ? "bg-gray-100 dark:bg-gray-800" : ""}`}
                  >
                    <div className="relative">
                      <Avatar>
                        <AvatarImage src={conversation.avatar || "/placeholder.svg"} alt={conversation.name} />
                        <AvatarFallback>{conversation.initials}</AvatarFallback>
                      </Avatar>
                      {conversation.online && (
                        <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white dark:border-gray-900 rounded-full"></span>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-center">
                        <h3 className="font-medium truncate">{conversation.name}</h3>
                        <span className="text-xs text-gray-500">{conversation.time}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <p className="text-sm text-gray-500 truncate">{conversation.lastMessage}</p>
                        {conversation.unread > 0 && (
                          <Badge variant="destructive" className="ml-2">
                            {conversation.unread}
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </div>

          {/* Active Conversation */}
          <div className="md:w-2/3 flex flex-col border rounded-lg">
            {/* Conversation Header */}
            <div className="flex items-center gap-3 p-4 border-b">
              <div className="relative">
                <Avatar>
                  <AvatarImage src={activeConversation.avatar || "/placeholder.svg"} alt={activeConversation.name} />
                  <AvatarFallback>{activeConversation.initials}</AvatarFallback>
                </Avatar>
                {activeConversation.online && (
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white dark:border-gray-900 rounded-full"></span>
                )}
              </div>
              <div>
                <h3 className="font-medium">{activeConversation.name}</h3>
                <p className="text-sm text-gray-500">{activeConversation.role}</p>
              </div>
            </div>

            {/* Messages */}
            <ScrollArea className="flex-1 p-4">
              {activeConversation.messages.map((message) => (
                <div key={message.id} className={`mb-4 flex ${message.isMe ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      message.isMe ? "bg-primary text-primary-foreground" : "bg-gray-100 dark:bg-gray-800"
                    }`}
                  >
                    <p>{message.content}</p>
                    <p className={`text-xs mt-1 ${message.isMe ? "text-primary-foreground/70" : "text-gray-500"}`}>
                      {message.time}
                    </p>
                  </div>
                </div>
              ))}
            </ScrollArea>

            {/* Message Input */}
            <div className="p-4 border-t">
              <div className="flex gap-2">
                <Textarea placeholder="Type your message..." className="min-h-[60px]" />
                <Button className="self-end">Send</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
