'use client';

import Image from 'next/image';
import { useMemo } from 'react';
import { useMediaQuery } from '@/hooks/use-media-query';

export type LogoVariant = 'full' | 'letter' | 'icon' | 'text';

interface LogoProps {
  variant?: LogoVariant;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
}

export function Logo({ 
  variant = 'full', 
  className = '', 
  width = 200, 
  height = 60,
  priority = false 
}: LogoProps) {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const isSmallMobile = useMediaQuery('(max-width: 480px)');

  // Responsive variant selection
  const responsiveVariant = useMemo(() => {
    if (variant !== 'full') return variant; // Use explicit variant if specified
    
    if (isSmallMobile) return 'icon';
    if (isMobile) return 'letter';
    return 'full';
  }, [variant, isMobile, isSmallMobile]);

  const getLogoSrc = () => {
    switch (responsiveVariant) {
      case 'full':
        return '/logos/logo-full.svg';
      case 'letter':
        return '/logos/logo-letter.svg';
      case 'icon':
        return '/logos/logo-letter.svg'; // Use letter for icon as it's just the hexagon
      case 'text':
        return '/logos/logo-full.svg'; // Fallback to full for text variant
      default:
        return '/logos/logo-full.svg';
    }
  };

  const getLogoAlt = () => {
    switch (responsiveVariant) {
      case 'full':
        return 'EMBRION - Full Logo';
      case 'letter':
        return 'EMBRION - Letter Logo';
      case 'icon':
        return 'EMBRION - Icon';
      case 'text':
        return 'EMBRION';
      default:
        return 'EMBRION';
    }
  };

  const getDimensions = () => {
    switch (responsiveVariant) {
      case 'full':
        return { width: Math.max(width, 200), height: Math.max(height, 60) };
      case 'letter':
        return { width: Math.max(width * 0.6, 120), height: Math.max(height * 0.6, 36) };
      case 'icon':
        return { width: Math.max(width * 0.4, 80), height: Math.max(height * 0.4, 24) };
      case 'text':
        return { width: Math.max(width, 200), height: Math.max(height, 60) };
      default:
        return { width, height };
    }
  };

  const dimensions = getDimensions();

  return (
    <Image
      src={getLogoSrc()}
      alt={getLogoAlt()}
      width={dimensions.width}
      height={dimensions.height}
      className={`object-contain ${className}`}
      priority={priority}
    />
  );
}

// Convenience components for specific variants
export function LogoFull(props: Omit<LogoProps, 'variant'>) {
  return <Logo {...props} variant="full" />;
}

export function LogoLetter(props: Omit<LogoProps, 'variant'>) {
  return <Logo {...props} variant="letter" />;
}

export function LogoIcon(props: Omit<LogoProps, 'variant'>) {
  return <Logo {...props} variant="icon" />;
}

export function LogoText(props: Omit<LogoProps, 'variant'>) {
  return <Logo {...props} variant="text" />;
}
