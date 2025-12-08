"use client"

import { Card } from "@/components/ui/card"
import { Activity, Heart, Sparkles, TrendingUp } from "lucide-react"

export function Benefits() {
  const benefits = [
    {
      icon: Activity,
      title: "Hayzli tsiklni normallashtiradi",
      description: "Menstrual tsiklni tartibga soladi va ovulyatsiyani yaxshilaydi",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: Heart,
      title: "Tuxum hujayrasining sifatini yaxshilaydi",
      description: "Reproduktiv salomatlikni qo'llab-quvvatlaydi va fertilitetni oshiradi",
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
    {
      icon: Sparkles,
      title: "Sog'lom bo'lish imkoniyatini oshiradi",
      description: "Homiladorlik davrini qo'llab-quvvatlaydi va xavflarni kamaytiradi",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
    },
    {
      icon: TrendingUp,
      title: "Tezroq homilador bo'lishga yordam beradi",
      description: "PCOS va boshqa muammolar bilan kurashadi",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
  ]

  return (
    <section id="afzalliklar" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">IZOMED afzalliklari</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Ilmiy tadqiqotlar bilan tasdiqlangan foydalari
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
