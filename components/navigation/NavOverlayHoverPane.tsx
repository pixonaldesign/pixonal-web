import Link from 'next/link';
import PixonalIcon from '@/components/PixonalIcon';
import NavOverlayPreview from './NavOverlayPreview';
import NavTabUnderline from './NavTabUnderline';

interface NavOverlayHoverPaneProps {
  src: string;
  width: number;
  height: number;
  description: string;
  href?: string;
  ctaLabel?: string;
  onCtaClick?: () => void;
}

/**
 * Image + description for a hovered menu tab.
 * On desktop this is taken out of flow so it cannot change overlay height —
 * the list column remains the height source of truth.
 */
export default function NavOverlayHoverPane({
  src,
  width,
  height,
  description,
  href,
  ctaLabel,
  onCtaClick,
}: NavOverlayHoverPaneProps) {
  return (
    <div className="flex min-w-0 flex-col gap-8 lg:relative lg:block lg:flex-1 lg:min-h-0">
      <div className="flex flex-col gap-block lg:absolute lg:inset-0 lg:flex-row lg:items-stretch lg:gap-block lg:overflow-hidden">
        <NavOverlayPreview src={src} width={width} height={height} />
        {href && ctaLabel ? (
          <div className="flex min-h-0 w-full max-w-[450px] flex-1 flex-col gap-6">
            <p className="text-lead text-white">{description}</p>
            <Link
              href={href}
              onClick={onCtaClick}
              className="group/tab inline-flex self-start text-button text-white"
            >
              <span className="relative inline-flex items-center gap-tight">
                <span>{ctaLabel}</span>
                <PixonalIcon name="arrow-right" size={20} className="text-white" />
                <NavTabUnderline />
              </span>
            </Link>
          </div>
        ) : (
          <p className="min-w-0 max-w-[700px] flex-1 text-lead text-white">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
