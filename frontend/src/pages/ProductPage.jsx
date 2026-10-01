import { useEffect } from "react";
import { Hero } from "@/components/rc/Hero";
import { Agitation } from "@/components/rc/Agitation";
import { Solution } from "@/components/rc/Solution";
import { SocialProof } from "@/components/rc/SocialProof";
import { FinalCTA } from "@/components/rc/FinalCTA";
import { TapSequence } from "@/components/rc/TapSequence";
import { FAQ } from "@/components/rc/FAQ";
import { IMG, waLink } from "@/lib/content";

export default function ProductPage() {
  useEffect(() => { document.title = "Reviewcepat — Dapatkan Review Google dengan 1 Tap"; }, []);
  return (
    <main data-testid="product-page">
      <Hero />
      <Agitation />
      <Solution />
      <SocialProof />
      <FinalCTA
        id="pesan"
        testId="final-cta"
        kicker="Mulai hari ini"
        lines={["Sudah punya pelanggan yang puas?", <span className="text-[var(--steel)]">Sekarang, permudah mereka memberikan review.</span>]}
        cta="Pesan Sekarang"
        href={waLink()}
        image={IMG.multi}
        alt="Koleksi device Reviewcepat"
      >
        <TapSequence />
      </FinalCTA>
      <FAQ />
    </main>
  );
}
