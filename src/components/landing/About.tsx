import { Heart, Target, Users, Code2, Zap, Shield } from "lucide-react";

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

const techStack = [
  { icon: Code2, label: "Código limpio" },
  { icon: Zap, label: "Velocidad" },
  { icon: Shield, label: "Seguridad" },
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

          {/* Right - Abstract Code Visual */}
          <div className="relative hidden lg:block">
            <div className="relative">
              {/* Terminal-like window */}
              <div className="glass rounded-2xl overflow-hidden">
                {/* Terminal header */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-border/50 bg-secondary/30">
                  <div className="w-3 h-3 rounded-full bg-destructive/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <div className="w-3 h-3 rounded-full bg-green-500/60" />
                  <span className="ml-2 text-xs text-muted-foreground font-mono">gcloud.config.ts</span>
                </div>
                
                {/* Code content */}
                <div className="p-6 font-mono text-sm leading-relaxed">
                  <div className="text-muted-foreground">
                    <span className="text-accent">const</span>{" "}
                    <span className="text-primary">tuProyecto</span>{" "}
                    <span className="text-muted-foreground">=</span>{" "}
                    <span className="text-accent">{"{"}</span>
                  </div>
                  <div className="ml-4 mt-2">
                    <span className="text-foreground">diseño</span>
                    <span className="text-muted-foreground">:</span>{" "}
                    <span className="text-green-400">"único"</span>
                    <span className="text-muted-foreground">,</span>
                  </div>
                  <div className="ml-4">
                    <span className="text-foreground">hosting</span>
                    <span className="text-muted-foreground">:</span>{" "}
                    <span className="text-green-400">"99.9% uptime"</span>
                    <span className="text-muted-foreground">,</span>
                  </div>
                  <div className="ml-4">
                    <span className="text-foreground">soporte</span>
                    <span className="text-muted-foreground">:</span>{" "}
                    <span className="text-green-400">"24/7"</span>
                    <span className="text-muted-foreground">,</span>
                  </div>
                  <div className="ml-4">
                    <span className="text-foreground">pasión</span>
                    <span className="text-muted-foreground">:</span>{" "}
                    <span className="text-primary">Infinity</span>
                    <span className="text-muted-foreground">,</span>
                  </div>
                  <div className="text-accent mt-2">{"}"}</div>
                  
                  <div className="mt-4 pt-4 border-t border-border/30">
                    <span className="text-muted-foreground">// Resultado:</span>
                    <div className="text-primary mt-1 animate-pulse">
                      → Tu negocio transformado_
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating tech badges */}
              <div className="absolute -top-4 -right-4 flex gap-2">
                {techStack.map((tech, i) => (
                  <div 
                    key={i}
                    className="glass rounded-lg px-3 py-2 flex items-center gap-2 animate-float"
                    style={{ animationDelay: `${i * 0.5}s` }}
                  >
                    <tech.icon className="w-4 h-4 text-primary" />
                    <span className="text-xs font-medium">{tech.label}</span>
                  </div>
                ))}
              </div>

              {/* Decorative gradient line */}
              <div className="absolute -left-8 top-1/2 -translate-y-1/2 w-1 h-32 bg-gradient-to-b from-transparent via-primary to-transparent rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
