const VIDEO_EXT = /\.(mp4|webm|mov)$/i;

/** Sibling `.jpg` of a public video path (`/videos/foo.mp4` → `/videos/foo.jpg`). */
export function videoPosterSrc(videoSrc: string): string {
  return videoSrc.replace(VIDEO_EXT, '.jpg');
}

export function isVideoSrc(src: string): boolean {
  return VIDEO_EXT.test(src);
}
