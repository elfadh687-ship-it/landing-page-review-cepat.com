import { Fragment } from "react";

export const Marquee = ({ items, testId }) => {
  const row = (
    <div className="flex shrink-0 items-center">
      {items.map((it, i) => (
        <Fragment key={it}>
          <span className={`px-6 text-[clamp(48px,8vw,120px)] font-semibold leading-none tracking-[-0.04em] md:px-10 ${i % 2 ? "text-outline" : "text-[var(--ink)]"}`}>{it}</span>
          <span className="h-3 w-3 shrink-0 rounded-full bg-[var(--action-blue)]" aria-hidden />
        </Fragment>
      ))}
    </div>
  );
  return (
    <div className="marquee-wrap overflow-hidden py-6" data-testid={testId} aria-label={items.join(", ")}>
      <div className="marquee-track flex w-max">
        {row}
        <div aria-hidden className="flex">{row}</div>
      </div>
    </div>
  );
};
