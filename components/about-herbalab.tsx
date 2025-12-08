"use client"

import { Card } from "@/components/ui/card"
import { Award, CheckCircle2, Microscope, Shield, Sparkles, Target } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function AboutHerbalab() {
  const { t } = useLanguage()

  const advantages = [
    {
      icon: Microscope,
      text:
        t.locale === "uz"
          ? "Zamonaviy ishlab chiqarish texnologiyalari"
          : t.locale === "ru"
            ? "Современные производственные технологии"
            : "Modern production technologies",
    },
    {
      icon: Target,
      text:
        t.locale === "uz"
          ? "Ilmiy asoslangan formulalar"
          : t.locale === "ru"
            ? "Научно обоснованные формулы"
            : "Scientifically based formulas",
    },
    {
      icon: Shield,
      text:
        t.locale === "uz"
          ? "O'z laboratoriya sifat nazorati"
          : t.locale === "ru"
            ? "Собственный лабораторный контроль качества"
            : "Own laboratory quality control",
    },
    {
      icon: Sparkles,
      text:
        t.locale === "uz"
          ? "Tabiiy va xavfsiz tarkibiy qismlar"
          : t.locale === "ru"
            ? "Натуральные и безопасные компоненты"
            : "Natural and safe ingredients",
    },
    {
      icon: Award,
      text:
        t.locale === "uz"
          ? "Yuqori standartli ishlab chiqarish"
          : t.locale === "ru"
            ? "Производство высокого стандарта"
            : "High standard production",
    },
    {
      icon: CheckCircle2,
      text:
        t.locale === "uz"
          ? "Haqiqiy natija beradigan mahsulotlar"
          : t.locale === "ru"
            ? "Продукты, дающие реальные результаты"
            : "Products that give real results",
    },
  ]

  const values = [
    {
      title: t.locale === "uz" ? "Sifat" : t.locale === "ru" ? "Качество" : "Quality",
      description:
        t.locale === "uz"
          ? "Sertifikatlangan, xavfsiz xom ashyo"
          : t.locale === "ru"
            ? "Сертифицированное, безопасное сырье"
            : "Certified, safe raw materials",
    },
    {
      title: t.locale === "uz" ? "Ishonch" : t.locale === "ru" ? "Доверие" : "Trust",
      description:
        t.locale === "uz"
          ? "Har bir formula ilmiy asoslangan"
          : t.locale === "ru"
            ? "Каждая формула научно обоснована"
            : "Each formula is scientifically based",
    },
    {
      title: t.locale === "uz" ? "Samaradorlik" : t.locale === "ru" ? "Эффективность" : "Effectiveness",
      description:
        t.locale === "uz"
          ? "O'lchanadigan haqiqiy natijalar"
          : t.locale === "ru"
            ? "Измеримые реальные результаты"
            : "Measurable real results",
    },
    {
      title: t.locale === "uz" ? "Tabiilik" : t.locale === "ru" ? "Натуральность" : "Natural",
      description:
        t.locale === "uz"
          ? "Zararsiz tarkibiy qismlar"
          : t.locale === "ru"
            ? "Безвредные компоненты"
            : "Harmless ingredients",
    },
    {
      title: t.locale === "uz" ? "Innovatsiya" : t.locale === "ru" ? "Инновация" : "Innovation",
      description:
        t.locale === "uz"
          ? "Zamonaviy ilmiy yondashuv"
          : t.locale === "ru"
            ? "Современный научный подход"
            : "Modern scientific approach",
    },
  ]

  return (
    <section id="herbalab" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">{t.about.title}</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">{t.about.subtitle}</p>
        </div>

        <div className="max-w-6xl mx-auto space-y-12">
          {/* Mission */}
          <Card className="p-8 bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-primary/20">
            <h3 className="text-2xl font-bold mb-4 text-primary">
              {t.locale === "uz" ? "Bizning missiyamiz" : t.locale === "ru" ? "Наша миссия" : "Our Mission"}
            </h3>
            <p className="text-lg text-foreground/80 leading-relaxed text-pretty">{t.about.description}</p>
          </Card>

          {/* Advantages */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-center">
              {t.locale === "uz"
                ? "HERBALAB afzalliklari"
                : t.locale === "ru"
                  ? "Преимущества HERBALAB"
                  : "HERBALAB Advantages"}
            </h3>
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
            <h3 className="text-2xl font-bold mb-6 text-center">
              {t.locale === "uz" ? "Bizning qadriyatlarimiz" : t.locale === "ru" ? "Наши ценности" : "Our Values"}
            </h3>
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
