import { Wrench } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
                <Wrench className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-bold text-foreground tracking-wide font-[Rajdhani]">Sri Satyaritha Engineers</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              ISO 9001:2015 &amp; AS9100D certified manufacturer of precision components, press tools, and special purpose machines. Serving Defence, Aerospace, and Communications since 25+ years.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-foreground mb-4 tracking-wide uppercase text-sm">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {[
                { label: "About", href: "#about" },
                { label: "Services", href: "#services" },
                { label: "Domains", href: "#projects" },
                { label: "Clients", href: "#clients" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <a key={link.label} href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-foreground mb-4 tracking-wide uppercase text-sm">Contact</h4>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <span>+91 98 66 12 66 95</span>
              <span>+91 94 94 80 99 39</span>
              <span>satyasrt@gmail.com</span>
              <span>satya@ssrprecisionworks.com</span>
              <span>Hyderabad, Telangana, India</span>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Sri Satyaritha Engineers. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
