import { motion } from "framer-motion";
import { MaskLines, FadeUp } from "./Reveal";
import { PrimaryButton, SecondaryButton } from "./Buttons";
import { DeviceStage } from "./DeviceStage";
import { ProductFrame } from "./ProductFrame";
import { scrollToId } from "./SmoothScroll";
import { IMG, waLink } from "@/lib/content";

export const Hero = () => (
  <section id="produk" data-testid="hero-section" className="relative overflow-hidden bg-white pb-[90px] pt-28 md:pt-32">
    <div className="container-rc grid items-center gap-14 lg:min-h-[calc(100vh-8rem)] lg:grid-cols-12 lg:gap-8">
      <div className="relative z-10 lg:col-span-6">
        <FadeUp onLoad delay={0.05} y={12}>
          <p className="kicker mb-6 flex items-center gap-2" data-testid="hero-kicker">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--action-blue)] opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--action-blue)]" />
            </span>
            Reviewcepat NFC + QR
          </p>
        </FadeUp>
        <MaskLines
          as="h1"
          onLoad
          delay={0.15}
          testId="hero-headline"
          className="hero-display text-[var(--ink)]"
          lines={["Dapatkan", "Review Google", <>dengan <span className="text-[var(--action-blue)]">1 Tap</span></>]}
        />
        <FadeUp onLoad delay={0.75}>
          <p className="mt-7 max-w-[30rem] text-[17px] leading-[1.47] text-[var(--slate)] md:text-[19px]" data-testid="hero-supporting">
            Buat pelanggan lebih mudah memberikan review setelah mendapatkan pengalaman terbaik dari bisnis Anda.
          </p>
        </FadeUp>
        <FadeUp onLoad delay={0.9}>
          <p className="mt-5 text-[14px] font-medium text-[var(--ink)]" data-testid="hero-microcopy">
            Tap NFC. Buka Google Review. Selesai.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <PrimaryButton href={waLink()} testId="hero-cta-pesan">Pesan Sekarang</PrimaryButton>
            <SecondaryButton onClick={() => scrollToId("cara-kerja")} testId="hero-cta-cara-kerja">Lihat Cara Kerjanya</SecondaryButton>
          </div>
        </FadeUp>
      </div>
      <div className="lg:col-span-6">
        <DeviceStage />
      </div>
    </div>
    <motion.div className="mt-20 md:mt-28">
      <ProductFrame src={IMG.hero} alt="Device Reviewcepat berdiri di meja bersama smartphone" caption="Letakkan di meja. Siap di-tap kapan saja." testId="hero-product-frame" />
    </motion.div>
  </section>
);
