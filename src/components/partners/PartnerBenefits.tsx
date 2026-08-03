import { motion, useReducedMotion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { PartnerGrowthGraphic } from "./PartnerGrowthGraphic";

const benefitsList = [
  "Acceder a nuevas lineas de servicio.",
  "Participar en proyectos de mayor alcance.",
  "Cumplir requisitos tecnicos y contractuales.",
  "Ampliar equipos sin aumentar la estructura fija.",
  "Reducir riesgos durante la ejecucion.",
  "Responder mas rapido a nuevas oportunidades.",
  "Presentar propuestas mas completas.",
];

export function PartnerBenefits() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55 }}
            className="order-1"
          >
            <h2 className="max-w-xl text-3xl font-bold text-[#1e1e1e] sm:text-4xl lg:text-5xl">
              Mas capacidad para vender. Mas respaldo para ejecutar.
            </h2>

            <ul className="mt-8 space-y-4">
              {benefitsList.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4 text-slate-700 shadow-[0_10px_28px_-20px_rgba(2,12,102,0.35)]"
                >
                  <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-[#00ADEE]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="order-2 mt-10 flex justify-center lg:mt-0 lg:justify-end"
          >
            <PartnerGrowthGraphic />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
