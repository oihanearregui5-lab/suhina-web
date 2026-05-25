import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";

const stats = [
  { value: 30, prefix: "<", suffix: " min", label: "Tiempo medio de respuesta" },
  { value: 24, suffix: "/7", label: "Disponibilidad real" },
  { value: 100, suffix: "%", label: "A pie de máquina" },
  { value: 100, suffix: "%", label: "Toda Navarra" },
];

export function Stats() {
  return (
    <section className="relative bg-anthracite-deep text-white py-24 lg:py-28 overflow-hidden">
      <div className="absolute inset-0 chevron-soft opacity-25" />
      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/10 border-y border-white/10">
          {stats.map((s, i) => (
            <Stat key={i} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Stat({
  value,
  prefix = "",
  suffix = "",
  label,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => Math.round(v).toString());

  useEffect(() => {
    if (inView) {
      const controls = animate(mv, value, { duration: 1.4, ease: "easeOut" });
      return controls.stop;
    }
  }, [inView, mv, value]);

  return (
    <div className="px-5 py-10 lg:px-10 lg:py-12">
      <div className="display text-suhina-yellow text-6xl lg:text-8xl leading-none tracking-tight flex items-baseline">
        {prefix && <span className="text-4xl lg:text-5xl mr-1 text-suhina-yellow/70">{prefix}</span>}
        <motion.span ref={ref}>{rounded}</motion.span>
        {suffix && <span className="text-3xl lg:text-5xl">{suffix}</span>}
      </div>
      <p className="mt-4 text-white/65 text-sm lg:text-base uppercase tracking-wider max-w-[18ch]">
        {label}
      </p>
    </div>
  );
}
