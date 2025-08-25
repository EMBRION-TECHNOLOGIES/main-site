"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";


interface ScreenshotGalleryProps {
  screenshots: string[];
  productName: string;
}

export function ScreenshotGallery({ screenshots, productName }: ScreenshotGalleryProps) {
  const [hasVisibleScreenshots, setHasVisibleScreenshots] = useState(false);



  const handleScreenshotVisibility = (index: number, isVisible: boolean) => {
    // Update the visibility state
    setHasVisibleScreenshots(isVisible);
  };

  if (!screenshots || screenshots.length === 0) {
    return null;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">Product Screenshots</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6 md:grid-cols-2">
          {screenshots.map((screenshot, index) => (
            <div key={index} className="group">
              <div className="relative overflow-hidden rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                <ScreenshotImage
                  src={screenshot}
                  alt={`${productName} screenshot ${index + 1}`}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  onVisibilityChange={(isVisible) => handleScreenshotVisibility(index, isVisible)}
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors duration-300" />
              </div>
            </div>
          ))}
        </div>
        
        {/* Coming Soon Banner - Shows when no screenshots are visible */}
        {!hasVisibleScreenshots && (
          <div className="mt-6 p-8 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-blue-900 mb-2">Screenshots Coming Soon</h3>
                          <p className="text-blue-700 text-sm leading-relaxed">
                We&apos;re working on adding detailed screenshots to showcase {productName} in action. 
                Click on the Demo button below to view the product in action.
              </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

// Custom component that tracks visibility
function ScreenshotImage({ 
  src, 
  alt, 
  className, 
  onVisibilityChange,
  ...props 
}: {
  src?: string;
  alt: string;
  className?: string;
  onVisibilityChange: (isVisible: boolean) => void;
  [key: string]: unknown;
}) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!src) {
      onVisibilityChange(false);
      return;
    }

    // Check if image exists and isn't empty
    const img = new Image();
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
        
        setIsVisible(hasContent);
        onVisibilityChange(hasContent);
      } else {
        setIsVisible(true);
        onVisibilityChange(true);
      }
    };
    
    img.onerror = () => {
      setIsVisible(false);
      onVisibilityChange(false);
    };

    img.src = src;
  }, [src, onVisibilityChange]);

  // Don't render anything while loading or if image doesn't exist
  if (!isVisible) {
    return null;
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      {...props}
    />
  );
}
