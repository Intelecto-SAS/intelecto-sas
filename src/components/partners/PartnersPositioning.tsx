import { motion, useReducedMotion } from "framer-motion";
import { Network } from "lucide-react";

export function PartnersPositioning() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <motion.h2
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-90px" }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold leading-tight text-[#1e1e1e] sm:text-4xl lg:text-5xl"
        >
          No buscamos clientes. Construimos alianzas.
        </motion.h2>

        <motion.p
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-90px" }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="mx-auto mt-6 max-w-3xl text-lg text-slate-600"
        >
          Nos integramos a los equipos de nuestros partners, fortalecemos su oferta y aportamos
          las capacidades necesarias para asumir nuevos retos, ampliar el portafolio y competir en
          proyectos mas grandes.
        </motion.p>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-90px" }}
          transition={{ duration: 0.55, delay: 0.14 }}
          className="mx-auto mt-10 flex max-w-4xl items-start gap-4 rounded-3xl border border-[#00ADEE]/20 bg-[#f1faff] p-6 text-left shadow-[0_16px_36px_-24px_rgba(2,12,102,0.45)]"
        >
          <div
            className="mt-1 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-white"
            style={{ background: "linear-gradient(135deg,#00ADEE,#020c66)" }}
          >
            <Network size={20} />
          </div>
          <p className="text-[1rem] font-medium leading-relaxed text-[#1d2d58]">
            Podemos participar como aliado tecnologico, socio comercial, integrador, proveedor
            especializado o miembro de una union temporal.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
