"use client";

import React, { useEffect, useRef, useState } from "react";

function useInView(options?: IntersectionObserverInit) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Check if browser supports IntersectionObserver
    if (!("IntersectionObserver" in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      { 
        threshold: 0.01, 
        rootMargin: "50px", // Trigger slightly before it enters the viewport
        ...options 
      }
    );

    observer.observe(element);

    // Immediate check as a fallback
    const rect = element.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setIsVisible(true);
      observer.unobserve(element);
    }

    return () => observer.disconnect();
  }, [options]);

  return { ref, isVisible };
}

export const FadeIn = ({
  children,
  delay = 0,
  direction = "up",
  duration = 0.8,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
  duration?: number;
  className?: string;
}) => {
  const { ref, isVisible } = useInView();

  const directionClass = {
    up: "fade-up",
    down: "fade-down",
    left: "fade-left",
    right: "fade-right",
    none: "fade-in",
  }[direction];

  return (
    <div
      ref={ref}
      className={`animate-on-scroll ${isVisible ? `is-visible ${directionClass}` : ""} ${className}`}
      style={{
        animationDuration: `${duration}s`,
        animationDelay: `${delay}s`,
      }}
    >
      {children}
    </div>
  );
};

export const ScaleIn = ({
  children,
  delay = 0,
  duration = 1,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}) => {
  const { ref, isVisible } = useInView();

  return (
    <div
      ref={ref}
      className={`animate-on-scroll ${isVisible ? "is-visible scale-in" : ""} ${className}`}
      style={{
        animationDuration: `${duration}s`,
        animationDelay: `${delay}s`,
      }}
    >
      {children}
    </div>
  );
};

export const Reveal = ({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => {
  const { ref, isVisible } = useInView();

  return (
    <div
      ref={ref}
      className={`animate-on-scroll ${isVisible ? "is-visible reveal-up" : ""} ${className}`}
      style={{
        animationDuration: "0.8s",
        animationDelay: `${delay}s`,
      }}
    >
      {children}
    </div>
  );
};
