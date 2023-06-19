import { cn } from "@/lib/utils"

import "@/styles/globals.css"

import { Inter } from "next/font/google"

export const metadata = {
  title: "Sharny",
  description: "On Sharny you can share your thoughts with the world.",
}

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={cn(
        "text-slate-900 bg-white antialiased light",
        inter.className
      )}
    >
      <body className="min-h-screen pt-12 bg-slate-50 antialiased ">
        <div className="container max-w-7xl mx-auto h-full pt-12">
          {children}
        </div>
      </body>
    </html>
  )
}
