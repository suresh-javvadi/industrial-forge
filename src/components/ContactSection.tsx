import { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", requirement: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({ title: "Message sent!", description: "We'll get back to you shortly." });
    setForm({ name: "", email: "", phone: "", requirement: "" });
  };

  const update = (field) => (e) => setForm({ ...form, [field]: e.target.value });

  return (
    <section id="contact" className="py-20 lg:py-28 bg-card/30 relative">
      <div className="absolute inset-0 blueprint-grid opacity-30" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs tracking-widest uppercase text-accent font-semibold">Contact</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-3">
            Let's Build Something <span className="text-accent">Strong</span> Together
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <Input placeholder="Your Name" value={form.name} onChange={update("name")} required className="bg-card border-border h-12" />
            <Input type="email" placeholder="Email Address" value={form.email} onChange={update("email")} required className="bg-card border-border h-12" />
            <Input type="tel" placeholder="Phone Number" value={form.phone} onChange={update("phone")} className="bg-card border-border h-12" />
            <Textarea placeholder="Describe your requirement..." value={form.requirement} onChange={update("requirement")} required className="bg-card border-border min-h-[120px]" />
            <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold glow-orange">
              <Send className="w-4 h-4 mr-2" /> Send Message
            </Button>
          </form>

          {/* Contact Info */}
          <div className="space-y-8 lg:pl-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Get In Touch</h3>
              <p className="text-muted-foreground leading-relaxed">
                Ready to start your next industrial project? Reach out to discuss your requirements with our engineering team.
              </p>
            </div>

            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="text-foreground font-medium">+91 98765 43210</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="text-foreground font-medium">info@srisatyarithaengineers.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Address</p>
                  <p className="text-foreground font-medium">Industrial Area, Hyderabad, Telangana, India</p>
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
