import { Heart, Target, Users } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Pasión por el detalle",
    description: "Cada pixel, cada línea de código importa. Creamos con amor y atención obsesiva.",
  },
  {
    icon: Target,
    title: "Orientados a resultados",
    description: "Diseño bonito que además funciona. Tu éxito es nuestra medida de calidad.",
  },
  {
    icon: Users,
    title: "Socios, no proveedores",
    description: "Nos involucramos en tu visión. Tu crecimiento es también el nuestro.",
  },
];

const About = () => {
  return (
    <section id="nosotros" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[150px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <div>
            <span className="text-primary font-mono text-sm tracking-wider uppercase">
              Quiénes somos
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold mt-3 mb-6">
              No somos una agencia más,{" "}
              <span className="text-gradient">somos tu aliado digital</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                En <strong className="text-foreground">gcloud.com.gt</strong> creemos que cada negocio 
                tiene una historia única que merece ser contada de manera extraordinaria.
              </p>
              <p>
                No usamos plantillas genéricas. Cada proyecto nace de una conversación genuina, 
                donde entendemos tus sueños, desafíos y lo que hace especial a tu empresa.
              </p>
              <p>
                Desde Guatemala para el mundo, combinamos creatividad local con estándares 
                internacionales para crear experiencias digitales que realmente conectan.
              </p>
            </div>

            {/* Values */}
            <div className="mt-10 space-y-6">
              {values.map((value, index) => (
                <div key={index} className="flex gap-4 group">
                  <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-colors">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{value.title}</h4>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Visual Element */}
          <div className="relative">
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Decorative circles */}
              <div className="absolute inset-0 rounded-full border border-border/30 animate-pulse-slow" />
              <div className="absolute inset-8 rounded-full border border-border/40" />
              <div className="absolute inset-16 rounded-full border border-border/50" />
              
              {/* Center logo */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center glow-primary animate-float">
                  <span className="text-6xl font-bold text-primary-foreground">G</span>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute top-8 right-8 w-16 h-16 rounded-xl glass flex items-center justify-center animate-float" style={{ animationDelay: "1s" }}>
                <span className="text-2xl">🇬🇹</span>
              </div>
              <div className="absolute bottom-8 left-8 w-16 h-16 rounded-xl glass flex items-center justify-center animate-float" style={{ animationDelay: "2s" }}>
                <span className="text-2xl">✨</span>
              </div>
              <div className="absolute bottom-24 right-0 w-16 h-16 rounded-xl glass flex items-center justify-center animate-float" style={{ animationDelay: "0.5s" }}>
                <span className="text-2xl">💻</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
