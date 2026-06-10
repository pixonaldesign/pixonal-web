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
  AsteriskIcon as PhosphorAsteriskIcon,
  EyeIcon as PhosphorEyeIcon,
  HammerIcon as PhosphorHammerIcon,
  HardDrivesIcon as PhosphorHardDrivesIcon,
  GitForkIcon as PhosphorGitForkIcon,
  PresentationIcon as PhosphorPresentationIcon,
  BellRingingIcon as PhosphorBellRingingIcon,
  MonitorIcon as PhosphorMonitorIcon,
  GraphIcon as PhosphorGraphIcon,
  HeadCircuitIcon as PhosphorHeadCircuitIcon,
  HandPalmIcon as PhosphorHandPalmIcon,
  ClipboardTextIcon as PhosphorClipboardTextIcon,
  InstagramLogoIcon as PhosphorInstagramLogoIcon,
  LinkedinLogoIcon as PhosphorLinkedinLogoIcon,
  XLogoIcon as PhosphorXLogoIcon,
  YoutubeLogoIcon as PhosphorYoutubeLogoIcon,
  MagnifyingGlassIcon as PhosphorMagnifyingGlassIcon,
  ArrowUpRightIcon as PhosphorArrowUpRightIcon,
  IntersectIcon as PhosphorIntersectIcon,
  FlagBannerFoldIcon as PhosphorFlagBannerFoldIcon,
  StrategyIcon as PhosphorStrategyIcon,
  SealCheckIcon as PhosphorSealCheckIcon,
  StackIcon as PhosphorStackIcon,
  LinkBreakIcon as PhosphorLinkBreakIcon
} from '@phosphor-icons/react';

export type IconName = 
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
  | 'asterisk'
  | 'eye'
  | 'hammer'
  | 'hard-drives'
  | 'git-fork'
  | 'presentation'
  | 'bell-ringing'
  | 'monitor'
  | 'graph'
  | 'head-circuit'
  | 'hand-palm'
  | 'clipboard-text'
  | 'instagram'
  | 'linkedin'
  | 'x'
  | 'youtube'
  | 'magnifying-glass'
  | 'arrow-up-right'
  | 'intersect'
  | 'flag-banner-fold'
  | 'strategy'
  | 'seal-check'
  | 'stack'
  | 'link-break';

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
  'asterisk': PhosphorAsteriskIcon,
  'eye': PhosphorEyeIcon,
  'hammer': PhosphorHammerIcon,
  'hard-drives': PhosphorHardDrivesIcon,
  'git-fork': PhosphorGitForkIcon,
  'presentation': PhosphorPresentationIcon,
  'bell-ringing': PhosphorBellRingingIcon,
  'monitor': PhosphorMonitorIcon,
  'graph': PhosphorGraphIcon,
  'head-circuit': PhosphorHeadCircuitIcon,
  'hand-palm': PhosphorHandPalmIcon,
  'clipboard-text': PhosphorClipboardTextIcon,
  'instagram': PhosphorInstagramLogoIcon,
  'linkedin': PhosphorLinkedinLogoIcon,
  'x': PhosphorXLogoIcon,
  'youtube': PhosphorYoutubeLogoIcon,
  'magnifying-glass': PhosphorMagnifyingGlassIcon,
  'arrow-up-right': PhosphorArrowUpRightIcon,
  'intersect': PhosphorIntersectIcon,
  'flag-banner-fold': PhosphorFlagBannerFoldIcon,
  'strategy': PhosphorStrategyIcon,
  'seal-check': PhosphorSealCheckIcon,
  'stack': PhosphorStackIcon,
  'link-break': PhosphorLinkBreakIcon,
};

export default function PixonalIcon({ name, size = 16, className = "", weight = 'regular' }: PixonalIconProps) {
  const IconComponent = iconMap[name];
  
  if (!IconComponent) {
    console.warn(`Icon "${name}" not found`);
    return null;
  }
  
  return <IconComponent size={size} className={className} weight={weight} />;
}
