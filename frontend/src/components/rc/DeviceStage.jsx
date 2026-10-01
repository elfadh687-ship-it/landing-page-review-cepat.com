import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate, useScroll } from "framer-motion";
import { Wifi, ScanLine, Smartphone } from "lucide-react";
import { IMG, EASE } from "@/lib/content";
import { GlassTag } from "./Buttons";

const spring = { stiffness: 110, damping: 18, mass: 0.6 };

const PulseRings = () => (
  <div className="pointer-events-none absolute inset-0 grid place-items-center" aria-hidden>
    {[0, 1, 2].map((i) => (
      <motion.span
        key={i}
        className="absolute aspect-square w-[70%] rounded-full border border-[var(--action-blue)]/30"
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: [0.7, 1.45], opacity: [0.55, 0] }}
        transition={{ duration: 3.6, repeat: Infinity, delay: 1.6 + i * 1.2, ease: "easeOut" }}
      />
    ))}
  </div>
);

const Floating = ({ z, delay, className, children }) => (
  <motion.div
    className={`absolute ${className}`}
    style={{ transform: `translateZ(${z}px)` }}
    initial={{ opacity: 0, scale: 0.85 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8, ease: EASE, delay }}
  >
    <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay }}>
      {children}
    </motion.div>
  </motion.div>
);

export const DeviceStage = () => {
  const ref = useRef(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [12, -12]), spring);
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-16, 16]), spring);
  const gx = useTransform(mx, [-0.5, 0.5], ["15%", "85%"]);
  const gy = useTransform(my, [-0.5, 0.5], ["10%", "90%"]);
  const glare = useMotionTemplate`radial-gradient(circle at ${gx} ${gy}, rgba(255,255,255,0.32), transparent 45%)`;
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const sy = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const srx = useTransform(scrollYProgress, [0, 1], [0, 28]);

  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const reset = () => { mx.set(0); my.set(0); };

  return (
    <div ref={ref} onMouseMove={onMove} onMouseLeave={reset} data-testid="hero-device-stage" className="relative mx-auto aspect-square w-full max-w-[580px] [perspective:1400px]">
      <div className="dot-field absolute -inset-[15%] [mask-image:radial-gradient(circle,black_20%,transparent_65%)]" aria-hidden />
      <PulseRings />
      <motion.div style={{ y: sy, rotateX: srx, transformStyle: "preserve-3d" }} className="absolute inset-[9%]">
        <motion.div
          initial={{ opacity: 0, rotateX: 58, rotateZ: -6, y: 140, scale: 0.82 }}
          animate={{ opacity: 1, rotateX: 0, rotateZ: 0, y: 0, scale: 1 }}
          transition={{ duration: 1.6, ease: EASE, delay: 0.35 }}
          style={{ transformStyle: "preserve-3d" }}
          className="h-full w-full"
        >
          <motion.div style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }} className="relative h-full w-full">
            <div className="absolute inset-0 rounded-[5.5%] bg-[#0a0a0b]" style={{ transform: "translateZ(-16px)" }} />
            <div className="absolute inset-0 rounded-[5.5%] bg-[#1c1c1f]" style={{ transform: "translateZ(-8px)" }} />
            <img src={IMG.device} alt="Device Reviewcepat NFC & QR untuk Google Review" draggable={false} className="absolute inset-0 h-full w-full select-none rounded-[5.5%]" />
            <motion.div className="pointer-events-none absolute inset-0 rounded-[5.5%] mix-blend-screen" style={{ background: glare }} />
            <Floating z={90} delay={1.5} className="-right-4 top-[12%] md:-right-16">
              <GlassTag icon={Wifi} testId="hero-tag-nfc">Tap NFC</GlassTag>
            </Floating>
            <Floating z={70} delay={1.7} className="-left-4 bottom-[24%] md:-left-20">
              <GlassTag icon={ScanLine} testId="hero-tag-qr">Scan QR</GlassTag>
            </Floating>
            <Floating z={110} delay={1.9} className="-bottom-6 right-[4%] md:-right-6">
              <GlassTag icon={Smartphone} testId="hero-tag-noapp">Tanpa aplikasi tambahan</GlassTag>
            </Floating>
          </motion.div>
        </motion.div>
      </motion.div>
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute -bottom-2 left-[18%] right-[18%] h-10 rounded-[50%] bg-black/20 blur-2xl"
      />
    </div>
  );
};
