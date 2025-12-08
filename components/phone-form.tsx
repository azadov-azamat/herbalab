"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, User } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function PhoneForm() {
  const { t } = useLanguage()
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      console.log("[v0] Form submitted:", { name, phone })

      setStatus("success")
      setName("")
      setPhone("")

      // Reset status after 5 seconds
      setTimeout(() => setStatus("idle"), 5000)
    } catch (error) {
      console.error("[v0] Form submission error:", error)
      setStatus("error")
      setTimeout(() => setStatus("idle"), 5000)
    }
  }

  return (
    <section id="phone-form" className="py-16 md:py-24 bg-gradient-to-br from-accent/5 to-primary/5">
      <div className="container mx-auto px-4">
        <Card className="max-w-2xl mx-auto border-2 shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl md:text-4xl font-bold text-primary mb-2">{t.phoneForm.title}</CardTitle>
            <CardDescription className="text-base md:text-lg">{t.phoneForm.subtitle}</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
                  <Input
                    type="text"
                    placeholder={t.phoneForm.namePlaceholder}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="pl-10 h-12 text-base"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
                  <Input
                    type="tel"
                    placeholder={t.phoneForm.phonePlaceholder}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    className="pl-10 h-12 text-base"
                  />
                </div>
              </div>

              {status === "success" && (
                <div className="p-4 bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-lg text-green-800 dark:text-green-200 text-sm">
                  {t.phoneForm.success}
                </div>
              )}

              {status === "error" && (
                <div className="p-4 bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800 rounded-lg text-red-800 dark:text-red-200 text-sm">
                  {t.phoneForm.error}
                </div>
              )}

              <Button type="submit" size="lg" className="w-full text-base h-12">
                {t.phoneForm.submit}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
