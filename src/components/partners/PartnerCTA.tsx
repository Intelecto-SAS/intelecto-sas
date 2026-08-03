import { Button } from "@/components/ui/button";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Handshake } from "lucide-react";
import { scrollToSection } from "./scroll";

export function PartnerCTA() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="rounded-[30px] border border-[#d4e8ff] p-8 text-center shadow-[0_24px_60px_-32px_rgba(2,12,102,0.45)] sm:p-10 lg:p-14"
          style={{
            background:
              "linear-gradient(150deg, rgba(2,12,102,0.06) 0%, rgba(0,173,238,0.14) 46%, rgba(255,255,255,1) 100%)",
          }}
        >
          <p className="inline-flex rounded-full border border-[#00ADEE]/25 bg-white/80 px-4 py-2 text-sm font-medium text-[#020c66]">
            La proxima oportunidad puede ser conjunta
          </p>

          <h2 className="mx-auto mt-6 max-w-3xl text-3xl font-bold text-[#1e1e1e] sm:text-4xl lg:text-5xl">
            Construyamos algo mas grande juntos
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-slate-600">
            Cuentanos que capacidades quieres fortalecer, que oportunidad estas explorando o que
            tipo de alianza estas buscando.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Button
              onClick={() => scrollToSection("contacto")}
              className="h-11 rounded-xl bg-[#020c66] px-6 text-white shadow-[0_10px_28px_-14px_rgba(2,12,102,0.6)] hover:bg-[#03158a]"
            >
              <Handshake size={18} />
              Quiero ser partner
            </Button>
            <Button
              variant="outline"
              onClick={() => scrollToSection("contacto")}
              className="h-11 rounded-xl border-slate-300 bg-white/85 px-6 text-[#020c66] hover:border-[#00ADEE] hover:bg-[#f3fbff]"
            >
              <ArrowUpRight size={18} />
              Hablemos de una oportunidad
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
