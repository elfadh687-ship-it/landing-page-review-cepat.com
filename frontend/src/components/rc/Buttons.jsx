import { ArrowUpRight, ArrowDown } from "lucide-react";

const focus = "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--action-blue)]";

export const PrimaryButton = ({ href, children, testId, className = "" }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    data-testid={testId}
    className={`group inline-flex items-center gap-2 rounded-full bg-[var(--action-blue)] px-6 py-3.5 text-[15px] font-medium tracking-[-0.2px] text-white transition-[background-color,transform] duration-200 hover:bg-[#0062c4] active:scale-[0.97] ${focus} ${className}`}
  >
    <span>{children}</span>
    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
  </a>
);

export const SecondaryButton = ({ onClick, children, testId, icon = true }) => (
  <button
    type="button"
    onClick={onClick}
    data-testid={testId}
    className={`group inline-flex items-center gap-2 rounded-full border border-[var(--steel)] bg-transparent px-6 py-3.5 text-[15px] font-medium tracking-[-0.2px] text-[var(--ink)] transition-[background-color,border-color,transform] duration-200 hover:border-[var(--ink)] hover:bg-[var(--mist)] active:scale-[0.97] ${focus}`}
  >
    <span>{children}</span>
    {icon && <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />}
  </button>
);

export const GlassTag = ({ icon: Icon, children, className = "", testId }) => (
  <div data-testid={testId} className={`glass hairline inline-flex items-center gap-2.5 rounded-[28px] bg-white/85 px-4 py-2.5 text-[13px] font-medium text-[var(--ink)] ${className}`}>
    {Icon && (
      <span className="grid h-7 w-7 place-items-center rounded-full bg-[var(--action-blue)] text-white">
        <Icon className="h-3.5 w-3.5" />
      </span>
    )}
    <span className="whitespace-nowrap">{children}</span>
  </div>
);
