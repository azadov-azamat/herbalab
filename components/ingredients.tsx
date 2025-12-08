"use client"

import { Card } from "@/components/ui/card"
import { Leaf, Sparkles, Shield } from "lucide-react"

export function Ingredients() {
  const ingredients = [
    {
      icon: Sparkles,
      name: "Myo-inozitol",
      dosage: "1000-2000 mg/kun",
      benefits: [
        "Tuxumdon hujayralarida insulin sezuvchanligini yaxshilaydi",
        "Ovulyatsiyani qo'llab-quvvatlaydi, ayniqsa PCOS da",
        "Hayzli tsiklni tartibga solishga yordam beradi",
        "Stressni kamaytiradi va asab tizimini qo'llab-quvvatlaydi",
      ],
      color: "primary",
    },
    {
      icon: Leaf,
      name: "D-xiro-inozitol",
      dosage: "Myo-inozitol bilan 40:1 nisbatda",
      benefits: [
        "Glyukoza metabolizmini normallashtirishga yordam beradi",
        "PCOS da giperandrogenizmni kamaytiradi",
        "Tuxum hujayrasining sifatini va metabolik jarayonlarni qo'llab-quvvatlaydi",
        "Insulin qarshiligini kamaytiradi",
      ],
      color: "accent",
    },
    {
      icon: Shield,
      name: "Metafolin® (5-MTHF)",
      dosage: "Faol shakli",
      benefits: [
        "Folik kislotasining faol, bioqo'rindisi yuqori shakli",
        "Tanaga darhol so'riladi",
        "Homila asab nayini nuqsonlar xavfini kamaytiradi",
        "MTHFR polimorfizmi bo'lgan ayollarda ham samarali",
      ],
      color: "secondary",
    },
  ]

  return (
    <section id="tarkib" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">
            Tarkibiy qismlar va ularning ta'siri
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Har bir komponent ilmiy asoslangan va tabiiy
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {ingredients.map((ingredient, index) => {
            const Icon = ingredient.icon
            const colorClass =
              ingredient.color === "primary"
                ? "text-primary bg-primary/10 border-primary/20"
                : ingredient.color === "accent"
                  ? "text-accent bg-accent/10 border-accent/20"
                  : "text-secondary bg-secondary/10 border-secondary/20"

            return (
              <Card key={index} className={`p-6 border-2 hover:shadow-xl transition-all duration-300 ${colorClass}`}>
                <div className="mb-6">
                  <div
                    className={`w-16 h-16 rounded-2xl ${ingredient.color === "primary" ? "bg-primary/20" : ingredient.color === "accent" ? "bg-accent/20" : "bg-secondary/20"} flex items-center justify-center mb-4`}
                  >
                    <Icon
                      size={32}
                      className={
                        ingredient.color === "primary"
                          ? "text-primary"
                          : ingredient.color === "accent"
                            ? "text-accent"
                            : "text-secondary"
                      }
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{ingredient.name}</h3>
                  <p className="text-sm text-muted-foreground font-medium">{ingredient.dosage}</p>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-sm">Asosiy foydalari:</h4>
                  <ul className="space-y-2">
                    {ingredient.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-foreground/80">
                        <span
                          className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${ingredient.color === "primary" ? "bg-primary" : ingredient.color === "accent" ? "bg-accent" : "bg-secondary"}`}
                        />
                        <span className="leading-relaxed">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
