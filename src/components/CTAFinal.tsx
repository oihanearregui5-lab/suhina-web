import { Phone, MessageCircle } from "lucide-react";
import van from "@/assets/suhina-van-front.jpeg";

export function CTAFinal() {
  return (
    <section className="relative bg-anthracite-deep text-white overflow-hidden">
      <div className="absolute inset-0">
        <img src={van} alt="" className="h-full w-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-anthracite-deep/70" />
        <div className="absolute inset-0 chevron-soft opacity-25" />
      </div>
      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10 py-24 lg:py-36 text-center">
        <h2 className="display text-white mx-auto max-w-3xl" style={{ fontSize: "clamp(2.25rem, 5vw, 3.75rem)", lineHeight: 1.05, letterSpacing: "-0.01em" }}>
          ¿Necesitas que <span className="serif-italic text-suhina-yellow" style={{ marginRight: "-0.12em" }}>vayamos</span>?
        </h2>
        <p className="mt-6 max-w-xl mx-auto text-white/70 text-base lg:text-lg">
          Llámanos, escríbenos o rellena el formulario. Te contactamos en menos de 1 hora en horario laboral.
        </p>
        <div className="mt-10 flex flex-wrap gap-3 justify-center">
          <a href="tel:+34678478492" className="inline-flex items-center gap-3 bg-suhina-yellow text-anthracite px-7 py-5 font-bold uppercase tracking-tight rounded-md hover:bg-suhina-yellow-deep transition-colors">
            <Phone className="h-5 w-5" /> Llámanos · 678 47 84 92
          </a>
          <a href="https://wa.me/34678478492" className="inline-flex items-center gap-3 bg-whatsapp text-white px-7 py-5 font-bold uppercase tracking-tight rounded-md hover:opacity-90 transition-opacity">
            <MessageCircle className="h-5 w-5" /> WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
