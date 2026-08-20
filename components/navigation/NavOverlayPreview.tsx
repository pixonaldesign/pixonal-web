import Image from '@/components/PrefixedImage';

interface NavOverlayPreviewProps {
  src: string;
  width: number;
  height: number;
}

/**
 * Hover preview that sits immediately after the list.
 * Height comes from the parent (the list row). Width follows the asset aspect ratio.
 * `object-cover` crops the asset into that frame.
 */
export default function NavOverlayPreview({
  src,
  width,
  height,
}: NavOverlayPreviewProps) {
  return (
    <div
      className="relative h-[200px] w-full shrink-0 overflow-hidden rounded-card lg:h-full lg:w-auto"
      style={{ aspectRatio: `${width} / ${height}` }}
    >
      <Image src={src} alt="" fill className="object-cover" sizes="50vw" />
    </div>
  );
}
