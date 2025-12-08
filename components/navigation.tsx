"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { LanguageSwitcher } from "./language-switcher"

export function Navigation() {
  const { t } = useLanguage()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "#product", label: t.nav.product },
    { href: "#benefits", label: t.nav.benefits },
    { href: "#ingredients", label: t.nav.ingredients },
    { href: "#herbalab", label: t.nav.about },
    { href: "#faq", label: t.nav.faq },
    { href: "#contact", label: t.nav.contact },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-end gap-2">
            <div className="text-2xl font-bold flex items-start gap-1">
              <span className="text-purple-900">INOZET </span>
              <span className="text-sm px-2 text-white bg-red-500 rounded-3xl">MD</span>
            </div>
            <span className="text-xs text-muted-foreground hidden md:inline">by HERBALAB</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
            <LanguageSwitcher />
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <a href="#phone-form">{t.hero.orderButton}</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-foreground" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="py-2">
                <LanguageSwitcher />
              </div>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground w-full">
                <a href="#phone-form">{t.hero.orderButton}</a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
