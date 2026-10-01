import { motion } from "framer-motion";
import { Search, Store, MousePointerClick, ArrowDown } from "lucide-react";
import { EASE } from "@/lib/content";

const BEFORE = [
  { icon: Search, t: "Cari nama bisnis" },
  { icon: Store, t: "Buka profil" },
  { icon: MousePointerClick, t: "Cari tombol review" },
];

const BeforeRow = ({ s, i }) => (
  <li className="flex items-center gap-4 py-4" data-testid={`compare-before-${i}`}>
    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white text-[var(--slate)]">
      <s.icon className="h-4 w-4" />
    </span>
    <span className="relative text-[19px] font-medium text-[var(--ink)]/70 md:text-[21px]">
      {s.t}
      <motion.span
        className="absolute left-0 top-1/2 h-[1.5px] w-full origin-left bg-[var(--ink)]/60"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 1 }}
        transition={{ duration: 0.7, ease: EASE, delay: 0.5 + i * 0.25 }}
      />
    </span>
  </li>
);

export const Compare = () => (
  <div className="grid gap-5 md:grid-cols-2">
    <div className="rounded-[28px] bg-[var(--mist)] p-8 md:p-10" data-testid="compare-before-card">
      <p className="text-[13px] font-medium text-[var(--steel)]">Tanpa Reviewcepat</p>
      <ol className="mt-6 divide-y divide-[var(--hairline)]/70">
        {BEFORE.map((s, i) => <BeforeRow key={s.t} s={s} i={i} />)}
      </ol>
      <p className="mt-8 text-[14px] text-[var(--slate)]">Lebih banyak langkah, lebih banyak alasan untuk berhenti.</p>
    </div>
    <div className="relative flex flex-col justify-between overflow-hidden rounded-[28px] bg-[var(--soft-blue)] p-8 md:p-10" data-testid="compare-after-card">
      <p className="text-[13px] font-medium text-[var(--rc-blue)]">Dengan Reviewcepat</p>
      <div className="my-8 flex flex-col items-start">
        <span className="text-[clamp(64px,8vw,112px)] font-semibold leading-none tracking-[-0.045em]">TAP</span>
        <motion.span animate={{ y: [0, 10, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }} className="my-3 text-[var(--action-blue)]">
          <ArrowDown className="h-9 w-9" strokeWidth={1.6} />
        </motion.span>
        <span className="text-[clamp(64px,8vw,112px)] font-semibold leading-none tracking-[-0.045em] text-[var(--action-blue)]">REVIEW</span>
      </div>
      <p className="text-[14px] text-[var(--slate)]">Halaman Google Review bisnis Anda langsung terbuka di smartphone pelanggan.</p>
    </div>
  </div>
);
