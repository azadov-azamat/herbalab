"use client"

import { Instagram, Phone } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-foreground/5 border-t border-border py-8 md:py-10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-end gap-2 mb-4">
              <div className="font-bold flex items-start gap-1">
                <span className="text-purple-900 text-2xl">INOZET </span>
                <span className="text-sm px-2 text-white bg-red-500 rounded-3xl">MD</span>
              </div>
              <span className="text-xs text-muted-foreground hidden md:inline">by HERBALAB</span>
            </div>
            {/* <p className="text-sm text-muted-foreground mb-4">{t.footer.productHerbalab}</p> */}
            <p className="text-sm text-muted-foreground leading-relaxed">{t.footer.description}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">{t.footer.quickLinks}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#product" className="text-muted-foreground hover:text-primary transition-colors">
                  {t.nav.product}
                </a>
              </li>
              <li>
                <a href="#benefits" className="text-muted-foreground hover:text-primary transition-colors">
                  {t.nav.benefits}
                </a>
              </li>
              <li>
                <a href="#ingredients" className="text-muted-foreground hover:text-primary transition-colors">
                  {t.nav.ingredients}
                </a>
              </li>
              <li>
                <a href="#herbalab" className="text-muted-foreground hover:text-primary transition-colors">
                  HERBALAB
                </a>
              </li>
              <li>
                <a href="#faq" className="text-muted-foreground hover:text-primary transition-colors">
                  {t.nav.faq}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">{t.nav.contact}</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex space-x-2 text-muted-foreground items-center">
                <Phone size={16} className="text-primary" />
                <a href="tel:+998943746667" className="text-primary hover:underline">
                  +998 94 374 66 67
                </a>
              </li>
              <li className="flex space-x-2 text-muted-foreground items-center">
                <Phone size={16} className="text-primary" />
                <a href="tel:+998998807498" className="text-primary hover:underline">
                  +998 99 880 74 98
                </a>
              </li>
              <li className="text-muted-foreground flex space-x-2 items-center">
                <Instagram size={16} className="text-purple-900" />
                <a
                  href="https://instagram.com/herbalab_uzb_corp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-900 hover:underline"
                >
                  @herbalab_uzb_corp
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-2 flex-wrap">
            <span>{t.footer.copyright}</span>
          </p>
          <p className="text-xs text-muted-foreground mt-2">{t.contact.manufacturerName}</p>
          <p className="text-xs text-muted-foreground mt-3">by {" "}
            <a href="https://banerma.uz" target="_blank" className="text-primary font-bold">Banerma</a>
          </p>
        </div>
      </div>
    </footer>
  )
}
