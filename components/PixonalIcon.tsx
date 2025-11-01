'use client';

import { 
  CaretDownIcon as PhosphorCaretDownIcon,
  ListIcon as PhosphorListIcon,
  LightningIcon as PhosphorLightningIcon,
  CheckCircleIcon as PhosphorCheckCircleIcon,
  UsersIcon as PhosphorUsersIcon,
  CheckIcon as PhosphorCheckIcon,
  CaretRightIcon as PhosphorCaretRightIcon,
  EnvelopeIcon as PhosphorEnvelopeIcon,
  PhoneIcon as PhosphorPhoneIcon,
  MapPinIcon as PhosphorMapPinIcon,
  ArrowLeftIcon as PhosphorArrowLeftIcon,
  ArrowRightIcon as PhosphorArrowRightIcon,
  PlayIcon as PhosphorPlayIcon,
  PauseIcon as PhosphorPauseIcon,
  InstagramLogoIcon as PhosphorInstagramLogoIcon,
  LinkedinLogoIcon as PhosphorLinkedinLogoIcon,
  XLogoIcon as PhosphorXLogoIcon,
  YoutubeLogoIcon as PhosphorYoutubeLogoIcon
} from '@phosphor-icons/react';

type IconName = 
  | 'caret-down'
  | 'list'
  | 'lightning'
  | 'check-circle'
  | 'users'
  | 'check'
  | 'caret-right'
  | 'envelope'
  | 'phone'
  | 'map-pin'
  | 'arrow-left'
  | 'arrow-right'
  | 'play'
  | 'pause'
  | 'instagram'
  | 'linkedin'
  | 'x'
  | 'youtube';

interface PixonalIconProps {
  name: IconName;
  size?: number;
  className?: string;
  weight?: 'regular' | 'fill' | 'bold' | 'duotone' | 'thin' | 'light';
}

const iconMap = {
  'caret-down': PhosphorCaretDownIcon,
  'list': PhosphorListIcon,
  'lightning': PhosphorLightningIcon,
  'check-circle': PhosphorCheckCircleIcon,
  'users': PhosphorUsersIcon,
  'check': PhosphorCheckIcon,
  'caret-right': PhosphorCaretRightIcon,
  'envelope': PhosphorEnvelopeIcon,
  'phone': PhosphorPhoneIcon,
  'map-pin': PhosphorMapPinIcon,
  'arrow-left': PhosphorArrowLeftIcon,
  'arrow-right': PhosphorArrowRightIcon,
  'play': PhosphorPlayIcon,
  'pause': PhosphorPauseIcon,
  'instagram': PhosphorInstagramLogoIcon,
  'linkedin': PhosphorLinkedinLogoIcon,
  'x': PhosphorXLogoIcon,
  'youtube': PhosphorYoutubeLogoIcon,
};

export default function PixonalIcon({ name, size = 16, className = "", weight = 'regular' }: PixonalIconProps) {
  const IconComponent = iconMap[name];
  
  if (!IconComponent) {
    console.warn(`Icon "${name}" not found`);
    return null;
  }
  
  return <IconComponent size={size} className={className} weight={weight} />;
}
