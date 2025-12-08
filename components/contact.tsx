"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone, Instagram, MessageCircle } from "lucide-react"
import Image from "next/image"
import { useLanguage } from "@/lib/language-context"

export function Contact() {
  const { t } = useLanguage()

  return (
    <section id="aloqa" className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">{t.contact.title}</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">{t.contact.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="p-6 hover:shadow-lg transition-all">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Phone size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{t.contact.phone}</h3>
                  <a href="tel:+998943746667" className="text-primary hover:underline block">
                    +998 94 374 66 67
                  </a>
                  <a href="tel:+998998807498" className="text-primary hover:underline block">
                    +998 99 880 74 98
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-all">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <Instagram size={24} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{t.contact.instagram}</h3>
                  <a
                    href="https://instagram.com/herbalab_uzb_corp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline"
                  >
                    @herbalab_uzb_corp
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-all">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                  <MessageCircle size={24} className="text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">WhatsApp</h3>
                  <p className="text-muted-foreground">Herbalab Pharm</p>
                </div>
              </div>
            </Card>

            <div className="pt-4">
              <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                <a href="tel:+998943746667" className="flex items-center gap-2">
                  <Phone size={20} />
                  {t.locale === "uz" ? "Hozir qo'ng'iroq qiling" : t.locale === "ru" ? "Позвоните сейчас" : "Call Now"}
                </a>
              </Button>
            </div>
          </div>

          {/* Instagram QR Code */}
          <div className="flex justify-center">
            <Card className="p-6 max-w-sm">
              <h3 className="text-xl font-bold mb-4 text-center">
                {t.locale === "uz" ? "Instagram QR kod" : t.locale === "ru" ? "Instagram QR код" : "Instagram QR Code"}
              </h3>
              <Image
                src="/images/img-20251207-183948-214.jpg"
                alt="HERBALAB Instagram QR kod"
                width={400}
                height={400}
                className="w-full h-auto rounded-lg"
              />
              <p className="text-sm text-muted-foreground text-center mt-4">
                {t.locale === "uz"
                  ? "QR kodni skanerlang va bizni kuzatib boring"
                  : t.locale === "ru"
                    ? "Отсканируйте QR-код и следите за нами"
                    : "Scan the QR code and follow us"}
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
