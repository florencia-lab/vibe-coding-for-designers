import { sections } from "@/lib/content"
import { SectionContent } from "@/components/SectionContent"
import { ChatWidget } from "@/components/ChatWidget"
import { HeroInput } from "@/components/HeroInput"
import { ChatProvider } from "@/lib/chat-context"

const PART_LABELS: Record<number, string> = {
  1: "Overview",
  2: "Mental Models",
  3: "Your Toolkit",
  6: "Local Development",
  8: "Git",
  11: "Design → Code",
  12: "Shipping",
  13: "Security & Skills",
  16: "Debugging",
  17: "Reference",
}

export default function Home() {
  return (
    <ChatProvider>
      <div className="min-h-screen bg-[#fafafa]">

        {/* ── Dark hero ─────────────────────────────────────────────────── */}
        <div className="relative flex flex-col min-h-screen bg-[#0f0f0f] px-5">

          {/* Header inside hero */}
          <header className="flex items-center justify-between h-14 max-w-4xl w-full mx-auto shrink-0">
            <div className="flex items-center gap-2.5">
              <div className="w-6 h-6 rounded-md bg-[#aba9f0] flex items-center justify-center">
                <span className="text-white text-[11px] font-bold leading-none">DS</span>
              </div>
              <span className="text-[14px] font-semibold text-white/80">Devsign</span>
            </div>
            <nav className="hidden md:flex items-center gap-1">
              {["Git", "Deploy", "Security", "Cheat Sheet"].map((label) => {
                const s = sections.find((s) => s.title.includes(label.split(" ")[0]))
                return s ? (
                  <a
                    key={label}
                    href={`#${s.id}`}
                    className="text-[13px] text-white/30 hover:text-white/70 px-3 py-1.5 rounded-lg transition-colors"
                  >
                    {label}
                  </a>
                ) : null
              })}
            </nav>
          </header>

          {/* Centered content */}
          <div className="flex-1 flex flex-col items-center justify-center gap-10 pb-16 -mt-4">
            <div className="text-center space-y-3">
              <p className="text-[11px] font-semibold tracking-[0.14em] text-[#aba9f0] uppercase">
                A guide by capicua
              </p>
              <h1 className="text-3xl sm:text-5xl font-light text-white tracking-tight">
                Where should we begin?
              </h1>
              <p className="text-[15px] text-white/30 font-light">
                Your first git push should not be your last.
              </p>
            </div>

            <HeroInput />
          </div>

          {/* Scroll hint */}
          <div className="flex justify-center pb-8 shrink-0">
            <a
              href="#the-full-journey"
              className="flex flex-col items-center gap-2 text-white/20 hover:text-white/50 transition-colors group"
            >
              <span className="text-[12px] tracking-wider uppercase">Read the guide</span>
              <svg
                width="16" height="16" viewBox="0 0 16 16" fill="none"
                className="group-hover:translate-y-0.5 transition-transform"
              >
                <path d="M8 3v10M4 9l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>

        {/* ── Guide content ──────────────────────────────────────────────── */}

        {/* Sticky header for content section */}
        <header className="sticky top-0 z-30 bg-white/90 backdrop-blur-md border-b border-gray-100">
          <div className="max-w-4xl mx-auto px-5 sm:px-8 h-12 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-md bg-[#aba9f0] flex items-center justify-center">
                <span className="text-white text-[10px] font-bold leading-none">DS</span>
              </div>
              <span className="text-[13px] font-semibold text-[#1b1b1b]">Devsign</span>
            </div>
            <div className="overflow-x-auto max-w-xl">
              <div className="flex gap-1 min-w-max">
                {sections.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className="flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] text-[#888] hover:text-[#1b1b1b] hover:bg-gray-50 transition-colors whitespace-nowrap"
                  >
                    <span className="text-[#aba9f0] font-semibold">{String(s.number).padStart(2, "0")}</span>
                    <span className="hidden sm:inline">{s.title}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </header>

        <main className="max-w-4xl mx-auto px-5 sm:px-8 py-12 space-y-4">
          {sections.map((section, idx) => {
            const partLabel = PART_LABELS[section.number]
            const showDivider = partLabel && idx > 0

            return (
              <div key={section.id}>
                {showDivider && (
                  <div className="flex items-center gap-3 pt-8 pb-2">
                    <div className="h-px flex-1 bg-gray-200" />
                    <span className="text-[11px] font-semibold tracking-[0.1em] text-[#888] uppercase px-1">
                      {partLabel}
                    </span>
                    <div className="h-px flex-1 bg-gray-200" />
                  </div>
                )}

                <section
                  id={section.id}
                  className="bg-white rounded-2xl border border-gray-100 overflow-hidden scroll-mt-16"
                >
                  <div className="px-6 pt-6 pb-5 border-b border-gray-50">
                    <div className="flex items-start gap-4">
                      <span className="text-[13px] font-bold text-[#aba9f0] tabular-nums shrink-0 mt-0.5">
                        {String(section.number).padStart(2, "0")}
                      </span>
                      <div className="min-w-0">
                        <p className="text-[10px] font-semibold tracking-[0.1em] text-[#aba9f0] uppercase mb-1">
                          {section.eyebrow}
                        </p>
                        <h2 className="text-xl sm:text-2xl font-normal text-[#1b1b1b] leading-tight">
                          {section.title}
                        </h2>
                        <p className="text-[14px] font-light text-[#888] mt-1 leading-snug">
                          {section.subtitle}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="px-6 py-5">
                    <SectionContent items={section.content} />
                  </div>
                </section>
              </div>
            )
          })}

          <div className="text-center pt-8 pb-4">
            <p className="text-[13px] text-[#aaa]">
              <span className="text-[#aba9f0] font-semibold">Devsign</span>
              {" "}— made with ♥ by{" "}
              <a href="https://capicua.com" className="hover:text-[#666] transition-colors">
                capicua
              </a>
            </p>
          </div>
        </main>

        <ChatWidget />
      </div>
    </ChatProvider>
  )
}
