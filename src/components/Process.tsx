import { motion } from "framer-motion";
import van from "@/assets/suhina-van-side.jpeg";

const steps = [
  { n: "01", title: "Desplazamiento", desc: "Llegamos a tu ubicación en menos de 1 hora dentro de Navarra." },
  { n: "02", title: "Diagnóstico", desc: "Identificamos la avería y te explicamos qué necesitas." },
  { n: "03", title: "Fabricación", desc: "Construimos el latiguillo a medida con nuestro taller móvil." },
  { n: "04", title: "Instalación", desc: "Lo montamos en tu máquina y verificamos el funcionamiento." },
];

export function Process() {
  return (
    <section id="proceso" className="relative bg-anthracite text-white py-20 lg:py-28 overflow-hidden">
      <div className="absolute inset-0 chevron-soft opacity-25" />
      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        <div>
          <div className="flex items-center gap-3 text-suhina-yellow text-xs uppercase tracking-[0.25em] font-bold">
            <span className="h-px w-10 bg-suhina-yellow" />
            Cómo trabajamos
          </div>
          <h2
            className="display mt-5 text-white max-w-[14ch]"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.05, letterSpacing: "-0.01em" }}
          >
            Del aviso al motor en marcha, <span className="serif-italic text-suhina-yellow">en cuatro pasos</span>.
          </h2>

          <ol className="mt-10 divide-y divide-white/10 border-t border-white/10">
            {steps.map((s, i) => (
              <motion.li
                key={s.n}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="grid grid-cols-[auto_1fr] gap-6 lg:gap-8 py-6 group"
              >
                <span className="display text-5xl lg:text-6xl leading-none text-suhina-yellow/30 group-hover:text-suhina-yellow transition-colors" aria-hidden>
                  {s.n}
                </span>
                <div>
                  <h3 className="display text-xl lg:text-2xl uppercase tracking-tight">{s.title}</h3>
                  <p className="mt-2 text-white/65 text-base max-w-xl">{s.desc}</p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>

        <div className="relative lg:sticky lg:top-28">
          <div className="relative aspect-[4/3] overflow-hidden rounded-md">
            <img src={van} alt="Furgoneta taller móvil Suhina" className="absolute inset-0 h-full w-full object-cover" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-anthracite/60 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-anthracite/40 to-transparent" />
            <div className="absolute inset-0 ring-1 ring-white/10 rounded-md" />
          </div>
        </div>
      </div>
    </section>
  );
}
