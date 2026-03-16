import { cn } from "./utils";

/**
 * Tiny 1x1 pixel blur placeholder for next/image blur-up effect.
 * Using a neutral warm tone matching the sand-light background.
 */
export const BLUR_DATA_URL =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAADElEQVR4nGP4++MLAAXfAuqVZQPpAAAAAElFTkSuQmCC";

/**
 * Responsive sizes for common image layouts.
 */
export const IMAGE_SIZES = {
  /** Full-width hero images */
  hero: "(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px",
  /** Half-width grid images */
  half: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px",
  /** Third-width grid images */
  third: "(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px",
  /** Quarter-width grid images */
  quarter: "(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 300px",
  /** Avatar/thumbnail images */
  avatar: "(max-width: 768px) 160px, 160px",
} as const;
