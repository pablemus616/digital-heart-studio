import { useState } from "react";
import { Mail, Phone, Send, MessageCircle, Clock, Sparkles } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    budget: "",
    message: "",
  });

  const [activeStep, setActiveStep] = useState(1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("¡Mensaje enviado! Te contactaremos pronto.");
    setFormData({ name: "", email: "", projectType: "", budget: "", message: "" });
    setActiveStep(1);
  };

  const projectTypes = [
    { id: "web", label: "Página Web", icon: "🌐" },
    { id: "ecommerce", label: "E-commerce", icon: "🛒" },
    { id: "app", label: "Aplicación Web", icon: "📱" },
    { id: "redesign", label: "Rediseño", icon: "✨" },
  ];

  const budgetRanges = [
    { id: "starter", label: "Q5,000 - Q15,000", desc: "Proyecto inicial" },
    { id: "growth", label: "Q15,000 - Q40,000", desc: "Negocio en crecimiento" },
    { id: "enterprise", label: "Q40,000+", desc: "Solución empresarial" },
    { id: "talk", label: "Conversemos", desc: "No estoy seguro" },
  ];

  return (
    <section id="contacto" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-secondary/50 to-background" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[150px]" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[150px]" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm tracking-wider uppercase">
            Hagámoslo realidad
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold mt-3 mb-4">
            Tu próximo paso <span className="text-gradient">empieza aquí</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            No es solo un formulario. Es el inicio de algo grande para tu negocio.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Quick contact pills */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a
              href="mailto:hola@gcloud.com.gt"
              className="group flex items-center gap-3 px-5 py-3 glass rounded-full hover:bg-primary/10 transition-all"
            >
              <Mail className="w-5 h-5 text-primary" />
              <span className="text-sm">hola@gcloud.com.gt</span>
            </a>
            <a
              href="tel:+502XXXXXXXX"
              className="group flex items-center gap-3 px-5 py-3 glass rounded-full hover:bg-primary/10 transition-all"
            >
              <Phone className="w-5 h-5 text-primary" />
              <span className="text-sm">+502 XXXX XXXX</span>
            </a>
            <div className="flex items-center gap-3 px-5 py-3 glass rounded-full">
              <Clock className="w-5 h-5 text-accent" />
              <span className="text-sm text-muted-foreground">Respuesta en menos de 24h</span>
            </div>
          </div>

          {/* Interactive Form */}
          <form onSubmit={handleSubmit} className="glass rounded-3xl p-8 md:p-12">
            {/* Progress indicator */}
            <div className="flex items-center justify-center gap-2 mb-10">
              {[1, 2, 3].map((step) => (
                <div
                  key={step}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    step <= activeStep 
                      ? "bg-gradient-to-r from-primary to-accent w-12" 
                      : "bg-border w-8"
                  }`}
                />
              ))}
            </div>

            {/* Step 1: Project Type */}
            {activeStep === 1 && (
              <div className="space-y-6 animate-fade-up">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-semibold mb-2">¿Qué quieres crear?</h3>
                  <p className="text-muted-foreground">Selecciona el tipo de proyecto</p>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {projectTypes.map((type) => (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() => {
                        setFormData({ ...formData, projectType: type.id });
                        setActiveStep(2);
                      }}
                      className={`group p-6 rounded-2xl border-2 transition-all duration-300 hover:border-primary hover:bg-primary/5 ${
                        formData.projectType === type.id 
                          ? "border-primary bg-primary/10" 
                          : "border-border"
                      }`}
                    >
                      <div className="text-3xl mb-3">{type.icon}</div>
                      <div className="font-medium text-sm">{type.label}</div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Budget & Details */}
            {activeStep === 2 && (
              <div className="space-y-8 animate-fade-up">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-semibold mb-2">¿Cuál es tu presupuesto?</h3>
                  <p className="text-muted-foreground">Esto nos ayuda a proponerte la mejor solución</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {budgetRanges.map((range) => (
                    <button
                      key={range.id}
                      type="button"
                      onClick={() => {
                        setFormData({ ...formData, budget: range.id });
                        setActiveStep(3);
                      }}
                      className={`group p-5 rounded-2xl border-2 transition-all duration-300 hover:border-primary hover:bg-primary/5 text-left ${
                        formData.budget === range.id 
                          ? "border-primary bg-primary/10" 
                          : "border-border"
                      }`}
                    >
                      <div className="font-semibold text-sm mb-1">{range.label}</div>
                      <div className="text-xs text-muted-foreground">{range.desc}</div>
                    </button>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => setActiveStep(1)}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  ← Volver
                </button>
              </div>
            )}

            {/* Step 3: Contact Info */}
            {activeStep === 3 && (
              <div className="space-y-6 animate-fade-up">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center gap-2 text-primary mb-2">
                    <Sparkles className="w-5 h-5" />
                    <span className="text-sm font-medium">Último paso</span>
                  </div>
                  <h3 className="text-2xl font-semibold mb-2">¿Cómo te contactamos?</h3>
                  <p className="text-muted-foreground">Cuéntanos más sobre tu proyecto</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Tu nombre
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                      placeholder="¿Cómo te llamas?"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Cuéntanos tu idea
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                    placeholder="¿Qué problema quieres resolver? ¿Qué te imaginas? No te preocupes por los detalles técnicos, eso lo resolvemos juntos..."
                  />
                </div>

                <div className="flex items-center justify-between pt-4">
                  <button
                    type="button"
                    onClick={() => setActiveStep(2)}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    ← Volver
                  </button>
                  
                  <button
                    type="submit"
                    className="px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold flex items-center gap-2 hover:opacity-90 transition-opacity glow-primary"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Enviar mensaje
                  </button>
                </div>
              </div>
            )}
          </form>

          {/* Trust note */}
          <p className="text-center text-sm text-muted-foreground mt-8">
            Sin compromisos. Sin spam. Solo conversación honesta sobre tu proyecto.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
