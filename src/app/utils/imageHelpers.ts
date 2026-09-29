/**
 * Image helper utility functions for responsive image selection and optimizations.
 */

export function getResponsiveUnsplashSrcSet(url?: string): string | undefined {
  if (!url || !url.includes("unsplash.com")) return undefined;
  const baseUrl = url.split("?")[0];
  return `${baseUrl}?w=480&h=300&fit=crop 480w, ${baseUrl}?w=800&h=500&fit=crop 800w, ${baseUrl}?w=1280&h=800&fit=crop 1280w`;
}

export function getResponsiveUnsplashHeroSrcSet(url?: string): string | undefined {
  if (!url || !url.includes("unsplash.com")) return undefined;
  const baseUrl = url.split("?")[0];
  return `${baseUrl}?w=768&h=480&fit=crop 768w, ${baseUrl}?w=1280&h=800&fit=crop 1280w, ${baseUrl}?w=1920&h=1080&fit=crop 1920w`;
}

export const CARD_IMAGE_SIZES = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw";
export const HERO_IMAGE_SIZES = "(max-width: 768px) 100vw, 100vw";
