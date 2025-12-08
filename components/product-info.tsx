"use client"

import { Card } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"
import Image from "next/image"
import { useLanguage } from "@/lib/language-context"

export function ProductInfo() {
  const { t } = useLanguage()

  return (
    <section id="mahsulot" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">{t.product.title}</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">{t.product.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center max-w-6xl mx-auto">
          {/* Product Image */}
          <div className="relative order-2 md:order-1">
            <Image
              src="/images/img-20251207-183138-481.jpg"
              alt="INOZET broshura - tarkibi va foydalari"
              width={600}
              height={400}
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
          </div>

          {/* Product Details */}
          <div className="space-y-6 order-1 md:order-2">
            <Card className="p-6 bg-card border-2 border-primary/20">
              <h3 className="text-xl font-bold mb-4 text-primary">
                {t.locale === "uz"
                  ? "Tarkibi (1 kapsula)"
                  : t.locale === "ru"
                    ? "Состав (1 капсула)"
                    : "Content (1 capsule)"}
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-primary mt-1 shrink-0" size={20} />
                  <div>
                    <span className="font-semibold">
                      Myo-{t.locale === "uz" ? "inozitol" : t.locale === "ru" ? "инозитол" : "inositol"}
                    </span>
                    <span className="text-muted-foreground"> — 487,5 {t.locale === "uz" ? "mg" : "мг"}</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-primary mt-1 shrink-0" size={20} />
                  <div>
                    <span className="font-semibold">
                      D-{t.locale === "uz" ? "xiro-inozitol" : t.locale === "ru" ? "хиро-инозитол" : "chiro-inositol"}
                    </span>
                    <span className="text-muted-foreground"> — 12,5 {t.locale === "uz" ? "mg" : "мг"}</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-primary mt-1 shrink-0" size={20} />
                  <div>
                    <span className="font-semibold">Metafolin®</span>
                    <span className="text-muted-foreground">
                      {" "}
                      — 200 {t.locale === "uz" ? "mkg" : t.locale === "ru" ? "мкг" : "mcg"}
                    </span>
                  </div>
                </li>
              </ul>
            </Card>

            <Card className="p-6 bg-accent/5 border-accent/20">
              <h4 className="font-semibold mb-3 text-accent">
                {t.locale === "uz" ? "Qabul qilish usuli:" : t.locale === "ru" ? "Способ приема:" : "How to take:"}
              </h4>
              <p className="text-foreground/80 leading-relaxed">
                {t.locale === "uz"
                  ? "Kuniga 2 kapsula — sog'lom ritmga qayting!"
                  : t.locale === "ru"
                    ? "2 капсулы в день — вернитесь к здоровому ритму!"
                    : "2 capsules per day — return to a healthy rhythm!"}
              </p>
            </Card>

            <Card className="p-6 bg-secondary/5 border-secondary/20">
              <h4 className="font-semibold mb-3 text-secondary">
                {t.locale === "uz" ? "Qadoq:" : t.locale === "ru" ? "Упаковка:" : "Package:"}
              </h4>
              <p className="text-foreground/80 leading-relaxed">
                {t.locale === "uz"
                  ? "60 kapsula — 30 kunlik kurs"
                  : t.locale === "ru"
                    ? "60 капсул — курс на 30 дней"
                    : "60 capsules — 30-day course"}
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
