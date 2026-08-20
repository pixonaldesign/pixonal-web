import FooterClient from './FooterClient';
import GetInTouchHero from './GetInTouchHero';
import NoiseTexture from './NoiseTexture';

export default function Footer() {
  return (
    <div className="w-full">
      <div className="relative mx-5 mt-5 mb-5 flex flex-col overflow-hidden rounded-card bg-black">
        <GetInTouchHero />

        <footer
          className="relative z-0 -mt-[var(--end-cta-fade)] overflow-hidden"
        >
          <NoiseTexture />
          <div className="relative z-10 -mx-5 flex flex-col px-gutter">
            <div className="mx-auto w-full max-w-content pt-40 pb-10">
              <FooterClient />
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
