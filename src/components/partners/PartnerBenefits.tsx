import { motion, useReducedMotion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

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
        <h2 className="mx-auto max-w-4xl text-center text-3xl font-bold text-[#1e1e1e] sm:text-4xl lg:text-5xl">
          Mas capacidad para vender. Mas respaldo para ejecutar.
        </h2>

        <div className="mt-14 grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55 }}
            className="relative mx-auto h-[360px] w-full max-w-[520px] rounded-[26px] border border-slate-200 bg-white p-8 shadow-[0_20px_45px_-24px_rgba(2,12,102,0.35)]"
            aria-label="Grafica de crecimiento conjunto entre partner e Intelecto"
            role="img"
          >
            <div className="absolute inset-0 rounded-[26px] bg-[radial-gradient(circle_at_30%_20%,rgba(0,173,238,0.13),transparent_55%)]" />
            <div className="absolute inset-0 rounded-[26px] bg-[radial-gradient(circle_at_70%_75%,rgba(2,12,102,0.12),transparent_52%)]" />

            <div className="relative z-10 flex h-full items-center justify-center">
              <div className="relative flex h-[220px] w-[220px] items-center justify-center rounded-full border border-[#00ADEE]/30 bg-white text-center shadow-[0_10px_35px_-20px_rgba(2,12,102,0.45)]">
                <p className="max-w-[130px] text-sm font-semibold text-[#020c66]">Partner + Intelecto</p>
              </div>

              <div className="absolute left-8 top-7 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-[#1e1e1e] shadow-sm">
                Mas alcance
              </div>
              <div className="absolute right-6 top-16 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-[#1e1e1e] shadow-sm">
                Mas capacidad
              </div>
              <div className="absolute left-12 bottom-10 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-[#1e1e1e] shadow-sm">
                Menos riesgo
              </div>
              <div className="absolute right-8 bottom-6 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-[#1e1e1e] shadow-sm">
                Mejores propuestas
              </div>

              <div className="absolute left-[132px] top-[86px] h-[2px] w-16 -rotate-[23deg] bg-[#00ADEE]/45" />
              <div className="absolute right-[126px] top-[106px] h-[2px] w-16 rotate-[20deg] bg-[#00ADEE]/45" />
              <div className="absolute left-[148px] bottom-[86px] h-[2px] w-14 rotate-[25deg] bg-[#00ADEE]/45" />
              <div className="absolute right-[130px] bottom-[82px] h-[2px] w-16 -rotate-[17deg] bg-[#00ADEE]/45" />
            </div>
          </motion.div>

          <motion.ul
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="space-y-4"
          >
            {benefitsList.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4 text-slate-700 shadow-[0_10px_28px_-20px_rgba(2,12,102,0.35)]"
              >
                <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-[#00ADEE]" />
                <span>{item}</span>
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
