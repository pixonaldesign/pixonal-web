import HeroVideoBackground from './HeroVideoBackground';
import SecondaryButton from './SecondaryButton';

export default function GetInTouchHero() {
  return (
    <section
      aria-labelledby="get-in-touch-heading"
      className="end-cta-mask relative z-10 h-end-cta shrink-0"
    >
      <HeroVideoBackground src="/videos/getintouchbg.mp4" />
      <div aria-hidden className="absolute inset-0 z-[1] bg-black/40" />

      <div className="relative z-10 flex h-full flex-col justify-center">
        <div className="-mx-5 px-gutter">
          <div className="mx-auto flex w-full max-w-content flex-col items-start gap-block">
            <h2 id="get-in-touch-heading" className="text-white">
              <span className="text-display-accent block">Transform your</span>
              <span className="text-display block">Moment of Decision.</span>
            </h2>
            <SecondaryButton
              href="/contact"
              showArrow
              className="shadow-[0px_8px_16px_0px_rgba(27,27,27,0.16)]"
            >
              Get in Touch
            </SecondaryButton>
          </div>
        </div>
      </div>
    </section>
  );
}
