"use client"

import { useChat } from "ai/react"
import { useState, useRef, useEffect } from "react"
import { Bot, ChevronDown, ChevronUp, Send, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export function CourseAdvisorChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    api: "/api/chat",
    initialMessages: [
      {
        id: "welcome",
        role: "assistant",
        content:
          "Hi! I'm your Course Advisor Assistant. I can help you with:\n\n" +
          "• Course recommendations based on your degree progress\n" +
          "• Schedule planning and prerequisites\n" +
          "• Information about specific classes\n" +
          "• General academic advice\n\n" +
          "What would you like to know?",
      },
    ],
  })

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  if (!isOpen) {
    return (
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 bg-[#13639e] hover:bg-[#0e4c7a] shadow-lg flex items-center gap-2"
      >
        <Bot className="h-5 w-5" />
        Chat with Course Advisor
      </Button>
    )
  }

  return (
    <Card
      className={`fixed right-4 shadow-2xl transition-all duration-300 ease-in-out ${
        isMinimized ? "bottom-4 h-14" : "bottom-4 h-[600px]"
      }`}
      style={{ width: "400px" }}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b bg-[#13639e] text-white rounded-t-lg">
        <div className="flex items-center gap-2">
          <Avatar className="h-8 w-8">
            <AvatarImage src="/placeholder.svg" />
            <AvatarFallback>CA</AvatarFallback>
          </Avatar>
          <div>
            <div className="font-semibold">Course Advisor</div>
            <div className="text-xs opacity-75">Ask me anything about your courses</div>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 text-white hover:bg-[#0e4c7a]"
            onClick={() => setIsMinimized(!isMinimized)}
          >
            {isMinimized ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 text-white hover:bg-[#0e4c7a]"
            onClick={() => setIsOpen(false)}
          >
            <X className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {!isMinimized && (
        <>
          {/* Messages */}
          <ScrollArea className="flex-1 p-4 h-[460px]">
            <div className="space-y-4">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`flex gap-3 max-w-[80%] ${message.role === "user" ? "flex-row-reverse" : ""}`}>
                    <Avatar className="h-8 w-8 mt-1">
                      <AvatarImage src={message.role === "user" ? "/placeholder-user.jpg" : "/placeholder.svg"} />
                      <AvatarFallback>{message.role === "user" ? "U" : "CA"}</AvatarFallback>
                    </Avatar>
                    <div
                      className={`rounded-lg px-3 py-2 ${
                        message.role === "user" ? "bg-[#13639e] text-white" : "bg-gray-100"
                      }`}
                    >
                      {message.content.split("\n").map((line, i) => (
                        <p key={i} className="mb-1 last:mb-0">
                          {line}
                        </p>
                      ))}
                      {message.role === "assistant" && message.content.includes("ECS") && (
                        <div className="mt-2 space-y-2">
                          <Button variant="outline" size="sm" className="w-full justify-start text-left">
                            View Course Details
                          </Button>
                          <Button variant="outline" size="sm" className="w-full justify-start text-left">
                            Add to Schedule
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
          </ScrollArea>

          {/* Input */}
          <div className="p-4 border-t">
            <form onSubmit={handleSubmit} className="flex items-center gap-2">
              <input
                value={input}
                onChange={handleInputChange}
                placeholder="Ask about courses, requirements, or get recommendations..."
                className="flex-1 px-3 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-[#13639e] focus:border-transparent"
              />
              <Button
                type="submit"
                size="icon"
                disabled={isLoading || !input.trim()}
                className="bg-[#13639e] hover:bg-[#0e4c7a]"
              >
                <Send className="h-4 w-4" />
              </Button>
            </form>
            <div className="mt-2 flex gap-2">
              <Badge
                variant="outline"
                className="cursor-pointer hover:bg-gray-100"
                onClick={() =>
                  handleInputChange({ target: { value: "What classes should I take next quarter?" } } as any)
                }
              >
                Course recommendations
              </Badge>
              <Badge
                variant="outline"
                className="cursor-pointer hover:bg-gray-100"
                onClick={() =>
                  handleInputChange({ target: { value: "What prerequisites do I need for ECS 150?" } } as any)
                }
              >
                Prerequisites
              </Badge>
            </div>
          </div>
        </>
      )}
    </Card>
  )
}

