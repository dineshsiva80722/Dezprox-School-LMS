import { Skeleton } from "@/components/ui/skeleton"

export default function StudentMessagesLoading() {
  return (
    <div className="container mx-auto p-4 md:p-6">
      <div className="flex flex-col h-[calc(100vh-10rem)]">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <Skeleton className="h-8 w-48 mb-2" />
            <Skeleton className="h-4 w-72" />
          </div>
          <Skeleton className="h-10 w-32" />
        </div>

        <div className="flex flex-col md:flex-row gap-6 flex-1 h-full">
          {/* Conversations List */}
          <div className="md:w-1/3 flex flex-col">
            <Skeleton className="h-10 w-full mb-4" />

            <div className="flex-1 border rounded-lg p-4">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <div key={i} className="flex items-center gap-3 mb-4">
                    <Skeleton className="h-10 w-10 rounded-full" />
                    <div className="flex-1">
                      <Skeleton className="h-4 w-24 mb-2" />
                      <Skeleton className="h-3 w-full" />
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* Active Conversation */}
          <div className="md:w-2/3 flex flex-col border rounded-lg">
            {/* Conversation Header */}
            <div className="flex items-center gap-3 p-4 border-b">
              <Skeleton className="h-10 w-10 rounded-full" />
              <div>
                <Skeleton className="h-4 w-32 mb-2" />
                <Skeleton className="h-3 w-20" />
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <div key={i} className={`mb-4 flex ${i % 2 === 0 ? "justify-start" : "justify-end"}`}>
                    <Skeleton className={`h-20 ${i % 2 === 0 ? "w-2/3" : "w-1/2"} rounded-lg`} />
                  </div>
                ))}
            </div>

            {/* Message Input */}
            <div className="p-4 border-t">
              <div className="flex gap-2">
                <Skeleton className="h-16 flex-1" />
                <Skeleton className="h-10 w-16" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
