"use client"

import Image from "next/image"
import { useLanguage } from "@/lib/language-context"

export function HowItWorks() {
  const { t } = useLanguage()

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">{t.howItWorks.title}</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            {t.howItWorks.subtitle}
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Image
            src="/images/img-20251207-183138-126.jpg"
            alt="INOZET ish mexanizmi - Myo-inozitol va D-xiro-inozitol qanday ishlaydi"
            width={1200}
            height={800}
            className="w-full h-auto rounded-2xl shadow-2xl"
          />

          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <div className="p-6 bg-primary/5 rounded-2xl border-2 border-primary/20">
              <h3 className="text-xl font-bold mb-4 text-primary">{t.howItWorks.myoTitle}</h3>
              <ul className="space-y-3 text-foreground/80">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">1.</span>
                  <span>{t.howItWorks.myoStep1}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">2.</span>
                  <span>{t.howItWorks.myoStep2}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">3.</span>
                  <span>{t.howItWorks.myoStep3}</span>
                </li>
              </ul>
            </div>

            <div className="p-6 bg-accent/5 rounded-2xl border-2 border-accent/20">
              <h3 className="text-xl font-bold mb-4 text-accent">{t.howItWorks.dChiroTitle}</h3>
              <ul className="space-y-3 text-foreground/80">
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">1.</span>
                  <span>{t.howItWorks.dChiroStep1}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">2.</span>
                  <span>{t.howItWorks.dChiroStep2}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">3.</span>
                  <span>{t.howItWorks.dChiroStep3}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
