import { motion } from "framer-motion";
import { EASE } from "@/lib/content";

const trigger = (onLoad, amount = 0.35) =>
  onLoad ? { initial: "hidden", animate: "show" } : { initial: "hidden", whileInView: "show", viewport: { once: true, amount } };

const lineVariant = { hidden: { y: "110%" }, show: { y: "0%", transition: { duration: 1, ease: EASE } } };

export const MaskLines = ({ lines, as = "h2", className = "", delay = 0, onLoad, testId }) => {
  const Tag = motion[as];
  return (
    <Tag
      data-testid={testId}
      className={className}
      {...trigger(onLoad, 0.4)}
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.11, delayChildren: delay } } }}
    >
      {lines.map((l, i) => (
        <span key={i} className="block overflow-hidden pb-[0.1em] -mb-[0.1em]">
          <motion.span className="block" variants={lineVariant}>{l}</motion.span>
        </span>
      ))}
    </Tag>
  );
};

export const FadeUp = ({ children, delay = 0, className = "", onLoad, y = 28, ...rest }) => (
  <motion.div
    className={className}
    {...trigger(onLoad, 0.25)}
    variants={{ hidden: { opacity: 0, y }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE, delay } } }}
    {...rest}
  >
    {children}
  </motion.div>
);
