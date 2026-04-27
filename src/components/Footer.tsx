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
    <footer className="py-12 border-t border-border bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
                <Wrench className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-bold text-foreground tracking-wide font-[Rajdhani]">
                Sri Satyaritha Engineers
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {t("footer_tagline")}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-foreground mb-4 tracking-wide uppercase text-sm">
              {t("footer_quick_links")}
            </h4>
            <div className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-foreground mb-4 tracking-wide uppercase text-sm">
              {t("footer_contact")}
            </h4>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <a href="tel:+919866126695" className="hover:text-primary transition-colors">
                +91 98 66 12 66 95
              </a>
              <a href="tel:+919494809939" className="hover:text-primary transition-colors">
                +91 94 94 80 99 39
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&to=satyasrt@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                satyasrt@gmail.com
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&to=satya@ssrprecisionworks.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                satya@ssrprecisionworks.com
              </a>
              <a
                href="https://www.google.com/maps/search/?api=1&query=6-2-966%2F7%2F9+Hill+Colony+Khairatabad+Hyderabad+Telangana+India"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                Hyderabad, Telangana, India
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} {t("footer_copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
