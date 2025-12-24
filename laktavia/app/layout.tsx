import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { LanguageProvider } from "@/lib/language-context"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Laktavia - HERBALAB | Ichak va immunitet uchun probiotik",
  description: "Laktavia - tabiiy probiotik. 9 xil tirik bakteriya shtammi, rux va oligosaxaridlar. Ichak mikroflorasini tiklaydi va immunitetni mustahkamlaydi.",
  generator: "v0.app",
  keywords:
    "Laktavia, HERBALAB, rux, Rux (zn), Oligosaxarid, maltodekstrin, ovqat hazm qilish, Ichak mikroflorasin, Восстанавливает микрофлори, Цинк (Zn), Олигосахарид, мальтодекстрин",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="uz">
      <body className={`font-sans antialiased`}>
        <LanguageProvider>
          {children}
          <Analytics debug />
          <SpeedInsights/>
        </LanguageProvider>
      </body>
    </html>
  )
}
