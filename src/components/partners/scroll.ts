export function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;

  const header = document.querySelector("header");
  const offset = header ? (header as HTMLElement).offsetHeight : 0;
  const y = el.getBoundingClientRect().top + window.scrollY - offset + 1;

  window.scrollTo({ top: y, behavior: "smooth" });
}
