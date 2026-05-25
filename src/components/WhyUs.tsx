import { motion } from "framer-motion";
import { Clock, CheckCircle2, PhoneCall } from "lucide-react";

const items = [
  { icon: Clock, title: "Transparencia total", desc: "Presupuesto cerrado antes de empezar el trabajo. Sin sorpresas, sin recargos ocultos." },
  { icon: CheckCircle2, title: "Calidad garantizada", desc: "Latiguillos fabricados con materiales certificados que cumplen los estándares de presión exigidos por cada aplicación." },
  { icon: PhoneCall, title: "Disponibilidad real 24/7", desc: "No somos un contestador automático. Cuando llamas, te responde un técnico preparado para ayudarte." },
];

export function WhyUs() {
  return (
    <section className="bg-bone py-20 lg:py-28 border-t border-anthracite/5">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-3 text-anthracite/60 text-xs uppercase tracking-[0.25em] font-bold">
            <span className="h-px w-10 bg-suhina-yellow" />
            Por qué elegirnos
            <span className="h-px w-10 bg-suhina-yellow" />
          </div>
          <h2
            className="display mt-5 text-anthracite"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.05 }}
          >
            Compromiso real, no eslóganes.
          </h2>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-5 lg:gap-6">
          {items.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-white border border-anthracite/10 p-8 lg:p-10 text-center hover:-translate-y-1 transition-transform"
            >
              <Icon className="h-12 w-12 text-suhina-yellow mx-auto" strokeWidth={1.4} />
              <h3 className="display mt-6 text-xl lg:text-2xl uppercase tracking-tight text-anthracite">{title}</h3>
              <p className="mt-3 text-anthracite/65 text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
