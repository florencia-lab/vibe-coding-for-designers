"use client"

import { useChatContext } from "@/lib/chat-context"
import { ArrowUp } from "lucide-react"
import { useState } from "react"

const SUGGESTIONS = [
  "What's the difference between commit and push?",
  "How do I store secrets safely?",
  "Where do I start if I've never coded before?",
  "What is localhost:3000?",
]

export function HeroInput() {
  const [input, setInput] = useState("")
  const { openWithMessage } = useChatContext()

  function handleSend(text: string) {
    const trimmed = text.trim()
    if (!trimmed) return
    setInput("")
    openWithMessage(trimmed)
  }

  return (
    <div className="w-full max-w-2xl flex flex-col items-center gap-5">
      {/* Input pill */}
      <div className="w-full flex items-center gap-3 bg-[#1c1c1c] border border-[#2e2e2e] rounded-full px-5 py-3.5 focus-within:border-[#aba9f0]/50 transition-all duration-200 shadow-lg">
        <input
          autoFocus
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend(input)}
          placeholder="Ask anything…"
          className="flex-1 bg-transparent text-white placeholder:text-[#444] text-[16px] outline-none leading-none py-0.5"
        />
        <button
          onClick={() => handleSend(input)}
          disabled={!input.trim()}
          className="shrink-0 w-9 h-9 flex items-center justify-center rounded-full bg-[#aba9f0] hover:bg-[#7b79e8] disabled:opacity-25 transition-all disabled:cursor-not-allowed"
          aria-label="Send"
        >
          <ArrowUp size={16} className="text-white" strokeWidth={2.5} />
        </button>
      </div>

      {/* Suggestion chips */}
      <div className="flex flex-wrap justify-center gap-2">
        {SUGGESTIONS.map((s) => (
          <button
            key={s}
            onClick={() => handleSend(s)}
            className="text-[12px] text-[#555] hover:text-[#999] border border-[#252525] hover:border-[#3a3a3a] rounded-full px-3.5 py-1.5 transition-colors"
          >
            {s}
          </button>
        ))}
      </div>
    </div>
  )
}
