"use client"

import type { ContentItem } from "@/lib/content"

export function SectionContent({ items }: { items: ContentItem[] }) {
  return (
    <div className="space-y-3">
      {items.map((item, i) => {
        if (item.type === "body") {
          return (
            <p key={i} className="text-[15px] leading-relaxed text-[#333] font-light">
              {item.text}
            </p>
          )
        }

        if (item.type === "h3") {
          return (
            <h3 key={i} className="text-[15px] font-semibold text-[#1b1b1b] pt-2">
              {item.text}
            </h3>
          )
        }

        if (item.type === "bullet") {
          return (
            <div key={i} className="flex gap-3 items-start">
              <span className="mt-[6px] shrink-0 w-1.5 h-1.5 rounded-full bg-[#aba9f0]" />
              <p className="text-[15px] leading-relaxed text-[#333] font-light">{item.text}</p>
            </div>
          )
        }

        if (item.type === "callout") {
          return (
            <div
              key={i}
              className="rounded-xl bg-[#f0efff] border border-[#dddcf8] px-4 py-3.5"
            >
              <p className="text-[14px] leading-relaxed text-[#4a48a8] font-normal">{item.text}</p>
            </div>
          )
        }

        if (item.type === "spacer") {
          return <div key={i} className="h-2" />
        }

        if (item.type === "table") {
          return (
            <div key={i} className="overflow-x-auto rounded-xl border border-gray-100 mt-1">
              <table className="w-full text-[13px]">
                <thead>
                  <tr className="bg-[#aba9f0]">
                    {item.headers.map((h, hi) => (
                      <th
                        key={hi}
                        className="px-4 py-2.5 text-left text-white font-medium whitespace-nowrap"
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {item.rows.map((row, ri) => (
                    <tr
                      key={ri}
                      className={ri % 2 === 0 ? "bg-white" : "bg-[#f7f6ff]"}
                    >
                      {row.map((cell, ci) => (
                        <td
                          key={ci}
                          className="px-4 py-2.5 text-[#333] leading-relaxed align-top"
                        >
                          {ci === 0 ? (
                            <code className="text-[12px]">{cell}</code>
                          ) : (
                            cell
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )
        }

        return null
      })}
    </div>
  )
}
