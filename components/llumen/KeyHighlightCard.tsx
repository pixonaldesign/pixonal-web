import Image from 'next/image';
import type { KeyHighlight } from '@/lib/key-highlights';
import { KEY_HIGHLIGHT_GRADIENT } from '@/lib/key-highlights';

interface KeyHighlightCardProps {
  highlight: KeyHighlight;
  width: number;
}

export default function KeyHighlightCard({ highlight, width }: KeyHighlightCardProps) {
  return (
    <article
      className="relative shrink-0 flex flex-col gap-block sm:block sm:gap-0 sm:rounded-card sm:overflow-hidden sm:aspect-[1190/670]"
      style={{ width: `${width}px` }}
    >
      {/* Media. Standalone rounded block below sm (so all four corners are
          visible); absolute fill at sm+ so the content can overlay it. */}
      <div className="relative aspect-[16/9] rounded-card overflow-hidden sm:rounded-none sm:absolute sm:inset-0 sm:aspect-auto">
        <Image
          src={highlight.image}
          alt=""
          fill
          className="object-cover"
          sizes="(max-width: 1580px) 100vw, 1360px"
          priority={highlight.id === 'clarity'}
        />
        <div
          aria-hidden
          className="absolute inset-0 hidden sm:block"
          style={{ background: KEY_HIGHLIGHT_GRADIENT }}
        />
      </div>

      {/* Content. Stacks under the media below sm (no horizontal padding —
          aligns with the card edges); overlays the media at sm+. */}
      <div className="relative z-10 flex flex-col gap-block sm:absolute sm:inset-0 sm:h-full sm:justify-between sm:gap-0 sm:p-5 md:p-6 lg:p-10">
        <div>
          {highlight.titleLines ? (
            <h3 className="text-primary-50 text-h1 sm:max-w-[70%] lg:max-w-[50%]">
              {highlight.titleLines[0]}
              <br />
              {highlight.titleLines[1]}
            </h3>
          ) : (
            <h3 className="text-primary-50 text-h1 sm:max-w-[70%] lg:max-w-[50%]">
              {highlight.title}
            </h3>
          )}
        </div>
        <p className="text-primary-50 text-body sm:max-w-[70%] lg:max-w-[50%]">
          {highlight.description}
        </p>
      </div>
    </article>
  );
}
