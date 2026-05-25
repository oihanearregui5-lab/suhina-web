import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import workshop from "@/assets/workshop.jpg";

const bullets = [
  "Servicio a domicilio: vamos donde estés",
  "Reparación y fabricación en el acto",
  "Disponibilidad 24/7 para emergencias",
  "Cobertura en toda Navarra",
  "Asesoramiento técnico personalizado",
  "Precios competitivos y transparentes",
];

export function About() {
  return (
    <section id="nosotros" className="bg-bone py-20 lg:py-28">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative aspect-[4/5] overflow-hidden rounded-sm"
        >
          <img src={workshop} alt="Interior del taller Suhina" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute left-0 bottom-0 chevron-band w-full h-5" />
        </motion.div>

        <div>
          <div className="flex items-center gap-3 text-anthracite/60 text-xs uppercase tracking-[0.25em] font-bold">
            <span className="h-px w-10 bg-suhina-yellow" />
            Sobre Suhina
          </div>
          <h2
            className="display mt-5 text-anthracite"
            style={{ fontSize: "clamp(2rem, 3.5vw, 2.5rem)", lineHeight: 1.05, letterSpacing: "-0.01em" }}
          >
            Tu taller hidráulico <span className="serif-italic text-suhina-yellow">a domicilio</span>.
          </h2>
          <p className="mt-6 text-anthracite/70 leading-relaxed">
            Somos una empresa nacida en Navarra con un objetivo claro: que ningún latiguillo
            hidráulico te pare la jornada. Mientras otros te obligan a llevar la maquinaria a su taller,
            nosotros llevamos el taller hasta ti. Equipados con las mejores herramientas y conocimiento
            técnico actualizado para fabricar y reparar en el acto.
          </p>

          <ul className="mt-8 grid sm:grid-cols-2 gap-x-6 gap-y-3">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-3 text-anthracite/85 text-sm">
                <span className="text-suhina-yellow mt-0.5 font-bold">▶</span>
                {b}
              </li>
            ))}
          </ul>

          <a
            href="#contacto"
            className="mt-10 inline-flex items-center gap-3 bg-suhina-yellow text-anthracite px-6 py-4 font-bold text-sm uppercase tracking-tight rounded-md hover:bg-suhina-yellow-deep transition-colors"
          >
            Pide tu presupuesto <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
