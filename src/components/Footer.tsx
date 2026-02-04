import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/Nithin6112', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/nithin-s', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:s.nithin6112@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <a href="#home" className="text-xl font-bold">
            <span className="text-gradient-pink">Port</span>
            <span className="text-foreground">folio</span>
          </a>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-muted-foreground text-sm flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-pink-accent fill-current" /> by Nithin S
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
