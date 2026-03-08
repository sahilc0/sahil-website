"use client";

import Image from "next/image";
import { Ticker } from "./ticker";

const workPairs = [
  {
    mobile: { src: "/images/work-1-mobile.webp", width: 274, height: 610 },
    desktop: { src: "/images/work-1-desktop.webp", width: 777, height: 610 },
  },
  {
    mobile: { src: "/images/work-2-mobile.gif", width: 274, height: 610 },
    desktop: { src: "/images/work-2-desktop.webp", width: 777, height: 610 },
  },
  {
    mobile: { src: "/images/work-3-mobile.gif", width: 285, height: 609 },
    desktop: { src: "/images/work-3-desktop.webp", width: 777, height: 610 },
  },
  {
    mobile: { src: "/images/work-4-mobile.gif", width: 274, height: 610 },
    desktop: { src: "/images/work-4-desktop.webp", width: 777, height: 610 },
  },
];

export function ClientWork() {
  return (
    <section className="mx-auto max-w-[1200px] py-[50px]">
      <Ticker speed={100} gap={10} pauseOnHover>
        {workPairs.map((pair, i) => (
          <div key={i} className="flex shrink-0 gap-[10px]">
            <Image
              src={pair.mobile.src}
              alt={`Client work mobile ${i + 1}`}
              width={pair.mobile.width}
              height={pair.mobile.height}
              className="h-[610px] w-auto rounded-[10px] object-cover"
              unoptimized
            />
            <Image
              src={pair.desktop.src}
              alt={`Client work desktop ${i + 1}`}
              width={pair.desktop.width}
              height={pair.desktop.height}
              className="h-[610px] w-auto rounded-[10px] object-cover"
            />
          </div>
        ))}
      </Ticker>
    </section>
  );
}
