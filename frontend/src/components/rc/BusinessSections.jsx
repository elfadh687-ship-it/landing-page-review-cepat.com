import { Fragment } from "react";
import { motion } from "framer-motion";
import { Handshake, Store, Users, Star, ArrowRight, ArrowDown, Tag, Layers, Megaphone, Check, MessageCircle } from "lucide-react";
import { MaskLines, FadeUp } from "./Reveal";
import { PrimaryButton } from "./Buttons";
import { ProductFrame } from "./ProductFrame";
import { IMG, EASE, waLink, PARTNER_MSG, PARTNER_MODELS, PARTNER_HELP } from "@/lib/content";

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

const MODEL_ICONS = { reseller: Tag, "white-label": Layers, affiliate: Megaphone };

const ModelCard = ({ m, i }) => {
  const Icon = MODEL_ICONS[m.key];
  return (
    <FadeUp delay={i * 0.1} className="group flex flex-col rounded-[28px] bg-white p-8 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 md:p-9" data-testid={`biz-model-${m.key}`}>
      <div className="flex items-center justify-between">
        <span className="grid h-11 w-11 place-items-center rounded-full bg-[var(--soft-blue)] text-[var(--action-blue)]"><Icon className="h-5 w-5" /></span>
        <span className="text-[13px] tabular-nums text-[var(--steel)]">0{i + 1}</span>
      </div>
      <p className="mt-10 text-[13px] font-medium uppercase tracking-[0.06em] text-[var(--rc-blue)]">{m.name}</p>
      <h3 className="mt-2 text-[26px] font-semibold leading-[1.1] tracking-[-0.02em] md:text-[28px]">{m.tag}</h3>
      <p className="mt-4 text-[15px] text-[var(--slate)]" data-testid={`biz-model-${m.key}-fit`}>{m.fit}</p>
      <ul className="mt-7 flex-1 space-y-3 border-t border-[var(--control)] pt-7" data-testid={`biz-model-${m.key}-points`}>
        {m.points.map((p) => (
          <li key={p} className="flex items-start gap-3 text-[15px] leading-[1.45] text-[var(--ink)]">
            <Check className="mt-[3px] h-4 w-4 shrink-0 text-[var(--action-blue)]" strokeWidth={2.5} />
            <span>{p}</span>
          </li>
        ))}
      </ul>
      <div className="mt-7 rounded-[20px] bg-[var(--soft-blue)] px-5 py-4" data-testid={`biz-model-${m.key}-highlight`}>
        <p className="text-[12px] font-medium uppercase tracking-[0.06em] text-[var(--rc-blue)]">{m.highlight.label}</p>
        <p className="mt-1 text-[19px] font-semibold tracking-[-0.02em] text-[var(--ink)]">{m.highlight.value}</p>
        <p className="mt-0.5 text-[13px] text-[var(--slate)]">{m.highlight.sub}</p>
      </div>
      <a href={waLink(m.msg)} target="_blank" rel="noopener noreferrer" data-testid={`biz-model-${m.key}-cta`} className="mt-auto inline-flex items-center gap-1.5 pt-8 text-[15px] font-medium text-[var(--rc-blue)]">
        Mulai jadi {m.name}<ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      </a>
    </FadeUp>
  );
};

export const BusinessModels = () => (
  <section data-testid="biz-models-section" className="bg-white py-[110px] md:py-[150px]">
    <div className="container-rc">
      <p className="kicker mb-5">Model kemitraan</p>
      <MaskLines testId="biz-models-headline" className="large-heading" lines={["Pilih cara Anda menghasilkan."]} />
      <div className="mt-14 grid gap-5 rounded-[36px] bg-[var(--mist)] p-3 md:grid-cols-3 md:p-4">
        {PARTNER_MODELS.map((m, i) => <ModelCard key={m.key} m={m} i={i} />)}
      </div>
      <FadeUp className="mt-6 flex flex-col gap-5 rounded-[28px] border border-[var(--control)] px-7 py-6 md:flex-row md:items-center md:justify-between" data-testid="biz-models-help">
        <div className="flex items-start gap-3">
          <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[var(--soft-blue)] text-[var(--action-blue)]"><MessageCircle className="h-4 w-4" /></span>
          <div>
            <p className="text-[17px] font-semibold text-[var(--ink)]">{PARTNER_HELP.text}</p>
            <p className="mt-1 text-[15px] text-[var(--slate)]">{PARTNER_HELP.sub}</p>
          </div>
        </div>
        <PrimaryButton href={waLink(PARTNER_HELP.msg)} testId="biz-models-help-cta" className="shrink-0">{PARTNER_HELP.cta}</PrimaryButton>
      </FadeUp>
      <p className="mt-6 flex items-center gap-2 text-[13px] text-[var(--steel)]"><Users className="h-4 w-4" />Harga dan komisi dapat berubah sewaktu-waktu. Penghasilan bergantung pada usaha masing-masing partner.</p>
    </div>
  </section>
);
