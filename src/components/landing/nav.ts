export const NAV_LINKS = [
  { id: "inicio", label: "Inicio" },
  { id: "ia-automatizacion", label: "IA y Automatización" },
  { id: "servicios", label: "Servicios" },
  { id: "nosotros", label: "Quiénes Somos" },
  { id: "certificaciones", label: "Certificaciones" },
  { id: "contacto", label: "Contacto" },
] as const;

export function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const header = document.querySelector("header");
  const offset = header ? (header as HTMLElement).offsetHeight : 0;
  const y = el.getBoundingClientRect().top + window.scrollY - offset + 1;
  window.scrollTo({ top: y, behavior: "smooth" });
}