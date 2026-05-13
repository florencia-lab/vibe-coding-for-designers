"use client"

import { createContext, useContext, useMemo, useRef, useState } from "react"
import { Chat } from "@ai-sdk/react"
import { TextStreamChatTransport } from "ai"

interface ChatContextValue {
  chat: InstanceType<typeof Chat>
  open: boolean
  setOpen: (open: boolean) => void
  openWithMessage: (text: string) => void
}

const ChatContext = createContext<ChatContextValue | null>(null)

export function ChatProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false)

  const transport = useMemo(() => new TextStreamChatTransport({ api: "/api/chat" }), [])
  const chat = useMemo(() => new Chat({ transport }), [transport])

  function openWithMessage(text: string) {
    setOpen(true)
    // Small delay so the panel animates in before the message sends
    setTimeout(() => {
      chat.sendMessage({ text })
    }, 150)
  }

  return (
    <ChatContext.Provider value={{ chat, open, setOpen, openWithMessage }}>
      {children}
    </ChatContext.Provider>
  )
}

export function useChatContext() {
  const ctx = useContext(ChatContext)
  if (!ctx) throw new Error("useChatContext must be used within ChatProvider")
  return ctx
}
