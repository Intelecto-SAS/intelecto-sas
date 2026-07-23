import { Mail, Phone, MapPin, Linkedin, Instagram, Heart } from "lucide-react";
import { NAV_LINKS, scrollToId } from "./nav";

const services = [
  { id: "ia-automatizacion", label: "Inteligencia Artificial y Automatización", highlight: true },
  { label: "Desarrollo Web" },
  { label: "Apps Móviles" },
  { label: "Soluciones Cloud" },
  { label: "Consultoría IT" },
];

export function Footer() {
  return (
    <footer
      className="text-white"
      style={{ background: "linear-gradient(135deg,#020c66 0%,#001048 100%)" }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <img src="/logo_claro.png" alt="Intelecto" className="h-10 w-auto" />
          <p className="mt-4 text-white/80 text-sm">
            Transformando ideas en soluciones desde 2002. Tu socio tecnológico
            de confianza en inteligencia artificial, automatización y
            desarrollo de software.
          </p>
          <ul className="mt-5 space-y-2 text-sm">
            <li className="flex items-center gap-2 text-white/85"><Mail size={16} /> contacto@intelecto.co</li>
            <li className="flex items-center gap-2 text-white/85"><Phone size={16} /> +57 (314) 794-3431</li>
            <li className="flex items-center gap-2 text-white/85"><MapPin size={16} /> Cali, Colombia</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-white">Empresa</h4>
          <ul className="mt-4 space-y-2">
            {NAV_LINKS.map((l) => (
              <li key={l.id}>
                <button onClick={() => scrollToId(l.id)} className="text-white/80 hover:text-[#00ADEE] text-sm">
                  {l.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-white">Servicios</h4>
          <ul className="mt-4 space-y-2">
            {services.map((s) => (
              <li key={s.label}>
                {s.id ? (
                  <button
                    onClick={() => scrollToId(s.id!)}
                    className={`text-sm hover:text-[#00ADEE] ${s.highlight ? "text-[#00ADEE] font-semibold" : "text-white/80"}`}
                  >
                    {s.label}
                  </button>
                ) : (
                  <span className="text-sm text-white/80">{s.label}</span>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-white">Síguenos</h4>
          <p className="mt-4 text-sm text-white/80">
            Mantente al día con las últimas tendencias tecnológicas
          </p>
          <div className="mt-4 flex gap-3">
            <a aria-label="LinkedIn" href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#00ADEE] flex items-center justify-center transition-colors">
              <Linkedin size={18} />
            </a>
            <a aria-label="Instagram" href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#00ADEE] flex items-center justify-center transition-colors">
              <Instagram size={18} />
            </a>
          </div>

          <div className="mt-6 p-4 rounded-2xl bg-white/5 border border-white/10">
            <div className="font-semibold text-white text-sm">Legal</div>
            <ul className="mt-2 space-y-1 text-sm text-white/70">
              <li>Términos de Servicio</li>
              <li>Política de Privacidad</li>
              <li>Cookies</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/70">
          <div>© {new Date().getFullYear()} Intelecto. Todos los derechos reservados.</div>
          <div className="flex items-center gap-1.5">
            Hecho con <Heart size={12} className="text-red-400 fill-red-400" /> por nuestro equipo
          </div>
        </div>
      </div>
    </footer>
  );
}