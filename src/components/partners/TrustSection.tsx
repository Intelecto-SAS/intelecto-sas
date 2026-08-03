import { motion, useReducedMotion } from "framer-motion";
import { Scale, ShieldCheck, UserRoundCheck, Waypoints, type LucideIcon } from "lucide-react";

type TrustItem = {
  icon: LucideIcon;
  text: string;
};

const trustItems: TrustItem[] = [
  { icon: ShieldCheck, text: "Confidencialidad" },
  { icon: UserRoundCheck, text: "Respeto por el cliente" },
  { icon: Scale, text: "Reglas claras" },
  { icon: Waypoints, text: "Responsabilidades definidas" },
];

export function TrustSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className="rounded-[28px] border border-[#0c1a76] p-8 text-white sm:p-10 lg:p-12"
          style={{ background: "linear-gradient(145deg, #020c66 0%, #001958 55%, #002a7a 100%)" }}
        >
          <motion.h2
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-90px" }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl text-3xl font-bold leading-tight sm:text-4xl"
          >
            Tu relacion comercial se mantiene. Tu oferta se fortalece.
          </motion.h2>

          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-90px" }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="mt-5 max-w-3xl text-white/85"
          >
            Nos integramos como una extension de tu equipo, respetando la propiedad de la
            oportunidad, la relacion con el cliente y los acuerdos definidos entre las partes.
          </motion.p>

          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {trustItems.map((item, index) => (
              <motion.div
                key={item.text}
                initial={reduceMotion ? false : { opacity: 0, y: 14 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-70px" }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur"
              >
                <div className="flex items-center gap-3">
                  <item.icon size={18} className="text-[#9de9ff]" />
                  <span className="text-sm font-medium sm:text-base">{item.text}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
