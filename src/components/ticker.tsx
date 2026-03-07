"use client";

import { useRef, useState } from "react";

interface TickerProps {
  children: React.ReactNode;
  speed?: number;
  gap?: number;
  pauseOnHover?: boolean;
  className?: string;
}

export function Ticker({
  children,
  speed = 60,
  gap = 0,
  pauseOnHover = true,
  className = "",
}: TickerProps) {
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const duration = `${100 / (speed / 60)}s`;

  return (
    <div
      ref={containerRef}
      className={`overflow-hidden ${className}`}
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => pauseOnHover && setIsPaused(false)}
    >
      <div
        className="flex w-max"
        style={{
          gap: `${gap}px`,
          animation: `ticker ${duration} linear infinite`,
          animationPlayState: isPaused ? "paused" : "running",
        }}
      >
        <div className="flex shrink-0" style={{ gap: `${gap}px` }}>
          {children}
        </div>
        <div className="flex shrink-0" style={{ gap: `${gap}px` }}>
          {children}
        </div>
      </div>
      <style jsx>{`
        @keyframes ticker {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}
