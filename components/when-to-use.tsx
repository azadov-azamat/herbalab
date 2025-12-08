"use client"

import { Card } from "@/components/ui/card"
import { AlertCircle, Calendar, Heart, Activity, Sparkles, TrendingUp } from "lucide-react"

export function WhenToUse() {
  const conditions = [
    {
      icon: Activity,
      title: "PCOS (Polikistoz tuxumdon sindromi)",
      description: "Gormonal muvozanatni tiklash va ovulyatsiyani yaxshilash",
    },
    {
      icon: Calendar,
      title: "Hayzli tsikl buzilishlari",
      description: "Menstrual tsiklni tartibga solish va muntazamlashtirish",
    },
    {
      icon: Heart,
      title: "Homiladorlikka tayyorgarlik",
      description: "Tanani sog'lom homiladorlikka tayyorlash",
    },
    {
      icon: AlertCircle,
      title: "Insulin qarshiligi",
      description: "Glyukoza metabolizmini normallashtirish",
    },
    {
      icon: Sparkles,
      title: "Stress va PMS",
      description: "Gormonal muvozanatni qo'llab-quvvatlash",
    },
    {
      icon: TrendingUp,
      title: "Tuxum yetilishi muammolari",
      description: "Ovulyatsiya va fertilitetni yaxshilash",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">
            IZOMED qachon tavsiya etiladi?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Ayollar salomatligi uchun keng qo'llaniladigan hollar
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {conditions.map((condition, index) => {
            const Icon = condition.icon
            return (
              <Card
                key={index}
                className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card border-2 hover:border-primary/30"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Icon size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2 text-balance">{condition.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed text-pretty">{condition.description}</p>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
