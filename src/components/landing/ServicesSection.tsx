import { motion } from "framer-motion";
import { Zap, ArrowRight } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { scrollToId } from "./nav";

const services = [
  {
    title: "Soluciones Low-Code",
    description:
      "Transformamos la experiencia digital de trabajo mediante herramientas colaborativas, seguras y escalables dentro del ecosistema Microsoft.",
    tags: ["Microsoft 365", "Teams & SharePoint", "Gestión Documental", "Productividad Empresarial"],
    image:
      "https://images.unsplash.com/photo-1762341119237-98df67c9c3c9?auto=format&fit=crop&w=900&q=80",
    alt: "Aplicación móvil low-code en un smartphone",
  },
  {
    title: "Aplicaciones empresariales",
    description:
      "Centralizamos y automatizamos procesos comerciales y operativos mediante soluciones empresariales conectadas y orientadas a resultados.",
    tags: ["Dynamics 365", "CRM & Ventas", "Customer Insights", "Automatización Comercial"],
    image:
      "https://images.unsplash.com/photo-1667984390553-7f439e6ae401?auto=format&fit=crop&w=900&q=80",
    alt: "Infraestructura cloud empresarial",
  },
  {
    title: "Datos e inteligencia de negocio",
    description:
      "Convertimos los datos en información accionable a través de dashboards ejecutivos, analítica avanzada y ecosistemas modernos de datos.",
    tags: ["Microsoft Fabric", "Power BI", "Dashboards Ejecutivos", "Analítica Empresarial"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
    alt: "Dashboards con analítica de datos",
  },
  {
    title: "Nuestros productos",
    description:
      "Desarrollamos soluciones empresariales enfocadas en seguridad, automatización y autogestión para optimizar la operación y reducir la carga operativa.",
    tags: ["AdSecurity", "Legal Hub", "Bots de Autogestión", "Automatización de Tareas"],
    image:
      "https://images.unsplash.com/photo-1768224656445-33d078c250b7?auto=format&fit=crop&w=900&q=80",
    alt: "Red de ciberseguridad",
  },
  {
    title: "Desarrollo a medida",
    description:
      "Construimos software a la medida con las mejores prácticas de ingeniería para responder a los retos específicos de cada negocio.",
    tags: ["Web", "APIs", "Cloud Native", "DevOps"],
    image:
      "https://images.unsplash.com/photo-1637937459053-c788742455be?auto=format&fit=crop&w=900&q=80",
    alt: "Código en pantalla de desarrollador",
  },
  {
    title: "Testing",
    description:
      "Garantizamos la calidad, estabilidad y rendimiento de las soluciones tecnológicas mediante procesos especializados de validación y aseguramiento.",
    tags: ["QA Funcional", "Testing Automatizado", "Validación de Rendimiento", "Control de Calidad"],
    image:
      "https://images.unsplash.com/photo-1760611656007-f767a8082758?auto=format&fit=crop&w=900&q=80",
    alt: "Equipo trabajando en pruebas de software",
  },
];

export function ServicesSection() {
  return (
    <section id="servicios" className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          icon={Zap}
          tag="Nuestros Servicios"
          title="Soluciones tecnológicas integrales"
          gradientText="integrales"
          description="Ofrecemos un portafolio completo de servicios de desarrollo de software para impulsar la transformación digital de tu empresa."
        />

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="group rounded-2xl overflow-hidden bg-white border border-slate-100 shadow-[0_10px_30px_-15px_rgba(2,12,102,0.15)] hover:shadow-[0_20px_40px_-15px_rgba(2,12,102,0.25)] hover:-translate-y-1 transition-all"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={s.image}
                  alt={s.alt}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020c66]/40 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#020c66]">{s.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{s.description}</p>
                <ul className="mt-4 space-y-1.5">
                  {s.tags.map((t) => (
                    <li key={t} className="text-sm text-slate-700 flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#00ADEE] shrink-0" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 max-w-3xl mx-auto text-center p-8 rounded-2xl bg-slate-50 border border-slate-100"
        >
          <h3 className="text-xl font-bold text-[#020c66]">
            ¿No encuentras lo que buscas?
          </h3>
          <p className="mt-2 text-slate-600">
            Contamos con soluciones personalizadas para cada necesidad
          </p>
          <button
            onClick={() => scrollToId("contacto")}
            className="mt-5 inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white shadow-lg hover:scale-[1.02] transition-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00ADEE]"
            style={{ background: "linear-gradient(135deg,#00ADEE,#020c66)" }}
          >
            Consultar proyecto personalizado
            <ArrowRight size={18} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}