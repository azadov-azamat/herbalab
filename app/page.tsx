import { Hero } from "@/components/hero"
import { ProductInfo } from "@/components/product-info"
import { Ingredients } from "@/components/ingredients"
import { Benefits } from "@/components/benefits"
import { HowItWorks } from "@/components/how-it-works"
import { WhenToUse } from "@/components/when-to-use"
import { AboutHerbalab } from "@/components/about-herbalab"
import { FAQ } from "@/components/faq"
import { Contact } from "@/components/contact"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { LaktaviaSection } from "@/components/laktavia-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <ProductInfo />
      <Benefits />
      <Ingredients />
      <HowItWorks />
      <WhenToUse />
      <LaktaviaSection />
      <AboutHerbalab />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  )
}
