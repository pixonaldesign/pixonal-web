'use client';

import { useEffect } from 'react';
import { CASE_STUDY_ANCHOR_ID } from '@/lib/industry-case-studies';

/** Delay (ms) before the auto-scroll starts after the page mounts. */
const SCROLL_DELAY_MS = 300;

/**
 * Triggers a smooth scroll to the case study when the page is opened with the
 * `#case-study` hash (e.g. from the home "Impact Highlights" cards). Runs once
 * after mount so the navigation lands at the top first, then animates down.
 */
export default function CaseStudyAutoScroll() {
  useEffect(() => {
    if (window.location.hash !== `#${CASE_STUDY_ANCHOR_ID}`) return;

    const target = document.getElementById(CASE_STUDY_ANCHOR_ID);
    if (!target) return;

    const timer = window.setTimeout(() => {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, SCROLL_DELAY_MS);

    return () => window.clearTimeout(timer);
  }, []);

  return null;
}
