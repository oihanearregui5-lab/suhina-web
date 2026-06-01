import retenes from "@/assets/producto-retenes.png";
import filtros from "@/assets/producto-filtros.png";
import racores from "@/assets/producto-racores.png";

const productos = [
  { img: retenes, nombre: "Retenes" },
  { img: filtros, nombre: "Filtros" },
  { img: racores, nombre: "Racores" },
];

export function ProductGallery() {
  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
          {productos.map(({ img, nombre }) => (
            <div key={nombre} className="flex flex-col items-center">
              <div className="w-full aspect-square bg-white border border-anthracite/10 rounded-xl shadow-sm flex items-center justify-center p-8 lg:p-10">
                <img
                  src={img}
                  alt={nombre}
                  className="max-h-full max-w-full object-contain"
                  loading="lazy"
                />
              </div>
              <p className="mt-4 text-anthracite font-bold text-sm uppercase tracking-[0.14em]">
                {nombre}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
