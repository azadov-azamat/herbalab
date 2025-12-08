"use client"

import { Card } from "@/components/ui/card"
import { AlertCircle, Calendar, Heart, Activity } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function WhenToUse() {
  const { t } = useLanguage()

  const conditions = [
    {
      icon: Activity,
      title: t.whenToUse.pcos,
      description: t.whenToUse.pcosDesc,
    },
    {
      icon: Calendar,
      title: t.whenToUse.irregular,
      description: t.whenToUse.irregularDesc,
    },
    {
      icon: Heart,
      title: t.whenToUse.fertility,
      description: t.whenToUse.fertilityDesc,
    },
    {
      icon: AlertCircle,
      title: t.whenToUse.metabolic,
      description: t.whenToUse.metabolicDesc,
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">{t.whenToUse.title}</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            {t.whenToUse.subtitle}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
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
