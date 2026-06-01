import { motion } from "framer-motion";
import retenes from "@/assets/producto-retenes.png";
import filtros from "@/assets/producto-filtros.png";
import racores from "@/assets/producto-racores.png";

const productos = [
  { img: retenes, nombre: "Retenes" },
  { img: filtros, nombre: "Filtros" },
  { img: racores, nombre: "Racores" },
];

export function ProductGallery() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        {/* Cabecera */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 bg-suhina-yellow/15 text-suhina-yellow-deep px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] rounded-md">
            Productos
          </div>
          <h2
            className="display mt-6 text-anthracite"
            style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)", lineHeight: 1.05, letterSpacing: "-0.01em" }}
          >
            Componentes hidráulicos <span className="serif-italic text-suhina-yellow">de primera</span>.
          </h2>
          <p className="mt-5 text-anthracite/65 leading-relaxed">
            Trabajamos con retenes, filtros y racores de marcas de referencia. Si necesitas una pieza concreta, te la conseguimos.
          </p>
        </div>

        {/* Tarjetas */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
          {productos.map(({ img, nombre }, i) => (
            <motion.div
              key={nombre}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group"
            >
              <div className="relative w-full aspect-square overflow-hidden rounded-2xl bg-gradient-to-b from-white to-bone border border-anthracite/[0.07] shadow-[0_2px_20px_-8px_rgba(31,32,36,0.15)] transition-all duration-300 group-hover:shadow-[0_18px_40px_-12px_rgba(31,32,36,0.28)] group-hover:-translate-y-1.5">
                {/* acento de marca en la esquina */}
                <div className="absolute top-0 left-0 h-1 w-14 bg-suhina-yellow rounded-br-md" />
                <div className="flex h-full items-center justify-center p-10 lg:p-12">
                  <img
                    src={img}
                    alt={nombre}
                    className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-[1.06]"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="mt-5 flex items-center justify-center gap-3">
                <span className="h-px w-6 bg-suhina-yellow" />
                <p className="text-anthracite font-bold text-sm uppercase tracking-[0.16em]">{nombre}</p>
                <span className="h-px w-6 bg-suhina-yellow" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
