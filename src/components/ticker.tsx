"use client";

import { useRef, useEffect, useCallback } from "react";

interface TickerProps {
  children: React.ReactNode;
  speed?: number;
  gap?: number;
  pauseOnHover?: boolean;
  hoverSlowFactor?: number;
  className?: string;
}

export function Ticker({
  children,
  speed = 60,
  gap = 0,
  pauseOnHover = false,
  hoverSlowFactor,
  className = "",
}: TickerProps) {
  const outerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const currentSpeedRef = useRef(speed);
  const targetSpeedRef = useRef(speed);
  const lastTimeRef = useRef(0);
  const rafRef = useRef<number>(0);

  const animate = useCallback(
    (time: number) => {
      if (!trackRef.current) return;

      if (lastTimeRef.current === 0) {
        lastTimeRef.current = time;
        rafRef.current = requestAnimationFrame(animate);
        return;
      }

      const delta = (time - lastTimeRef.current) / 1000;
      lastTimeRef.current = time;

      // Lerp current speed toward target speed for smooth transitions
      const lerpFactor = 1 - Math.pow(0.001, delta);
      currentSpeedRef.current +=
        (targetSpeedRef.current - currentSpeedRef.current) * lerpFactor;

      // Advance offset (speed is in px/s)
      offsetRef.current += currentSpeedRef.current * delta;

      // Get width of one copy of the children to know when to loop
      const firstChild = trackRef.current.children[0] as HTMLElement | null;
      if (firstChild) {
        const halfWidth = firstChild.offsetWidth;
        if (halfWidth > 0 && offsetRef.current >= halfWidth) {
          offsetRef.current -= halfWidth;
        }
      }

      // Use translate3d for GPU-accelerated compositing
      trackRef.current.style.transform = `translate3d(-${offsetRef.current}px, 0, 0)`;

      rafRef.current = requestAnimationFrame(animate);
    },
    []
  );

  useEffect(() => {
    targetSpeedRef.current = speed;
    currentSpeedRef.current = speed;
  }, [speed]);

  useEffect(() => {
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [animate]);

  const handleMouseEnter = useCallback(() => {
    if (pauseOnHover && !hoverSlowFactor) {
      targetSpeedRef.current = 0;
    } else if (hoverSlowFactor) {
      targetSpeedRef.current = speed * hoverSlowFactor;
    }
  }, [pauseOnHover, hoverSlowFactor, speed]);

  const handleMouseLeave = useCallback(() => {
    targetSpeedRef.current = speed;
  }, [speed]);

  return (
    <div
      ref={outerRef}
      className={`overflow-hidden ${className}`}
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={trackRef}
        className="flex w-max will-change-transform"
        style={{ gap: `${gap}px` }}
      >
        <div className="flex shrink-0" style={{ gap: `${gap}px` }}>
          {children}
        </div>
        <div className="flex shrink-0" style={{ gap: `${gap}px` }}>
          {children}
        </div>
      </div>
    </div>
  );
}
