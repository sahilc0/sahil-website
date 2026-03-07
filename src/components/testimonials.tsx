"use client";

import Image from "next/image";
import { testimonials } from "@/data/testimonials";
import { Ticker } from "./ticker";

export function Testimonials() {
  return (
    <section className="mx-auto max-w-[1200px] px-6 py-[100px]">
      <div className="flex flex-col gap-[50px]">
        <h2 className="font-heading text-[48px] font-medium leading-[1.3em] tracking-[-1px] text-text max-md:text-[36px]">
          I&apos;ve worked with the best
        </h2>

        <Ticker speed={60} gap={20} pauseOnHover>
          {testimonials.map((t) => (
            <a
              key={t.name}
              href={t.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-[320px] shrink-0 flex-col justify-between gap-5 rounded-[20px] bg-white p-[40px] transition-shadow hover:shadow-md"
              style={{ minHeight: "280px" }}
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
      </div>
    </section>
  );
}
