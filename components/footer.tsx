"use client"

import { Heart } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function Footer() {
  const { t } = useLanguage()

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
            <p className="text-sm text-muted-foreground mb-4">
              {t.locale === "uz"
                ? "HERBALAB tomonidan ishlab chiqilgan"
                : t.locale === "ru"
                  ? "Произведено HERBALAB"
                  : "Produced by HERBALAB"}
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {t.locale === "uz"
                ? "Ayollar reproduktiv salomatligini qo'llab-quvvatlash uchun tabiiy va samarali yechim"
                : t.locale === "ru"
                  ? "Натуральное и эффективное решение для поддержки репродуктивного здоровья женщин"
                  : "Natural and effective solution for supporting women's reproductive health"}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">
              {t.locale === "uz" ? "Tezkor havolalar" : t.locale === "ru" ? "Быстрые ссылки" : "Quick Links"}
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#mahsulot" className="text-muted-foreground hover:text-primary transition-colors">
                  {t.locale === "uz" ? "Mahsulot haqida" : t.locale === "ru" ? "О продукте" : "About Product"}
                </a>
              </li>
              <li>
                <a href="#afzalliklar" className="text-muted-foreground hover:text-primary transition-colors">
                  {t.locale === "uz" ? "Afzalliklar" : t.locale === "ru" ? "Преимущества" : "Benefits"}
                </a>
              </li>
              <li>
                <a href="#tarkib" className="text-muted-foreground hover:text-primary transition-colors">
                  {t.locale === "uz" ? "Tarkibi" : t.locale === "ru" ? "Состав" : "Ingredients"}
                </a>
              </li>
              <li>
                <a href="#herbalab" className="text-muted-foreground hover:text-primary transition-colors">
                  HERBALAB
                </a>
              </li>
              <li>
                <a href="#faq" className="text-muted-foreground hover:text-primary transition-colors">
                  {t.locale === "uz" ? "Savollar" : t.locale === "ru" ? "Вопросы" : "FAQ"}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">
              {t.locale === "uz" ? "Aloqa" : t.locale === "ru" ? "Контакты" : "Contact"}
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="text-muted-foreground">
                {t.locale === "uz" ? "Tel" : t.locale === "ru" ? "Тел" : "Tel"}:{" "}
                <a href="tel:+998943746667" className="text-primary hover:underline">
                  +998 94 374 66 67
                </a>
              </li>
              <li className="text-muted-foreground">
                {t.locale === "uz" ? "Tel" : t.locale === "ru" ? "Тел" : "Tel"}:{" "}
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
            <span>{t.footer.copyright}</span>
            <span className="flex items-center gap-1">
              {t.locale === "uz" ? "Ishlab chiqildi" : t.locale === "ru" ? "Разработано" : "Made"}{" "}
              <Heart size={14} className="text-destructive fill-destructive" />{" "}
              {t.locale === "uz" ? "bilan" : t.locale === "ru" ? "с" : "with"}
            </span>
          </p>
          <p className="text-xs text-muted-foreground mt-2">{t.contact.manufacturerName}</p>
        </div>
      </div>
    </footer>
  )
}
