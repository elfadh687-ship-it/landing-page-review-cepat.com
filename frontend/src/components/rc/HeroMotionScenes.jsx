import { useEffect } from "react";
import { motion, animate, useMotionValue, useTransform } from "framer-motion";
import { Star, Check, TrendingUp, Wifi, Nfc } from "lucide-react";
import { IMG, EASE, HERO_MOTION as T } from "@/lib/content";

export const DUR = 4;
export const at = (delay, duration = 0.5) => ({ delay, duration, ease: EASE });
const pop = (delay) => ({ type: "spring", stiffness: 420, damping: 18, delay });

/* Keyframe helper: visible between s..e seconds inside the 4s timeline */
export const windowKF = (s, e) => {
  const a = Math.max(s, 0.001) / DUR;
  const b = Math.min(e, DUR - 0.05) / DUR;
  return {
    initial: { opacity: 0, y: 8 },
    animate: { opacity: [0, 0, 1, 1, 0, 0], y: [8, 8, 0, 0, -8, -8] },
    transition: { duration: DUR, times: [0, a, Math.min(a + 0.06, b - 0.02), Math.max(b - 0.05, a + 0.07), b, 1], ease: ["linear", "easeOut", "linear", "easeIn", "linear"] },
  };
};

export const Counter = ({ from, to, start, duration = 0.9, decimals = 0, className, format, ease = EASE }) => {
  const mv = useMotionValue(from);
  const text = useTransform(mv, (v) => (format ? format(v) : v.toFixed(decimals)));
  useEffect(() => {
    const ctrl = animate(mv, to, { delay: start, duration, ease });
    return () => ctrl.stop();
  }, [mv, to, start, duration, ease]);
  return <motion.span className={className}>{text}</motion.span>;
};

const GoogleWordmark = () => (
  <span className="text-[2.2cqw] font-semibold tracking-[-0.03em]" aria-hidden>
    <span className="text-[#4285F4]">G</span><span className="text-[#EA4335]">o</span><span className="text-[#FBBC04]">o</span>
    <span className="text-[#4285F4]">g</span><span className="text-[#34A853]">l</span><span className="text-[#EA4335]">e</span>
  </span>
);

const Stars = ({ start, step = 0.12, size = "3.4cqw", gap = "4%" }) => (
  <div className="flex items-center" style={{ gap }}>
    {[0, 1, 2, 3, 4].map((i) => (
      <motion.span key={i} initial={{ scale: 0, rotate: -40 }} animate={{ scale: 1, rotate: 0 }} transition={pop(start + i * step)} className="inline-flex">
        <Star style={{ width: size, height: size }} fill="#FBBC04" stroke="none" />
      </motion.span>
    ))}
  </div>
);

/* Scene A — Device card being tapped */
export const DeviceCard = () => (
  <motion.div
    className="absolute left-[6%] top-[18%] w-[44%] will-change-transform"
    style={{ rotate: -6 }}
    animate={{ opacity: [0, 1, 1, 0.45, 0.45], scale: [0.9, 1, 1, 0.9, 0.9], x: ["0%", "0%", "0%", "-14%", "-14%"] }}
    transition={{ duration: DUR, times: [0, 0.1, 1.1 / DUR, 1.5 / DUR, 1], ease: [EASE, "linear", EASE, "linear"] }}
    data-testid="hero-motion-device"
  >
    <div className="absolute inset-0 translate-y-[4%] rounded-[6%] bg-black/25 blur-xl" aria-hidden />
    <img src={IMG.device} alt="" draggable={false} className="relative w-full select-none rounded-[6%] ring-1 ring-white/10" />
  </motion.div>
);

export const TapRipples = () => (
  <div className="pointer-events-none absolute left-[46%] top-[58%] z-20 h-0 w-0" aria-hidden>
    {[0, 1, 2].map((i) => (
      <motion.span
        key={i}
        className="absolute -left-[6cqw] -top-[6cqw] h-[12cqw] w-[12cqw] rounded-full border-[0.35cqw] border-[#5ea8ff] shadow-[0_0_24px_rgba(0,113,227,0.6)]"
        initial={{ scale: 0.2, opacity: 0 }}
        animate={{ scale: [0.2, 2.4], opacity: [0, 0.9, 0] }}
        transition={{ delay: 0.72 + i * 0.14, duration: 0.9, ease: "easeOut" }}
      />
    ))}
  </div>
);

