import { useEffect } from "react";
import { BusinessHero, BusinessOpportunity, BusinessModels } from "@/components/rc/BusinessSections";
import { FinalCTA } from "@/components/rc/FinalCTA";
import { IMG, waLink, PARTNER_MSG } from "@/lib/content";

const PATHS = ["Reseller", "White Label", "Affiliate"];

export default function BusinessPage() {
  useEffect(() => { document.title = "Reviewcepat Business — Raih Peluang Penghasilan dari Solusi Review Google"; }, []);
  return (
    <main data-testid="business-page">
      <BusinessHero />
      <BusinessOpportunity />
      <BusinessModels />
      <FinalCTA
        testId="biz-final-cta"
        kicker="Jadi partner"
        lines={["Punya jaringan UMKM?", <span className="text-[var(--steel)]">Jadikan jaringan Anda sebagai peluang penghasilan.</span>]}
        cta="Mulai Jadi Partner"
        href={waLink(PARTNER_MSG)}
        image={IMG.salon}
        alt="Device Reviewcepat di bisnis salon"
      >
        <ul className="flex flex-wrap justify-center gap-2">
          {PATHS.map((p) => (
            <li key={p}>
              <a href={waLink(`Halo Reviewcepat, saya tertarik dengan program ${p}.`)} target="_blank" rel="noopener noreferrer" data-testid={`biz-path-${p.toLowerCase().replace(" ", "-")}`} className="inline-block rounded-full border border-[var(--hairline)] px-5 py-2.5 text-[14px] font-medium transition-colors duration-200 hover:border-[var(--action-blue)] hover:text-[var(--action-blue)]">
                {p}
              </a>
            </li>
          ))}
        </ul>
      </FinalCTA>
    </main>
  );
}
