import { streamText, convertToModelMessages, createTextStreamResponse } from "ai"
import { createAnthropic } from "@ai-sdk/anthropic"
import { SYSTEM_PROMPT } from "@/lib/content"

export const runtime = "nodejs"

const anthropic = createAnthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
})

export async function POST(req: Request) {
  const { messages } = await req.json()

  const result = streamText({
    model: anthropic("claude-sonnet-4-6"),
    system: SYSTEM_PROMPT,
    messages: await convertToModelMessages(messages),
  })

  return createTextStreamResponse({ textStream: result.textStream })
}