export const TapChip = () => (
  <motion.div className="absolute left-[52%] top-[22%] z-20" {...windowKF(0.8, 1.25)} data-testid="hero-motion-tap-chip">
    <span className="glass inline-flex items-center gap-[1.2cqw] rounded-full bg-white/90 px-[2.4cqw] py-[1.2cqw] text-[2cqw] font-medium text-[var(--ink)]">
      <span className="grid h-[3.4cqw] w-[3.4cqw] place-items-center rounded-full bg-[var(--action-blue)] text-white"><Wifi className="h-[60%] w-[60%]" /></span>
      {T.tapChip}
    </span>
  </motion.div>
);

/* Scene B — Phone + Google review sheet */
export const Phone = () => (
  <motion.div
    className="absolute left-[37%] top-[12%] z-10 aspect-[9/19] w-[26%] will-change-transform"
    animate={{
      x: ["70%", "0%", "0%", "0%", "0%", "-95%", "-95%"],
      y: ["130%", "26%", "26%", "0%", "0%", "0%", "0%"],
      scale: [0.95, 0.95, 0.95, 1.08, 1.08, 1, 1],
      rotate: [8, -4, -4, 0, 0, 0, 0],
    }}
    transition={{ duration: DUR, times: [0, 0.65 / DUR, 1.1 / DUR, 1.5 / DUR, 2.1 / DUR, 2.5 / DUR, 1], ease: [EASE, "linear", EASE, "linear", EASE, "linear"] }}
    data-testid="hero-motion-phone"
  >
    <div className="relative h-full w-full rounded-[18%/8.5%] bg-[#1c1c1f] p-[5%] shadow-[0_40px_70px_-20px_rgba(0,0,0,0.45)] ring-1 ring-black/10">
      <div className="relative h-full w-full overflow-hidden rounded-[14%/6.6%] bg-[#0f0f11]">
        <div className="absolute left-1/2 top-[2.4%] z-20 h-[2.4%] w-[34%] -translate-x-1/2 rounded-full bg-[#1c1c1f]" />
        <motion.div className="absolute inset-0 grid place-items-center text-[#5ea8ff]" animate={{ opacity: [1, 1, 0] }} transition={{ duration: DUR, times: [0, 0.95 / DUR, 1.1 / DUR], ease: "linear" }}>
          <motion.span className="inline-flex" animate={{ scale: [1, 1.2, 1], opacity: [0.55, 1, 0.55] }} transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }}>
            <Nfc className="h-[5cqw] w-[5cqw]" strokeWidth={1.6} />
          </motion.span>
        </motion.div>
        <ReviewSheet />
      </div>
    </div>
  </motion.div>
);

const ReviewSheet = () => (
  <motion.div className="absolute inset-0 flex flex-col bg-white px-[9%] pt-[16%]" initial={{ y: "100%" }} animate={{ y: "0%" }} transition={at(1.0, 0.65)}>
    <GoogleWordmark />
    <p className="mt-[10%] text-[1.9cqw] font-semibold leading-tight text-[var(--ink)]">{T.business}</p>
    <p className="text-[1.35cqw] text-[var(--slate)]">{T.businessSub}</p>
    <div className="mt-[9%]"><Stars start={1.45} size="3.2cqw" /></div>
    <div className="mt-[9%] space-y-[6%]">
      {[88, 72, 50].map((w, i) => (
        <motion.div key={i} className="h-[0.55cqw] rounded-full bg-[var(--control)]" style={{ width: `${w}%`, originX: 0 }} initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={at(1.65 + i * 0.08, 0.35)} />
      ))}
    </div>
    <div className="relative mt-auto mb-[12%] h-[8%]">
      <motion.div className="absolute inset-0 grid place-items-center rounded-full bg-[var(--action-blue)] text-[1.45cqw] font-medium text-white" initial={{ opacity: 0, y: 6 }} animate={{ opacity: [0, 1, 1, 0], y: [6, 0, 0, 0], scale: [1, 1, 0.96, 0.96] }} transition={{ duration: DUR, times: [0, 1.9 / DUR, 2.0 / DUR, 2.08 / DUR], ease: "linear" }}>
        {T.submit}
      </motion.div>
      <motion.div className="absolute inset-0 grid place-items-center rounded-full bg-[#1e8e3e] text-[1.45cqw] font-medium text-white" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={pop(2.06)} data-testid="hero-motion-sent">
        <span className="inline-flex items-center gap-[0.8cqw]"><Check className="h-[1.6cqw] w-[1.6cqw]" strokeWidth={3} />{T.sent}</span>
      </motion.div>
    </div>
  </motion.div>
);

