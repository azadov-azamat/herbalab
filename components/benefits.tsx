"use client"

import { Card } from "@/components/ui/card"
import { Activity, Heart, Sparkles, TrendingUp } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function Benefits() {
  const { t } = useLanguage()

  const benefits = [
    {
      icon: Activity,
      title: t.benefits.menstrual,
      description: t.benefits.menstrualDesc,
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: Heart,
      title: t.benefits.healing,
      description: t.benefits.healingDesc,
      color: "text-purple-900",
      bgColor: "bg-purple-900/10",
    },
    {
      icon: Sparkles,
      title: t.benefits.health,
      description: t.benefits.healthDesc,
      color: "text-secondary",
      bgColor: "bg-secondary/10",
    },
    {
      icon: TrendingUp,
      title: t.benefits.pregnancy,
      description: t.benefits.pregnancyDesc,
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
  ]

  return (
    <section id="benefits" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="flex items-center gap-2 justify-center text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">
            <div className="font-bold flex items-start gap-1">
              <span className="text-purple-900">INOZET </span>
              <span className="text-xl px-2 text-white bg-red-500 rounded-3xl">MD</span>
            </div>
            {t.benefits.title}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            {t.benefits.subtitle}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <Card
                key={index}
                className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/30"
              >
                <div className={`w-14 h-14 rounded-2xl ${benefit.bgColor} flex items-center justify-center mb-4`}>
                  <Icon size={28} className={benefit.color} />
                </div>
                <h3 className="text-lg font-bold mb-3 text-balance">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed text-pretty">{benefit.description}</p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
