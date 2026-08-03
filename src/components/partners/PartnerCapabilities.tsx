import { motion, useReducedMotion } from "framer-motion";
import {
    Blocks,
    Cpu,
    FileSignature,
    Landmark,
    Presentation,
    UsersRound,
    type LucideIcon,
} from "lucide-react";

type CapabilityCard = {
  icon: LucideIcon;
  title: string;
  text: string;
};

const cards: CapabilityCard[] = [
  {
    icon: Cpu,
    title: "Capacidad tecnica",
    text: "Equipos especializados en desarrollo de software, inteligencia artificial, Microsoft, automatizacion, datos, pruebas y soluciones empresariales.",
  },
  {
    icon: Presentation,
    title: "Capacidad comercial",
    text: "Apoyo en preventa, construccion de propuestas, demostraciones, estimaciones y definicion de soluciones.",
  },
  {
    icon: FileSignature,
    title: "Experiencia contractual",
    text: "Experiencia en estructuracion, ejecucion y seguimiento de contratos tecnologicos con empresas privadas y entidades publicas.",
  },
  {
    icon: Landmark,
    title: "Experiencia en licitaciones",
    text: "Analisis de requisitos, construccion de propuestas, gestion documental, subsanaciones y conformacion de uniones temporales.",
  },
  {
    icon: UsersRound,
    title: "Capacidad operativa",
    text: "Ampliamos la capacidad de ejecucion mediante especialistas, equipos de proyecto, fabricas de software y bolsas de horas.",
  },
  {
    icon: Blocks,
    title: "Portafolio complementario",
    text: "Integramos servicios, productos, certificaciones y experiencia para construir propuestas mas completas y competitivas.",
  },
];

export function PartnerCapabilities() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="capacidades-partners" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-[#1e1e1e] sm:text-4xl lg:text-5xl">
            Todo lo que podemos sumar a tu negocio
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Capacidades tecnicas, comerciales y operativas para fortalecer cada oportunidad.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {cards.map((card, index) => (
            <motion.article
              key={card.title}
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, delay: index * 0.04 }}
              className="group rounded-[22px] border border-slate-200 bg-white p-6 shadow-[0_10px_28px_-18px_rgba(2,12,102,0.35)] transition-transform duration-300 hover:-translate-y-1.5 hover:shadow-[0_18px_38px_-18px_rgba(2,12,102,0.4)]"
            >
              <div
                className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl text-white"
                style={{ background: "linear-gradient(135deg,#00ADEE,#020c66)" }}
              >
                <card.icon size={21} />
              </div>
              <h3 className="text-xl font-semibold text-[#1e1e1e]">{card.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{card.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
