import { motion } from "framer-motion";
import { Award, CheckCircle2, Heart, Lightbulb, Target, TrendingUp, Users } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const values = [
  { icon: Target, title: "Excelencia", text: "Comprometidos con la calidad en cada línea de código" },
  { icon: Heart, title: "Pasión", text: "Amamos lo que hacemos y se refleja en nuestro trabajo" },
  { icon: Lightbulb, title: "Innovación", text: "Siempre a la vanguardia de la tecnología" },
  { icon: Users, title: "Colaboración", text: "Tu éxito es nuestro éxito" },
];

export function AboutSection() {
  return (
    <section
      id="nosotros"
      className="py-20 lg:py-28"
      style={{ background: "linear-gradient(180deg,#f5faff,#ffffff)" }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          icon={Award}
          tag="Quiénes Somos"
          title="24 años construyendo el futuro digital"
          gradientText="el futuro digital"
          description="Desde 2002, transformamos ideas en soluciones tecnológicas que impulsan el crecimiento de empresas en todo el mundo."
        />

        <div className="mt-10 grid lg:grid-cols-2 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl overflow-hidden shadow-2xl"
            style={{ boxShadow: "0 30px 60px -20px rgba(2,12,102,0.3)" }}
          >
            <img
              src="/equipo_desarrollo.png"
              alt="Equipo de desarrollo de Intelecto"
              loading="lazy"
              className="w-full h-auto"
            />
            <div className="absolute bottom-4 left-4 right-4 grid grid-cols-3 gap-2 p-4 rounded-2xl bg-white/95 backdrop-blur">
              {[
                { n: "24+", l: "Años de experiencia" },
                { n: "500+", l: "Proyectos ejecutados" },
                { n: "15", l: "Países" },
              ].map((s) => (
                <div key={s.n} className="text-center">
                  <div className="text-2xl font-bold text-[#00ADEE]">{s.n}</div>
                  <div className="text-xs text-slate-600">{s.l}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-[#020c66]">Nuestra Historia</h3>
            <p className="mt-3 text-slate-600">
              Fundada en 2002, Intelecto nació con una visión clara: democratizar
              el acceso a la tecnología empresarial de clase mundial. Con más de
              dos décadas de experiencia, nos hemos consolidado como líderes en
              desarrollo de software personalizado, inteligencia artificial y
              automatización.
            </p>
            <p className="mt-3 text-slate-600">
              Nuestro equipo de expertos combina conocimiento técnico profundo
              con una comprensión única de los desafíos empresariales,
              permitiéndonos crear soluciones que no solo funcionan, sino que
              impulsan resultados reales.
            </p>

            <div className="mt-6 p-5 rounded-2xl bg-white border border-slate-100 shadow-sm">
              <div className="flex items-center gap-2 text-[#020c66] font-semibold">
                <TrendingUp size={18} className="text-[#00ADEE]" />
                Nuestros Logros
              </div>
              <ul className="mt-3 space-y-2">
                {["Más de 500 proyectos exitosos", "Equipo de 50+ profesionales", "Certificaciones internacionales"].map((a) => (
                  <li key={a} className="flex gap-2 text-slate-700">
                    <CheckCircle2 size={18} className="text-[#00ADEE] shrink-0 mt-0.5" />
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        <div className="mt-10">
          <h3 className="text-2xl font-bold text-[#020c66] text-center">Nuestros Valores</h3>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="p-6 rounded-2xl bg-white border border-slate-100 shadow-[0_10px_30px_-15px_rgba(2,12,102,0.15)]"
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center text-white shadow-md"
                  style={{ background: "linear-gradient(135deg,#00ADEE,#020c66)" }}
                >
                  <v.icon size={20} />
                </div>
                <h4 className="mt-4 font-bold text-[#020c66]">{v.title}</h4>
                <p className="mt-1 text-sm text-slate-600">{v.text}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}