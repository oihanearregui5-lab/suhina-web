const words = [
  "NAVARRA", "24/7", "A PIE DE MÁQUINA", "RESPUESTA < 30 MIN",
  "FABRICACIÓN A MEDIDA", "REPARACIÓN EN EL ACTO", "TALLER MÓVIL",
  "PAMPLONA", "TUDELA", "ESTELLA", "TAFALLA",
];

export function Ticker() {
  const sequence = [...words, ...words, ...words, ...words];
  return (
    <div className="bg-suhina-yellow text-anthracite overflow-hidden py-6 border-y-2 border-anthracite/10">
      <div className="flex ticker-track whitespace-nowrap">
        {[0, 1].map((k) => (
          <div key={k} className="flex shrink-0 items-center">
            {sequence.map((w, i) => (
              <span key={`${k}-${i}`} className="display text-2xl lg:text-3xl uppercase tracking-tight px-6 flex items-center gap-6">
                {w}
                <span className="text-anthracite/70 text-lg">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
