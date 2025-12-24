import { AboutHerbalab } from "@/components/about-herbalab"
import { FAQ } from "@/components/faq"
import { Contact } from "@/components/contact"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ProductInfo } from "@/components/product-info"
import { Hero } from "@/components/hero"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <ProductInfo />
      <AboutHerbalab />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  )
}
