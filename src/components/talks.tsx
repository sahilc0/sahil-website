"use client";

import { Carousel } from "./carousel";

const images = [
  { src: "/images/talks-1.png", alt: "Speaking at a bitcoin conference", width: 1208, height: 906 },
  { src: "/images/talks-2.png", alt: "Presenting at a bitcoin event", width: 1091, height: 817 },
  { src: "/images/talks-3.png", alt: "Talk at Bitcoin Park", width: 806, height: 454 },
  { src: "/images/talks-4.png", alt: "Speaking engagement", width: 815, height: 454 },
];

export function Talks() {
  return (
    <section id="talks" className="mx-auto max-w-[1200px] px-6 py-[100px]">
      <div className="flex flex-col items-center gap-[100px] lg:flex-row">
        <div className="flex max-w-[400px] flex-col gap-4">
          <h2 className="font-heading text-[48px] font-medium leading-[1.3em] tracking-[-1px] text-text max-md:text-[36px]">
            Public appearances
          </h2>
          <p className="font-body text-[18px] font-medium leading-[1.7em] text-text-light">
            I had a great time on the largest bitcoin podcast (What Bitcoin
            Did). I&apos;ve also spoken about bitcoin and design at numerous
            conferences and events, from TABConf in Atlanta, to Bitcoin Park in
            Nashville, to Bitcoin4India in Mumbai, India.
          </p>
        </div>
        <div className="flex-1">
          <Carousel images={images} interval={6000} borderRadius={24} />
        </div>
      </div>
    </section>
  );
}
