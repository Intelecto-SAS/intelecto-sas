import { motion, useReducedMotion } from "framer-motion";
import { Building2, Handshake, Layers3, Puzzle, type LucideIcon } from "lucide-react";

type ModelCard = {
  icon: LucideIcon;
  title: string;
  text: string;
};

const models: ModelCard[] = [
  {
    icon: Puzzle,
    title: "Complementacion tecnica",
    text: "Integramos nuestros servicios y especialistas dentro de una solucion liderada por el partner.",
  },
  {
    icon: Handshake,
    title: "Proyectos conjuntos",
    text: "Disenamos, presentamos y ejecutamos soluciones combinando las capacidades de ambas empresas.",
  },
  {
    icon: Building2,
    title: "Uniones temporales",
    text: "Sumamos experiencia, equipo y respaldo para participar en procesos publicos o privados.",
  },
  {
    icon: Layers3,
    title: "Marca blanca",
    text: "Ejecutamos servicios especializados bajo el modelo comercial acordado con el partner.",
  },
];

export function PartnershipModels() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-[#1e1e1e] sm:text-4xl lg:text-5xl">
            Diferentes formas de crecer juntos
          </h2>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {models.map((model, index) => (
            <motion.article
              key={model.title}
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              className="rounded-[22px] border border-slate-200 bg-white p-6 shadow-[0_10px_28px_-18px_rgba(2,12,102,0.35)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_38px_-18px_rgba(2,12,102,0.4)]"
            >
              <div
                className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl text-white"
                style={{ background: "linear-gradient(135deg,#00ADEE,#020c66)" }}
              >
                <model.icon size={20} />
              </div>
              <h3 className="text-xl font-semibold text-[#1e1e1e]">{model.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{model.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
