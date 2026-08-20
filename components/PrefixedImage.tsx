import NextImage, { type ImageProps } from 'next/image';
import { withBasePath } from '@/lib/base-path';

/**
 * `next/image` with `unoptimized` (required for static export) does not
 * prefix `basePath` onto public-folder srcs. GitHub Pages serves the site
 * under `/pixonal-web`, so those URLs 404 unless we add it here.
 */
export default function PrefixedImage({ src, ...props }: ImageProps) {
  const resolved = typeof src === 'string' ? withBasePath(src) : src;
  return <NextImage src={resolved} {...props} />;
}
