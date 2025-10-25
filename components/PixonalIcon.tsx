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
  MapPinIcon as PhosphorMapPinIcon
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
  | 'map-pin';

interface PixonalIconProps {
  name: IconName;
  size?: number;
  className?: string;
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
};

export default function PixonalIcon({ name, size = 16, className = "" }: PixonalIconProps) {
  const IconComponent = iconMap[name];
  
  if (!IconComponent) {
    console.warn(`Icon "${name}" not found`);
    return null;
  }
  
  return <IconComponent size={size} className={className} />;
}
