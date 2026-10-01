import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

const WORDS = ["TAP", "REVIEW", "SELESAI"];

export const TapSequence = () => {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setActive((a) => (a + 1) % WORDS.length), 1300);
    return () => clearInterval(id);
  }, []);
  return (
    <p className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[clamp(22px,3vw,34px)] font-semibold tracking-[-0.02em]" data-testid="tap-sequence">
      {WORDS.map((w, i) => (
        <span key={w} className="flex items-center gap-4">
          <span className={`transition-colors duration-500 ${i === active ? "text-[var(--action-blue)]" : "text-[var(--control)]"}`}>{w}</span>
          {i < WORDS.length - 1 && <ArrowRight className="h-6 w-6 text-[var(--steel)]" />}
        </span>
      ))}
    </p>
  );
};
