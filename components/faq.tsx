"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQ() {
  const faqs = [
    {
      question: "IZOMED qanday qabul qilish kerak?",
      answer:
        "IZOMED kuniga 2 kapsula qabul qilish tavsiya etiladi. Eng yaxshi natija olish uchun mahsulotni muntazam ravishda kamida 3 oy davomida qabul qiling. Ovqat bilan birga qabul qilish tavsiya etiladi.",
    },
    {
      question: "IZOMED qancha vaqtdan keyin ta'sir qila boshlaydi?",
      answer:
        "Natijalar odatda 1-3 oy ichida ko'rinadi. Ba'zi ayollarda yaxshilanish dastlabki oylardayoq sezilishi mumkin, lekin to'liq samaradorlik uchun kamida 3 oylik kurs tavsiya etiladi.",
    },
    {
      question: "IZOMED xavfsizmi?",
      answer:
        "Ha, IZOMED tabiiy tarkibiy qismlardan iborat va xavfsizdir. Biroq, homiladorlik yoki emizish davrida, shuningdek, biror kasallik mavjud bo'lganda shifokor bilan maslahatlashish tavsiya etiladi.",
    },
    {
      question: "IZOMED kimlar uchun mos?",
      answer:
        "IZOMED PCOS, hayzli tsikl buzilishlari, insulin qarshiligi, gormonal muvozanatsizlik va homiladorlikka tayyorgarlik ko'rayotgan ayollar uchun mo'ljallangan.",
    },
    {
      question: "IZOMED bilan boshqa dori-darmonlarni birga qabul qilish mumkinmi?",
      answer:
        "Aksariyat hollarda mumkin, lekin doimiy dorilar qabul qilayotgan bo'lsangiz, shifokor bilan maslahatlashish tavsiya etiladi.",
    },
    {
      question: "IZOMED va oddiy folik kislota o'rtasida qanday farq bor?",
      answer:
        "IZOMED tarkibida Metafolin® - folik kislotaning faol shakli mavjud. Bu tanaga darhol so'riladi va MTHFR geni polimorfizmi bo'lgan ayollarda ham samarali ishlaydi.",
    },
  ]

  return (
    <section id="faq" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">
            Tez-tez so'raladigan savollar
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            IZOMED haqida bilishingiz kerak bo'lgan barcha ma'lumotlar
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-2 border-border rounded-lg px-6 hover:border-primary/30 transition-colors"
              >
                <AccordionTrigger className="text-left font-semibold hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
