"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Phone, Instagram, User } from "lucide-react"
import Image from "next/image"
import { useLanguage } from "@/lib/language-context"

export function Contact() {
  const { t } = useLanguage()
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")

  const formatPhoneNumber = (value: string) => {
    // Remove all non-digit characters
    const digits = value.replace(/\D/g, "")

    // Limit to 12 digits (998 + 9 digits)
    const limitedDigits = digits.slice(0, 12)

    // Format as +998 XX XXX XX XX
    if (limitedDigits.length === 0) return ""
    if (limitedDigits.length <= 3) return `+${limitedDigits}`
    if (limitedDigits.length <= 5) return `+${limitedDigits.slice(0, 3)} ${limitedDigits.slice(3)}`
    if (limitedDigits.length <= 8)
      return `+${limitedDigits.slice(0, 3)} ${limitedDigits.slice(3, 5)} ${limitedDigits.slice(5)}`
    if (limitedDigits.length <= 10)
      return `+${limitedDigits.slice(0, 3)} ${limitedDigits.slice(3, 5)} ${limitedDigits.slice(5, 8)} ${limitedDigits.slice(8)}`
    return `+${limitedDigits.slice(0, 3)} ${limitedDigits.slice(3, 5)} ${limitedDigits.slice(5, 8)} ${limitedDigits.slice(8, 10)} ${limitedDigits.slice(10)}`
  }

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value)
    setPhone(formatted)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      setStatus("success")
      setName("")
      setPhone("")

      // Reset status after 5 seconds
      setTimeout(() => setStatus("idle"), 5000)
    } catch (error) {
      setStatus("error")
      setTimeout(() => setStatus("idle"), 5000)
    }
  }

  return (
    <section id="contact" className="py-12 md:py-16 bg-linear-to-br from-primary/5 via-background to-purple-900/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 text-balance">{t.contact.title}</h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Contact Info - Left Column */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-3">{t.contact.phone}</h3>
            <Card className="p-4 hover:shadow-md transition-all">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone size={20} className="text-primary" />
                </div>
                <div className="flex flex-col gap-1">
                  <a href="tel:+998943746667" className="text-sm text-primary hover:underline">
                    +998 94 374 66 67
                  </a>
                  <a href="tel:+998998807498" className="text-sm text-primary hover:underline">
                    +998 99 880 74 98
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-4 hover:shadow-md transition-all">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-purple-900/10 flex items-center justify-center shrink-0">
                  <Instagram size={20} className="text-purple-900" />
                </div>
                <div>
                  <a
                    href="https://instagram.com/herbalab_uzb_corp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-purple-900 hover:underline break-all"
                  >
                    @herbalab_uzb_corp
                  </a>
                </div>
              </div>
            </Card>
          </div>

          <div className="md:col-span-2">
            <Card className="p-6 border-2 shadow-md">
              <h3 className="text-xl font-bold text-primary">{t.phoneForm.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{t.phoneForm.subtitle}</p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                    <Input
                      type="text"
                      placeholder={t.phoneForm.namePlaceholder}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="pl-10 h-11"
                    />
                  </div>

                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                    <Input
                      type="tel"
                      placeholder="+998 XX XXX XX XX"
                      value={phone}
                      onChange={handlePhoneChange}
                      required
                      className="pl-10 h-11"
                    />
                  </div>
                </div>

                {status === "success" && (
                  <div className="p-3 bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-lg text-green-800 dark:text-green-200 text-sm">
                    {t.phoneForm.success}
                  </div>
                )}

                {status === "error" && (
                  <div className="p-3 bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800 rounded-lg text-red-800 dark:text-red-200 text-sm">
                    {t.phoneForm.error}
                  </div>
                )}

                <Button type="submit" size="lg" className="w-full h-11">
                  {t.phoneForm.submit}
                </Button>
              </form>

              <div className="mt-6 pt-6 border-t">
                <div className="flex items-center gap-4">
                  <Image
                    src="/images/img-20251207-183948-214.jpg"
                    alt="HERBALAB Instagram QR kod"
                    width={120}
                    height={120}
                    className="rounded-lg shrink-0"
                  />
                  <div>
                    <h4 className="font-semibold mb-1 text-sm">{t.contact.instagramQrCode}</h4>
                    <p className="text-xs text-muted-foreground">{t.contact.qrScanInstruction}</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
