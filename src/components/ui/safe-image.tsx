"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface SafeImageProps {
  src?: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  [key: string]: unknown;
}

export function SafeImage({ 
  src, 
  alt, 
  className, 
  width = 400,
  height = 300,
  priority = false,
  ...props 
}: SafeImageProps) {
  const [imageExists, setImageExists] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!src) {
      setImageExists(false);
      setIsLoading(false);
      return;
    }

    // Check if image exists and isn't empty
    const img = new window.Image();
    img.onload = () => {
      // Check if the image has actual content (not just a placeholder)
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (ctx) {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;
        
        // Check if image has non-transparent pixels (basic content check)
        let hasContent = false;
        for (let i = 3; i < data.length; i += 4) {
          if (data[i] > 0) { // Alpha channel > 0
            hasContent = true;
            break;
          }
        }
        
        setImageExists(hasContent);
      } else {
        setImageExists(true); // Fallback if canvas context not available
      }
      setIsLoading(false);
    };
    
    img.onerror = () => {
      setImageExists(false);
      setIsLoading(false);
    };

    img.src = src;
  }, [src]);

  // Don't render anything while loading or if image doesn't exist
  if (isLoading || !imageExists) {
    return null;
  }

  // Type guard to ensure src is defined
  if (!src) {
    return null;
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
      {...props}
    />
  );
}
