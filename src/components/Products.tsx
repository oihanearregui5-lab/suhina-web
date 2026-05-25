import { MessageCircle } from "lucide-react";

export function Products() {
  return (
    <section id="productos" className="bg-bone py-20 lg:py-28">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 bg-suhina-yellow/15 text-suhina-yellow-deep px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] rounded-md">
            Próximamente
          </div>
          <h2
            className="display mt-6 text-anthracite"
            style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)", lineHeight: 1.05, letterSpacing: "-0.01em" }}
          >
            Catálogo de productos <span className="serif-italic text-suhina-yellow">industriales</span>.
          </h2>
          <p className="mt-6 text-anthracite/70 leading-relaxed">
            Estamos preparando nuestro catálogo de productos industriales hidráulicos: filtros, racores,
            mangueras y mucho más. Si necesitas algo concreto ahora, escríbenos y te lo conseguimos.
          </p>
          <a
            href="https://wa.me/34699054197"
            className="mt-10 inline-flex items-center gap-3 bg-whatsapp text-white px-6 py-4 font-bold text-sm uppercase tracking-tight rounded-md hover:opacity-90 transition-opacity"
          >
            <MessageCircle className="h-4 w-4" />
            Pídenoslo por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}