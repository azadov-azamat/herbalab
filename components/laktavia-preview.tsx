"use client"

import { useLanguage } from "@/lib/language-context"
import { Leaf, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function LaktaviaPreview() {
  const { t } = useLanguage()

  return (
    <section id="laktavia" className="py-16 bg-gradient-to-b from-white to-primary/5">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-8 animate-fade-in">
          <div className="inline-block px-6 py-2 bg-primary/10 rounded-full mb-4">
            <p className="text-sm font-medium text-primary flex items-center gap-2">
              <Leaf className="w-4 h-4" />
              {t.laktaviaPreview.badge}
            </p>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary">{t.laktaviaPreview.productName}</span>
          </h2>
          <p className="text-lg text-purple-900 font-semibold mb-2">{t.laktaviaPreview.tagline}</p>
        </div>

        {/* Preview Content */}
        <div className="grid md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
          {/* Product Image */}
          <div className="relative animate-float">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-900/20 blur-3xl rounded-full" />
            <Image
              src="/images/img-20251220-173211-231.jpg"
              alt="Laktavia Product"
              width={500}
              height={600}
              className="relative z-10 w-full h-auto rounded-2xl shadow-2xl"
            />
          </div>

          {/* Quick Info */}
          <div className="space-y-6">
            <p className="text-gray-600 text-lg">{t.laktaviaPreview.description}</p>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-primary/10">
              <h3 className="text-xl font-bold text-purple-900 mb-4">{t.laktaviaPreview.keyFeatures}</h3>
              <ul className="space-y-3">
                {[
                  t.laktaviaPreview.feature1,
                  t.laktaviaPreview.feature2,
                  t.laktaviaPreview.feature3,
                  t.laktaviaPreview.feature4,
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Link href="/laktavia">
              <Button size="lg" className="w-full md:w-auto bg-primary hover:bg-primary/90 text-white">
                {t.laktaviaPreview.learnMore}
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
