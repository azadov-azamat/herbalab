"use client"

import { Button } from "@/components/ui/button"
import { Check, Leaf } from "lucide-react"
import Image from "next/image"
import { useLanguage } from "@/lib/language-context"

export function Hero() {
  const { t } = useLanguage()

  return (
    <section className="relative pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden bg-linear-to-br from-background via-primary/5 to-background">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-background to-purple-900/5" />
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
              <span>{t.laktavia.badge}</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              <span className="text-primary">{t.laktavia.productName}</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl leading-relaxed">
              {t.laktavia.tagline}
            </p>
            <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-3xl leading-relaxed">
              {t.laktavia.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-base">
                <a href="#contact">{t.hero.orderButton}</a>
              </Button>
              <Button size="lg" variant="outline" className="text-base border-2 bg-transparent">
                <a href="#laktavia-details">{t.hero.detailsButton}</a>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2 text-foreground">
                <Check size={20} className="text-purple-900" />
                <span className="font-medium">{t.laktavia.strainsCount}</span>
              </div>
              <div className="flex items-center gap-2 text-foreground">
                <Check size={20} className="text-purple-900" />
                <span className="font-medium">{t.laktavia.zincTitle}</span>
              </div>
              <div className="flex items-center gap-2 text-foreground">
                <Check size={20} className="text-purple-900" />
                <span className="font-medium">20 {t.hero.capsules}</span>
              </div>
            </div>
          </div>

          {/* Right Content - Product Image */}
          <div className="relative animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              <Image
                src="/images/hero.JPG"
                alt="Laktavia - Ichak va immunitet uchun probiotik"
                fill
                className="object-contain drop-shadow-2xl"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
