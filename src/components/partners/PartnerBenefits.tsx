import { motion, useReducedMotion } from "framer-motion";
import {
    BadgeCheck,
    BrainCircuit,
    CheckCircle2,
    Code2,
    FileCheck2,
    Landmark,
    Layers3,
    Lightbulb,
    Rocket,
    UsersRound,
    Wrench,
    type LucideIcon
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

type FlowCard = {
  title: string;
  icon: LucideIcon;
  delay: number;
};

type CapabilityNode = {
  title: string;
  description: string;
  icon: LucideIcon;
  className: string;
  delay: number;
};

const incomingFlow: FlowCard[] = [
  { title: "Nueva oportunidad", icon: Lightbulb, delay: 0 },
  { title: "Proyecto de gran alcance", icon: Rocket, delay: 1.3 },
  { title: "Requisito especializado", icon: Wrench, delay: 2.6 },
  { title: "Licitacion", icon: Landmark, delay: 3.9 },
];

const capabilities: CapabilityNode[] = [
  {
    title: "Inteligencia artificial",
    description: "Modelos y automatizacion inteligente para ampliar la propuesta.",
    icon: BrainCircuit,
    className: "left-[36%] top-[12%]",
    delay: 0.4,
  },
  {
    title: "Desarrollo de software",
    description: "Construccion de soluciones web, moviles y empresariales a medida.",
    icon: Code2,
    className: "left-[57%] top-[22%]",
    delay: 0.9,
  },
  {
    title: "Equipo especializado",
    description: "Perfiles tecnicos y funcionales para escalar ejecucion.",
    icon: UsersRound,
    className: "left-[61%] top-[44%]",
    delay: 1.4,
  },
  {
    title: "Experiencia contractual",
    description: "Soporte en estructura contractual y seguimiento de compromisos.",
    icon: FileCheck2,
    className: "left-[58%] top-[66%]",
    delay: 1.9,
  },
  {
    title: "Licitaciones",
    description: "Acompanamiento en requisitos, subsanaciones y presentacion.",
    icon: Landmark,
    className: "left-[36%] top-[76%]",
    delay: 2.4,
  },
  {
    title: "Certificaciones",
    description: "Respaldo para fortalecer cumplimiento y confianza tecnica.",
    icon: BadgeCheck,
    className: "left-[16%] top-[66%]",
    delay: 2.9,
  },
  {
    title: "Capacidad operativa",
    description: "Entrega coordinada con equipos y bolsa de horas segun demanda.",
    icon: Layers3,
    className: "left-[13%] top-[43%]",
    delay: 3.4,
  },
];

const outcomes: FlowCard[] = [
  { title: "Mas alcance", icon: CheckCircle2, delay: 2.4 },
  { title: "Mejores propuestas", icon: CheckCircle2, delay: 2.9 },
  { title: "Menos riesgo", icon: CheckCircle2, delay: 3.4 },
  { title: "Mayor capacidad de ejecucion", icon: CheckCircle2, delay: 3.9 },
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
            className="relative mx-auto w-full max-w-[620px] overflow-hidden rounded-[26px] border border-[#113487] bg-[#03114e] p-6 shadow-[0_20px_55px_-24px_rgba(2,12,102,0.55)] sm:p-8 xl:max-w-[760px] 2xl:max-w-[860px]"
            aria-label="Simulacion de flujo de alianza entre partner e Intelecto"
            role="img"
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(0,173,238,0.22),transparent_40%)]" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_82%_72%,rgba(57,107,255,0.20),transparent_44%)]" />

            <div className="relative hidden h-[470px] lg:block xl:h-[555px] 2xl:h-[640px]">
              <div className="absolute left-1/2 top-0 h-[470px] w-[620px] -translate-x-1/2 origin-top xl:scale-[1.18] 2xl:scale-[1.36]">
              <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 620 470" fill="none" aria-hidden="true">
                <path
                  d="M94 92 C 190 108, 214 176, 292 222"
                  className="partners-flow-line"
                  strokeWidth="2.4"
                />
                <path
                  d="M90 158 C 184 164, 208 202, 292 230"
                  className="partners-flow-line"
                  strokeWidth="2.4"
                  style={{ animationDelay: "0.8s" }}
                />
                <path
                  d="M94 226 C 190 238, 220 248, 292 242"
                  className="partners-flow-line"
                  strokeWidth="2.4"
                  style={{ animationDelay: "1.6s" }}
                />
                <path
                  d="M94 294 C 184 292, 214 274, 292 250"
                  className="partners-flow-line"
                  strokeWidth="2.4"
                  style={{ animationDelay: "2.4s" }}
                />
                <path
                  d="M332 236 C 404 228, 454 182, 540 150"
                  className="partners-flow-line"
                  strokeWidth="2.4"
                  style={{ animationDelay: "3s" }}
                />
                <path
                  d="M332 240 C 412 248, 462 230, 544 218"
                  className="partners-flow-line"
                  strokeWidth="2.4"
                  style={{ animationDelay: "3.4s" }}
                />
                <path
                  d="M332 246 C 404 270, 454 286, 540 294"
                  className="partners-flow-line"
                  strokeWidth="2.4"
                  style={{ animationDelay: "3.8s" }}
                />
              </svg>

              {!reduceMotion && (
                <>
                  <span className="partners-particle absolute left-[138px] top-[103px]" />
                  <span className="partners-particle absolute left-[142px] top-[168px]" style={{ animationDelay: "1.1s" }} />
                  <span className="partners-particle absolute left-[148px] top-[233px]" style={{ animationDelay: "2.2s" }} />
                  <span className="partners-particle absolute left-[142px] top-[298px]" style={{ animationDelay: "3.3s" }} />
                </>
              )}

              <div className="absolute left-2 top-8 flex w-[190px] flex-col gap-3">
                {incomingFlow.map((item) => (
                  <motion.div
                    key={item.title}
                    animate={
                      reduceMotion
                        ? { x: 0, opacity: 1 }
                        : { x: [0, 24, 44], opacity: [0.45, 1, 0.55] }
                    }
                    transition={
                      reduceMotion
                        ? { duration: 0.2 }
                        : {
                            duration: 4.8,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "easeInOut",
                            delay: item.delay,
                          }
                    }
                    className="rounded-xl border border-white/20 bg-white/12 px-3 py-2 text-xs text-white/90 shadow-[0_12px_24px_-20px_rgba(0,173,238,0.7)] backdrop-blur"
                  >
                    <div className="flex items-center gap-2">
                      <item.icon size={14} className="text-[#8ce7ff]" />
                      <span>{item.title}</span>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                animate={
                  reduceMotion
                    ? { scale: 1, boxShadow: "0 14px 45px -30px rgba(0,173,238,0.65)" }
                    : {
                        scale: [1, 1.04, 1],
                        boxShadow: [
                          "0 12px 36px -28px rgba(0,173,238,0.4)",
                          "0 0 0 8px rgba(0,173,238,0.14), 0 18px 52px -24px rgba(0,173,238,0.65)",
                          "0 12px 36px -28px rgba(0,173,238,0.4)",
                        ],
                      }
                }
                transition={
                  reduceMotion
                    ? { duration: 0.2 }
                    : { duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }
                }
                className="absolute left-1/2 top-1/2 z-20 flex h-[144px] w-[144px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#67dfff]/45 bg-[#072172]/85 px-4 text-center shadow-[0_20px_55px_-30px_rgba(0,173,238,0.75)]"
              >
                <p className="text-sm font-semibold text-white">Partner + Intelecto</p>
              </motion.div>

              {capabilities.map((capability) => (
                <motion.div
                  key={capability.title}
                  animate={
                    reduceMotion
                      ? { scale: 1, opacity: 1 }
                      : {
                          scale: [1, 1.08, 1],
                          opacity: [0.72, 1, 0.82],
                          boxShadow: [
                            "0 8px 24px -22px rgba(0,173,238,0.55)",
                            "0 14px 34px -20px rgba(0,173,238,0.75)",
                            "0 8px 24px -22px rgba(0,173,238,0.55)",
                          ],
                        }
                  }
                  transition={
                    reduceMotion
                      ? { duration: 0.2 }
                      : {
                          duration: 4.2,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "easeInOut",
                          delay: capability.delay,
                        }
                  }
                  className={`group absolute z-10 flex w-[132px] items-center gap-2 rounded-xl border border-white/20 bg-white/12 px-2.5 py-2 text-[11px] text-white backdrop-blur ${capability.className}`}
                >
                  <capability.icon size={14} className="shrink-0 text-[#8ce7ff]" />
                  <span className="leading-tight">{capability.title}</span>
                  <div className="pointer-events-none absolute -top-[52px] left-1/2 z-30 hidden w-[190px] -translate-x-1/2 rounded-lg border border-[#98ecff]/35 bg-[#03144b]/95 p-2 text-[11px] text-white/90 shadow-lg group-hover:block">
                    {capability.description}
                  </div>
                </motion.div>
              ))}

              <div className="absolute right-1 top-10 flex w-[188px] flex-col gap-3">
                {outcomes.map((outcome) => (
                  <motion.div
                    key={outcome.title}
                    animate={
                      reduceMotion
                        ? { x: 0, opacity: 1 }
                        : {
                            x: [-16, 0, 0, 6],
                            opacity: [0.25, 1, 1, 0.4],
                          }
                    }
                    transition={
                      reduceMotion
                        ? { duration: 0.2 }
                        : {
                            duration: 4.8,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "easeInOut",
                            delay: outcome.delay,
                          }
                    }
                    className="rounded-xl border border-[#9beeff]/30 bg-white/14 px-3 py-2 text-xs font-medium text-white/95 shadow-[0_12px_24px_-20px_rgba(0,173,238,0.7)] backdrop-blur"
                  >
                    <div className="flex items-center gap-2">
                      <outcome.icon size={14} className="text-[#7fe4ff]" />
                      <span>{outcome.title}</span>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="pointer-events-none absolute inset-x-8 bottom-3 h-px bg-gradient-to-r from-transparent via-[#7de5ff]/30 to-transparent" />
              </div>
            </div>

            <div className="relative block lg:hidden">
              <div className="mx-auto max-w-[340px] space-y-3">
                {incomingFlow.map((item) => (
                  <motion.div
                    key={item.title}
                    animate={
                      reduceMotion
                        ? { y: 0, opacity: 1 }
                        : { y: [0, 8, 0], opacity: [0.7, 1, 0.7] }
                    }
                    transition={
                      reduceMotion
                        ? { duration: 0.2 }
                        : {
                            duration: 3.8,
                            repeat: Number.POSITIVE_INFINITY,
                            delay: item.delay,
                            ease: "easeInOut",
                          }
                    }
                    className="rounded-xl border border-white/20 bg-white/12 px-3 py-2 text-xs text-white/90 backdrop-blur"
                  >
                    <div className="flex items-center gap-2">
                      <item.icon size={14} className="text-[#8ce7ff]" />
                      <span>{item.title}</span>
                    </div>
                  </motion.div>
                ))}

                <div className="mx-auto h-7 w-[2px] bg-gradient-to-b from-[#9cefff] to-[#2a67a6]" />

                <motion.div
                  animate={
                    reduceMotion
                      ? { scale: 1 }
                      : { scale: [1, 1.04, 1], boxShadow: [
                          "0 10px 26px -18px rgba(0,173,238,0.55)",
                          "0 0 0 7px rgba(0,173,238,0.12), 0 16px 40px -18px rgba(0,173,238,0.75)",
                          "0 10px 26px -18px rgba(0,173,238,0.55)",
                        ] }
                  }
                  transition={
                    reduceMotion
                      ? { duration: 0.2 }
                      : { duration: 4.8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }
                  }
                  className="mx-auto flex h-[124px] w-[124px] items-center justify-center rounded-full border border-[#67dfff]/45 bg-[#072172]/85 px-4 text-center"
                >
                  <p className="text-xs font-semibold text-white">Partner + Intelecto</p>
                </motion.div>

                <div className="grid grid-cols-2 gap-2 pt-2">
                  {capabilities.map((capability) => (
                    <div
                      key={capability.title}
                      className="rounded-lg border border-white/20 bg-white/12 px-2 py-2 text-[10px] text-white/90 backdrop-blur"
                      title={capability.description}
                    >
                      <div className="flex items-start gap-1.5">
                        <capability.icon size={13} className="mt-0.5 shrink-0 text-[#8ce7ff]" />
                        <span>{capability.title}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mx-auto h-7 w-[2px] bg-gradient-to-b from-[#9cefff] to-[#2a67a6]" />

                <div className="grid grid-cols-2 gap-2">
                  {outcomes.map((outcome) => (
                    <motion.div
                      key={outcome.title}
                      animate={
                        reduceMotion
                          ? { opacity: 1 }
                          : { opacity: [0.42, 1, 0.8] }
                      }
                      transition={
                        reduceMotion
                          ? { duration: 0.2 }
                          : {
                              duration: 3.8,
                              repeat: Number.POSITIVE_INFINITY,
                              delay: outcome.delay,
                              ease: "easeInOut",
                            }
                      }
                      className="rounded-xl border border-[#9beeff]/30 bg-white/14 px-3 py-2 text-[11px] font-medium text-white/95 backdrop-blur"
                    >
                      <div className="flex items-center gap-2">
                        <CheckCircle2 size={13} className="text-[#7fe4ff]" />
                        <span>{outcome.title}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
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
