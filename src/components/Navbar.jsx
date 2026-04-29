import { useState, useEffect } from "react";
import { Menu, X, Wrench, Globe, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTranslation } from "react-i18next";
import { LANGUAGES } from "@/i18n";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t, i18n } = useTranslation();

  // Normalize "en-US" → "en" for the active language indicator
  const activeLangCode = i18n.language.split("-")[0];
  const currentLang =
    LANGUAGES.find((l) => l.code === activeLangCode) ?? LANGUAGES[0];

  const navLinks = [
    { label: t("nav_about"), href: "#about" },
    { label: t("nav_services"), href: "#services" },
    { label: t("nav_domains"), href: "#projects" },
    { label: t("nav_why_us"), href: "#why-us" },
    { label: t("nav_clients"), href: "#clients" },
    { label: t("nav_contact"), href: "#contact" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLanguageChange = (code) => {
    i18n.changeLanguage(code);
    setMobileOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-border"
          : "bg-background/60 backdrop-blur-md border-b border-border/30"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2 shrink-0">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <Wrench className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <span className="text-lg font-bold text-foreground tracking-wide font-[Rajdhani]">
                Sri Satyaritha
              </span>
              <span className="block text-xs text-muted-foreground -mt-1 tracking-widest uppercase">
                Engineers
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-3 xl:gap-5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs xl:text-sm text-muted-foreground hover:text-primary transition-colors uppercase font-medium whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}

            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-border hover:border-primary/50 gap-1.5 text-sm font-medium"
                >
                  <Globe className="w-4 h-4 text-primary" />
                  <span>{currentLang.flag}</span>
                  <span className="hidden xl:inline">{currentLang.label}</span>
                  <ChevronDown className="w-3 h-3 text-muted-foreground" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-40">
                {LANGUAGES.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => handleLanguageChange(lang.code)}
                    className={`gap-2 cursor-pointer ${
                      activeLangCode === lang.code
                        ? "text-primary font-semibold"
                        : ""
                    }`}
                  >
                    <span>{lang.flag}</span>
                    <span>{lang.label}</span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <a href="#contact" className="shrink-0">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold glow-cyan text-xs xl:text-sm px-3 xl:px-4">
                {t("nav_quote")}
              </Button>
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-background/98 backdrop-blur-md border-b border-border">
          <div className="px-4 py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm text-muted-foreground hover:text-primary py-2 tracking-wide uppercase font-medium"
              >
                {link.label}
              </a>
            ))}

            {/* Mobile Language Selector */}
            <div className="flex flex-wrap gap-2 pt-3 border-t border-border">
              {LANGUAGES.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleLanguageChange(lang.code)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm border transition-colors ${
                    activeLangCode === lang.code
                      ? "border-primary text-primary font-semibold bg-primary/10"
                      : "border-border text-muted-foreground hover:border-primary/50"
                  }`}
                >
                  <span>{lang.flag}</span>
                  <span>{lang.label}</span>
                </button>
              ))}
            </div>

            <a href="#contact" onClick={() => setMobileOpen(false)}>
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold mt-1">
                {t("nav_quote")}
              </Button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
