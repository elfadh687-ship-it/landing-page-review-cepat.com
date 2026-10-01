import { Info } from "lucide-react";
import { MaskLines, FadeUp } from "./Reveal";
import { Compare } from "./Compare";
import { AccessBento } from "./AccessBento";

export const Solution = () => (
  <section id="cara-kerja" data-testid="solution-section" className="bg-white py-[110px] md:py-[150px]">
    <div className="container-rc">
      <p className="kicker mb-5">Solusinya</p>
      <MaskLines testId="solution-headline" className="large-heading max-w-4xl" lines={["Kurangi langkahnya.", <span className="text-[var(--steel)]">Permudah reviewnya.</span>]} />
      <FadeUp className="mt-14 md:mt-20"><Compare /></FadeUp>

      <div className="mt-28 flex flex-col gap-6 md:mt-36 md:flex-row md:items-end md:justify-between">
        <MaskLines testId="access-headline" className="feature-heading" lines={["Satu device.", "Dua cara akses."]} />
        <FadeUp className="flex max-w-sm items-start gap-2.5 text-[14px] leading-[1.45] text-[var(--slate)]">
          <Info className="mt-0.5 h-4 w-4 shrink-0" />
          <p data-testid="access-disclaimer">Pelanggan tetap menulis dan mengirim review sendiri. Reviewcepat hanya mempersingkat jalannya.</p>
        </FadeUp>
      </div>
      <div className="mt-12"><AccessBento /></div>
    </div>
  </section>
);
