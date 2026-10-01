import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MousePointerClick } from "lucide-react";
import { GlassTag } from "./Buttons";

export const ProductFrame = ({ src, alt, caption, testId, aspect = "aspect-[4/3] md:aspect-[16/9] lg:aspect-[2/1]" }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const clip = useTransform(scrollYProgress, [0, 0.5], ["inset(10% 14% 10% 14% round 28px)", "inset(0% 0% 0% 0% round 28px)"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.22, 1]);

  return (
    <div ref={ref} className="container-rc" data-testid={testId}>
      <motion.div style={{ clipPath: clip }} className={`relative overflow-hidden rounded-[28px] bg-[var(--mist)] ${aspect}`}>
        <motion.img style={{ scale }} src={src} alt={alt} loading="lazy" className="h-full w-full object-cover" />
        {caption && (
          <div className="absolute bottom-5 left-5 md:bottom-8 md:left-8">
            <GlassTag icon={MousePointerClick}>{caption}</GlassTag>
          </div>
        )}
      </motion.div>
    </div>
  );
};
