import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MaskLines, FadeUp } from "./Reveal";
import { EASE } from "@/lib/content";

const STEPS = [
  { n: "01", t: "Pelanggan puas" },
  { n: "02", t: "Mau memberikan review" },
  { n: "03", t: "“Nanti saja…”", tone: "italic text-[var(--slate)]" },
  { n: "04", t: "Lupa.", fade: true },
];

const Step = ({ s, i }) => (
  <motion.li
    initial={{ opacity: 0, x: 24 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, amount: 0.8 }}
    transition={{ duration: 0.8, ease: EASE, delay: i * 0.05 }}
    className="relative flex items-baseline gap-6 py-7 pl-10 md:py-9 md:pl-14"
    data-testid={`agitation-step-${s.n}`}
  >
    <span className="absolute left-[-5px] top-1/2 h-[10px] w-[10px] -translate-y-1/2 rounded-full border-2 border-white bg-[var(--ink)]" />
    <span className="w-8 shrink-0 text-[13px] font-medium tabular-nums text-[var(--steel)]">{s.n}</span>
    <motion.span
      className={`large-heading ${s.tone || ""}`}
      initial={false}
      whileInView={s.fade ? { opacity: 0.18, filter: "blur(5px)" } : {}}
      viewport={{ once: true, amount: 1 }}
      transition={{ duration: 1.6, delay: 0.9, ease: EASE }}
    >
      {s.t}
    </motion.span>
  </motion.li>
);

export const Agitation = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 55%"] });
  const line = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="masalah" data-testid="agitation-section" className="bg-[var(--mist)] py-[110px] md:py-[150px]">
      <div className="container-rc grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <p className="kicker mb-5">Masalahnya</p>
            <MaskLines testId="agitation-headline" className="feature-heading" lines={["Pelanggan puas,", "tapi review Google", "Anda masih sedikit?"]} />
          </div>
        </div>
        <div className="lg:col-span-7">
          <ol ref={ref} className="relative border-l border-[var(--hairline)]">
            <motion.span style={{ scaleY: line }} className="absolute -left-px top-0 h-full w-px origin-top bg-[var(--ink)]" aria-hidden />
            {STEPS.map((s, i) => <Step key={s.n} s={s} i={i} />)}
          </ol>
        </div>
      </div>
      <FadeUp className="container-rc mt-24 md:mt-32">
        <p className="max-w-[56rem] text-[clamp(26px,3.2vw,44px)] font-semibold leading-[1.12] tracking-[-0.025em]" data-testid="agitation-closing">
          Setiap langkah tambahan bisa menjadi <span className="text-[var(--steel)]">alasan untuk menunda review.</span>
        </p>
      </FadeUp>
    </section>
  );
};
