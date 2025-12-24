import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { LanguageProvider } from "@/lib/language-context"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "INOZET MD - Gormonal muvozanat va reproduktiv salomatlik uchun",
  description:
    "INOZET MD - Myo-inositol, D-xiro-inositol va Metafolin kombinatsiyasi. Gormonal muvozanat, reproduktiv salomatlik va PCOS muammolarini hal qilish uchun tabiiy yechim.",
  generator: "v0.app",
  keywords:
    "INOZET, HERBALAB, myo-inositol, d-chiro-inositol, metafolin, PCOS, gormonal muvozanat, reproduktiv salomatlik, hayzli tsikl, ovulyatsiya",
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
        </LanguageProvider>
      </body>
    </html>
  )
}
