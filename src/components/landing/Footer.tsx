import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center font-bold text-primary-foreground">
              G
            </div>
            <span className="font-bold text-lg">
              <span className="text-gradient">gcloud</span>
              <span className="text-muted-foreground">.com.gt</span>
            </span>
          </a>

          {/* Links */}
          <div className="flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#servicios" className="hover:text-foreground transition-colors">
              Servicios
            </a>
            <a href="#proceso" className="hover:text-foreground transition-colors">
              Proceso
            </a>
            <a href="#nosotros" className="hover:text-foreground transition-colors">
              Nosotros
            </a>
            <a href="#contacto" className="hover:text-foreground transition-colors">
              Contacto
            </a>
          </div>

          {/* Copyright */}
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <span>© {currentYear} gcloud.com.gt</span>
            <span className="mx-2">·</span>
            <span className="flex items-center gap-1">
              Hecho con <Heart className="w-4 h-4 text-primary fill-primary" /> en Guatemala
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
