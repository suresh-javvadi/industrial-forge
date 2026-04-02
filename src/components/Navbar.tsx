import { useEffect, useState } from "react";
import { Menu, Wrench, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Why Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-primary/20 bg-background/92 backdrop-blur-md shadow-2xl" : "bg-transparent"
      }`}
    >
      <div className="absolute inset-x-0 top-0 h-[3px] hazard-stripe opacity-90" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 py-3 lg:py-4">
          <a href="#hero" className="flex items-center gap-3">
            <div className="steel-panel flex h-12 w-12 items-center justify-center rounded-sm">
              <Wrench className="h-6 w-6 text-primary" />
            </div>
            <div className="leading-none">
              <span className="block text-2xl text-foreground">Sri Satyaritha</span>
              <span className="block text-[11px] uppercase tracking-[0.35em] text-muted-foreground">
                Mechanical Works
              </span>
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-8">
            <div className="flex items-center gap-6 rounded-sm border border-border/80 bg-card/70 px-5 py-3 backdrop-blur-sm">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <a href="#contact">
              <Button className="rounded-sm border border-primary/30 bg-primary px-6 font-semibold uppercase tracking-[0.14em] text-primary-foreground glow-cyan">
                Request Quote
              </Button>
            </a>
          </div>

          <button
            className="steel-panel flex h-11 w-11 items-center justify-center rounded-sm text-foreground lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-b border-border bg-background/95 px-4 pb-5 pt-2 backdrop-blur-md lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-3 rounded-sm border border-border bg-card/80 p-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="border-b border-border/60 py-2 text-sm uppercase tracking-[0.16em] text-muted-foreground transition-colors last:border-b-0 hover:text-primary"
              >
                {link.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setMobileOpen(false)}>
              <Button className="mt-2 w-full rounded-sm border border-primary/30 bg-primary font-semibold uppercase tracking-[0.14em] text-primary-foreground">
                Request Quote
              </Button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
