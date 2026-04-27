import { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useTranslation } from "react-i18next";

const ContactSection = () => {
  const { toast } = useToast();
  const { t } = useTranslation();
  const [form, setForm] = useState({ name: "", email: "", phone: "", requirement: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: t("contact_toast_title"), description: t("contact_toast_desc") });
    setForm({ name: "", email: "", phone: "", requirement: "" });
  };

  const update = (field: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [field]: e.target.value });

  return (
    <section id="contact" className="py-20 lg:py-28 relative">
      <div className="absolute inset-0 blueprint-grid opacity-30" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs tracking-widest uppercase text-primary font-semibold">
            {t("contact_label")}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-3">
            {t("contact_title")}{" "}
            <span className="text-gradient">{t("contact_title_highlight")}</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <Input
              placeholder={t("contact_name")}
              value={form.name}
              onChange={update("name")}
              required
              className="bg-secondary border-border h-12 focus:border-primary"
            />
            <Input
              type="email"
              placeholder={t("contact_email")}
              value={form.email}
              onChange={update("email")}
              required
              className="bg-secondary border-border h-12 focus:border-primary"
            />
            <Input
              type="tel"
              placeholder={t("contact_phone")}
              value={form.phone}
              onChange={update("phone")}
              className="bg-secondary border-border h-12 focus:border-primary"
            />
            <Textarea
              placeholder={t("contact_requirement")}
              value={form.requirement}
              onChange={update("requirement")}
              required
              className="bg-secondary border-border min-h-[120px] focus:border-primary"
            />
            <Button
              type="submit"
              size="lg"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold glow-cyan"
            >
              <Send className="w-4 h-4 mr-2" /> {t("contact_send")}
            </Button>
          </form>

          {/* Contact Info */}
          <div className="space-y-8 lg:pl-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                {t("contact_get_in_touch")}
              </h3>
              <p className="text-muted-foreground leading-relaxed">{t("contact_desc")}</p>
            </div>

            <div className="space-y-5">
              {/* Phone */}
              <div className="flex items-start gap-4">
                <a
                  href="tel:+919866126695"
                  className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 hover:bg-primary/20 transition-colors"
                >
                  <Phone className="w-5 h-5 text-primary" />
                </a>
                <div>
                  <p className="text-sm text-muted-foreground">{t("contact_phone_label")}</p>
                  <p className="text-foreground font-medium">+91 98 66 12 66 95</p>
                  <p className="text-foreground font-medium">+91 94 94 80 99 39</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <a
                  href="https://mail.google.com/mail/?view=cm&to=satyasrt@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 hover:bg-primary/20 transition-colors"
                >
                  <Mail className="w-5 h-5 text-primary" />
                </a>
                <div>
                  <p className="text-sm text-muted-foreground">{t("contact_email_label")}</p>
                  <p className="text-foreground font-medium">satyasrt@gmail.com</p>
                  <p className="text-foreground font-medium">satya@ssrprecisionworks.com</p>
                </div>
              </div>

              {/* Admin Office */}
              <div className="flex items-start gap-4">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=6-2-966%2F7%2F9+Hill+Colony+Khairatabad+Hyderabad+Telangana+India"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 hover:bg-primary/20 transition-colors"
                >
                  <MapPin className="w-5 h-5 text-primary" />
                </a>
                <div>
                  <p className="text-sm text-muted-foreground">{t("contact_admin_label")}</p>
                  <p className="text-foreground font-medium">
                    6-2-966/7/9, Hill Colony, Khairatabad,
                    <br />
                    Hyderabad – 500 004, Telangana, India
                  </p>
                </div>
              </div>

              {/* Works */}
              <div className="flex items-start gap-4">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Gowtham+Nagar+Balanagar+Hyderabad+500011+Telangana+India"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 hover:bg-primary/20 transition-colors"
                >
                  <MapPin className="w-5 h-5 text-primary" />
                </a>
                <div>
                  <p className="text-sm text-muted-foreground">{t("contact_works_label")}</p>
                  <p className="text-foreground font-medium">
                    Gowtham Nagar, Balanagar,
                    <br />
                    Hyderabad – 500 011, Telangana, India
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
