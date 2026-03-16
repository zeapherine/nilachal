import { Variants } from "framer-motion";

/**
 * Organic Bloom: A gentle scaling and opacity reveal mirroring natural growth.
 * Refined with "Liquid" physics for a more premium feel.
 */
export const bloomIn: Variants = {
  initial: { opacity: 0, scale: 0.9, y: 30 },
  animate: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 25,
      mass: 1.2,
    }
  }
};

/**
 * Depth Bloom: For images, adding a subtle perspective shift.
 * Mobile Optimization: Removed blur as it causes heavy GPU recalculations.
 */
export const depthBloom: Variants = {
  initial: { opacity: 0, scale: 1.05 },
  animate: { 
    opacity: 1, 
    scale: 1, 
    transition: {
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

/**
 * Narrative Reveal: For text sections where items should appear in sequence.
 */
export const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    }
  }
};

export const fadeInSlideUp: Variants = {
  initial: { opacity: 0, y: 40 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring",
      stiffness: 60,
      damping: 20,
    }
  }
};

/**
 * Reveal from Left/Right: Refined for smoother narrative flow.
 */
export const slideInLeft: Variants = {
  initial: { opacity: 0, x: -60 },
  animate: { 
    opacity: 1, 
    x: 0,
    transition: {
      type: "spring",
      stiffness: 70,
      damping: 25,
    }
  }
};

export const slideInRight: Variants = {
  initial: { opacity: 0, x: 60 },
  animate: { 
    opacity: 1, 
    x: 0,
    transition: {
      type: "spring",
      stiffness: 70,
      damping: 25,
    }
  }
};

/**
 * Scroll Reveal: "Breathe" effect when coming into view.
 */
export const scrollReveal: Variants = {
  initial: { opacity: 0, y: 50, scale: 0.98 },
  animate: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 20,
      duration: 1.2
    }
  }
};

/**
 * Magnetic Hover: For high-priority CTAs.
 */
export const magneticScale: Variants = {
  hover: {
    scale: 1.05,
    y: -5,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 15
    }
  },
  tap: {
    scale: 0.95
  }
};

/**
 * Organic Hover: Soft scaling and elevation.
 */
export const hoverScale: Variants = {
  hover: {
    scale: 1.03,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20
    }
  },
  tap: {
    scale: 0.98
  }
};
