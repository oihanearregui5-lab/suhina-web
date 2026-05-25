import { useState } from "react";
import { Plus, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  { q: "¿Cómo funciona el servicio a domicilio?", a: "Nos llamas o escribes por WhatsApp, nos cuentas qué necesitas y dónde estás. Salimos con el taller móvil y trabajamos directamente sobre tu máquina." },
  { q: "¿Cuánto tardáis en llegar?", a: "En Navarra el tiempo medio de respuesta es de menos de 30 minutos. Desde Pamplona llegamos a cualquier punto de la Comunidad Foral en menos de 1 hora." },
  { q: "¿Trabajáis con todas las marcas y estándares?", a: "Sí. Fabricamos latiguillos hidráulicos compatibles con prácticamente cualquier marca y tipo de racor del mercado." },
  { q: "¿Tenéis servicio de emergencia?", a: "Sí, 24/7. No es un contestador. Cuando llamas, te responde un técnico." },
  { q: "¿Qué zona cubrís?", a: "Cubrimos toda Navarra: desde Pamplona llegamos a cualquier punto de la Comunidad Foral en menos de 1 hora. Servicio exclusivo en Navarra de momento." },
  { q: "¿Qué presiones máximas soportan vuestros latiguillos?", a: "Trabajamos con materiales certificados que cubren todo el rango de presiones de aplicaciones agrícolas, de construcción e industriales." },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="bg-bone py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <div className="text-center">
          <div className="inline-flex items-center gap-3 text-anthracite/60 text-xs uppercase tracking-[0.25em] font-bold">
            <span className="h-px w-10 bg-suhina-yellow" />
            FAQ
            <span className="h-px w-10 bg-suhina-yellow" />
          </div>
          <h2 className="display mt-5 text-anthracite" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.05 }}>
            Resolvemos tus dudas.
          </h2>
        </div>

        <div className="mt-12 divide-y divide-anthracite/10 border-y border-anthracite/10">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-6 py-5 text-left"
                >
                  <span className="text-anthracite font-bold text-base lg:text-lg">{f.q}</span>
                  <span className="shrink-0 text-suhina-yellow">
                    {isOpen ? <X className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className="pb-5 pr-10 text-anthracite/70 leading-relaxed">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
