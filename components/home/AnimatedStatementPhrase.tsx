'use client';

import { useEffect, useRef, useState } from 'react';

const MASK_OUT_MS = 240;
const MASK_IN_MS = 620;
const MASK_STAGGER_MS = 90;
const MASK_IN_GAP_MS = 90;

interface AnimatedStatementMaskProps {
  text: string;
  delayMs?: number;
}

/**
 * Wipes a phrase out bottom-to-top, then the next phrase in the same
 * direction after a short gap, so the incoming copy appears to push the
 * old phrase upward. `delayMs` staggers the three eyebrow areas.
 */
export function AnimatedStatementMask({
  text,
  delayMs = 0,
}: AnimatedStatementMaskProps) {
  const [displayed, setDisplayed] = useState(text);
  const [outgoing, setOutgoing] = useState<string | null>(null);
  const [animating, setAnimating] = useState(false);
  const [playId, setPlayId] = useState(0);
  const displayedRef = useRef(text);
  const pendingRef = useRef(text);
  const playIdRef = useRef(0);
  const skipFirst = useRef(true);

  const startPush = (from: string, to: string) => {
    if (from === to) return;
    const nextPlayId = playIdRef.current + 1;
    playIdRef.current = nextPlayId;
    displayedRef.current = to;
    setPlayId(nextPlayId);
    setOutgoing(from);
    setDisplayed(to);
    setAnimating(true);
  };

  useEffect(() => {
    if (skipFirst.current) {
      skipFirst.current = false;
      displayedRef.current = text;
      pendingRef.current = text;
      setDisplayed(text);
      return;
    }

    pendingRef.current = text;

    const reduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (reduced) {
      playIdRef.current += 1;
      setOutgoing(null);
      displayedRef.current = text;
      setDisplayed(text);
      setAnimating(false);
      return;
    }

    if (text === displayedRef.current) return;

    startPush(displayedRef.current, text);
  }, [text]);

  const handleInEnd = (endedPlayId: number) => {
    if (endedPlayId !== playIdRef.current) return;
    setOutgoing(null);
    if (pendingRef.current !== displayedRef.current) {
      startPush(displayedRef.current, pendingRef.current);
      return;
    }
    setAnimating(false);
  };

  return (
    <span className="statement-mask-slot">
      <span
        key={`in-${playId}`}
        className={animating ? 'statement-mask-in' : undefined}
        style={
          animating
            ? {
                animationDuration: `${MASK_IN_MS}ms`,
                animationDelay: `${delayMs + MASK_IN_GAP_MS}ms`,
              }
            : undefined
        }
        onAnimationEnd={
          animating
            ? (event) => {
                if (event.target === event.currentTarget) handleInEnd(playId);
              }
            : undefined
        }
      >
        {displayed}
      </span>
      {animating && outgoing ? (
        <span
          key={`out-${playId}`}
          className="statement-mask-out"
          style={{
            animationDuration: `${MASK_OUT_MS}ms`,
            animationDelay: `${delayMs}ms`,
          }}
        >
          {outgoing}
        </span>
      ) : null}
    </span>
  );
}

export function AnimatedStatementMaskLine({
  lead,
  governed,
  critical,
}: {
  lead: string;
  governed: string;
  critical: string;
}) {
  return (
    <>
      <AnimatedStatementMask text={lead} />
      {' + '}
      <AnimatedStatementMask text={governed} delayMs={MASK_STAGGER_MS} />
      {' + '}
      <AnimatedStatementMask text={critical} delayMs={MASK_STAGGER_MS * 2} />
    </>
  );
}
