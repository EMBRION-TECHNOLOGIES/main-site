/**
 * Utility functions for handling images in the UI
 */

/**
 * Check if an image URL is valid and not empty
 * @param src - The image source URL
 * @returns Promise<boolean> - True if image is valid, false otherwise
 */
export async function isValidImage(src: string): Promise<boolean> {
  if (!src) return false;
  
  try {
    const response = await fetch(src, { method: 'HEAD' });
    return response.ok && response.headers.get('content-length') !== '0';
  } catch {
    return false;
  }
}

/**
 * Get a fallback placeholder for invalid or empty images
 * @param productName - The name of the product
 * @returns string - A placeholder text or icon
 */
export function getImageFallback(productName: string): string {
  return `📱 ${productName}`;
}
