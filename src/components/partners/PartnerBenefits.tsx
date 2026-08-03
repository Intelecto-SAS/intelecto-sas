import { motion, useReducedMotion } from "framer-motion";
import {
    Check,
    CheckCircle2,
} from "lucide-react";

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
            className="relative mx-auto w-full max-w-[620px] overflow-hidden rounded-[26px] border border-[#00ADEE]/20 bg-[linear-gradient(145deg,rgba(0,173,238,0.07),rgba(2,12,102,0.05))] p-6 shadow-[0_18px_45px_-26px_rgba(2,12,102,0.3)] sm:p-8 xl:max-w-[760px]"
            aria-label="Grafica abstracta de convergencia y expansion"
            role="img"
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_24%,rgba(0,173,238,0.16),transparent_48%)]" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_76%,rgba(2,12,102,0.12),transparent_48%)]" />

            <div className="relative h-[220px] sm:h-[260px] lg:h-[300px]">
              <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" fill="none" aria-hidden="true">
                <motion.path
                  d="M50 50 Q 66 36 80 28"
                  stroke="url(#growthGradient)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  initial={{ pathLength: reduceMotion ? 1 : 0, opacity: reduceMotion ? 0.75 : 0.15 }}
                  animate={{ pathLength: 1, opacity: [0.15, 0.9, 0.35] }}
                  transition={{ duration: 3.6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.4 }}
                />
                <motion.path
                  d="M50 50 Q 74 48 90 50"
                  stroke="url(#growthGradient)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  initial={{ pathLength: reduceMotion ? 1 : 0, opacity: reduceMotion ? 0.75 : 0.15 }}
                  animate={{ pathLength: 1, opacity: [0.15, 0.9, 0.35] }}
                  transition={{ duration: 3.6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.9 }}
                />
                <motion.path
                  d="M50 50 Q 66 64 80 72"
                  stroke="url(#growthGradient)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  initial={{ pathLength: reduceMotion ? 1 : 0, opacity: reduceMotion ? 0.75 : 0.15 }}
                  animate={{ pathLength: 1, opacity: [0.15, 0.9, 0.35] }}
                  transition={{ duration: 3.6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1.4 }}
                />
                <motion.path
                  className="hidden sm:block"
                  d="M50 50 Q 56 74 60 88"
                  stroke="url(#growthGradient)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  initial={{ pathLength: reduceMotion ? 1 : 0, opacity: reduceMotion ? 0.75 : 0.15 }}
                  animate={{ pathLength: 1, opacity: [0.15, 0.9, 0.35] }}
                  transition={{ duration: 3.6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1.9 }}
                />

                <defs>
                  <linearGradient id="growthGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00ADEE" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#020c66" stopOpacity="0.95" />
                  </linearGradient>
                </defs>
              </svg>

              {!reduceMotion && (
                <>
                  <motion.span
                    className="absolute left-[18%] top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-[#00ADEE]/85"
                    animate={{ x: [0, 110, 190], opacity: [0, 1, 0] }}
                    transition={{ duration: 4.4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                  />
                  <motion.span
                    className="absolute right-[18%] top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-[#020c66]/85"
                    animate={{ x: [0, -110, -190], opacity: [0, 1, 0] }}
                    transition={{ duration: 4.4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.6 }}
                  />
                </>
              )}

              <motion.div
                className="absolute left-[12%] top-1/2 h-6 w-6 -translate-y-1/2 rounded-full border border-[#00ADEE]/60 bg-[#00ADEE]/28"
                animate={reduceMotion ? { x: 0 } : { x: [0, 82, 118, 0] }}
                transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              />

              <motion.div
                className="absolute right-[12%] top-1/2 h-6 w-6 -translate-y-1/2 rounded-full border border-[#020c66]/60 bg-[#020c66]/24"
                animate={reduceMotion ? { x: 0 } : { x: [0, -82, -118, 0] }}
                transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.3 }}
              />

              <motion.div
                className="absolute left-1/2 top-1/2 h-14 w-14 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#00ADEE]/45 bg-[linear-gradient(135deg,rgba(0,173,238,0.32),rgba(2,12,102,0.35))]"
                animate={
                  reduceMotion
                    ? { scale: 1, opacity: 0.85 }
                    : { scale: [1, 1.16, 1], opacity: [0.75, 1, 0.75] }
                }
                transition={{ duration: 3.2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1.2 }}
              />

              <motion.span
                className="absolute left-[79%] top-[27%] h-2.5 w-2.5 rounded-full bg-[#00ADEE]/85"
                animate={{ opacity: [0.3, 1, 0.3], scale: [0.9, 1.18, 0.9] }}
                transition={{ duration: 3.2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.7 }}
              />
              <motion.span
                className="absolute left-[89%] top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-[#3db7eb]"
                animate={{ opacity: [0.3, 1, 0.3], scale: [0.9, 1.18, 0.9] }}
                transition={{ duration: 3.2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1.1 }}
              />
              <motion.span
                className="absolute left-[79%] top-[70%] h-2.5 w-2.5 rounded-full bg-[#020c66]/80"
                animate={{ opacity: [0.3, 1, 0.3], scale: [0.9, 1.18, 0.9] }}
                transition={{ duration: 3.2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1.5 }}
              />
              <motion.span
                className="absolute hidden sm:block left-[59%] top-[86%] h-2.5 w-2.5 rounded-full bg-[#00ADEE]/75"
                animate={{ opacity: [0.3, 1, 0.3], scale: [0.9, 1.18, 0.9] }}
                transition={{ duration: 3.2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1.9 }}
              />

              <motion.div
                className="absolute left-[78.6%] top-[24.6%] rounded-full border border-[#00ADEE]/25 bg-white/65 p-1 text-[#00ADEE]"
                animate={{ opacity: [0.35, 1, 0.35] }}
                transition={{ duration: 3.2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.8 }}
              >
                <Check size={10} />
              </motion.div>
              <motion.div
                className="absolute left-[88.6%] top-[47.2%] -translate-y-1/2 rounded-full border border-[#00ADEE]/25 bg-white/65 p-1 text-[#00ADEE]"
                animate={{ opacity: [0.35, 1, 0.35] }}
                transition={{ duration: 3.2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1.2 }}
              >
                <Check size={10} />
              </motion.div>
              <motion.div
                className="absolute left-[78.6%] top-[67.2%] rounded-full border border-[#00ADEE]/25 bg-white/65 p-1 text-[#00ADEE]"
                animate={{ opacity: [0.35, 1, 0.35] }}
                transition={{ duration: 3.2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1.6 }}
              >
                <Check size={10} />
              </motion.div>
              <motion.div
                className="absolute hidden sm:block left-[58.6%] top-[83.4%] rounded-full border border-[#00ADEE]/25 bg-white/65 p-1 text-[#00ADEE]"
                animate={{ opacity: [0.35, 1, 0.35] }}
                transition={{ duration: 3.2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 2 }}
              >
                <Check size={10} />
              </motion.div>
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
