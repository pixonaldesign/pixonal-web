/**
 * Progressive-blur + black-gradient overlay for hero sections. Sits above the
 * background (video/image) and below the content. Three stacked
 * `backdrop-blur` layers, each masked bottom-to-top, make the blur strongest
 * near the bottom (where hero content sits) and fade out toward the top.
 */
export default function HeroBlurOverlay() {
  return (
    <div aria-hidden className="absolute inset-0 z-[1] pointer-events-none">
      <div
        className="absolute inset-0 backdrop-blur-[2px]"
        style={{
          maskImage:
            'linear-gradient(to top, black 0%, black 18%, transparent 42%)',
          WebkitMaskImage:
            'linear-gradient(to top, black 0%, black 18%, transparent 42%)',
        }}
      />
      <div
        className="absolute inset-0 backdrop-blur-[6px]"
        style={{
          maskImage:
            'linear-gradient(to top, black 0%, black 8%, transparent 30%)',
          WebkitMaskImage:
            'linear-gradient(to top, black 0%, black 8%, transparent 30%)',
        }}
      />
      <div
        className="absolute inset-0 backdrop-blur-[14px]"
        style={{
          maskImage: 'linear-gradient(to top, black 0%, transparent 18%)',
          WebkitMaskImage: 'linear-gradient(to top, black 0%, transparent 18%)',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
    </div>
  );
}
