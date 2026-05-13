"use client"

import { useChat } from "@ai-sdk/react"
import { useChatContext } from "@/lib/chat-context"
import { type UIMessage } from "ai"
import { MessageCircle, X, Send, Loader2, Bot } from "lucide-react"
import { useEffect, useRef, useState } from "react"

function getMessageText(message: UIMessage): string {
  return message.parts
    .filter((p): p is Extract<typeof p, { type: "text" }> => p.type === "text")
    .map((p) => p.text)
    .join("")
}

export function ChatWidget() {
  const { chat, open, setOpen } = useChatContext()
  const [input, setInput] = useState("")
  const bottomRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const { messages, sendMessage, status } = useChat({ chat })
  const isLoading = status === "submitted" || status === "streaming"

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages, isLoading])

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 150)
  }, [open])

  function handleSend(text: string) {
    if (!text.trim() || isLoading) return
    sendMessage({ text })
    setInput("")
  }

  return (
    <>
      {/* Floating button — only shown after the user has scrolled past hero */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 bg-[#1b1b1b] hover:bg-[#2d2d2d] text-white rounded-full px-5 py-3 shadow-xl transition-all duration-200 hover:scale-105 active:scale-95"
        aria-label="Ask a question"
      >
        {open ? <X size={18} strokeWidth={2} /> : <MessageCircle size={18} strokeWidth={2} />}
        <span className="text-[14px] font-medium">{open ? "Close" : "Ask a question"}</span>
      </button>

      {/* Panel */}
      <div
        className={`fixed bottom-0 right-0 z-40 flex flex-col bg-white shadow-2xl transition-all duration-300 ease-in-out
          ${open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}
          w-full sm:w-[420px] sm:bottom-20 sm:right-6 sm:rounded-2xl sm:border sm:border-gray-100
          h-[85vh] sm:h-[600px]`}
      >
        {/* Header */}
        <div className="flex items-center justify-between gap-3 px-5 py-4 border-b border-gray-100 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#aba9f0] flex items-center justify-center shrink-0">
              <Bot size={16} className="text-white" />
            </div>
            <div>
              <p className="text-[14px] font-semibold text-[#1b1b1b]">Ask Claude</p>
              <p className="text-[12px] text-[#888] leading-none mt-0.5">Your Devsign guide is loaded</p>
            </div>
          </div>
          <button
            onClick={() => setOpen(false)}
            className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors text-[#999]"
          >
            <X size={15} />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 min-h-0">
          {messages.length === 0 && (
            <div className="h-full flex flex-col items-center justify-center text-center px-4">
              <div className="w-12 h-12 rounded-2xl bg-[#f0efff] flex items-center justify-center mb-3">
                <MessageCircle size={22} className="text-[#aba9f0]" />
              </div>
              <p className="text-[14px] font-medium text-[#1b1b1b] mb-1">Waiting for your question</p>
              <p className="text-[13px] text-[#888] leading-relaxed">
                Ask anything — git, deployment, security, or how to turn your Figma designs into real products.
              </p>
            </div>
          )}

          {messages.map((m) => {
            const text = getMessageText(m)
            if (!text) return null
            return (
              <div key={m.id} className={`flex gap-2.5 ${m.role === "user" ? "flex-row-reverse" : "flex-row"}`}>
                {m.role === "assistant" && (
                  <div className="w-7 h-7 rounded-full bg-[#aba9f0] flex items-center justify-center shrink-0 mt-0.5">
                    <Bot size={13} className="text-white" />
                  </div>
                )}
                <div
                  className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-[13.5px] leading-relaxed chat-prose
                    ${m.role === "user"
                      ? "bg-[#1b1b1b] text-white rounded-tr-sm"
                      : "bg-[#f5f5f5] text-[#1b1b1b] rounded-tl-sm"
                    }`}
                  dangerouslySetInnerHTML={{
                    __html: text
                      .replace(/&/g, "&amp;")
                      .replace(/</g, "&lt;")
                      .replace(/>/g, "&gt;")
                      .replace(/`([^`]+)`/g, "<code>$1</code>")
                      .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
                      .replace(/\n\n/g, "</p><p>")
                      .replace(/\n/g, "<br>")
                      .replace(/^/, "<p>")
                      .replace(/$/, "</p>"),
                  }}
                />
              </div>
            )
          })}

          {isLoading && (
            <div className="flex gap-2.5">
              <div className="w-7 h-7 rounded-full bg-[#aba9f0] flex items-center justify-center shrink-0">
                <Bot size={13} className="text-white" />
              </div>
              <div className="bg-[#f5f5f5] rounded-2xl rounded-tl-sm px-3.5 py-3 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-[#aba9f0] rounded-full animate-bounce [animation-delay:0ms]" />
                <span className="w-1.5 h-1.5 bg-[#aba9f0] rounded-full animate-bounce [animation-delay:150ms]" />
                <span className="w-1.5 h-1.5 bg-[#aba9f0] rounded-full animate-bounce [animation-delay:300ms]" />
              </div>
            </div>
          )}

          {status === "error" && (
            <p className="text-[13px] text-red-500 text-center py-2">
              Something went wrong. Check your API key and try again.
            </p>
          )}

          <div ref={bottomRef} />
        </div>

        {/* Input */}
        <div className="px-4 py-3 border-t border-gray-100 shrink-0">
          <div className="flex items-center gap-2 bg-[#f5f5f5] rounded-xl px-3.5 py-2.5">
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && handleSend(input)}
              placeholder="Ask anything…"
              className="flex-1 bg-transparent text-[14px] text-[#1b1b1b] placeholder:text-[#aaa] outline-none"
              disabled={isLoading}
            />
            <button
              onClick={() => handleSend(input)}
              disabled={isLoading || !input.trim()}
              className="shrink-0 w-7 h-7 flex items-center justify-center rounded-lg bg-[#aba9f0] disabled:opacity-40 transition-opacity hover:bg-[#7b79e8]"
            >
              {isLoading ? (
                <Loader2 size={13} className="text-white animate-spin" />
              ) : (
                <Send size={13} className="text-white" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile backdrop */}
      {open && (
        <div className="fixed inset-0 z-30 bg-black/20 sm:hidden" onClick={() => setOpen(false)} />
      )}
    </>
  )
}
