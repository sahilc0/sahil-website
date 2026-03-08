"use client";

import Image from "next/image";
import { testimonials } from "@/data/testimonials";
import { Ticker } from "./ticker";
import { FadeIn } from "./fade-in";

export function Testimonials() {
  return (
    <section className="overflow-hidden px-[100px] py-[100px] max-md:px-6">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-[50px]">
        <FadeIn className="flex max-w-[600px] flex-col items-center gap-[10px] text-center">
          <h2 className="font-heading text-[48px] font-medium leading-[1.3em] tracking-[-1px] text-text max-md:text-[36px]">
            I&apos;ve worked with the best
          </h2>
        </FadeIn>

        <FadeIn delay={0.15} className="w-full max-w-[1000px]">
          <Ticker speed={60} gap={20} pauseOnHover hoverSlowFactor={0.4}>
            {testimonials.map((t) => (
              <a
                key={t.name}
                href={t.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-[416px] w-[428px] shrink-0 flex-col justify-between overflow-hidden rounded-[20px] bg-white p-[40px] transition-all duration-200 ease-[ease] hover:shadow-lg hover:-translate-y-0.5"
              >
                <p className="font-body text-[18px] font-medium leading-[1.7em] text-text-light">
                  {t.quote}
                </p>
                <div className="flex items-center gap-3">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    width={40}
                    height={40}
                    className="rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-heading text-[14px] font-normal leading-[1.4em] text-text">
                      {t.name}
                    </h3>
                    <p className="font-body text-[14px] font-medium leading-[1.5em] text-text-light">
                      {t.title}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </Ticker>
        </FadeIn>
      </div>
    </section>
  );
}
