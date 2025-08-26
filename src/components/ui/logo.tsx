'use client';

import Image from 'next/image';
import { useMemo, useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

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
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  // Prevent hydration mismatch by only showing theme after mount
  useEffect(() => {
    setMounted(true);
  }, []);
  
  // Use resolvedTheme to handle SSR and system preference
  // Default to 'light' to match the defaultTheme in layout
  const currentTheme = mounted ? (resolvedTheme || theme || 'light') : 'light';

  // Always use full variant for responsive sizing, unless explicitly specified otherwise
  const responsiveVariant = useMemo(() => {
    if (variant !== 'full') return variant; // Use explicit variant if specified
    
    // Always return 'full' for responsive sizing, but we'll adjust dimensions instead
    return 'full';
  }, [variant]);

  const getLogoSrc = () => {
    // Use theme-specific SVG files for better visibility
    const isDark = currentTheme === 'dark';
    const themeSuffix = isDark ? '-dark' : '';
    
    switch (responsiveVariant) {
      case 'full':
        return `/logos/logo-full${themeSuffix}.svg`;
      case 'letter':
        return `/logos/logo-letter${themeSuffix}.svg`;
      case 'icon':
        return `/logos/logo-letter${themeSuffix}.svg`; // Use letter for icon as it's just the hexagon
      case 'text':
        return `/logos/logo-full${themeSuffix}.svg`; // Fallback to full for text variant
      default:
        return `/logos/logo-full${themeSuffix}.svg`;
    }
  };

  const getFallbackLogoSrc = () => {
    // Fallback to original SVG files if theme-specific ones don't exist
    switch (responsiveVariant) {
      case 'full':
        return '/logos/logo-full.svg';
      case 'letter':
        return '/logos/logo-letter.svg';
      case 'icon':
        return '/logos/logo-letter.svg';
      case 'text':
        return '/logos/logo-full.svg';
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
        // Use the exact dimensions provided, don't force minimum sizes
        return { width, height };
      case 'letter':
        return { width: width * 0.6, height: height * 0.6 };
      case 'icon':
        return { width: width * 0.4, height: height * 0.4 };
      case 'text':
        return { width, height };
      default:
        return { width, height };
    }
  };

  const dimensions = getDimensions();

  // Don't render anything until mounted to prevent hydration mismatch
  if (!mounted) {
    return (
      <div className={`logo-container ${className}`} data-theme="light">
        <div 
          style={{ 
            width: dimensions.width, 
            height: dimensions.height,
            backgroundColor: 'transparent'
          }} 
        />
      </div>
    );
  }

  return (
    <div className={`logo-container ${className}`} data-theme={currentTheme}>
      <Image
        key={`${currentTheme}-${responsiveVariant}`}
        src={getLogoSrc()}
        alt={getLogoAlt()}
        width={dimensions.width}
        height={dimensions.height}
        className="object-contain logo-image"
        priority={priority}
        onError={(e) => {
          // Fallback to original SVG if theme-specific one fails to load
          const target = e.target as HTMLImageElement;
          if (target.src !== getFallbackLogoSrc()) {
            target.src = getFallbackLogoSrc();
          }
        }}
      />
    </div>
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
