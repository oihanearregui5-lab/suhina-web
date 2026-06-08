import { Phone, MessageCircle, Mail, Clock, ArrowRight } from "lucide-react";
import { useState, type ChangeEvent, type FormEvent } from "react";

const items = [
  { icon: Phone, label: "Taller", value: "678 47 84 92", href: "tel:+34678478492" },
  { icon: Mail, label: "Email taller", value: "info@suhina.es", href: "mailto:info@suhina.es" },
  { icon: Phone, label: "Oficina", value: "618 63 46 58", href: "tel:+34618634658" },
  { icon: Mail, label: "Administración", value: "administracion@suhina.es", href: "mailto:administracion@suhina.es" },
  { icon: MessageCircle, label: "WhatsApp", value: "678 47 84 92", href: "https://wa.me/34678478492" },
  { icon: Clock, label: "Horario", value: "24h / 7 días" },
];

const initialForm = {
  name: "",
  phone: "",
  email: "",
  service: "Servicio a domicilio",
  message: "",
};

export function Contact() {
  const [form, setForm] = useState(initialForm);

  const update =
    (key: keyof typeof form) =>
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm((prev) => ({ ...prev, [key]: e.target.value }));

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = `Solicitud de presupuesto - ${form.service}`;
    const body = [
      `Nombre: ${form.name}`,
      `Teléfono: ${form.phone}`,
      `Email: ${form.email}`,
      `Tipo de servicio: ${form.service}`,
      "",
      "Mensaje:",
      form.message,
    ].join("\n");
    window.location.href = `mailto:info@suhina.es?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contacto" className="bg-bone py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
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
            {items.map(({ icon: Icon, label, value, href }) => (
              <li key={label} className="flex items-start gap-4">
                <span className="bg-suhina-yellow text-anthracite p-2.5">
                  <Icon className="h-5 w-5" strokeWidth={1.8} />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-wider text-anthracite/55 font-bold">{label}</p>
                  {href ? (
                    <a href={href} className="text-anthracite font-bold text-lg hover:text-suhina-yellow-deep transition-colors">{value}</a>
                  ) : (
                    <p className="text-anthracite font-bold text-lg">{value}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>

        <form className="space-y-6 lg:mt-12" onSubmit={handleSubmit}>
          <Field label="Nombre" name="name" type="text" value={form.name} onChange={update("name")} />
          <Field label="Teléfono" name="phone" type="tel" value={form.phone} onChange={update("phone")} />
          <Field label="Email" name="email" type="email" value={form.email} onChange={update("email")} />
          <div className="relative">
            <label className="block text-xs uppercase tracking-wider text-anthracite/55 font-bold mb-2">Tipo de servicio</label>
            <select
              value={form.service}
              onChange={update("service")}
              className="w-full bg-transparent border-b-2 border-anthracite/15 py-2.5 text-anthracite focus:border-suhina-yellow outline-none transition-colors"
            >
              <option>Servicio a domicilio</option>
              <option>Reparación en el acto</option>
              <option>Fabricación a medida</option>
              <option>Emergencia 24/7</option>
            </select>
          </div>
          <div>
            <label className="block text-xs uppercase tracking-wider text-anthracite/55 font-bold mb-2">¿Dónde estás y qué necesitas?</label>
            <textarea
              rows={4}
              value={form.message}
              onChange={update("message")}
              className="w-full bg-transparent border-b-2 border-anthracite/15 py-2.5 text-anthracite focus:border-suhina-yellow outline-none transition-colors resize-none"
            />
          </div>
          <button type="submit" className="inline-flex items-center gap-3 bg-suhina-yellow text-anthracite px-7 py-4 font-bold uppercase tracking-tight rounded-md hover:bg-suhina-yellow-deep transition-colors">
            Solicitar presupuesto <ArrowRight className="h-4 w-4" />
          </button>
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type,
  value,
  onChange,
}: {
  label: string;
  name: string;
  type: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-xs uppercase tracking-wider text-anthracite/55 font-bold mb-2">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        className="w-full bg-transparent border-b-2 border-anthracite/15 py-2.5 text-anthracite focus:border-suhina-yellow outline-none transition-colors"
      />
    </div>
  );
}
