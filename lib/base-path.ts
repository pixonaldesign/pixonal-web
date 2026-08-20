export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

/** Prefix a public-folder path (`/images/...`) for GitHub Pages. */
export function withBasePath(path: string): string {
  if (!path) return path;
  if (/^(https?:|data:|blob:|mailto:)/i.test(path)) return path;
  if (path.startsWith('#')) return path;

  const normalized = path.startsWith('/') ? path : `/${path}`;
  if (!BASE_PATH) return normalized;
  if (normalized === BASE_PATH || normalized.startsWith(`${BASE_PATH}/`)) {
    return normalized;
  }
  return `${BASE_PATH}${normalized}`;
}

/** Rewrite public asset URLs inside markdown HTML. */
export function prefixHtmlAssets(html: string): string {
  if (!BASE_PATH) return html;
  return html.replace(
    /(\s(?:src|href|poster)=["'])(\/(?:images|videos|fonts)\/)/g,
    `$1${BASE_PATH}$2`,
  );
}
