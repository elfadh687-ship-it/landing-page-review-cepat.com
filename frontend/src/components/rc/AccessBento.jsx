import { Wifi, ScanLine } from "lucide-react";
import { motion } from "framer-motion";
import { FadeUp } from "./Reveal";
import { IMG } from "@/lib/content";

const tile = "group relative overflow-hidden rounded-[28px]";
const zoom = "h-full w-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]";

const NfcTile = () => (
  <FadeUp className={`${tile} min-h-[440px] md:col-span-7 md:row-span-2`} data-testid="bento-nfc">
    <img src={IMG.tap} alt="Smartphone di-tap ke device Reviewcepat" loading="lazy" className={`absolute inset-0 ${zoom}`} />
    <div className="glass absolute bottom-5 left-5 right-5 flex items-center gap-4 rounded-[28px] p-5 md:bottom-7 md:left-7 md:right-auto md:max-w-sm">
      <span className="relative grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[var(--action-blue)] text-white">
        <motion.span className="absolute inset-0 rounded-full border-2 border-[var(--action-blue)]" animate={{ scale: [1, 1.7], opacity: [0.7, 0] }} transition={{ duration: 2, repeat: Infinity }} />
        <Wifi className="h-5 w-5 rotate-90" />
      </span>
      <div>
        <p className="text-[21px] font-semibold leading-none">NFC</p>
        <p className="mt-1.5 text-[14px] text-[var(--slate)]">Tap dengan smartphone</p>
      </div>
    </div>
  </FadeUp>
);

const QrTile = () => (
  <FadeUp delay={0.1} className={`${tile} flex min-h-[300px] items-center justify-between gap-6 bg-[var(--mist)] p-7 md:col-span-5 md:p-8`} data-testid="bento-qr">
    <div className="self-end">
      <ScanLine className="mb-4 h-6 w-6 text-[var(--action-blue)]" />
      <p className="text-[21px] font-semibold leading-none">QR</p>
      <p className="mt-1.5 text-[14px] text-[var(--slate)]">Scan dengan kamera</p>
    </div>
    <div className="relative aspect-square w-[46%] max-w-[210px] shrink-0 overflow-hidden rounded-[20px] bg-black">
      <div className="absolute inset-0" style={{ backgroundImage: `url(${IMG.device})`, backgroundSize: "430%", backgroundPosition: "21% 97%" }} />
      <span className="scan-line absolute inset-x-3 h-[2px] rounded-full bg-[var(--action-blue)] shadow-[0_0_18px_4px_rgba(0,113,227,0.55)]" />
    </div>
  </FadeUp>
);

const MacroTile = () => (
  <FadeUp delay={0.2} className={`${tile} min-h-[300px] md:col-span-5`} data-testid="bento-macro">
    <img src={IMG.macro} alt="Detail permukaan glossy device Reviewcepat" loading="lazy" className={`absolute inset-0 ${zoom}`} />
    <p className="glass absolute bottom-5 left-5 rounded-[28px] px-4 py-2.5 text-[13px] font-medium">Detail yang terasa premium di meja Anda.</p>
  </FadeUp>
);

export const AccessBento = () => (
  <div className="grid grid-cols-1 gap-5 md:auto-rows-[300px] md:grid-cols-12">
    <NfcTile />
    <QrTile />
    <MacroTile />
  </div>
);
