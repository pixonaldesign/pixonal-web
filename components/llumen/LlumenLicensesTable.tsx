'use client';

import { useState } from 'react';
import Image from '@/components/PrefixedImage';
import PixonalIcon from '@/components/PixonalIcon';
import {
  licenseRows,
  licenseTiers,
  type LicenseTier,
} from '@/lib/llumen-content';

// Rows whose value strings are long enough to deserve a full-width card on
// the mobile (below-sm) tabbed layout.
const MOBILE_FULL_WIDTH_LABELS = new Set(['Hosting']);

export default function LlumenLicensesTable() {
  const [activeTier, setActiveTier] = useState<LicenseTier>(licenseTiers[0].id);

  return (
    <section
      id="licenses"
      aria-labelledby="licenses-heading"
      className="py-section px-gutter"
    >
      <div className="max-w-content mx-auto">
        {/* sm+ — original table */}
        <div className="hidden sm:flex rounded-card p-card bg-gradient-to-b from-[#354258] via-[#354258] via-[9%] to-[#1d1d27] to-[40%] flex-col gap-20">
          <h2 id="licenses-heading" className="text-figure text-primary-50">
            Licenses That Fit Every Need
          </h2>

          <div
            role="table"
            aria-label="License tier comparison"
            className="grid grid-cols-[minmax(180px,1.2fr)_minmax(0,3fr)] sm:max-md:grid-cols-[minmax(120px,1fr)_minmax(0,3fr)] grid-rows-[auto_repeat(11,auto)]"
          >
            <div
              role="presentation"
              className="grid grid-rows-subgrid row-span-full col-start-1"
            >
              <div aria-hidden />
              {licenseRows.map((row, rowIndex) => (
                <div
                  key={row.label}
                  role="rowheader"
                  className={`flex items-center gap-3 pr-4 py-3 sm:max-md:flex-col sm:max-md:items-start sm:max-md:gap-2 ${
                    rowIndex === 0 ? '' : 'border-t border-white/10'
                  }`}
                >
                  <PixonalIcon
                    name={row.icon}
                    size={24}
                    className="text-primary-50 shrink-0 size-5 xl:size-6"
                  />
                  <p className="text-label !text-[14px] xl:!text-[16px] text-primary-50 leading-tight">
                    {row.label}
                  </p>
                </div>
              ))}
            </div>

            <div
              role="presentation"
              className="grid grid-cols-[repeat(4,minmax(0,1fr))] grid-rows-subgrid row-span-full col-start-2 gap-x-inline"
            >
              {licenseTiers.map((tier) => (
                <div
                  key={tier.id}
                  role="columnheader"
                  className="flex flex-col items-center gap-stack pb-5"
                >
                  <div className="relative size-[160px] sm:max-md:size-[140px] lg:size-[180px] xl:size-[200px]">
                    <Image
                      src={tier.image}
                      alt=""
                      fill
                      className="object-contain"
                      sizes="(min-width: 1440px) 200px, (min-width: 1024px) 180px, (min-width: 640px) and (max-width: 767px) 140px, 160px"
                    />
                  </div>
                  <p className="text-stat !text-[20px] xl:!text-[24px] text-primary-50 !uppercase text-center">
                    {tier.label}
                  </p>
                </div>
              ))}
              {licenseRows.flatMap((row, rowIndex) =>
                licenseTiers.map((tier) => (
                  <p
                    key={`${row.label}-${tier.id}`}
                    role="cell"
                    className={`text-body !text-[14px] xl:!text-[16px] text-primary-50/60 text-center px-2 py-3 flex items-center justify-center ${
                      rowIndex === 0 ? '' : 'border-t border-white/10'
                    }`}
                  >
                    {row.values[tier.id]}
                  </p>
                ))
              )}
            </div>
          </div>
        </div>

        {/* <sm — tabbed card */}
        <div className="sm:hidden rounded-card p-4 bg-gradient-to-b from-[#354258] via-[#354258] via-[9%] to-[#1d1d27] to-[40%] flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h2 id="licenses-heading-mobile" className="text-figure text-primary-50">
              Licenses That Fit Every Need
            </h2>
            <p className="text-lead text-primary-50/70">
              Compare plans and find the right license for your mission.
            </p>
          </div>

          <div
            role="tablist"
            aria-label="License tiers"
            className="flex items-stretch border-b border-white/20"
          >
            {licenseTiers.map((tier) => {
              const isActive = tier.id === activeTier;
              return (
                <button
                  key={tier.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`license-panel-${tier.id}`}
                  id={`license-tab-${tier.id}`}
                  onClick={() => setActiveTier(tier.id)}
                  className={`relative flex-1 min-w-0 flex flex-col items-center justify-center gap-0.5 pb-3 rounded-t-card transition-colors ${
                    isActive
                      ? "bg-gradient-to-b from-[rgba(30,39,64,0.6)] via-[rgba(22,27,46,0.6)] to-[rgba(17,21,34,0.6)] after:content-[''] after:absolute after:inset-x-0 after:bottom-0 after:h-[3px] after:bg-gradient-to-r after:from-[#FF7A8A] after:via-[#B074FF] after:to-[#63C7FF]"
                      : ''
                  }`}
                >
                  <div
                    className={`relative size-16 ${
                      isActive ? '' : 'mix-blend-luminosity opacity-30'
                    }`}
                  >
                    <Image
                      src={tier.image}
                      alt=""
                      fill
                      className="object-contain"
                      sizes="64px"
                    />
                  </div>
                  <p
                    className={`text-label !text-[14px] !uppercase text-center text-primary-50 ${
                      isActive ? '' : 'opacity-60'
                    }`}
                  >
                    {tier.label}
                  </p>
                </button>
              );
            })}
          </div>

          <div
            id={`license-panel-${activeTier}`}
            role="tabpanel"
            aria-labelledby={`license-tab-${activeTier}`}
            className="grid grid-cols-2 gap-2"
          >
            {licenseRows.map((row) => {
              const fullWidth = MOBILE_FULL_WIDTH_LABELS.has(row.label);
              return (
                <div
                  key={row.label}
                  className={`flex flex-col gap-2 justify-center bg-white/[0.04] rounded-card p-2.5 ${
                    fullWidth ? 'col-span-2' : ''
                  }`}
                >
                  <div className="flex gap-1 items-center opacity-60">
                    <PixonalIcon
                      name={row.icon}
                      size={12}
                      className="text-primary-50 shrink-0 size-3"
                    />
                    <p className="text-label !text-[12px] capitalize text-primary-50 leading-tight">
                      {row.label}
                    </p>
                  </div>
                  <p className="text-body !text-[14px] text-primary-50">
                    {row.values[activeTier]}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
