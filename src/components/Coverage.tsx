import { MapPin } from "lucide-react";

export function Coverage() {
  return (
    <section className="relative bg-anthracite-deep text-white py-20 lg:py-28 overflow-hidden">
      <div className="absolute inset-0 chevron-soft opacity-20" />
      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div>
          <div className="flex items-center gap-3 text-suhina-yellow text-xs uppercase tracking-[0.25em] font-bold">
            <span className="h-px w-10 bg-suhina-yellow" />
            Dónde operamos
          </div>
          <h2
            className="display mt-5 text-white"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.05 }}
          >
            Operamos en toda <span className="serif-italic text-suhina-yellow">Navarra</span>.
          </h2>

          <p className="mt-6 text-white/70 leading-relaxed max-w-md">
            Desde Pamplona llegamos a cualquier punto de la Comunidad Foral en menos de 1 hora.
          </p>

          <p className="mt-8 text-white/55 text-sm max-w-md">
            Servicio exclusivo en Navarra. Pamplona, Tudela, Estella, Tafalla y todos los pueblos intermedios.
          </p>
        </div>

        <div className="relative aspect-[4/5] w-full max-w-[460px] mx-auto">
          <div className="absolute inset-0 rounded-lg overflow-hidden bg-[#0B0D11] ring-1 ring-white/10">
            <svg
              viewBox="0 0 400 500"
              className="absolute inset-0 w-full h-full"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Mapa de cobertura: Navarra"
            >
              <defs>
                <pattern id="mapGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" />
                </pattern>
                <pattern id="dotPattern" width="3" height="3" patternUnits="userSpaceOnUse">
                  <circle cx="1.5" cy="1.5" r="0.5" fill="rgba(255,255,255,0.06)" />
                </pattern>
              </defs>

              <rect width="400" height="500" fill="url(#mapGrid)" />
              <rect width="400" height="500" fill="url(#dotPattern)" />

              <path d="M 0 180 Q 100 200 200 180 T 400 200" stroke="rgba(180,180,200,0.08)" strokeWidth="1" fill="none" />
              <path d="M 0 320 Q 150 300 250 340 T 400 330" stroke="rgba(180,180,200,0.08)" strokeWidth="1" fill="none" />
              <path d="M 80 0 Q 100 200 140 400 T 200 500" stroke="rgba(180,180,200,0.08)" strokeWidth="1" fill="none" />
              <path d="M 280 0 Q 260 150 300 300 T 320 500" stroke="rgba(180,180,200,0.08)" strokeWidth="1" fill="none" />

              <text x="30" y="120" fontSize="11" fill="rgba(255,255,255,0.25)" fontFamily="Inter" fontWeight="500">Donostia</text>
              <text x="20" y="240" fontSize="10" fill="rgba(255,255,255,0.22)" fontFamily="Inter">Vitoria</text>
              <text x="30" y="370" fontSize="10" fill="rgba(255,255,255,0.22)" fontFamily="Inter">Logroño</text>
              <text x="335" y="450" fontSize="10" fill="rgba(255,255,255,0.22)" fontFamily="Inter">Zaragoza</text>
              <text x="345" y="90" fontSize="10" fill="rgba(255,255,255,0.22)" fontFamily="Inter">Pau</text>

              <path
                d="M 182.2 79.2 L 166.8 86.9 L 160.6 99.3 L 145.1 100.8 L 142.0 128.6 L 126.6 137.9 L 121.9 151.8 L 125.0 158.0 L 112.7 162.7 L 109.6 170.4 L 94.1 168.8 L 87.9 173.5 L 84.8 184.3 L 87.9 196.7 L 81.7 202.9 L 80.2 219.9 L 72.5 221.4 L 74.0 238.4 L 78.6 240.0 L 64.7 246.1 L 55.5 238.4 L 40.0 250.8 L 41.5 258.5 L 44.6 257.0 L 49.3 263.1 L 55.5 253.9 L 58.6 257.0 L 60.1 274.0 L 53.9 275.5 L 57.0 286.3 L 70.9 292.5 L 78.6 289.4 L 92.6 300.2 L 111.1 300.2 L 115.7 317.2 L 128.1 311.1 L 154.4 329.6 L 154.4 338.9 L 190.0 354.3 L 183.8 368.3 L 179.1 362.1 L 169.9 366.7 L 162.1 363.6 L 149.8 383.7 L 149.8 393.0 L 157.5 400.7 L 174.5 402.3 L 185.3 411.5 L 193.0 408.5 L 202.3 411.5 L 211.6 420.8 L 228.6 417.7 L 233.2 420.8 L 241.0 419.3 L 259.5 389.9 L 258.0 382.2 L 250.2 380.6 L 250.2 372.9 L 242.5 368.3 L 239.4 345.1 L 242.5 328.1 L 251.8 315.7 L 248.7 303.3 L 251.8 294.1 L 262.6 284.8 L 259.5 272.4 L 262.6 266.2 L 275.0 264.7 L 285.8 240.0 L 304.3 240.0 L 304.3 230.7 L 309.0 226.0 L 319.8 224.5 L 330.6 210.6 L 333.7 212.1 L 344.5 175.0 L 352.3 170.4 L 360.0 171.9 L 353.8 159.6 L 344.5 164.2 L 321.4 164.2 L 309.0 154.9 L 288.9 148.7 L 285.8 151.8 L 271.9 141.0 L 261.1 142.6 L 253.3 136.4 L 261.1 125.6 L 248.7 128.6 L 245.6 147.2 L 228.6 142.6 L 224.0 133.3 L 231.7 128.6 L 239.4 110.1 L 237.9 90.0 L 217.8 83.8 L 207.0 85.4 L 205.4 93.1 L 199.2 93.1 L 196.1 80.7 Z"
                fill="rgba(245,197,24,0.08)"
                stroke="#F5C518"
                strokeWidth="2"
                strokeDasharray="6 4"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <animate attributeName="stroke-dashoffset" from="0" to="-20" dur="3s" repeatCount="indefinite" />
              </path>

              <text x="195" y="245" fontSize="20" fill="#F5C518" fontFamily="Anton, sans-serif" letterSpacing="3" textAnchor="middle" opacity="0.85">
                NAVARRA
              </text>

              <g>
                <circle cx="200" cy="188" r="14" fill="#F5C518" fillOpacity="0.15">
                  <animate attributeName="r" values="12;20;12" dur="2s" repeatCount="indefinite" />
                  <animate attributeName="fill-opacity" values="0.25;0.05;0.25" dur="2s" repeatCount="indefinite" />
                </circle>
                <circle cx="200" cy="188" r="6" fill="#F5C518" />
                <circle cx="200" cy="188" r="2.5" fill="#1F2024" />
              </g>

              <text x="213" y="191" fontSize="13" fill="white" fontFamily="Inter, sans-serif" fontWeight="700" letterSpacing="0.5">PAMPLONA</text>
              <text x="213" y="204" fontSize="9" fill="rgba(245,197,24,0.85)" fontFamily="Inter, sans-serif" fontWeight="500" letterSpacing="2">BASE SUHINA</text>

              <circle cx="142" cy="232" r="2" fill="rgba(255,255,255,0.4)" />
              <text x="133" y="245" fontSize="8" fill="rgba(255,255,255,0.5)" fontFamily="Inter" textAnchor="end">Estella</text>

              <circle cx="200" cy="277" r="2" fill="rgba(255,255,255,0.4)" />
              <text x="210" y="280" fontSize="8" fill="rgba(255,255,255,0.5)" fontFamily="Inter">Tafalla</text>

              <circle cx="216" cy="393" r="2" fill="rgba(255,255,255,0.4)" />
              <text x="225" y="396" fontSize="8" fill="rgba(255,255,255,0.5)" fontFamily="Inter">Tudela</text>
            </svg>

            <div className="absolute left-3 bottom-3 flex items-center gap-2 bg-suhina-yellow text-anthracite px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider rounded-sm">
              <MapPin className="h-3 w-3" />
              Servicio exclusivo en Navarra
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}