import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { ChevronBand } from "@/components/ChevronBand";
import { ProductGallery } from "@/components/ProductGallery";
import { TrustBar } from "@/components/TrustBar";
import { Services } from "@/components/Services";
import { Process } from "@/components/Process";
import { CostOfDowntime } from "@/components/CostOfDowntime";
import { About } from "@/components/About";
import { Stats } from "@/components/Stats";
import { WhyUs } from "@/components/WhyUs";
import { Products } from "@/components/Products";
import { Coverage } from "@/components/Coverage";
import { FAQ } from "@/components/FAQ";
import { CTAFinal } from "@/components/CTAFinal";
import { Contact } from "@/components/Contact";
import { Ticker } from "@/components/Ticker";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Suhina · Reparación de latiguillos hidráulicos en Navarra · 24/7" },
      {
        name: "description",
        content:
          "Reparación y fabricación de latiguillos hidráulicos a pie de máquina en toda Navarra. Servicio 24/7, respuesta en menos de 30 min.",
      },
    ],
  }),
});

function Index() {
  return (
    <main className="bg-background text-foreground">
      <Nav />
      <Hero />
      <ProductGallery />
      <ChevronBand />
      <TrustBar />
      <Services />
      <ChevronBand />
      <Process />
      <CostOfDowntime />
      <About />
      <Stats />
      <WhyUs />
      <Products />
      <ChevronBand />
      <Coverage />
      <FAQ />
      <CTAFinal />
      <Contact />
      <Ticker />
      <ChevronBand />
      <Footer />
    </main>
  );
}
