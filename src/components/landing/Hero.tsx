import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[128px] animate-pulse-slow" style={{ animationDelay: "2s" }} />
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                            linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        
        {/* Noise overlay */}
        <div className="absolute inset-0 noise pointer-events-none" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">
              Transformamos ideas en experiencias digitales
            </span>
          </div>

          {/* Headline */}
          <h1 
            className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-6 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            Tu empresa merece{" "}
            <span className="text-gradient">brillar</span>
            <br />
            en el mundo digital
          </h1>

          {/* Subheadline */}
          <p 
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            Creamos páginas web únicas, hosting confiable y soluciones personalizadas 
            para llevar tu negocio al siguiente nivel. Sin plantillas genéricas, 
            solo diseño con alma.
          </p>

          {/* CTA Buttons */}
          <div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            <a
              href="#contacto"
              className="group px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold text-lg flex items-center gap-2 hover:gap-4 transition-all duration-300 glow-primary"
            >
              Comienza tu proyecto
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#servicios"
              className="px-8 py-4 rounded-xl glass text-foreground font-medium text-lg hover:bg-secondary/50 transition-colors"
            >
              Ver servicios
            </a>
          </div>

          {/* Stats */}
          <div 
            className="grid grid-cols-3 gap-8 mt-20 pt-10 border-t border-border/50 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.5s" }}
          >
            {[
              { value: "50+", label: "Proyectos entregados" },
              { value: "99.9%", label: "Uptime garantizado" },
              { value: "24/7", label: "Soporte disponible" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl sm:text-4xl font-bold text-gradient">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in" style={{ animationDelay: "1s" }}>
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 rounded-full bg-primary animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
