'use client';

import { useState, type FormEvent } from 'react';
import PixonalIcon from '@/components/PixonalIcon';
import PrimaryButton from '@/components/PrimaryButton';
import { contactForm } from '@/lib/contact';

const fieldClassName =
  'min-w-0 w-full border-b border-white/50 bg-transparent pb-3 text-body text-white placeholder:text-white/50 focus:border-white focus:outline-none';

const selectClassName = `${fieldClassName} appearance-none pr-8`;

export default function ContactForm() {
  const [topics, setTopics] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const toggleTopic = (id: string) => {
    setTopics((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id],
    );
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <p className="text-lead text-white/70" role="status">
        Thank you. We&apos;ll be in touch shortly.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-10">
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
        <Field id="first-name" label="First name" autoComplete="given-name" />
        <Field id="last-name" label="Last name" autoComplete="family-name" />
        <Field id="company" label="Company name" autoComplete="organization" />
        <Field id="job-title" label="Job title" autoComplete="organization-title" />
        <Field
          id="email"
          label="Work email"
          type="email"
          autoComplete="email"
        />
        <SelectField
          id="country"
          label="Country"
          options={contactForm.countries}
        />
      </div>

      <fieldset>
        <legend className="mb-4 p-0 text-body text-white">
          {contactForm.topicsLegend}
        </legend>
        <ul role="list" className="flex flex-col gap-4">
          {contactForm.topics.map((topic) => {
            const checked = topics.includes(topic.id);
            return (
              <li key={topic.id}>
                <label className="relative flex cursor-pointer items-center gap-4 text-body text-white">
                  <input
                    type="checkbox"
                    name="topics"
                    value={topic.id}
                    checked={checked}
                    onChange={() => toggleTopic(topic.id)}
                    className="peer sr-only"
                  />
                  <span className="flex size-5 shrink-0 items-center justify-center rounded-[4px] border border-white/50 peer-checked:bg-white peer-focus-visible:outline peer-focus-visible:outline-offset-2 peer-focus-visible:outline-white peer-checked:[&_svg]:opacity-100">
                    <PixonalIcon
                      name="check"
                      size={14}
                      className="opacity-0 text-black"
                    />
                  </span>
                  <span>{topic.label}</span>
                </label>
              </li>
            );
          })}
        </ul>
      </fieldset>

      <SelectField
        id="source"
        label="How did you hear about Pixonal?"
        options={contactForm.sources}
      />

      <p className="text-body text-white/70">{contactForm.privacy}</p>

      <PrimaryButton type="submit" className="self-start">
        Submit
      </PrimaryButton>
    </form>
  );
}

function Field({
  id,
  label,
  type = 'text',
  autoComplete,
}: {
  id: string;
  label: string;
  type?: string;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required
        autoComplete={autoComplete}
        placeholder={`${label}*`}
        className={fieldClassName}
      />
    </div>
  );
}

function SelectField({
  id,
  label,
  options,
}: {
  id: string;
  label: string;
  options: readonly string[];
}) {
  return (
    <div className="relative">
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <select
        id={id}
        name={id}
        required
        defaultValue=""
        className={`${selectClassName} invalid:text-white/50`}
      >
        <option value="" disabled className="bg-white text-black">
          {label}*
        </option>
        {options.map((option) => (
          <option key={option} value={option} className="bg-white text-black">
            {option}
          </option>
        ))}
      </select>
      <PixonalIcon
        name="caret-down"
        size={20}
        className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 text-white"
      />
    </div>
  );
}
