"use client"

import { Card } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"
import Image from "next/image"

export function ProductInfo() {
  return (
    <section id="mahsulot" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">IZOMED nima?</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Ayollar reproduktiv salomatligini qo'llab-quvvatlash uchun maxsus ishlab chiqilgan zamonaviy formula
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center max-w-6xl mx-auto">
          {/* Product Image */}
          <div className="relative order-2 md:order-1">
            <Image
              src="/images/img-20251207-183138-481.jpg"
              alt="IZOMED broshura - tarkibi va foydalari"
              width={600}
              height={400}
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
          </div>

          {/* Product Details */}
          <div className="space-y-6 order-1 md:order-2">
            <Card className="p-6 bg-card border-2 border-primary/20">
              <h3 className="text-xl font-bold mb-4 text-primary">Tarkibi (1 kapsula)</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-primary mt-1 shrink-0" size={20} />
                  <div>
                    <span className="font-semibold">Myo-inozitol</span>
                    <span className="text-muted-foreground"> — 487,5 mg</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-primary mt-1 shrink-0" size={20} />
                  <div>
                    <span className="font-semibold">D-xiro-inozitol</span>
                    <span className="text-muted-foreground"> — 12,5 mg</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-primary mt-1 shrink-0" size={20} />
                  <div>
                    <span className="font-semibold">Metafolin®</span>
                    <span className="text-muted-foreground"> — 200 mkg</span>
                  </div>
                </li>
              </ul>
            </Card>

            <Card className="p-6 bg-accent/5 border-accent/20">
              <h4 className="font-semibold mb-3 text-accent">Qabul qilish usuli:</h4>
              <p className="text-foreground/80 leading-relaxed">Kuniga 2 kapsula — sog'lom ritmga qayting!</p>
            </Card>

            <Card className="p-6 bg-secondary/5 border-secondary/20">
              <h4 className="font-semibold mb-3 text-secondary">Qadoq:</h4>
              <p className="text-foreground/80 leading-relaxed">60 kapsula — 30 kunlik kurs</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
