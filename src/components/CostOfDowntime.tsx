import { motion } from "framer-motion";
import { X, Check, Clock, AlertTriangle, Package } from "lucide-react";

const tradicional = [
  "Paras la máquina y desmontas tú el latiguillo",
  "Cargas la pieza y conduces hasta el taller",
  "Esperas tu turno mientras la obra sigue parada",
  "Vuelves y lo montas, con el riesgo de hacerlo mal",
];

const suhina = [
  "Una llamada y vamos a donde estés",
  "Llegamos con furgoneta-taller: cortadoras, prensas y miles de referencias",
  "Fabricamos e instalamos el latiguillo allí mismo",
  "Tu operario no toca el sistema: cero riesgo de contaminación o mal montaje",
];

const ocultos = [
  { icon: Clock, title: "Tiempo parado", desc: "Cada hora de máquina y de operarios cruzados de brazos es dinero que no recuperas." },
  { icon: AlertTriangle, title: "Daños por mal montaje", desc: "Una contaminación del sistema o una torsión incorrecta provocan averías mucho más caras." },
  { icon: Package, title: "Logística y riesgos", desc: "Te ahorras gestionar stock de recambios, viajes al taller y manipular alta presión sin la herramienta adecuada." },
];

export function CostOfDowntime() {
  return (
    <section className="bg-anthracite py-20 lg:py-28">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        {/* Idea fuerza */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 bg-suhina-yellow/15 text-suhina-yellow px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] rounded-md">
            El coste real de una avería
          </div>
          <h2
            className="display mt-6 text-white"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.08, letterSpacing: "-0.01em" }}
          >
            Una avería no cuesta lo que cuesta el latiguillo.
            <br className="hidden sm:block" />
            <span className="serif-italic text-suhina-yellow"> Cuesta cada hora que la máquina está parada.</span>
          </h2>
        </div>

        {/* Comparación cara a cara */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Tradicional */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="rounded-xl border border-white/10 bg-white/[0.03] p-8 lg:p-10"
          >
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/45">Taller tradicional</p>
            <ul className="mt-6 space-y-4">
              {tradicional.map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <span className="mt-0.5 shrink-0 rounded-full bg-destructive/15 p-1">
                    <X className="h-4 w-4 text-destructive" strokeWidth={2.5} />
                  </span>
                  <span className="text-white/70 leading-relaxed">{t}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Suhina */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-xl border border-suhina-yellow/40 bg-suhina-yellow/[0.06] p-8 lg:p-10"
          >
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-suhina-yellow">Suhina · a pie de máquina</p>
            <ul className="mt-6 space-y-4">
              {suhina.map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <span className="mt-0.5 shrink-0 rounded-full bg-suhina-yellow/20 p-1">
                    <Check className="h-4 w-4 text-suhina-yellow" strokeWidth={2.5} />
                  </span>
                  <span className="text-white/85 leading-relaxed">{t}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Costes ocultos */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
          {ocultos.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex flex-col items-start gap-3"
            >
              <Icon className="h-8 w-8 text-suhina-yellow" strokeWidth={1.5} />
              <p className="text-white font-bold">{title}</p>
              <p className="text-white/55 text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
