"use client"

import { Card } from "@/components/ui/card"
import { Award, CheckCircle2, Microscope, Shield, Sparkles, Target } from "lucide-react"

export function AboutHerbalab() {
  const advantages = [
    { icon: Microscope, text: "Zamonaviy ishlab chiqarish texnologiyalari" },
    { icon: Target, text: "Ilmiy asoslangan formulalar" },
    { icon: Shield, text: "O'z laboratoriya sifat nazorati" },
    { icon: Sparkles, text: "Tabiiy va xavfsiz tarkibiy qismlar" },
    { icon: Award, text: "Yuqori standartli ishlab chiqarish" },
    { icon: CheckCircle2, text: "Haqiqiy natija beradigan mahsulotlar" },
  ]

  const values = [
    { title: "Sifat", description: "Sertifikatlangan, xavfsiz xom ashyo" },
    { title: "Ishonch", description: "Har bir formula ilmiy asoslangan" },
    { title: "Samaradorlik", description: "O'lchanadigan haqiqiy natijalar" },
    { title: "Tabiilik", description: "Zararsiz tarkibiy qismlar" },
    { title: "Innovatsiya", description: "Zamonaviy ilmiy yondashuv" },
  ]

  return (
    <section id="herbalab" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">HERBALAB haqida</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            2024-yil mart oyida tashkil etilgan, yuqori sifatli biofaol qo'shimchalar ishlab chiqaruvchi
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-12">
          {/* Mission */}
          <Card className="p-8 bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-primary/20">
            <h3 className="text-2xl font-bold mb-4 text-primary">Bizning missiyamiz</h3>
            <p className="text-lg text-foreground/80 leading-relaxed text-pretty">
              Tabiiy, ilmiy asoslangan yechimlarni taqdim etish orqali insonlar salomatligini yaxshilash, muammolarning
              asosiy sabablarini bartaraf etish va uzoq muddatli farovonlikni qo'llab-quvvatlash.
            </p>
          </Card>

          {/* Advantages */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-center">HERBALAB afzalliklari</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {advantages.map((advantage, index) => {
                const Icon = advantage.icon
                return (
                  <Card key={index} className="p-4 hover:shadow-lg transition-all">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <Icon size={20} className="text-primary" />
                      </div>
                      <span className="text-sm font-medium text-balance">{advantage.text}</span>
                    </div>
                  </Card>
                )
              })}
            </div>
          </div>

          {/* Values */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-center">Bizning qadriyatlarimiz</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {values.map((value, index) => (
                <Card key={index} className="p-6 text-center hover:shadow-lg transition-all hover:-translate-y-1">
                  <h4 className="font-bold text-lg mb-2 text-primary">{value.title}</h4>
                  <p className="text-sm text-muted-foreground text-pretty">{value.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
