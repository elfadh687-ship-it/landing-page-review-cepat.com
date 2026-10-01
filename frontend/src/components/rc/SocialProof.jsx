import { Stethoscope, Hotel, Wrench, ShoppingBag, Store } from "lucide-react";
import { MaskLines, FadeUp } from "./Reveal";
import { Marquee } from "./Marquee";
import { IMG, CATEGORIES } from "@/lib/content";

const zoom = "absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]";
const label = "glass absolute bottom-5 left-5 rounded-[28px] px-4 py-2.5 text-[13px] font-medium";

const PhotoTile = ({ src, alt, title, className, testId, delay }) => (
  <FadeUp delay={delay} className={`group relative min-h-[280px] overflow-hidden rounded-[28px] ${className}`} data-testid={testId}>
    <img src={src} alt={alt} loading="lazy" className={zoom} />
    <p className={label}>{title}</p>
  </FadeUp>
);

const MORE = [
  { icon: Stethoscope, t: "Clinic" },
  { icon: Hotel, t: "Hotel" },
  { icon: Wrench, t: "Workshop" },
  { icon: ShoppingBag, t: "Retail" },
  { icon: Store, t: "UMKM" },
];

const MoreTile = () => (
  <FadeUp delay={0.15} className="flex min-h-[280px] flex-col justify-between rounded-[28px] bg-white p-7 md:col-span-4" data-testid="social-more-tile">
    <p className="text-[21px] font-semibold leading-tight">Dan bisnis lain yang melayani pelanggan setiap hari.</p>
    <ul className="mt-6 flex flex-wrap gap-2">
      {MORE.map((m) => (
        <li key={m.t} className="inline-flex items-center gap-2 rounded-full border border-[var(--hairline)] px-3.5 py-2 text-[13px] font-medium transition-colors duration-200 hover:border-[var(--action-blue)] hover:text-[var(--action-blue)]">
          <m.icon className="h-3.5 w-3.5" />{m.t}
        </li>
      ))}
    </ul>
  </FadeUp>
);

export const SocialProof = () => (
  <section id="untuk-siapa" data-testid="social-section" className="overflow-hidden bg-[var(--mist)] py-[110px] md:py-[150px]">
    <div className="container-rc">
      <p className="kicker mb-5">Untuk siapa</p>
      <MaskLines testId="social-headline" className="large-heading max-w-5xl" lines={["Dibuat untuk bisnis yang ingin", "mempermudah pelanggan", <span className="text-[var(--steel)]">memberikan review.</span>]} />
      <div className="mt-14 grid grid-cols-1 gap-5 md:mt-20 md:auto-rows-[290px] md:grid-cols-12">
        <PhotoTile src={IMG.restaurant} alt="Device Reviewcepat di meja restoran" title="Restaurant" className="md:col-span-8" testId="social-tile-restaurant" />
        <PhotoTile src={IMG.coffee} alt="Device Reviewcepat di counter coffee shop" title="Coffee Shop" className="md:col-span-4 md:row-span-2" testId="social-tile-coffee" delay={0.1} />
        <PhotoTile src={IMG.salon} alt="Device Reviewcepat di meja resepsionis salon" title="Salon & Barbershop" className="md:col-span-4" testId="social-tile-salon" delay={0.05} />
        <MoreTile />
      </div>
    </div>
    <div className="mt-24 md:mt-32">
      <Marquee items={CATEGORIES} testId="categories-marquee" />
    </div>
  </section>
);
