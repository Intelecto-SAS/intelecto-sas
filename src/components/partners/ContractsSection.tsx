import { motion, useReducedMotion } from "framer-motion";
import {
    BadgeCheck,
    ChartNoAxesCombined,
    ClipboardCheck,
    FileStack,
    FolderCheck,
    Search,
    Send,
    type LucideIcon,
} from "lucide-react";

type ProcessStep = {
  icon: LucideIcon;
  title: string;
};

const process: ProcessStep[] = [
  { icon: Search, title: "Identificacion de oportunidades" },
  { icon: ClipboardCheck, title: "Analisis de requisitos" },
  { icon: FileStack, title: "Construccion de la propuesta" },
  { icon: FolderCheck, title: "Validacion documental" },
  { icon: Send, title: "Presentacion y subsanacion" },
  { icon: ChartNoAxesCombined, title: "Ejecucion contractual" },
];

export function ContractsSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className="rounded-[28px] border border-[#dbe9ff] p-7 sm:p-10 lg:p-12"
          style={{
            background:
              "linear-gradient(140deg, rgba(2,12,102,0.05) 0%, rgba(0,173,238,0.13) 45%, rgba(255,255,255,0.94) 100%)",
          }}
        >
          <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14">
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.52 }}
            >
              <p className="inline-flex rounded-full border border-[#00ADEE]/30 bg-white/70 px-4 py-2 text-sm font-medium text-[#020c66]">
                Experiencia que respalda cada oportunidad
              </p>
              <h2 className="mt-6 text-3xl font-bold leading-tight text-[#1e1e1e] sm:text-4xl lg:text-5xl">
                Preparados para competir. Preparados para ejecutar.
              </h2>
              <p className="mt-6 max-w-2xl text-lg text-slate-600">
                Sabemos que una buena solucion no es suficiente. Tambien se necesita experiencia,
                documentacion, capacidad tecnica, respaldo operativo y conocimiento contractual.
              </p>
              <p className="mt-4 max-w-2xl text-base text-slate-600">
                Acompanamos a nuestros partners desde la identificacion de la oportunidad hasta la
                ejecucion y el seguimiento del contrato.
              </p>

              <div className="mt-8 flex items-center gap-4 rounded-2xl border border-[#00ADEE]/25 bg-white/80 p-5 shadow-[0_16px_34px_-20px_rgba(2,12,102,0.35)] backdrop-blur">
                <div
                  className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-white"
                  style={{ background: "linear-gradient(135deg,#00ADEE,#020c66)" }}
                >
                  <BadgeCheck size={20} />
                </div>
                <p className="text-sm font-semibold text-[#1d2d58] sm:text-base">
                  Experiencia en procesos publicos y privados
                </p>
              </div>
            </motion.div>

            <ol className="relative ml-0 space-y-4 sm:ml-2">
              {process.map((step, index) => (
                <motion.li
                  key={step.title}
                  initial={reduceMotion ? false : { opacity: 0, x: 18 }}
                  whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-70px" }}
                  transition={{ duration: 0.45, delay: index * 0.05 }}
                  className="relative rounded-2xl border border-white/65 bg-white/85 p-4 shadow-[0_8px_26px_-18px_rgba(2,12,102,0.45)]"
                >
                  {index < process.length - 1 && (
                    <span className="absolute left-8 top-[70px] h-8 w-[2px] bg-gradient-to-b from-[#00ADEE] to-[#020c66]/30" />
                  )}
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#00ADEE]/30 bg-[#00ADEE]/10 text-sm font-semibold text-[#020c66]">
                      {index + 1}
                    </span>
                    <div
                      className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-white"
                      style={{ background: "linear-gradient(135deg,#00ADEE,#020c66)" }}
                    >
                      <step.icon size={18} />
                    </div>
                    <h3 className="text-sm font-semibold text-[#1e1e1e] sm:text-base">{step.title}</h3>
                  </div>
                </motion.li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
