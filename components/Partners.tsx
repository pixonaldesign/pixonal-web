'use client';

import { useState, type ReactNode } from 'react';
import PartnerCardsGrid, {
  DEFAULT_BORDER,
  DEFAULT_CIRCLE,
  DEFAULT_SOFT,
  DEFAULT_SPOTLIGHT,
  type PartnerBorderSettings,
  type PartnerCircleSettings,
  type PartnerSoftSettings,
  type PartnerSpotlightMode,
} from '@/components/home/PartnerCardsGrid';

type Partner = {
  name: string;
  logo: string;
  description: string;
  industry: string;
};

const partners: readonly Partner[] = [
  {
    name: 'ZATCA',
    logo: '/images/partners/zatcalogo.png',
    description:
      'Consolidation and visualization of data from tax and customs departments.',
    industry: 'Trade & Customs',
  },
  {
    name: 'ADEO',
    logo: '/images/partners/adeologo.png',
    description:
      "Providing a bird-eye view of entire communities' quality of life.",
    industry: 'Cities & Digital Twin',
  },
  {
    name: 'Executive Office',
    logo: '/images/partners/executiveoffice.png',
    description: 'Strategic data solutions for executive leadership.',
    industry: 'Cities & Digital Twin',
  },
  {
    name: 'Government of Dubai',
    logo: '/images/partners/govofdubai.png',
    description:
      'Unifying city operations into a single, governed decision environment.',
    industry: 'Cities & Digital Twin',
  },
  {
    name: 'UAE Cabinet',
    logo: '/images/partners/uaecabinet.png',
    description:
      'Connecting national programs for clearer cabinet-level oversight.',
    industry: 'Cities & Digital Twin',
  },
  {
    name: 'Quality of Life Program',
    logo: '/images/partners/qol.png',
    description:
      'Measuring community wellbeing across services and districts.',
    industry: 'Cities & Digital Twin',
  },
  {
    name: 'Deloitte',
    logo: '/images/partners/deloitte.png',
    description:
      'Partnering on governed intelligence for complex public programs.',
    industry: 'Commerce & Operations',
  },
  {
    name: 'Jacobs',
    logo: '/images/partners/jacobs.png',
    description:
      'Bringing infrastructure and operations data into one live picture.',
    industry: 'Cities & Digital Twin',
  },
  {
    name: 'PwC',
    logo: '/images/partners/pwc.png',
    description:
      'Supporting leadership decisions with trusted, narrative-first insight.',
    industry: 'Commerce & Operations',
  },
  {
    name: 'Ministry of Economy & Planning',
    logo: '/images/partners/moep.png',
    description: 'Turning economic signals into a shared planning view.',
    industry: 'Commerce & Operations',
  },
  {
    name: 'World Economic Forum',
    logo: '/images/partners/wef.png',
    description:
      'Showcasing national intelligence on a global decision stage.',
    industry: 'Commerce & Operations',
  },
  {
    name: 'Dubai Economy and Tourism',
    logo: '/images/partners/det.png',
    description:
      'Tracking economic and visitor activity in one command view.',
    industry: 'Commerce & Operations',
  },
  {
    name: 'Takamol',
    logo: '/images/partners/takamol.png',
    description:
      'Unifying workforce dashboards into a narrative decision ecosystem.',
    industry: 'People & Workforce',
  },
  {
    name: 'Environment Agency - Abu Dhabi',
    logo: '/images/partners/ead.png',
    description:
      'Strengthening environmental oversight where early action matters.',
    industry: 'Environment & Energy',
  },
  {
    name: 'Integrated Transport Centre',
    logo: '/images/partners/itc.png',
    description:
      'Unifying mobility data for Abu Dhabi’s transport network.',
    industry: 'Cities & Digital Twin',
  },
];

interface PartnersProps {
  /** Section heading. Defaults to the home-page two-line title. */
  title?: ReactNode;
}

/** Flip to `true` to show the spotlight / border tuning panel. */
const SHOW_SPOTLIGHT_CONTROLS = false;

const SPOTLIGHT_MODES: readonly { id: PartnerSpotlightMode; label: string }[] = [
  { id: 'off', label: 'Off' },
  { id: 'soft', label: 'Soft' },
  { id: 'circle', label: 'Circle' },
];

function SpotlightSlider({
  label,
  value,
  min,
  max,
  step,
  format,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  format: (value: number) => string;
  onChange: (value: number) => void;
}) {
  return (
    <label className="flex flex-col gap-1">
      <span className="flex items-center justify-between gap-2 text-label text-white/50">
        <span>{label}</span>
        <span className="text-white/80">{format(value)}</span>
      </span>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
        className="w-full accent-white"
      />
    </label>
  );
}

