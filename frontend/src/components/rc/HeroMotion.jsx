import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { RotateCcw } from "lucide-react";
import { EASE, HERO_MOTION as T } from "@/lib/content";
import { DUR, windowKF, Counter, DeviceCard, TapRipples, TapChip, Phone, Dashboard, CustomersBadge } from "./HeroMotionScenes";

const WINDOWS = [[0, 1.1], [1.1, 2.1], [2.1, 3.0], [3.0, 3.95]];

const Captions = () => (
  <div className="pointer-events-none absolute bottom-[6.5%] left-[6%] right-[6%] h-[6cqw]" aria-live="polite">
    {T.captions.map((c, i) => (
      <motion.p key={i} className="absolute inset-x-0 bottom-0 flex items-center gap-[1.6cqw] text-[max(11px,2.3cqw)] font-medium text-white/90" {...windowKF(...WINDOWS[i])} data-testid={`hero-motion-caption-${i + 1}`}>
        <span className="grid h-[3.6cqw] w-[3.6cqw] shrink-0 place-items-center rounded-full bg-[var(--action-blue)] text-[1.7cqw] font-semibold text-white">{i + 1}</span>
        {c}
      </motion.p>
    ))}
  </div>
);

const Chrome = ({ cycle }) => (
  <>
    <div className="absolute left-[5%] top-[5%] z-30 flex items-center gap-[1.4cqw] text-[max(10px,1.9cqw)] font-medium text-white/80" data-testid="hero-motion-label">
      <span className="relative flex h-[1.5cqw] w-[1.5cqw]">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--action-blue)] opacity-70" />
        <span className="relative inline-flex h-full w-full rounded-full bg-[var(--action-blue)]" />
      </span>
      {T.label}
    </div>
    <div className="absolute right-[5%] top-[5%] z-30 flex items-center gap-[1.6cqw] text-[max(10px,1.9cqw)] font-medium tabular-nums text-white/70" data-testid="hero-motion-timecode">
      <Counter key={cycle} from={0} to={DUR} start={0} duration={DUR} ease="linear" format={(v) => `0:0${Math.min(DUR, Math.floor(v))}`} />
      <RotateCcw className="h-[2.2cqw] w-[2.2cqw]" />
    </div>
    <div className="absolute inset-x-0 bottom-0 z-30 h-[0.6cqw] bg-white/10">
      <motion.div key={cycle} className="h-full bg-[var(--action-blue)]" style={{ originX: 0 }} initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: DUR, ease: "linear" }} data-testid="hero-motion-progress" />
    </div>
  </>
);

export const HeroMotion = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.3 });
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    if (!inView) return undefined;
    setCycle((c) => c + 1);
    const id = setInterval(() => setCycle((c) => c + 1), DUR * 1000);
    return () => clearInterval(id);
  }, [inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1.2, ease: EASE, delay: 0.35 }}
      className="relative mx-auto aspect-square w-full max-w-[580px] overflow-hidden rounded-[28px] bg-[#0b0b0d] shadow-[0_60px_120px_-40px_rgba(0,0,0,0.5)] ring-1 ring-black/10 [container-type:inline-size]"
      data-testid="hero-motion-video"
      role="img"
      aria-label="Animasi 4 detik: pelanggan tap HP ke device Reviewcepat, Google Review terbuka, ulasan dan rating naik, penjualan ikut naik."
    >
      <div className="pointer-events-none absolute inset-0 [background-image:radial-gradient(rgba(255,255,255,0.09)_1px,transparent_1.6px)] [background-size:22px_22px] [mask-image:radial-gradient(circle_at_50%_45%,black_30%,transparent_80%)]" aria-hidden />
      <div className="pointer-events-none absolute left-1/2 top-[40%] h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--action-blue)]/25 blur-[90px]" aria-hidden />
      {cycle > 0 && (
        <motion.div key={cycle} className="absolute inset-0" animate={{ opacity: [1, 1, 0] }} transition={{ duration: DUR, times: [0, 0.965, 1], ease: "linear" }} data-testid="hero-motion-scene">
          <DeviceCard />
          <TapRipples />
          <TapChip />
          <Phone />
          <Dashboard />
          <CustomersBadge />
          <Captions />
        </motion.div>
      )}
      <Chrome cycle={cycle} />
    </motion.div>
  );
};
