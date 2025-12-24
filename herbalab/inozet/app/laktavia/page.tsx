import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { LaktaviaHero } from "@/components/laktavia-hero"
import { LaktaviaSection } from "@/components/laktavia-section"
import { Contact } from "@/components/contact"

export const metadata = {
  title: "Laktavia - HERBALAB | Ichak va immunitet uchun probiotik",
  description:
    "Laktavia - tabiiy probiotik. 9 xil tirik bakteriya shtammi, rux va oligosaxaridlar. Ichak mikroflorasini tiklaydi va immunitetni mustahkamlaydi.",
}

export default function LaktaviaPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <LaktaviaHero />
      <LaktaviaSection />
      <Contact />
      <Footer />
    </main>
  )
}
