import { Globe, Server, Rocket, Wrench, Code, Headphones } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Diseño Web",
    description: "Páginas web únicas que reflejan la esencia de tu marca. Sin plantillas, solo diseño original con propósito.",
    gradient: "from-primary to-cyan-400",
  },
  {
    icon: Server,
    title: "Hosting Premium",
    description: "Servidores rápidos y seguros con 99.9% de uptime. Tu sitio siempre disponible para tus clientes.",
    gradient: "from-cyan-400 to-blue-500",
  },
  {
    icon: Rocket,
    title: "Digitalización",
    description: "Transformamos tu negocio desde cero. Estrategia digital completa para entrar al mundo online.",
    gradient: "from-blue-500 to-accent",
  },
  {
    icon: Code,
    title: "Desarrollo a Medida",
    description: "Soluciones personalizadas para necesidades únicas. Sistemas, apps web y automatizaciones.",
    gradient: "from-accent to-pink-500",
  },
  {
    icon: Wrench,
    title: "Mantenimiento",
    description: "Tu sitio siempre actualizado y funcionando. Nos encargamos de todo para que tú te enfoques en tu negocio.",
    gradient: "from-pink-500 to-orange-400",
  },
  {
    icon: Headphones,
    title: "Soporte 24/7",
    description: "Estamos aquí cuando nos necesites. Respuesta rápida y soluciones efectivas siempre.",
    gradient: "from-orange-400 to-primary",
  },
];

const Services = () => {
  return (
    <section id="servicios" className="py-24 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm tracking-wider uppercase">
            Lo que hacemos
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold mt-3 mb-4">
            Servicios que <span className="text-gradient">transforman</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Cada servicio está diseñado para impulsar tu presencia digital 
            y hacer crecer tu negocio de manera sostenible.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl glass card-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} p-3 mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                <service.icon className="w-full h-full text-primary-foreground" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-3 group-hover:text-gradient transition-all duration-300">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>

              {/* Hover border effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.gradient} opacity-10`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
