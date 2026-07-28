import { motion } from "framer-motion";
import { Award, BadgeCheck, ExternalLink, ShieldCheck } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

export type Certification = {
  name: string;
  category: string;
  description: string;
  logo?: string;
  year?: string;
  verificationUrl?: string;
};

const certifications: Certification[] = [
  {
    name: "Microsoft Solutions Partner",
    category: "Modern Work",
    description:
      "Reconocimiento de Microsoft que respalda nuestra capacidad para implementar soluciones modernas de productividad, colaboración y transformación digital.",
    year: "2024",
  },
  {
    name: "Microsoft ISV",
    category: "Independent Software Vendor",
    description:
      "Bajo el modelo ISV, desarrollamos soluciones y productos propios que se integran con el ecosistema Microsoft y fortalecen la propuesta empresarial.",
    year: "2024",
  },
  {
    name: "Certificaciones Microsoft del equipo",
    category: "Azure, Power Platform, Microsoft 365, Dynamics 365, Copilot, ISTQB",
    description:
      "Nuestro talento cuenta con certificaciones especializadas en nube, automatización, productividad, CRM, IA generativa y aseguramiento de calidad.",
    year: "Varios",
  },
];

const highlights = ["Modern Work", "ISV", "Azure", "Power Platform", "Microsoft 365", "Dynamics 365", "Copilot", "ISTQB"];

export function CertificationsSection() {
  return (
    <section
      id="certificaciones"
      className="py-20 lg:py-28"
      style={{ background: "linear-gradient(180deg,#ffffff,#f4f7fb)" }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          icon={BadgeCheck}
          tag="Certificaciones y respaldo"
          title="Experiencia respaldada por estándares de calidad"
          gradientText="estándares de calidad"
          description="Nuestro conocimiento, experiencia y compromiso con la calidad están respaldados por certificaciones, metodologías y buenas prácticas reconocidas en la industria tecnológica."
        />

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((c, i) => (
            <motion.article
              key={c.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="p-6 rounded-2xl bg-white border border-slate-100 shadow-[0_10px_30px_-15px_rgba(2,12,102,0.15)] hover:shadow-[0_20px_40px_-15px_rgba(2,12,102,0.25)] hover:-translate-y-1 transition-all flex flex-col"
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center text-white shadow-md"
                style={{ background: "linear-gradient(135deg,#00ADEE,#020c66)" }}
              >
                {c.logo ? (
                  <img src={c.logo} alt={`Logo ${c.name}`} className="w-9 h-9 object-contain" />
                ) : (
                  <ShieldCheck size={26} />
                )}
              </div>
              <h3 className="mt-4 text-lg font-bold text-[#020c66]">{c.name}</h3>
              <div className="text-xs uppercase tracking-wide text-[#00ADEE] font-semibold mt-1">
                {c.category}
              </div>
              <p className="mt-3 text-sm text-slate-600 flex-1">{c.description}</p>
              {c.verificationUrl && (
                <a
                  href={c.verificationUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#00ADEE] hover:text-[#020c66]"
                >
                  Conocer más <ExternalLink size={14} />
                </a>
              )}
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mt-14 p-8 lg:p-10 rounded-3xl text-white shadow-2xl"
          style={{
            background: "linear-gradient(135deg,#00ADEE 0%,#020c66 100%)",
            boxShadow: "0 30px 60px -20px rgba(2,12,102,0.4)",
          }}
        >
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-10">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/15 border border-white/25 text-xs font-medium">
                <Award size={14} />
                Talento especializado
              </div>
              <h3 className="mt-4 text-2xl lg:text-3xl font-bold">
                Talento especializado para proyectos de alto impacto
              </h3>
              <p className="mt-3 text-white/90 max-w-2xl">
                Contamos con profesionales con experiencia en desarrollo de
                software, tecnologías Microsoft, nube, datos, automatización,
                calidad y transformación digital.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {highlights.map((h) => (
                <span
                  key={h}
                  className="px-3 py-1.5 rounded-full bg-white/15 border border-white/25 text-sm font-medium"
                >
                  {h}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}