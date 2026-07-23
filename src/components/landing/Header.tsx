import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, scrollToId } from "./nav";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    setTimeout(() => scrollToId(id), 10);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/70 backdrop-blur-md shadow-[0_4px_20px_-8px_rgba(2,12,102,0.15)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => go("inicio")}
          aria-label="Ir al inicio"
          className="flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00ADEE] rounded"
        >
          <img src="/logo.png" alt="Intelecto" className="h-9 w-auto" />
        </button>

        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {NAV_LINKS.map((l) => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              className="px-2.5 xl:px-3 py-2 text-[13px] xl:text-sm font-medium text-[#1e1e1e] rounded-md transition-colors hover:text-[#00ADEE] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00ADEE]"
            >
              {l.label}
            </button>
          ))}
        </nav>

        <button
          className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-md text-[#020c66] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00ADEE]"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-lg">
          <nav className="flex flex-col px-4 py-3">
            {NAV_LINKS.map((l) => (
              <button
                key={l.id}
                onClick={() => go(l.id)}
                className="text-left px-3 py-3 text-[#1e1e1e] font-medium rounded-md hover:bg-slate-50 hover:text-[#00ADEE]"
              >
                {l.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}