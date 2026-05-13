import { sections } from "@/lib/content"
import { SectionContent } from "@/components/SectionContent"
import { ChatWidget } from "@/components/ChatWidget"

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
    <div className="min-h-screen bg-[#fafafa]">
      {/* Header */}
      <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-6 h-6 rounded-md bg-[#aba9f0] flex items-center justify-center">
              <span className="text-white text-[11px] font-bold leading-none">VC</span>
            </div>
            <span className="text-[14px] font-semibold text-[#1b1b1b]">Vibe Coding for Designers</span>
          </div>
          <nav className="hidden md:flex items-center gap-1">
            {["Git", "Deploy", "Security", "Cheat Sheet"].map((label) => {
              const s = sections.find((s) => s.title.includes(label.split(" ")[0]))
              return s ? (
                <a
                  key={label}
                  href={`#${s.id}`}
                  className="text-[13px] text-[#666] hover:text-[#1b1b1b] px-3 py-1.5 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  {label}
                </a>
              ) : null
            })}
          </nav>
        </div>
      </header>

      {/* Hero */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#C8C2F8] via-[#D8D4FC] to-[#E8E4FF] pt-20 pb-24 px-5 sm:px-8">
        <div className="max-w-4xl mx-auto">
          <p className="text-[11px] font-semibold tracking-[0.12em] text-[#6b69c8] uppercase mb-4">
            A guide by capicua
          </p>
          <h1 className="text-4xl sm:text-6xl font-normal text-[#1b1b1b] leading-[1.05] tracking-tight mb-5">
            Vibe Coding<br />for Designers
          </h1>
          <p className="text-lg sm:text-xl font-light text-[#3d3b8a] max-w-xl leading-relaxed">
            Everything you need to go from Figma file to live URL — without a computer science degree.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#the-full-journey"
              className="inline-flex items-center gap-2 bg-[#1b1b1b] text-white text-[14px] font-medium px-5 py-2.5 rounded-full hover:bg-[#333] transition-colors"
            >
              Start reading
            </a>
            <a
              href="#cheat-sheet"
              className="inline-flex items-center gap-2 bg-white/60 text-[#1b1b1b] text-[14px] font-medium px-5 py-2.5 rounded-full hover:bg-white/80 transition-colors border border-white/40"
            >
              Jump to cheat sheet
            </a>
          </div>
        </div>
        {/* Decorative circles */}
        <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-white/10" />
        <div className="absolute top-8 -right-8 w-40 h-40 rounded-full bg-white/10" />
      </div>

      {/* Table of contents strip */}
      <div className="bg-white border-b border-gray-100 overflow-x-auto">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <div className="flex gap-1 py-2 min-w-max">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[12px] text-[#666] hover:text-[#1b1b1b] hover:bg-gray-50 transition-colors whitespace-nowrap"
              >
                <span className="text-[#aba9f0] font-semibold">{String(s.number).padStart(2, "0")}</span>
                <span>{s.title}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
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
                className="bg-white rounded-2xl border border-gray-100 overflow-hidden scroll-mt-20"
              >
                {/* Section header */}
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

                {/* Section body */}
                <div className="px-6 py-5">
                  <SectionContent items={section.content} />
                </div>
              </section>
            </div>
          )
        })}

        {/* Footer */}
        <div className="text-center pt-8 pb-4">
          <p className="text-[13px] text-[#aaa]">
            Made with{" "}
            <span className="text-[#aba9f0]">♥</span>
            {" "}by{" "}
            <a href="https://capicua.com" className="hover:text-[#666] transition-colors">
              capicua
            </a>
          </p>
        </div>
      </main>

      <ChatWidget />
    </div>
  )
}
