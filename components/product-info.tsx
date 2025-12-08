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
                {t.product.content1}
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-primary mt-1 shrink-0" size={20} />
                  <div>
                    <span className="font-semibold">
                      {t.product.inositol}
                    </span>
                    <span className="text-muted-foreground"> — {t.product.inositolMg}</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-primary mt-1 shrink-0" size={20} />
                  <div>
                    <span className="font-semibold">
                      {t.product.dChiroInositol}
                    </span>
                    <span className="text-muted-foreground"> — {t.product.dChiroInositolMg}</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-primary mt-1 shrink-0" size={20} />
                  <div>
                    <span className="font-semibold">{t.product.metafolin}</span>
                    <span className="text-muted-foreground">
                      {" "}
                      — {t.product.metafolinMg}
                    </span>
                  </div>
                </li>
              </ul>
            </Card>

            <Card className="p-6 bg-purple-900/5 border-purple-900/20">
              <h4 className="font-semibold mb-3 text-purple-900">
                {t.product.howToTake}
              </h4>
              <p className="text-foreground/80 leading-relaxed">
                {t.product.perday2Capsules}
              </p>
            </Card>

            <Card className="p-6 bg-secondary/5 border-secondary/20">
              <h4 className="font-semibold mb-3 text-secondary">
                {t.product.package}
              </h4>
              <p className="text-foreground/80 leading-relaxed">
                {t.product.packageDetails}
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
