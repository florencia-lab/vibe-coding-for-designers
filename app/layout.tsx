import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Vibe Coding for Designers",
  description:
    "Everything you need to go from Figma file to live URL — without a computer science degree.",
  openGraph: {
    title: "Vibe Coding for Designers",
    description: "A survival guide for building with AI — without breaking things.",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="min-h-full">{children}</body>
    </html>
  )
}
