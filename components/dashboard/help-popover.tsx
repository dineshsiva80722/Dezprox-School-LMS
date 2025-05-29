import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Separator } from "@/components/ui/separator"
import { HelpCircle, BookOpen, MessageSquare, Video, FileText } from "lucide-react"
import Link from "next/link"

export function HelpPopover() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="icon">
          <HelpCircle className="h-5 w-5" />
          <span className="sr-only">Help</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-0" align="end">
        <div className="p-4">
          <h4 className="font-medium">Help & Resources</h4>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Get help with using the learning platform</p>
        </div>
        <Separator />
        <div className="p-4 space-y-3">
          <Button variant="ghost" className="w-full justify-start" asChild>
            <Link href="/help/documentation">
              <BookOpen className="mr-2 h-4 w-4" />
              Documentation
            </Link>
          </Button>
          <Button variant="ghost" className="w-full justify-start" asChild>
            <Link href="/help/tutorials">
              <Video className="mr-2 h-4 w-4" />
              Video Tutorials
            </Link>
          </Button>
          <Button variant="ghost" className="w-full justify-start" asChild>
            <Link href="/help/faq">
              <FileText className="mr-2 h-4 w-4" />
              FAQs
            </Link>
          </Button>
          <Button variant="ghost" className="w-full justify-start" asChild>
            <Link href="/help/contact">
              <MessageSquare className="mr-2 h-4 w-4" />
              Contact Support
            </Link>
          </Button>
        </div>
        <Separator />
        <div className="p-4">
          <Button className="w-full" asChild>
            <Link href="/help">Visit Help Center</Link>
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  )
}
