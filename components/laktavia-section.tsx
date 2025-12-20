"use client"

import { useLanguage } from "@/lib/language-context"
import { Leaf, Shield, Heart, Users } from "lucide-react"
import Image from "next/image"

export function LaktaviaSection() {
  const { t } = useLanguage()

  const benefits = [
    {
      icon: Leaf,
      title: t.laktavia.benefit1Title,
      desc: t.laktavia.benefit1Desc,
    },
    {
      icon: Shield,
      title: t.laktavia.benefit2Title,
      desc: t.laktavia.benefit2Desc,
    },
    {
      icon: Heart,
      title: t.laktavia.benefit3Title,
      desc: t.laktavia.benefit3Desc,
    },
    {
      icon: Users,
      title: t.laktavia.benefit4Title,
      desc: t.laktavia.benefit4Desc,
    },
  ]

  return (
    <section id="laktavia" className="py-20 bg-gradient-to-b from-white to-primary/5">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-block px-6 py-2 bg-primary/10 rounded-full mb-4">
            <p className="text-sm font-medium text-primary flex items-center gap-2">
              <Leaf className="w-4 h-4" />
              {t.laktavia.badge}
            </p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-primary">{t.laktavia.productName}</span>
          </h2>
          <p className="text-xl text-purple-900 font-semibold mb-2">{t.laktavia.tagline}</p>
          <p className="text-gray-600 max-w-3xl mx-auto">{t.laktavia.description}</p>
        </div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Product Image */}
          <div className="relative animate-float">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-900/20 blur-3xl rounded-full" />
            <Image
              src="/images/img-20251220-173212-939.jpg"
              alt="Laktavia Product"
              width={600}
              height={800}
              className="relative z-10 w-full h-auto rounded-2xl shadow-2xl"
            />
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-primary/10">
              <h3 className="text-2xl font-bold text-purple-900 mb-4">{t.laktavia.compositionTitle}</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-primary/5 rounded-lg">
                  <span className="font-medium text-gray-700">{t.laktavia.strains}</span>
                  <span className="text-sm text-purple-900 font-semibold">{t.laktavia.strainsCount}</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-primary/5 rounded-lg">
                  <span className="font-medium text-gray-700">{t.laktavia.zincTitle}</span>
                  <span className="text-sm text-purple-900 font-semibold">{t.laktavia.zincAmount}</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-primary/5 rounded-lg">
                  <span className="font-medium text-gray-700">{t.laktavia.oligosaccharide}</span>
                  <span className="text-sm text-purple-900 font-semibold">15-20%</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary to-purple-900 p-6 rounded-xl text-white">
              <h3 className="text-xl font-bold mb-3">{t.laktavia.dosageTitle}</h3>
              <p className="text-lg">{t.laktavia.dosage}</p>
              <p className="text-sm mt-2 opacity-90">{t.laktavia.packageInfo}</p>
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-center mb-8 text-purple-900">{t.laktavia.benefitsTitle}</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg border border-primary/10 hover:shadow-xl transition-shadow duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-bold text-lg mb-2 text-purple-900">{benefit.title}</h4>
                <p className="text-gray-600 text-sm">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Usage Instructions with Image */}
        <div className="bg-gradient-to-r from-primary/5 to-purple-900/5 rounded-2xl p-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-purple-900">{t.laktavia.whenToUseTitle}</h3>
              <ul className="space-y-3">
                {[t.laktavia.use1, t.laktavia.use2, t.laktavia.use3, t.laktavia.use4, t.laktavia.use5].map(
                  (item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg
                          className="w-4 h-4 text-white"
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
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ),
                )}
              </ul>
            </div>
            <div className="relative">
              <Image
                src="/images/img-20251220-173211-231.jpg"
                alt="Laktavia Benefits Diagram"
                width={500}
                height={600}
                className="w-full h-auto rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
