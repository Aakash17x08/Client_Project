import { useState } from "react";
import {
  Send,
  Mail,
  Phone,
  MapPin,
  Youtube,
  Linkedin,
  Instagram,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });

    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const socialLinks = [
    { icon: Youtube, label: "YouTube", href: "#", color: "text-red-500" },
    { icon: Linkedin, label: "LinkedIn", href: "#", color: "text-blue-600" },
    { icon: Instagram, label: "Instagram", href: "#", color: "text-pink-500" },
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Create <span className="text-gradient">Together</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your vision to life? Get in touch and let's discuss
            your next project.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="space-y-8 animate-slide-up">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Send a Message</h3>
              <p className="text-muted-foreground">
                Fill out the form below and I'll get back to you within 24
                hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="transition-all duration-300 focus:shadow-[var(--shadow-glow)]"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="transition-all duration-300 focus:shadow-[var(--shadow-glow)]"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium mb-2"
                >
                  Subject *
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="transition-all duration-300 focus:shadow-[var(--shadow-glow)]"
                  placeholder="Project inquiry, collaboration, etc."
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="transition-all duration-300 focus:shadow-[var(--shadow-glow)]"
                  placeholder="Tell me about your project, timeline, and any specific requirements..."
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-creative"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8 animate-fade-in">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
              <p className="text-muted-foreground">
                Prefer a more direct approach? Feel free to reach out through
                any of these channels.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4 p-4 rounded-lg bg-card/50 hover:bg-accent/50 transition-colors duration-300">
                <div className="p-3 rounded-lg bg-[var(--gradient-primary)]">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p className="text-muted-foreground">nayanrajchaudhari@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 rounded-lg bg-card/50 hover:bg-accent/50 transition-colors duration-300">
                <div className="p-3 rounded-lg bg-[var(--gradient-primary)]">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <p className="text-muted-foreground">+91 8308648992</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 rounded-lg bg-card/50 hover:bg-accent/50 transition-colors duration-300">
                <div className="p-3 rounded-lg bg-[var(--gradient-primary)]">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-muted-foreground">
                    Kharadi, Pune Maharashtra, India.
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-8 border-t border-border/50">
              <h4 className="font-medium mb-4">Follow My Work</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="p-3 rounded-lg bg-card hover:bg-accent/50 transition-all duration-300 hover:scale-110 group"
                    aria-label={social.label}
                  >
                    <social.icon
                      className={`w-5 h-5 ${social.color} group-hover:scale-110 transition-transform`}
                    />
                  </a>
                ))}
              </div>
            </div>

            {/* Response Time */}
            <div className="p-6 rounded-lg bg-[var(--gradient-subtle)] border border-border/50">
              <h4 className="font-medium mb-2">Quick Response</h4>
              <p className="text-sm text-muted-foreground">
                I typically respond to all inquiries within 24 hours. For urgent
                projects, feel free to mention it in your message.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
