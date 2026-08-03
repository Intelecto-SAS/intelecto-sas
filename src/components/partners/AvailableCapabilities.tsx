import { motion, useReducedMotion } from "framer-motion";
import {
    Bot,
    BrainCircuit,
    ChartColumnBig,
    CircuitBoard,
    Database,
    FileCheck2,
    Globe,
    Layers3,
    Link2,
    MonitorCog,
    ShieldCheck,
    Sparkles,
    WandSparkles,
    type LucideIcon,
} from "lucide-react";

type CapabilityChip = {
  text: string;
  icon: LucideIcon;
};

const capabilityChips: CapabilityChip[] = [
  { text: "Inteligencia artificial", icon: Sparkles },
  { text: "Agentes empresariales", icon: Bot },
  { text: "Desarrollo de software", icon: Globe },
  { text: "Microsoft 365", icon: MonitorCog },
  { text: "Power Platform", icon: WandSparkles },
  { text: "Dynamics 365", icon: CircuitBoard },
  { text: "SharePoint", icon: Layers3 },
  { text: "Automatizacion", icon: BrainCircuit },
  { text: "Datos y analitica", icon: Database },
  { text: "Inteligencia de negocio", icon: ChartColumnBig },
  { text: "Pruebas de software", icon: FileCheck2 },
  { text: "Integracion de sistemas", icon: Link2 },
  { text: "Soporte y mantenimiento", icon: ShieldCheck },
  { text: "Licenciamiento", icon: MonitorCog },
  { text: "Soluciones propias", icon: Sparkles },
];

export function AvailableCapabilities() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-[#1e1e1e] sm:text-4xl lg:text-5xl">
            Capacidades que puedes sumar a tu oferta
          </h2>
        </div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mt-12 flex flex-wrap justify-center gap-3"
        >
          {capabilityChips.map((chip) => (
            <span
              key={chip.text}
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-[#1e1e1e] shadow-[0_8px_24px_-18px_rgba(2,12,102,0.45)]"
            >
              <chip.icon size={15} className="text-[#00ADEE]" />
              {chip.text}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
