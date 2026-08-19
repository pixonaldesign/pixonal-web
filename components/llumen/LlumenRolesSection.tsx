'use client';

import { useState } from 'react';
import { Carousel } from '@/components/carousel';
import Tabs from '@/components/ui/Tabs';
import {
  llumenRoles,
  llumenRolesIntro,
  llumenRolesIntroLead,
} from '@/lib/llumen-content';
import { resolveFeatureCardWidth } from '@/lib/feature-card-layout';
import { useWindowWidth } from '@/hooks/useWindowWidth';
import FeatureCard from './FeatureCard';

const ROLE_TAB_ID_PREFIX = 'role';

export default function LlumenRolesSection() {
  const viewportWidth = useWindowWidth();
  const [activeRoleId, setActiveRoleId] = useState(llumenRoles[0].id);
  const activeRole = llumenRoles.find((r) => r.id === activeRoleId) ?? llumenRoles[0];

  return (
    <section
      id="roles"
      aria-labelledby="roles-heading"
      className="py-section flex flex-col gap-section"
    >
      <div className="w-full max-w-content mx-auto px-5 flex flex-col">
        <header className="flex flex-col gap-stack max-w-[670px]">
          <h2 id="roles-heading" className="text-display text-primary-50">
            Llumen by roles
          </h2>
          <p className="text-body text-primary-50/40">
            <span className="text-primary-50">{llumenRolesIntroLead} </span>
            {llumenRolesIntro}
          </p>
        </header>

        <Tabs
          items={llumenRoles.map((role) => ({ id: role.id, label: role.label }))}
          activeId={activeRoleId}
          onChange={setActiveRoleId}
          idPrefix={ROLE_TAB_ID_PREFIX}
          ariaLabel="Llumen roles"
          className="flex lg:justify-center mt-20 w-full"
        />

        <div className="flex flex-col lg:flex-row gap-block lg:gap-5 lg:items-start mt-10">
          <h3 className="text-h1 text-primary-50 lg:w-[498px] shrink-0 capitalize">
            {activeRole.title}
          </h3>
          <div className="flex flex-col gap-block flex-1 lg:max-w-[842px]">
            {activeRole.subtitle ? (
              <p className="text-h2 text-primary-50/80 capitalize">
                {activeRole.subtitle}
              </p>
            ) : null}
            {activeRole.description ? (
              <p className="text-body text-primary-50/80">{activeRole.description}</p>
            ) : null}
          </div>
        </div>
      </div>

      {activeRole.cards.length > 0 ? (
        <div
          id={`${ROLE_TAB_ID_PREFIX}-panel-${activeRole.id}`}
          role="tabpanel"
          aria-labelledby={`${ROLE_TAB_ID_PREFIX}-tab-${activeRole.id}`}
        >
          <Carousel
            key={activeRole.id}
            slides={activeRole.cards}
            layout="horizontal"
            controlVariant="arrows"
            controlsAlign="center"
            sectionClassName="flex flex-col"
            controlsClassName="w-full max-w-content mx-auto flex px-5 pt-8"
            getSlideKey={(card, index) => `${activeRole.id}-${card.title}-${index}`}
            getSlideWidth={(card) => resolveFeatureCardWidth(card, viewportWidth)}
            renderSlide={(card, { width }) => <FeatureCard card={card} width={width} />}
          />
        </div>
      ) : null}
    </section>
  );
}
