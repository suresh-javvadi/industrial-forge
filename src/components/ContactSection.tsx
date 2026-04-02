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
    <section id="contact" className="py-20 lg:py-28 relative">
      <div className="absolute inset-0 blueprint-grid opacity-30" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs tracking-widest uppercase text-primary font-semibold">Contact</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-3">
            Let's Build Something <span className="text-gradient">Strong</span> Together
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <form onSubmit={handleSubmit} className="space-y-5">
            <Input placeholder="Your Name" value={form.name} onChange={update("name")} required className="bg-secondary border-border h-12 focus:border-primary" />
            <Input type="email" placeholder="Email Address" value={form.email} onChange={update("email")} required className="bg-secondary border-border h-12 focus:border-primary" />
            <Input type="tel" placeholder="Phone Number" value={form.phone} onChange={update("phone")} className="bg-secondary border-border h-12 focus:border-primary" />
            <Textarea placeholder="Describe your requirement..." value={form.requirement} onChange={update("requirement")} required className="bg-secondary border-border min-h-[120px] focus:border-primary" />
            <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold glow-cyan">
              <Send className="w-4 h-4 mr-2" /> Send Message
            </Button>
          </form>

          <div className="space-y-8 lg:pl-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Get In Touch</h3>
              <p className="text-muted-foreground leading-relaxed">
                Ready to start your next industrial project? Reach out to discuss your requirements with our engineering team.
              </p>
            </div>

            <div className="space-y-5">
              {[
                { icon: Phone, label: "Phone", value: "+91 98765 43210" },
                { icon: Mail, label: "Email", value: "info@srisatyarithaengineers.com" },
                { icon: MapPin, label: "Address", value: "Industrial Area, Hyderabad, Telangana, India" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    <p className="text-foreground font-medium">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
