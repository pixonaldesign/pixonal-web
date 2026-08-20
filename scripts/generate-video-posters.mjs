/**
 * Walks `public/` for video files and writes a first-frame JPEG next to each
 * (`foo.mp4` → `foo.jpg`). Skips a poster that is already newer than its video.
 *
 * Run automatically via `predev` / `prebuild`. Requires `ffmpeg-static`.
 */
import { execFileSync } from 'node:child_process';
import { readdirSync, statSync } from 'node:fs';
import { createRequire } from 'node:module';
import { extname, join } from 'node:path';

const require = createRequire(import.meta.url);
const ffmpeg = require('ffmpeg-static');

const VIDEO_EXT = new Set(['.mp4', '.webm', '.mov']);
const PUBLIC_DIR = join(process.cwd(), 'public');

function walk(dir) {
  const files = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) files.push(...walk(path));
    else if (VIDEO_EXT.has(extname(entry.name).toLowerCase())) files.push(path);
  }
  return files;
}

function posterPath(videoPath) {
  return videoPath.replace(/\.(mp4|webm|mov)$/i, '.jpg');
}

function isCurrent(poster, videoMtime) {
  try {
    return statSync(poster).mtimeMs >= videoMtime;
  } catch {
    return false;
  }
}

if (!ffmpeg) {
  console.warn('ffmpeg-static is not available; skipping video poster generation.');
  process.exit(0);
}

const videos = walk(PUBLIC_DIR);
let written = 0;

for (const video of videos) {
  const poster = posterPath(video);
  if (isCurrent(poster, statSync(video).mtimeMs)) continue;

  execFileSync(
    ffmpeg,
    [
      '-y',
      '-hide_banner',
      '-loglevel',
      'error',
      '-i',
      video,
      '-frames:v',
      '1',
      '-q:v',
      '2',
      '-update',
      '1',
      poster,
    ],
    { stdio: 'inherit' },
  );
  written += 1;
  console.log(`poster ${poster.slice(PUBLIC_DIR.length)}`);
}

console.log(
  written === 0
    ? `video posters up to date (${videos.length} videos)`
    : `wrote ${written} video poster${written === 1 ? '' : 's'}`,
);
