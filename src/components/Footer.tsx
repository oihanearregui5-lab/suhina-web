import { Phone, MessageCircle, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative bg-anthracite-deep text-white overflow-hidden">
      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10 py-16 lg:py-20 grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
        <div>
          <div className="flex items-center">
            <span className="display text-3xl tracking-wide">
              SUHI<span className="text-suhina-yellow">NA</span>
            </span>
          </div>
          <p className="mt-5 text-white/60 text-sm leading-relaxed max-w-xs">
            Reparación de latiguillos hidráulicos a domicilio en Navarra, 24/7.
          </p>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-suhina-yellow">Servicios</h4>
          <ul className="mt-5 space-y-2.5 text-white/70 text-sm">
            <li>Servicio a domicilio</li>
            <li>Reparación en el acto</li>
            <li>Fabricación a medida</li>
            <li>Emergencias 24/7</li>
            <li className="flex items-center gap-2">
              Productos
              <span className="bg-suhina-yellow text-anthracite text-[10px] font-bold px-1.5 py-0.5">PRONTO</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-suhina-yellow">Contacto</h4>
          <ul className="mt-5 space-y-3 text-white/70 text-sm">
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-suhina-yellow" /> Taller · 678 47 84 92</li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-suhina-yellow" /> Oficina · 618 63 46 58</li>
            <li className="flex items-center gap-2"><MessageCircle className="h-4 w-4 text-suhina-yellow" /> WhatsApp · 678 47 84 92</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-suhina-yellow" /> info@suhina.es</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-suhina-yellow" /> administracion@suhina.es</li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-suhina-yellow">Cobertura</h4>
          <ul className="mt-5 space-y-2.5 text-white/70 text-sm">
            <li>Toda Navarra</li>
            <li>Pamplona</li>
            <li>Tudela</li>
            <li>Estella</li>
            <li>Tafalla</li>
          </ul>
        </div>
      </div>

      <div className="relative border-t border-suhina-yellow/20">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-6 flex flex-wrap items-center justify-between gap-3 text-white/50 text-xs">
          <p>© 2026 SUHINA. Todos los derechos reservados.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-suhina-yellow transition-colors">Aviso legal</a>
            <a href="#" className="hover:text-suhina-yellow transition-colors">Política de privacidad</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
