import { motion } from "framer-motion";
import { Phone, MessageCircle, ChevronDown, ChevronRight, Zap, Truck, Clock } from "lucide-react";
import hero from "@/assets/hero-hydraulic.jpg";

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen w-full overflow-hidden bg-anthracite-deep">
      <div className="absolute inset-0">
        <img src={hero} alt="Latiguillos hidráulicos en primer plano" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-anthracite-deep/95 via-anthracite-deep/80 to-anthracite-deep/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-anthracite-deep" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-10 pt-32 pb-20 lg:pt-40 lg:pb-28 min-h-screen flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex self-start items-center gap-2 bg-suhina-yellow text-anthracite px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em]"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inset-0 rounded-full bg-whatsapp pulse-dot" />
            <span className="relative rounded-full bg-whatsapp h-2 w-2" />
          </span>
          Disponibles ahora · 24/7 en Navarra
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="display mt-6 text-white max-w-[900px]"
          style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", lineHeight: 1.05, letterSpacing: "-0.01em" }}
        >
          Reparamos tus latiguillos hidráulicos
          <br />
          <span className="serif-italic text-suhina-yellow">donde tú estés</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-6 max-w-2xl text-base lg:text-lg text-white/75 leading-relaxed"
        >
          Nos desplazamos hasta tu obra, taller o explotación agrícola. Fabricación y
          reparación a medida, en el acto, sin que tengas que mover la maquinaria.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-8 flex flex-wrap gap-3"
        >
          <a
            href="tel:+34699054197"
            className="inline-flex items-center gap-3 bg-suhina-yellow text-anthracite px-6 py-4 font-bold text-sm lg:text-base uppercase tracking-tight rounded-md hover:bg-suhina-yellow-deep transition-colors"
          >
            <Phone className="h-4 w-4" />
            Llámanos · 699 05 41 97
          </a>
          <a
            href="https://wa.me/34699054197"
            className="inline-flex items-center gap-3 bg-whatsapp text-white px-6 py-4 font-bold text-sm lg:text-base uppercase tracking-tight rounded-md hover:opacity-90 transition-opacity"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-12 flex flex-wrap items-center gap-x-4 gap-y-3 text-white/80"
        >
          <MiniStat icon={<Zap className="h-4 w-4" />} label="Respuesta < 30 min" />
          <ChevSep />
          <MiniStat icon={<Truck className="h-4 w-4" />} label="Servicio in situ" />
          <ChevSep />
          <MiniStat icon={<Clock className="h-4 w-4" />} label="24h / 7 días" />
        </motion.div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 z-10">
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.8, repeat: Infinity }}>
          <ChevronDown className="h-6 w-6" />
        </motion.div>
      </div>
    </section>
  );
}

function MiniStat({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <span className="inline-flex items-center gap-2 uppercase tracking-wider text-xs">
      <span className="text-suhina-yellow">{icon}</span>
      {label}
    </span>
  );
}

function ChevSep() {
  return (
    <ChevronRight className="h-4 w-4 text-suhina-yellow" aria-hidden />
  );
}