/* Scene C/D — Business dashboard */
const BARS = [28, 36, 33, 46, 58, 74, 92];
export const Dashboard = () => (
  <motion.div
    className="absolute right-[5%] top-[12%] z-10 w-[46%] rounded-[3.6cqw] bg-white p-[3.6cqw] shadow-[0_40px_80px_-30px_rgba(0,0,0,0.35)] ring-1 ring-black/5"
    initial={{ opacity: 0, x: 60, scale: 0.96 }}
    animate={{ opacity: 1, x: 0, scale: 1 }}
    transition={at(2.1, 0.7)}
    data-testid="hero-motion-dashboard"
  >
    <div className="flex items-center justify-between">
      <span className="text-[1.5cqw] font-medium text-[var(--slate)]">{T.panelTitle}</span>
      <span className="h-[1.4cqw] w-[1.4cqw] rounded-full bg-[#34A853]" />
    </div>
    <div className="mt-[4%] flex items-baseline gap-[2%]">
      <Counter from={128} to={342} start={2.3} className="text-[7.4cqw] font-semibold leading-none tracking-[-0.04em] text-[var(--ink)] tabular-nums" />
      <span className="text-[1.7cqw] text-[var(--slate)]">{T.reviewsLabel}</span>
    </div>
    <div className="mt-[4%] flex items-center gap-[3%]">
      <Counter from={4.3} to={4.9} decimals={1} start={2.35} className="text-[2.4cqw] font-semibold text-[var(--ink)] tabular-nums" />
      <Stars start={2.35} step={0.07} size="2cqw" gap="2%" />
    </div>
    <div className="mt-[8%] flex h-[12cqw] items-end gap-[3.5%]">
      {BARS.map((h, i) => (
        <motion.div key={i} className="flex-1 rounded-t-[0.6cqw] bg-[var(--action-blue)]" style={{ height: `${h}%`, originY: 1, opacity: 0.35 + (i / BARS.length) * 0.65 }} initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={at(2.4 + i * 0.07, 0.55)} />
      ))}
    </div>
    <motion.div className="mt-[6%] flex items-center justify-between border-t border-[var(--control)] pt-[5%]" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={at(2.95, 0.45)} data-testid="hero-motion-sales">
      <span className="text-[1.7cqw] font-medium text-[var(--ink)]">{T.salesLabel}</span>
      <span className="inline-flex items-center gap-[0.8cqw] rounded-full bg-[#e6f4ea] px-[1.8cqw] py-[0.7cqw] text-[1.9cqw] font-semibold text-[#1e8e3e]">
        <TrendingUp className="h-[2cqw] w-[2cqw]" strokeWidth={2.5} />
        <Counter from={0} to={38} start={3.0} duration={0.6} format={(v) => `+${Math.round(v)}%`} className="tabular-nums" />
      </span>
    </motion.div>
  </motion.div>
);

const PEOPLE = [["AR", "#0071e3"], ["DW", "#1e8e3e"], ["SN", "#EA4335"], ["MK", "#FBBC04"]];
export const CustomersBadge = () => (
  <motion.div className="glass absolute bottom-[14%] left-[6%] z-20 flex items-center gap-[2.4cqw] rounded-[2.6cqw] bg-white/92 px-[2.6cqw] py-[1.8cqw] shadow-[0_20px_40px_-20px_rgba(0,0,0,0.3)]" initial={{ opacity: 0, scale: 0.7, y: 16 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={pop(3.1)} data-testid="hero-motion-customers">
    <div className="flex">
      {PEOPLE.map(([n, c], i) => (
        <motion.span key={n} className="-ml-[1cqw] first:ml-0 grid h-[5cqw] w-[5cqw] place-items-center rounded-full text-[1.6cqw] font-semibold text-white ring-[0.3cqw] ring-white" style={{ background: c }} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={pop(3.2 + i * 0.08)}>
          {n}
        </motion.span>
      ))}
    </div>
    <div className="leading-tight">
      <p className="text-[1.9cqw] font-semibold text-[var(--ink)]">{T.customersLabel}</p>
      <p className="text-[1.5cqw] text-[#1e8e3e]">{T.customersDelta}</p>
    </div>
  </motion.div>
);
