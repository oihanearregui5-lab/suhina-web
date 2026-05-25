import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";

const links = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Proceso", href: "#proceso" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "FAQ", href: "#faq" },
  { label: "Contacto", href: "#contacto" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-anthracite/85 backdrop-blur-md border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 h-18 flex items-center justify-between py-4">
        <a href="#inicio" className="flex items-center group">
          <span className="display text-2xl tracking-wide text-white">
            SUHI<span className="text-suhina-yellow">NA</span>
          </span>
        </a>
        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm uppercase tracking-wider text-white/70 hover:text-suhina-yellow transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="tel:+34699054197"
            className="hidden md:inline-flex items-center gap-2 bg-suhina-yellow text-anthracite px-5 py-3 font-bold tracking-tight rounded-md hover:bg-suhina-yellow-deep transition-colors"
          >
            <Phone className="h-4 w-4" /> 699 05 41 97
          </a>
          <button
            onClick={() => setOpen(true)}
            className="lg:hidden text-white p-2"
            aria-label="Abrir menú"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-[60] bg-anthracite-deep flex flex-col">
          <div className="flex items-center justify-between px-6 h-18 py-4 border-b border-white/10">
            <div className="flex items-center gap-3">
              <SunGear className="h-8 w-8 text-suhina-yellow" />
              <span className="display text-xl text-white">SUHINA</span>
            </div>
            <button onClick={() => setOpen(false)} className="text-white p-2" aria-label="Cerrar">
              <X className="h-6 w-6" />
            </button>
          </div>
          <div className="chevron-band h-6 w-full" />
          <nav className="flex-1 flex flex-col px-6 py-10 gap-2">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="display text-4xl text-white py-3 border-b border-white/10 hover:text-suhina-yellow"
              >
                {l.label}
              </a>
            ))}
            <a
              href="tel:+34699054197"
              className="mt-8 inline-flex items-center justify-center gap-2 bg-suhina-yellow text-anthracite px-5 py-4 font-bold rounded-md"
            >
              <Phone className="h-4 w-4" /> 699 05 41 97
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

export function SunGear({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="currentColor" aria-hidden="true">
      {Array.from({ length: 12 }).map((_, i) => {
        const angle = (i * 360) / 12;
        return (
          <rect
            key={i}
            x="46"
            y="2"
            width="8"
            height="22"
            rx="2"
            transform={`rotate(${angle} 50 50)`}
          />
        );
      })}
      <circle cx="50" cy="50" r="28" />
      <circle cx="50" cy="50" r="10" fill="#1F2024" />
    </svg>
  );
}
