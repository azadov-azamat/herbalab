"use client"

import { Button } from "@/components/ui/button"
import { Check, Leaf } from "lucide-react"
import Image from "next/image"
import { useLanguage } from "@/lib/language-context"

export function Hero() {
  const { t } = useLanguage()

  return (
    <section className="relative pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden bg-linear-to-br from-background via-accent/5 to-background">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-background to-accent/5" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-20 left-10 w-96 h-96 bg-purple-900/10 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "1s" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 md:space-y-8 animate-fade-in-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-900/20 rounded-full text-purple-900 text-sm font-medium mb-8">
              <Leaf size={16} />
              <span>{t.hero.badge}</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              <span className="text-purple-900">{t.hero.title1}</span> <span className="text-primary">{t.hero.title2}</span>{" "}
              <span className="text-purple-900">{t.hero.title3}</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl leading-relaxed">{t.hero.subtitle}</p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-base">
                <a href="#phone-form">{t.hero.orderButton}</a>
              </Button>
              <Button size="lg" variant="outline" className="text-base border-2 bg-transparent">
                <a href="#mahsulot">{t.hero.detailsButton}</a>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2 text-foreground">
                <Check size={20} className="text-purple-900" />
                <span className="font-medium">{t.hero.natural}</span>
              </div>
              <div className="flex items-center gap-2 text-foreground">
                <Check size={20} className="text-purple-900" />
                <span className="font-medium">{t.hero.scientific}</span>
              </div>
              <div className="flex items-center gap-2 text-foreground">
                <Check size={20} className="text-purple-900" />
                <span className="font-medium">{t.hero.capsules}</span>
              </div>
            </div>
          </div>

          {/* Right Content - Product Image */}
          <div className="relative animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              <Image
                src="/images/img-20251207-183137-699.jpg"
                alt="IZOMED - Gormonal muvozanat va reproduktiv salomatlik uchun"
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
