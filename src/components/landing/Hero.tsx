import { motion } from "framer-motion";
import { ArrowRight, BrainCircuit, Code2, Rocket, Shield, ShieldCheck } from "lucide-react";
import { scrollToId } from "./nav";

const features = [
  {
    icon: BrainCircuit,
    title: "IA que genera resultados",
    text: "Implementamos agentes inteligentes, Copilot, automatización y modelos de IA que optimizan procesos, reducen tiempos y potencian la toma de decisiones.",
  },
  {
    icon: Code2,
    title: "Transformación Digital End-to-End",
    text: "Creamos aplicaciones web, móviles y plataformas empresariales adaptadas a los procesos y objetivos específicos de cada organización.",
  },
  {
    icon: Rocket,
    title: "Innovación con propósito",
    text: "Desarrollamos soluciones tecnológicas enfocadas en resolver retos reales y acelerar la evolución de las organizaciones.",
  },
  {
    icon: ShieldCheck,
    title: "Ecosistema Microsoft",
    text: "Especialistas en Microsoft 365, Dynamics 365, Power Platform, Azure y SharePoint para construir soluciones integradas y escalables.",
  },
];

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #ffffff 0%, #eaf6fd 45%, #f5faff 100%)",
      }}
    >
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full blur-3xl" style={{ background: "radial-gradient(circle, #00ADEE33, transparent 70%)" }} />
        <div className="absolute bottom-0 -left-40 w-[500px] h-[500px] rounded-full blur-3xl" style={{ background: "radial-gradient(circle, #020c6622, transparent 70%)" }} />
      </div>

      <div className="relative mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00ADEE]/10 border border-[#00ADEE]/20 text-sm font-medium text-[#020c66] mb-6">
            <Shield size={16} className="text-[#00ADEE]" />
            +24 años de experiencia
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-[#1e1e1e]">
            Transformamos{" "}
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(90deg,#00ADEE,#020c66)" }}>
              ideas
            </span>{" "}
            en soluciones
          </h1>

          <p className="mt-6 text-lg text-slate-600 max-w-xl">
            Desarrollamos software a la medida, soluciones de inteligencia
            artificial, automatización, Microsoft, CRM e infraestructura en la
            nube para ayudar a empresas públicas y privadas a automatizar
            procesos, mejorar su operación y crecer con tecnología confiable.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button
              onClick={() => scrollToId("contacto")}
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white shadow-lg shadow-[#020c66]/20 transition-transform hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00ADEE]"
              style={{ background: "linear-gradient(135deg,#00ADEE,#020c66)" }}
            >
              Agenda tu consultoría
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => scrollToId("servicios")}
              className="px-6 py-3 rounded-xl font-semibold text-[#020c66] border border-slate-200 bg-white/80 backdrop-blur hover:border-[#00ADEE] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00ADEE]"
            >
              Conoce nuestras soluciones
            </button>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6 max-w-md">
            {[
              { n: "24+", l: "Años" },
              { n: "500+", l: "Proyectos" },
              { n: "98%", l: "Satisfacción de clientes" },
            ].map((s) => (
              <div key={s.n}>
                <div className="text-3xl sm:text-4xl font-bold" style={{ color: "#00ADEE" }}>{s.n}</div>
                <div className="text-xs sm:text-sm text-slate-500 mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="grid gap-4"
        >
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="flex gap-4 p-5 rounded-2xl bg-white/70 backdrop-blur border border-white shadow-[0_8px_30px_-12px_rgba(2,12,102,0.15)]"
            >
              <div
                className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-md"
                style={{ background: "linear-gradient(135deg,#00ADEE,#020c66)" }}
              >
                <f.icon size={22} />
              </div>
              <div>
                <h3 className="font-semibold text-[#020c66]">{f.title}</h3>
                <p className="text-sm text-slate-600 mt-1">{f.text}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}