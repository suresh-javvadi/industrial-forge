import { Wrench } from "lucide-react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  const quickLinks = [
    { label: t("nav_about"), href: "#about" },
    { label: t("nav_services"), href: "#services" },
    { label: t("nav_domains"), href: "#projects" },
    { label: t("nav_clients"), href: "#clients" },
    { label: t("nav_contact"), href: "#contact" },
  ];

  return (
    <footer className="border-t border-border bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">

          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2 shrink-0">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <Wrench className="w-4 h-4 text-primary-foreground" />
            </div>
            <div>
              <span className="text-sm font-bold text-foreground tracking-wide font-[Rajdhani]">
                Sri Satyaritha Engineers
              </span>
            </div>
          </a>

          {/* Nav links */}
          <div className="flex items-center gap-5 flex-wrap justify-center">
            {quickLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-xs text-muted-foreground shrink-0">
            © {new Date().getFullYear()} {t("footer_copyright")}
          </p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
