import { MaskLines, FadeUp } from "./Reveal";
import { PrimaryButton } from "./Buttons";
import { ProductFrame } from "./ProductFrame";

export const FinalCTA = ({ id, lines, cta, href, image, alt, kicker, children, testId, after }) => (
  <section id={id} data-testid={testId} className="bg-white pb-[90px] pt-[110px] md:pt-[150px]">
    <div className="container-rc text-center">
      {kicker && <p className="kicker mb-5">{kicker}</p>}
      <MaskLines className="large-heading mx-auto max-w-4xl" lines={lines} testId={`${testId}-headline`} />
      <FadeUp delay={0.3} className="mt-10 flex flex-col items-center gap-10">
        <PrimaryButton href={href} testId={`${testId}-button`}>{cta}</PrimaryButton>
        {children}
      </FadeUp>
    </div>
    <div className="mt-20 md:mt-24">
      <ProductFrame src={image} alt={alt} testId={`${testId}-image`} aspect="aspect-[4/3] md:aspect-[16/8]" />
    </div>
    {after}
  </section>
);