export default function Partners({ title }: PartnersProps) {
  const [spotlight, setSpotlight] =
    useState<PartnerSpotlightMode>(DEFAULT_SPOTLIGHT);
  const [soft, setSoft] = useState<PartnerSoftSettings>(DEFAULT_SOFT);
  const [circle, setCircle] = useState<PartnerCircleSettings>(DEFAULT_CIRCLE);
  const [border, setBorder] = useState<PartnerBorderSettings>(DEFAULT_BORDER);

  const resetSpotlight = () => {
    setSpotlight(DEFAULT_SPOTLIGHT);
    setSoft(DEFAULT_SOFT);
    setCircle(DEFAULT_CIRCLE);
    setBorder(DEFAULT_BORDER);
  };

  return (
    <section
      className="py-section px-gutter"
      aria-labelledby="partners-heading"
    >
      <div className="mx-auto flex max-w-content flex-col gap-section lg:flex-row lg:items-start lg:gap-16">
        <div className="flex flex-col gap-stack lg:sticky lg:top-[calc(1.25rem+66px+32px)] lg:w-1/4 lg:shrink-0 lg:self-start">
          <h2
            id="partners-heading"
            className="text-figure text-primary-50 text-balance"
          >
            {title ?? 'Trusted in Critical Environments.'}
          </h2>
          {SHOW_SPOTLIGHT_CONTROLS ? (
          <div className="flex max-w-[280px] flex-col gap-block">
            <div
              role="group"
              aria-label="Partner card spotlight"
              className="flex flex-wrap gap-tight"
            >
              {SPOTLIGHT_MODES.map((mode) => {
                const isActive = spotlight === mode.id;
                return (
                  <button
                    key={mode.id}
                    type="button"
                    aria-pressed={isActive}
                    className={`rounded-xl border px-3 py-2 text-label transition-colors ${
                      isActive
                        ? 'border-white/40 bg-white/10 text-white'
                        : 'border-white/15 bg-transparent text-white/50 hover:text-white'
                    }`}
                    onClick={() => setSpotlight(mode.id)}
                  >
                    {mode.label}
                  </button>
                );
              })}
              <button
                type="button"
                className="rounded-xl border border-white/15 bg-transparent px-3 py-2 text-label text-white/50 transition-colors hover:text-white"
                onClick={resetSpotlight}
              >
                Reset
              </button>
            </div>

            {spotlight === 'soft' ? (
              <div className="flex flex-col gap-stack">
                <SpotlightSlider
                  label="Size"
                  value={soft.size}
                  min={120}
                  max={1600}
                  step={20}
                  format={(value) => `${value}px`}
                  onChange={(size) => setSoft((current) => ({ ...current, size }))}
                />
                <SpotlightSlider
                  label="Opacity"
                  value={soft.opacity}
                  min={0}
                  max={0.4}
                  step={0.01}
                  format={(value) => `${Math.round(value * 100)}%`}
                  onChange={(opacity) =>
                    setSoft((current) => ({ ...current, opacity }))
                  }
                />
                <SpotlightSlider
                  label="Blur"
                  value={soft.blur}
                  min={0}
                  max={160}
                  step={2}
                  format={(value) => `${value}px`}
                  onChange={(blur) => setSoft((current) => ({ ...current, blur }))}
                />
                <SpotlightSlider
                  label="Falloff"
                  value={soft.falloff}
                  min={40}
                  max={100}
                  step={1}
                  format={(value) => `${value}%`}
                  onChange={(falloff) =>
                    setSoft((current) => ({ ...current, falloff }))
                  }
                />
              </div>
            ) : null}

            {spotlight === 'circle' ? (
              <div className="flex flex-col gap-stack">
                <SpotlightSlider
                  label="Size"
                  value={circle.size}
                  min={80}
                  max={900}
                  step={10}
                  format={(value) => `${value}px`}
                  onChange={(size) =>
                    setCircle((current) => ({ ...current, size }))
                  }
                />
                <SpotlightSlider
                  label="Opacity"
                  value={circle.opacity}
                  min={0}
                  max={0.4}
                  step={0.01}
                  format={(value) => `${Math.round(value * 100)}%`}
                  onChange={(opacity) =>
                    setCircle((current) => ({ ...current, opacity }))
                  }
                />
                <SpotlightSlider
                  label="Falloff"
                  value={circle.falloff}
                  min={40}
                  max={100}
                  step={1}
                  format={(value) => `${value}%`}
                  onChange={(falloff) =>
                    setCircle((current) => ({ ...current, falloff }))
                  }
                />
              </div>
            ) : null}

            <div className="flex flex-col gap-stack">
              <button
                type="button"
                aria-pressed={border.enabled}
                className={`self-start rounded-xl border px-3 py-2 text-label transition-colors ${
                  border.enabled
                    ? 'border-white/40 bg-white/10 text-white'
                    : 'border-white/15 bg-transparent text-white/50 hover:text-white'
                }`}
                onClick={() =>
                  setBorder((current) => ({
                    ...current,
                    enabled: !current.enabled,
                  }))
                }
              >
                Border {border.enabled ? 'on' : 'off'}
              </button>
              {border.enabled ? (
                <>
                  <SpotlightSlider
                    label="Border size"
                    value={border.size}
                    min={40}
                    max={600}
                    step={10}
                    format={(value) => `${value}px`}
                    onChange={(size) =>
                      setBorder((current) => ({ ...current, size }))
                    }
                  />
                  <SpotlightSlider
                    label="Border opacity"
                    value={border.opacity}
                    min={0}
                    max={1}
                    step={0.05}
                    format={(value) => `${Math.round(value * 100)}%`}
                    onChange={(opacity) =>
                      setBorder((current) => ({ ...current, opacity }))
                    }
                  />
                  <SpotlightSlider
                    label="Border width"
                    value={border.width}
                    min={1}
                    max={6}
                    step={1}
                    format={(value) => `${value}px`}
                    onChange={(width) =>
                      setBorder((current) => ({ ...current, width }))
                    }
                  />
                </>
              ) : null}
            </div>
          </div>
          ) : null}
        </div>

        <PartnerCardsGrid
          partners={partners}
          spotlight={spotlight}
          soft={soft}
          circle={circle}
          border={border}
        />
      </div>
    </section>
  );
}
