import FooterClient from './FooterClient';
import NoiseTexture from './NoiseTexture';

export default function Footer() {
  return (
    <footer className="w-full">
      <div className="relative mx-5 mt-5 mb-5 overflow-hidden rounded-card bg-black">
        <NoiseTexture />
        <div className="relative z-10 p-10">
          <FooterClient />
        </div>
      </div>
    </footer>
  );
}
