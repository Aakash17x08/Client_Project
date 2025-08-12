import {
  Heart,
  Youtube,
  Linkedin,
  Instagram,
  ExternalLink,
} from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    {
      icon: Youtube,
      label: "YouTube",
      href: "https://www.youtube.com/@itsanartistjob",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/raj-chaudhari-1227a928a/",
    },
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://www.instagram.com/realm_of_my_creation/",
    },
  ];

  return (
    <footer className="bg-card/50 backdrop-blur-sm border-t border-border/50 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-lg bg-[var(--gradient-primary)] flex items-center justify-center text-white font-bold">
                RC
              </div>
              <div>
                <h3 className="font-bold text-lg">Raj Chaudhari</h3>
                <p className="text-sm text-muted-foreground">
                  Video Editor & Motion Artist
                </p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Transforming ideas into compelling visual stories through
              professional video editing and motion graphics.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.querySelector(link.href);
                      element?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold">Connect</h4>
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="p-2 rounded-lg bg-secondary/50 hover:bg-accent/50 transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              Follow my latest work and creative process
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-border/50 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Raj Choudhary. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            <a target="_blank" href="https://aakashmaurya.netlify.app/">
             @ Developed by Aakash
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
