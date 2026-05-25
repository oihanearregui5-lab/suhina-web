import { ShieldCheck, GraduationCap, Wrench, BadgeCheck } from "lucide-react";

const items = [
  { icon: ShieldCheck, label: "Empresa registrada", sub: "en Navarra" },
  { icon: GraduationCap, label: "Personal técnico", sub: "cualificado" },
  { icon: Wrench, label: "Equipamiento profesional", sub: "certificado" },
  { icon: BadgeCheck, label: "Presupuesto", sub: "sin compromiso" },
];

export function TrustBar() {
  return (
    <section className="bg-bone py-14 lg:py-16 border-y border-anthracite/10">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
        {items.map(({ icon: Icon, label, sub }) => (
          <div key={label} className="flex items-start gap-4">
            <Icon className="h-8 w-8 text-suhina-yellow shrink-0" strokeWidth={1.5} />
            <div>
              <p className="text-anthracite font-bold leading-tight">{label}</p>
              <p className="text-anthracite/60 text-sm">{sub}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
