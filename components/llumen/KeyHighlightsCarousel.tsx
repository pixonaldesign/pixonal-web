'use client';

import { Carousel } from '@/components/carousel';
import { keyHighlights } from '@/lib/key-highlights';
import KeyHighlightCard from './KeyHighlightCard';

export default function KeyHighlightsCarousel() {
  return (
    <Carousel
      title="Key Highlights"
      headingId="key-highlights-heading"
      slides={keyHighlights}
      titleVariant="feature"
      controlVariant="auto"
      getSlideKey={(highlight, index) => `${highlight.id}-${index}`}
      renderSlide={(highlight, { width }) => (
        <KeyHighlightCard highlight={highlight} width={width} />
      )}
    />
  );
}
