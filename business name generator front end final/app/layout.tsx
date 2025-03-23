import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { BackgroundPattern } from "@/components/background-pattern"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Business Name and Slogan Generator",
  description: "Generate creative business names and slogans for your new venture",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <BackgroundPattern />
          <div className="relative min-h-screen">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'