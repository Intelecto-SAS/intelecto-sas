import { Button } from "@/components/ui/button";
import { motion, useReducedMotion } from "framer-motion";
import { BrainCircuit, Code2, FileCheck2, Handshake, Users } from "lucide-react";
import { scrollToSection } from "./scroll";

const relatedCards = [
  {
    icon: BrainCircuit,
    text: "Inteligencia artificial",
    className: "top-2 left-4 sm:left-8",
    delay: "0s",
  },
  {
    icon: Code2,
    text: "Desarrollo de software",
    className: "top-20 right-0 sm:right-4",
    delay: "1.2s",
  },
  {
    icon: FileCheck2,
    text: "Contratos y licitaciones",
    className: "bottom-20 left-2 sm:left-6",
    delay: "2.2s",
  },
  {
    icon: Users,
    text: "Equipos especializados",
    className: "bottom-2 right-4 sm:right-8",
    delay: "3s",
  },
] as const;

export function PartnersHero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="partners-inicio"
      className="relative overflow-hidden pt-28 pb-20 lg:pt-32 lg:pb-24"
      style={{
        background: "linear-gradient(135deg, #ffffff 0%, #ecf8ff 44%, #f6faff 100%)",
      }}
    >
      <div className="pointer-events-none absolute inset-0 opacity-45">
        <div
          className="absolute -top-32 -right-20 h-[380px] w-[380px] rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, #00ADEE44, transparent 72%)" }}
        />
        <div
          className="absolute -bottom-32 -left-20 h-[420px] w-[420px] rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, #020c6628, transparent 72%)" }}
        />
      </div>

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="max-w-xl"
        >
          <p className="mb-6 inline-flex items-center rounded-full border border-[#00ADEE]/25 bg-[#00ADEE]/10 px-4 py-2 text-sm font-medium text-[#020c66]">
            Alianzas que generan nuevas oportunidades
          </p>

          <h1 className="text-4xl font-bold leading-tight text-[#1e1e1e] sm:text-5xl lg:text-6xl">
            Juntos podemos llegar mas lejos
          </h1>

          <p className="mt-6 text-lg text-slate-650 text-slate-600">
            Complementamos las capacidades de nuestros partners para construir soluciones mas
            completas, participar en proyectos de mayor alcance y generar nuevas oportunidades de
            negocio.
          </p>

          <p className="mt-4 max-w-lg text-base text-slate-600">
            Aportamos experiencia tecnica, comercial y contractual para convertir alianzas en
            resultados.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Button
              onClick={() => scrollToSection("contacto")}
              className="h-11 rounded-xl bg-[#020c66] px-6 text-white shadow-[0_10px_28px_-14px_rgba(2,12,102,0.6)] hover:bg-[#03158a]"
            >
              Quiero ser partner
            </Button>
            <Button
              variant="outline"
              onClick={() => scrollToSection("capacidades-partners")}
              className="h-11 rounded-xl border-slate-300 bg-white/80 px-6 text-[#020c66] hover:border-[#00ADEE] hover:bg-[#f3fbff]"
            >
              Conocer nuestras capacidades
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.12 }}
          className="relative mx-auto w-full max-w-[540px]"
          role="img"
          aria-label="Diagrama de alianza empresarial con capacidades conectadas"
        >
          <div className="relative h-[430px] sm:h-[470px]">
            <div className="partners-connector absolute left-[24%] top-[25%] h-[2px] w-[26%]" />
            <div className="partners-connector absolute right-[18%] top-[37%] h-[2px] w-[24%]" />
            <div className="partners-connector absolute left-[20%] bottom-[31%] h-[2px] w-[30%]" />
            <div className="partners-connector absolute right-[22%] bottom-[25%] h-[2px] w-[23%]" />

            <div
              className="absolute left-1/2 top-1/2 z-20 w-[230px] -translate-x-1/2 -translate-y-1/2 rounded-[22px] border border-white/50 bg-white/75 p-6 shadow-[0_24px_60px_-30px_rgba(2,12,102,0.5)] backdrop-blur"
              style={{
                boxShadow:
                  "0 24px 60px -30px rgba(2, 12, 102, 0.5), 0 0 0 1px rgba(255,255,255,0.35)",
              }}
            >
              <div
                className="pointer-events-none absolute inset-0 -z-10 rounded-[22px]"
                style={{
                  background:
                    "radial-gradient(circle at center, rgba(0,173,238,0.22), rgba(2,12,102,0.12) 50%, transparent 72%)",
                  filter: "blur(18px)",
                }}
              />
              <div
                className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl text-white"
                style={{ background: "linear-gradient(135deg,#00ADEE,#020c66)" }}
              >
                <Handshake size={24} />
              </div>
              <p className="text-lg font-semibold text-[#020c66]">Alianza estrategica</p>
            </div>

            {relatedCards.map((card) => (
              <div
                key={card.text}
                className={`partners-float absolute z-10 w-[220px] rounded-[20px] border border-white/45 bg-white/70 p-4 shadow-[0_16px_42px_-24px_rgba(2,12,102,0.55)] backdrop-blur ${card.className}`}
                style={{ animationDelay: card.delay }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-white"
                    style={{ background: "linear-gradient(135deg,#00ADEE,#020c66)" }}
                  >
                    <card.icon size={18} />
                  </div>
                  <p className="text-sm font-medium text-[#1e1e1e]">{card.text}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
