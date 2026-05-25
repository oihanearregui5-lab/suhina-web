import { Phone, MessageCircle, Mail, Clock, ArrowRight } from "lucide-react";

const items = [
  { icon: Phone, label: "Teléfono", value: "699 05 41 97" },
  { icon: MessageCircle, label: "WhatsApp", value: "699 05 41 97" },
  { icon: Mail, label: "Email", value: "info@suhina.es" },
  { icon: Clock, label: "Horario", value: "24h / 7 días" },
];

export function Contact() {
  return (
    <section id="contacto" className="bg-bone py-20 lg:py-28">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 grid lg:grid-cols-2 gap-12 lg:gap-20">
        <div>
          <div className="flex items-center gap-3 text-anthracite/60 text-xs uppercase tracking-[0.25em] font-bold">
            <span className="h-px w-10 bg-suhina-yellow" />
            Contacto
          </div>
          <h2 className="display mt-5 text-anthracite" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.05 }}>
            Cuéntanos qué necesitas.
          </h2>
          <p className="mt-5 text-anthracite/65 max-w-md">
            Estamos disponibles a cualquier hora. Cuanto antes nos escribas, antes ponemos tu máquina en marcha.
          </p>

          <ul className="mt-10 space-y-5">
            {items.map(({ icon: Icon, label, value }) => (
              <li key={label} className="flex items-start gap-4">
                <span className="bg-suhina-yellow text-anthracite p-2.5">
                  <Icon className="h-5 w-5" strokeWidth={1.8} />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-wider text-anthracite/55 font-bold">{label}</p>
                  <p className="text-anthracite font-bold text-lg">{value}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <Field label="Nombre" name="name" type="text" />
          <Field label="Teléfono" name="phone" type="tel" />
          <Field label="Email" name="email" type="email" />
          <div className="relative">
            <label className="block text-xs uppercase tracking-wider text-anthracite/55 font-bold mb-2">Tipo de servicio</label>
            <select className="w-full bg-transparent border-b-2 border-anthracite/15 py-2.5 text-anthracite focus:border-suhina-yellow outline-none transition-colors">
              <option>Servicio a domicilio</option>
              <option>Reparación en el acto</option>
              <option>Fabricación a medida</option>
              <option>Emergencia 24/7</option>
            </select>
          </div>
          <div>
            <label className="block text-xs uppercase tracking-wider text-anthracite/55 font-bold mb-2">¿Dónde estás y qué necesitas?</label>
            <textarea rows={4} className="w-full bg-transparent border-b-2 border-anthracite/15 py-2.5 text-anthracite focus:border-suhina-yellow outline-none transition-colors resize-none" />
          </div>
          <button type="submit" className="inline-flex items-center gap-3 bg-suhina-yellow text-anthracite px-7 py-4 font-bold uppercase tracking-tight rounded-md hover:bg-suhina-yellow-deep transition-colors">
            Solicitar presupuesto <ArrowRight className="h-4 w-4" />
          </button>
        </form>
      </div>
    </section>
  );
}

function Field({ label, name, type }: { label: string; name: string; type: string }) {
  return (
    <div>
      <label htmlFor={name} className="block text-xs uppercase tracking-wider text-anthracite/55 font-bold mb-2">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        className="w-full bg-transparent border-b-2 border-anthracite/15 py-2.5 text-anthracite focus:border-suhina-yellow outline-none transition-colors"
      />
    </div>
  );
}
