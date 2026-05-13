import type { Metadata } from "next"
import { Inter, Lora } from "next/font/google"
import "./globals.css"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
})

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  style: ["italic"],
})

export const metadata: Metadata = {
  title: "Devsign",
  description: "Your first git push should not be your last.",
  openGraph: {
    title: "Devsign",
    description: "Your first git push should not be your last.",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${lora.variable} h-full`}>
      <body className="min-h-full">{children}</body>
    </html>
  )
}
