import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Bot,
  CheckCircle2,
  Link2,
  Puzzle,
  Sparkles,
  Workflow,
  Zap,
} from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { scrollToId } from "./nav";

const benefits = [
  "Reducción de tareas manuales y repetitivas.",
  "Agentes de inteligencia artificial para procesos empresariales.",
  "Integración con sistemas, documentos y fuentes de datos.",
  "Automatización de aprobaciones, consultas y seguimiento.",
  "Información disponible para tomar decisiones más rápidas.",
  "Soluciones seguras, escalables y conectadas.",
];

const impactChips = [
  { icon: Zap, label: "Menos tareas manuales" },
  { icon: Link2, label: "Procesos conectados" },
  { icon: BarChart3, label: "Decisiones más rápidas" },
];

const floatingCards = [
  { icon: Bot, label: "Agentes de IA", pos: "top-6 left-6" },
  { icon: Workflow, label: "Automatización", pos: "top-6 right-6" },
  { icon: BarChart3, label: "Analítica", pos: "bottom-6 left-6" },
  { icon: Puzzle, label: "Integraciones", pos: "bottom-6 right-6" },
];

export function AIAndAutomationSection() {
  return (
    <section
      id="ia-automatizacion"
      className="relative py-20 lg:py-28"
      style={{
        background:
          "linear-gradient(180deg,#ffffff 0%, #f4faff 55%, #ffffff 100%)",
      }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          icon={Sparkles}
          tag="IA y Automatización"
          title="Transformamos procesos con inteligencia artificial"
          gradientText="inteligencia artificial"
          description="Diseñamos soluciones de inteligencia artificial y automatización que reducen tareas manuales, conectan información y ayudan a las organizaciones a tomar mejores decisiones."
        />

        <div className="mt-16 grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-[#020c66]">
              Automatización que entiende tu negocio
            </h3>
            <p className="mt-4 text-slate-600 text-lg">
              Intelecto combina inteligencia artificial, automatización de
              procesos y tecnologías Microsoft para crear soluciones adaptadas
              a la operación de cada organización.
            </p>

            <ul className="mt-6 space-y-3">
              {benefits.map((b) => (
                <li key={b} className="flex gap-3 text-slate-700">
                  <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-[#00ADEE]" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-4">
              <button
                onClick={() => scrollToId("contacto")}
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white shadow-lg shadow-[#020c66]/20 hover:scale-[1.02] transition-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00ADEE]"
                style={{ background: "linear-gradient(135deg,#00ADEE,#020c66)" }}
              >
                Agenda una consultoría de IA
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </button>
              <button
                onClick={() => scrollToId("servicios")}
                className="px-6 py-3 rounded-xl font-semibold text-[#020c66] border border-slate-200 bg-white hover:border-[#00ADEE] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00ADEE]"
              >
                Conoce nuestras soluciones
              </button>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {impactChips.map((c) => (
                <div
                  key={c.label}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm text-sm font-medium text-[#020c66]"
                >
                  <c.icon size={16} className="text-[#00ADEE]" />
                  {c.label}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div
              className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] sm:aspect-[5/4]"
              style={{ boxShadow: "0 30px 60px -20px rgba(2,12,102,0.35)" }}
            >
              <img
                src="/equipo_planeando.png"
                alt="Equipo empresarial usando inteligencia artificial y automatización"
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(0,173,238,0.25), rgba(2,12,102,0.55))",
                }}
              />
              {floatingCards.map((c, i) => (
                <motion.div
                  key={c.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  className={`absolute ${c.pos} bg-white rounded-2xl px-4 py-3 shadow-lg flex items-center gap-2`}
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-white"
                    style={{ background: "linear-gradient(135deg,#00ADEE,#020c66)" }}
                  >
                    <c.icon size={16} />
                  </div>
                  <span className="text-sm font-semibold text-[#020c66]">{c.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}