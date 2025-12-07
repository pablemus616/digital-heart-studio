import { MessageSquare, Lightbulb, Palette, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Conversamos",
    description: "Escuchamos tu visión, entendemos tu negocio y definimos juntos los objetivos del proyecto.",
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Estrategia",
    description: "Diseñamos un plan personalizado que alinea tecnología, diseño y tus metas comerciales.",
  },
  {
    number: "03",
    icon: Palette,
    title: "Creamos",
    description: "Desarrollamos tu solución con atención al detalle, manteniendo comunicación constante.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Lanzamiento",
    description: "Publicamos tu proyecto y te acompañamos para asegurar su éxito continuo.",
  },
];

const Process = () => {
  return (
    <section id="proceso" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="text-primary font-mono text-sm tracking-wider uppercase">
            Nuestro proceso
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold mt-3 mb-4">
            Simple y <span className="text-gradient">efectivo</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Un proceso claro y transparente que te mantiene informado 
            en cada paso del camino.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-border to-transparent" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative group"
              >
                {/* Card */}
                <div className="relative p-8 rounded-2xl glass text-center card-hover">
                  {/* Number */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 font-mono text-6xl font-bold text-muted/30 group-hover:text-primary/20 transition-colors">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="relative w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary to-accent p-4 group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="w-full h-full text-primary-foreground" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-2 w-4 h-4 transform -translate-y-1/2 z-10">
                    <div className="w-3 h-3 border-t-2 border-r-2 border-primary rotate-45" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
