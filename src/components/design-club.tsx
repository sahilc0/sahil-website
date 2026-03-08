"use client";

import { Carousel } from "./carousel";
import { FadeIn } from "./fade-in";

const images = [
  {
    src: "/images/club-1.png",
    alt: "Austin Bitcoin Design Club event",
    width: 681,
    height: 454,
  },
  {
    src: "/images/club-2.png",
    alt: "Austin Bitcoin Design Club meetup",
    width: 429,
    height: 454,
  },
  {
    src: "/images/club-3.png",
    alt: "Austin Bitcoin Design Club presentation",
    width: 681,
    height: 454,
  },
];

export function DesignClub() {
  return (
    <section className="px-[100px] py-[100px] max-md:px-6">
      <FadeIn className="mx-auto flex max-w-[1200px] flex-col items-center gap-[100px] lg:flex-row">
        <div className="flex-1">
          <Carousel images={images} interval={6000} />
        </div>
        <div className="flex flex-1 flex-col gap-5">
          <h2 className="font-heading text-[48px] font-medium leading-[1.3em] tracking-[-1px] text-text max-md:text-[36px]">
            Austin Bitcoin Design Club
          </h2>
          <p className="font-body text-[18px] font-medium leading-[1.7em] text-text-light">
            I run a monthly meetup where we go through design news, updates,
            education, and design critiques. We get 30-50 people every month!
            Hosted in the Bitcoin Commons in downtown Austin, TX.
          </p>
        </div>
      </FadeIn>
    </section>
  );
}
