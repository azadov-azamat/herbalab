"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Heart, Sparkles } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "1s" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 md:space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full text-accent text-sm font-medium">
              <Sparkles size={16} />
              <span>Tabiiy va samarali yechim</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
              Gormonal muvozanat <span className="text-primary">buzildimi?</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty">
              IZOMED — reproduktiv salomatlik, gormonal muvozanat va metabolik funktsiyalarni qo'llab-quvvatlash uchun
              maxsus ishlab chiqilgan biofaol qo'shimcha.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-base group">
                <a href="#aloqa" className="flex items-center gap-2">
                  Buyurtma berish
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="text-base bg-transparent">
                <a href="#mahsulot">Ko'proq o'rganish</a>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Heart size={20} className="text-primary" />
                </div>
                <div className="text-sm">
                  <div className="font-semibold text-foreground">100% Tabiiy</div>
                  <div className="text-muted-foreground">Sifatli tarkib</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <Sparkles size={20} className="text-accent" />
                </div>
                <div className="text-sm">
                  <div className="font-semibold text-foreground">Ilmiy asoslangan</div>
                  <div className="text-muted-foreground">Samarali formula</div>
                </div>
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
