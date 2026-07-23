import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageCircle, CheckCircle2 } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const solutionOptions = [
  "Inteligencia Artificial",
  "Automatización de Procesos",
  "Desarrollo de Software",
  "Soluciones Microsoft",
  "Datos y Analítica",
  "CRM y Dynamics 365",
  "Testing y Calidad",
  "Otro",
];

const contactInfo = [
  { icon: Mail, label: "Email", value: "contacto@intelecto.co" },
  { icon: Phone, label: "Teléfono", value: "+57 (314) 794-3431" },
  { icon: MapPin, label: "Ubicación", value: "Cali, Colombia" },
];

const reasons = [
  "Respuesta en menos de 24 horas",
  "Consultoría inicial gratuita",
  "Propuesta personalizada",
  "Sin compromisos iniciales",
];

export function ContactSection() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    (e.target as HTMLFormElement).reset();
    setTimeout(() => setSent(false), 5000);
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-[#1e1e1e] placeholder:text-slate-400 focus:outline-none focus:border-[#00ADEE] focus:ring-2 focus:ring-[#00ADEE]/20 transition";

  return (
    <section id="contacto" className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          icon={MessageCircle}
          tag="Contáctanos"
          title="Comencemos tu próximo proyecto"
          gradientText="próximo proyecto"
          description="Estamos listos para ayudarte a transformar tu visión en realidad. Cuéntanos sobre tu proyecto."
        />

        <div className="mt-16 grid lg:grid-cols-2 gap-8 lg:gap-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            {contactInfo.map((c) => (
              <div
                key={c.label}
                className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-slate-100 shadow-[0_10px_30px_-15px_rgba(2,12,102,0.15)]"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-md"
                  style={{ background: "linear-gradient(135deg,#00ADEE,#020c66)" }}
                >
                  <c.icon size={22} />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wide text-slate-500">{c.label}</div>
                  <div className="font-semibold text-[#020c66]">{c.value}</div>
                </div>
              </div>
            ))}

            <div
              className="p-6 rounded-2xl text-white shadow-lg"
              style={{ background: "linear-gradient(135deg,#00ADEE,#020c66)" }}
            >
              <h3 className="font-bold text-lg">¿Por qué elegirnos?</h3>
              <ul className="mt-3 space-y-2">
                {reasons.map((r) => (
                  <li key={r} className="flex gap-2 text-white/95 text-sm">
                    <CheckCircle2 size={18} className="shrink-0" />
                    {r}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-100 text-center shadow-sm">
              <div
                className="text-3xl font-bold bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(90deg,#00ADEE,#020c66)" }}
              >
                98% de clientes satisfechos
              </div>
              <p className="mt-1 text-sm text-slate-600">
                Más de 500 empresas confían en nosotros
              </p>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            onSubmit={onSubmit}
            className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-100 shadow-[0_20px_50px_-20px_rgba(2,12,102,0.2)] space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-[#1e1e1e] mb-1.5">Nombre completo *</label>
                <input required name="name" placeholder="Tu nombre" className={inputClass} />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#1e1e1e] mb-1.5">Email *</label>
                <input required type="email" name="email" placeholder="tu@email.com" className={inputClass} />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-[#1e1e1e] mb-1.5">Teléfono</label>
                <input name="phone" placeholder="+57 (314) 000-0000" className={inputClass} />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#1e1e1e] mb-1.5">Empresa</label>
                <input name="company" placeholder="Nombre de tu empresa" className={inputClass} />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-[#1e1e1e] mb-1.5">¿Qué solución necesitas?</label>
              <select name="solution" defaultValue="" className={inputClass}>
                <option value="" disabled>Selecciona una opción</option>
                {solutionOptions.map((o) => (
                  <option key={o} value={o}>{o}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-[#1e1e1e] mb-1.5">Mensaje *</label>
              <textarea required name="message" rows={4} placeholder="Cuéntanos sobre tu proyecto..." className={inputClass} />
            </div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white shadow-lg hover:scale-[1.01] transition-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00ADEE]"
              style={{ background: "linear-gradient(135deg,#00ADEE,#020c66)" }}
            >
              {sent ? "¡Mensaje enviado!" : "Enviar mensaje"}
              <Send size={18} />
            </button>
            <p className="text-xs text-slate-500 text-center">
              Al enviar este formulario, aceptas nuestra política de privacidad
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}