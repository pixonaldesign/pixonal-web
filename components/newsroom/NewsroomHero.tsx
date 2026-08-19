/**
 * Newsroom page hero — text-only block that sits in the same
 * `mx-5 mt-5 rounded-card` gutter as the home / Llumen heroes, so the
 * three pages share a consistent top-of-page silhouette. There's no
 * background image in the Figma (the parent frame is named "Video" but
 * has no source set), so the surface inherits the page background.
 */
export default function NewsroomHero() {
  return (
    <section
      aria-labelledby="newsroom-hero-heading"
      className="rounded-card relative mx-5 mt-5 overflow-hidden"
    >
      <div className="flex flex-col justify-end px-gutter md:px-10 lg:px-20 xl:px-0 py-10 md:py-12 lg:py-20 h-[340px] md:h-[420px] lg:h-[500px]">
        <div className="w-full max-w-content mx-auto flex flex-col gap-tight items-center text-center">
          <h1
            id="newsroom-hero-heading"
            className="text-h1 text-white max-w-[1014px]"
          >
            Explore our latest updates, innovations, and milestones. Stay
            informed as we shape the future of data communication.
          </h1>
        </div>
      </div>
    </section>
  );
}
