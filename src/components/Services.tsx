import { motion } from "framer-motion";
import { Truck, Wrench, Cog, AlarmClock, ArrowRight } from "lucide-react";

const services = [
  { icon: Truck, title: "Servicio a domicilio", desc: "Vamos a tu obra, taller o explotación agrícola con todo el equipo." },
  { icon: Wrench, title: "Reparación en el acto", desc: "Sustituimos y reparamos latiguillos sin mover la maquinaria." },
  { icon: Cog, title: "Fabricación a medida", desc: "Construimos el latiguillo exacto que necesitas en minutos." },
  { icon: AlarmClock, title: "Emergencias 24/7", desc: "Disponibles cualquier día, cualquier hora. No paramos cuando paras tú." },
];

export function Services() {
  return (
    <section id="servicios" className="bg-bone py-20 lg:py-28">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 text-anthracite/60 text-xs uppercase tracking-[0.25em] font-bold">
            <span className="h-px w-10 bg-suhina-yellow" />
            Servicios
          </div>
          <h2
            className="display mt-5 text-anthracite"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.05, letterSpacing: "-0.01em" }}
          >
            Vamos donde tú nos necesites.
          </h2>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group relative bg-white border border-anthracite/10 p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_-20px_rgba(0,0,0,0.25)]"
            >
              <div className="absolute left-0 top-0 right-0 h-1 chevron-band opacity-0 group-hover:opacity-100 transition-opacity" />
              <Icon className="h-9 w-9 text-suhina-yellow" strokeWidth={1.6} />
              <h3 className="display mt-6 text-xl uppercase tracking-tight text-anthracite">{title}</h3>
              <p className="mt-2 text-anthracite/65 text-sm leading-relaxed">{desc}</p>
              <a href="#contacto" className="mt-6 inline-flex items-center gap-2 text-suhina-yellow font-bold text-sm uppercase tracking-wider">
                Solicitar asistencia <ArrowRight className="h-4 w-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
