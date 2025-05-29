import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Bell } from "lucide-react"
import Link from "next/link"

interface Notification {
  id: number
  title: string
  message: string
  time: string
  read: boolean
}

interface NotificationsPopoverProps {
  notifications: Notification[]
}

export function NotificationsPopover({ notifications }: NotificationsPopoverProps) {
  const unreadCount = notifications.filter((n) => !n.read).length

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          {unreadCount > 0 && (
            <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
              {unreadCount}
            </span>
          )}
          <span className="sr-only">Notifications</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-0" align="end">
        <div className="flex items-center justify-between p-4">
          <h4 className="font-medium">Notifications</h4>
          <Button variant="ghost" size="sm" className="h-auto p-0 text-xs text-blue-500 dark:text-blue-400">
            Mark all as read
          </Button>
        </div>
        <Separator />
        <ScrollArea className="h-80">
          <div className="space-y-1">
            {notifications.length > 0 ? (
              notifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`flex flex-col gap-1 p-4 ${!notification.read ? "bg-gray-50 dark:bg-gray-800" : ""}`}
                >
                  <div className="flex items-center justify-between">
                    <h5 className="font-medium">{notification.title}</h5>
                    {!notification.read && <span className="h-2 w-2 rounded-full bg-blue-500"></span>}
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{notification.message}</p>
                  <p className="text-xs text-gray-400 dark:text-gray-500">{notification.time}</p>
                </div>
              ))
            ) : (
              <div className="p-4 text-center text-sm text-gray-500 dark:text-gray-400">No notifications</div>
            )}
          </div>
        </ScrollArea>
        <Separator />
        <div className="p-4 text-center">
          <Button variant="ghost" size="sm" asChild className="w-full">
            <Link href="/dashboard/notifications">View all notifications</Link>
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  )
}
