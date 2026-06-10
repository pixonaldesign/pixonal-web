import { redirect } from 'next/navigation';
import { industries } from '@/lib/industries';

/**
 * /industries is reserved as the canonical industries URL but the nav opens
 * a dropdown there rather than navigating. When users land on /industries
 * directly we redirect to the first industry so they always see content.
 */
export default function IndustriesIndex() {
  redirect(`/industries/${industries[0].slug}`);
}
