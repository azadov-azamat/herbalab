"use client"

import { Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground/5 border-t border-border py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="text-2xl font-bold mb-2">
              <span className="text-secondary">INOZET</span>
              <span className="text-destructive">MD</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">HERBALAB tomonidan ishlab chiqilgan</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Ayollar reproduktiv salomatligini qo'llab-quvvatlash uchun tabiiy va samarali yechim
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Tezkor havolalar</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#mahsulot" className="text-muted-foreground hover:text-primary transition-colors">
                  Mahsulot haqida
                </a>
              </li>
              <li>
                <a href="#afzalliklar" className="text-muted-foreground hover:text-primary transition-colors">
                  Afzalliklar
                </a>
              </li>
              <li>
                <a href="#tarkib" className="text-muted-foreground hover:text-primary transition-colors">
                  Tarkibi
                </a>
              </li>
              <li>
                <a href="#herbalab" className="text-muted-foreground hover:text-primary transition-colors">
                  HERBALAB
                </a>
              </li>
              <li>
                <a href="#faq" className="text-muted-foreground hover:text-primary transition-colors">
                  Savollar
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Aloqa</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-muted-foreground">
                Tel:{" "}
                <a href="tel:+998943746667" className="text-primary hover:underline">
                  +998 94 374 66 67
                </a>
              </li>
              <li className="text-muted-foreground">
                Tel:{" "}
                <a href="tel:+998998807498" className="text-primary hover:underline">
                  +998 99 880 74 98
                </a>
              </li>
              <li className="text-muted-foreground">
                Instagram:{" "}
                <a
                  href="https://instagram.com/herbalab_uzb_corp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
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
            <span>© 2025 HERBALAB. Barcha huquqlar himoyalangan.</span>
            <span className="flex items-center gap-1">
              Ishlab chiqildi <Heart size={14} className="text-destructive fill-destructive" /> bilan
            </span>
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            Ishlab chiqaruvchi: OOO «HERBALAB», O'zbekiston, Toshkent shahri
          </p>
        </div>
      </div>
    </footer>
  )
}
