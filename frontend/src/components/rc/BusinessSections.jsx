import { Fragment } from "react";
import { motion } from "framer-motion";
import { Handshake, Store, Users, Star, ArrowRight, ArrowDown, Tag, Layers, Megaphone } from "lucide-react";
import { MaskLines, FadeUp } from "./Reveal";
import { PrimaryButton } from "./Buttons";
import { ProductFrame } from "./ProductFrame";
import { IMG, EASE, waLink, PARTNER_MSG } from "@/lib/content";

export const BusinessHero = () => (
  <section data-testid="biz-hero-section" className="bg-white pb-[90px] pt-32 md:pt-40">
    <div className="container-rc">
      <FadeUp onLoad y={12}><p className="kicker mb-6">Reviewcepat Business</p></FadeUp>
      <MaskLines as="h1" onLoad delay={0.15} testId="biz-hero-headline" className="hero-display max-w-6xl" lines={["Raih Jutaan Rupiah", "dengan Bantu UMKM", <span className="text-[var(--steel)]">Mendapatkan Review Lebih Cepat</span>]} />
      <div className="mt-10 grid gap-8 md:grid-cols-12 md:items-end">
        <FadeUp onLoad delay={0.8} className="md:col-span-6">
          <p className="max-w-[32rem] text-[17px] text-[var(--slate)] md:text-[19px]" data-testid="biz-hero-supporting">Jual solusi Reviewcepat ke berbagai UMKM dan bantu mereka mempermudah pelanggan memberikan Google Review.</p>
          <p className="mt-5 text-[14px] font-semibold text-[var(--rc-blue)]">Reseller · White Label · Affiliate</p>
        </FadeUp>
        <FadeUp onLoad delay={0.95} className="md:col-span-6 md:flex md:justify-end">
          <PrimaryButton href={waLink(PARTNER_MSG)} testId="biz-hero-cta">Mulai Jadi Partner</PrimaryButton>
        </FadeUp>
      </div>
    </div>
    <div className="mt-20"><ProductFrame src={IMG.multi} alt="Koleksi device Reviewcepat untuk partner" caption="Satu produk, banyak bisnis yang bisa Anda bantu." testId="biz-hero-image" /></div>
  </section>
);

const FLOW = [{ icon: Handshake, t: "Partner" }, { icon: Layers, t: "Reviewcepat" }, { icon: Store, t: "UMKM" }, { icon: Star, t: "Customer Review" }];

export const BusinessOpportunity = () => (
  <section data-testid="biz-opportunity-section" className="bg-[var(--mist)] py-[110px] md:py-[150px]">
    <div className="container-rc">
      <p className="kicker mb-5">Peluangnya</p>
      <MaskLines testId="biz-opportunity-headline" className="large-heading max-w-5xl" lines={["Setiap bisnis punya pelanggan.", <span className="text-[var(--steel)]">Setiap pelanggan adalah peluang review.</span>]} />
      <FadeUp className="mt-8"><p className="max-w-2xl text-[17px] text-[var(--slate)]">Restoran, coffee shop, salon, klinik, hotel, bengkel, dan berbagai UMKM membutuhkan kepercayaan pelanggan.</p></FadeUp>
      <ol className="mt-16 flex flex-col items-stretch gap-3 md:flex-row md:items-center md:gap-0" data-testid="biz-flow">
        {FLOW.map((f, i) => (
          <Fragment key={f.t}>
            <motion.li initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease: EASE, delay: i * 0.18 }} className={`flex flex-1 items-center gap-3 rounded-[28px] p-6 ${i === FLOW.length - 1 ? "bg-[var(--action-blue)] text-white" : "bg-white"}`}>
              <f.icon className="h-5 w-5" /><span className="text-[17px] font-semibold">{f.t}</span>
            </motion.li>
            {i < FLOW.length - 1 && (
              <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.18 + 0.3 }} className="grid place-items-center px-3 text-[var(--steel)]">
                <ArrowRight className="hidden h-5 w-5 md:block" /><ArrowDown className="h-5 w-5 md:hidden" />
              </motion.span>
            )}
          </Fragment>
        ))}
      </ol>
      <FadeUp className="mt-20"><p className="feature-heading max-w-3xl" data-testid="biz-opportunity-closing">Anda membawa solusinya. <span className="text-[var(--action-blue)]">Reviewcepat menyediakan produknya.</span></p></FadeUp>
    </div>
  </section>
);

const MODELS = [
  { icon: Tag, name: "Reseller", tag: "Jual. Dapatkan Margin.", d: "Jual Reviewcepat ke bisnis di jaringan Anda.", msg: "Halo Reviewcepat, saya tertarik menjadi Reseller." },
  { icon: Layers, name: "White Label", tag: "Bangun Brand Anda Sendiri.", d: "Tawarkan solusi ini dengan brand Anda sendiri.", msg: "Halo Reviewcepat, saya tertarik dengan program White Label." },
  { icon: Megaphone, name: "Affiliate", tag: "Rekomendasikan. Dapatkan Komisi.", d: "Promosikan Reviewcepat dan dapatkan komisi sesuai ketentuan affiliate yang berlaku.", msg: "Halo Reviewcepat, saya tertarik menjadi Affiliate." },
];

const ModelCard = ({ m, i }) => (
  <FadeUp delay={i * 0.1} className="group flex min-h-[360px] flex-col justify-between rounded-[28px] bg-white p-8 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 md:p-9" data-testid={`biz-model-${m.name.toLowerCase().replace(" ", "-")}`}>
    <div>
      <div className="flex items-center justify-between">
        <span className="grid h-11 w-11 place-items-center rounded-full bg-[var(--soft-blue)] text-[var(--action-blue)]"><m.icon className="h-5 w-5" /></span>
        <span className="text-[13px] tabular-nums text-[var(--steel)]">0{i + 1}</span>
      </div>
      <p className="mt-10 text-[13px] font-medium text-[var(--slate)]">{m.name}</p>
      <h3 className="mt-2 text-[28px] font-semibold leading-[1.1] tracking-[-0.02em]">{m.tag}</h3>
      <p className="mt-4 text-[15px] text-[var(--slate)]">{m.d}</p>
    </div>
    <a href={waLink(m.msg)} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-1.5 text-[15px] font-medium text-[var(--rc-blue)]">
      Pelajari {m.name}<ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
    </a>
  </FadeUp>
);

export const BusinessModels = () => (
  <section data-testid="biz-models-section" className="bg-white py-[110px] md:py-[150px]">
    <div className="container-rc">
      <p className="kicker mb-5">Model kemitraan</p>
      <MaskLines testId="biz-models-headline" className="large-heading" lines={["Pilih cara Anda menghasilkan."]} />
      <div className="mt-14 grid gap-5 rounded-[36px] bg-[var(--mist)] p-3 md:grid-cols-3 md:p-4">
        {MODELS.map((m, i) => <ModelCard key={m.name} m={m} i={i} />)}
      </div>
      <p className="mt-6 flex items-center gap-2 text-[13px] text-[var(--steel)]"><Users className="h-4 w-4" />Detail margin dan komisi dijelaskan langsung oleh tim kami. Penghasilan bergantung pada usaha masing-masing partner.</p>
    </div>
  </section>
);
