"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowsInCardinal,
  Detective,
  Barbell,
  MagnifyingGlass,
} from "@phosphor-icons/react/dist/ssr";
import { Ticker } from "./ticker";
import { FadeIn } from "./fade-in";

const features = [
  {
    icon: ArrowsInCardinal,
    title: "User experience strategy calls",
    description:
      "We\u2019ll zoom out and find gaps in product storytelling or product strategy. Together we\u2019ll find the 80/20 effort/impact projects to tackle next.",
  },
  {
    icon: Detective,
    title: "Interface & experience audit",
    description:
      'aka \u201cI need some tips of where we can improve\u201d - A detailed design critique of part of your website or product. Guided by years of bitcoin product and design experience. Organized neatly by effort, impact, priority.',
  },
  {
    icon: Barbell,
    title: "Design projects",
    description:
      "Design a new feature or product, or upgrade the experience of an existing feature or product.",
  },
  {
    icon: MagnifyingGlass,
    title: "Design QA & engineering handoff",
    description:
      "Code is the final source of truth. How closely does the final output match the blueprints? I can help with that.",
  },
];

const workPairs = [
  {
    mobile: { src: "/images/work-1-mobile.gif", width: 274, height: 610 },
    desktop: { src: "/images/work-1-desktop.png", width: 777, height: 610 },
  },
  {
    mobile: { src: "/images/work-2-mobile.gif", width: 274, height: 610 },
    desktop: { src: "/images/work-2-desktop.png", width: 777, height: 610 },
  },
  {
    mobile: { src: "/images/work-3-mobile.gif", width: 285, height: 609 },
    desktop: { src: "/images/work-3-desktop.png", width: 777, height: 610 },
  },
  {
    mobile: { src: "/images/work-4-mobile.gif", width: 274, height: 610 },
    desktop: { src: "/images/work-4-desktop.png", width: 777, height: 610 },
  },
];

export function StudioTwentyone() {
  return (
    <section
      id="freelance"
      className="overflow-hidden px-[100px] py-[100px] max-md:px-6"
    >
      <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-[50px]">
        {/* Header */}
        <FadeIn className="flex max-w-[600px] flex-col items-center gap-5 text-center">
          <h2 className="font-heading text-[48px] font-medium leading-[1.3em] tracking-[-1px] text-text max-md:text-[36px]">
            Studio Twentyone
          </h2>
          <p className="font-body text-[18px] font-medium leading-[1.7em] text-text-light">
            Your design partner for all things bitcoin. Past clients include
            Fedi, Fold, Onramp, Mutiny, and Zeus.
            <br />
            <br />
            Here&apos;s how I can help:
          </p>
          <Link
            href="/#contact"
            className="inline-block rounded-[10px] bg-primary px-5 py-[15px] font-nav text-[16px] font-bold text-white transition-opacity hover:opacity-90"
          >
            Reach out
          </Link>
        </FadeIn>

        {/* Feature cards */}
        <FadeIn className="grid w-full max-w-[1100px] grid-cols-1 gap-5 md:grid-cols-2">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col gap-[30px] rounded-[20px] bg-white p-[40px]"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-[10px] bg-primary-light">
                <feature.icon
                  size={28}
                  weight="fill"
                  className="text-primary"
                />
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="font-heading text-[24px] font-medium leading-[1.4em] tracking-[-0.5px] text-text">
                  {feature.title}
                </h3>
                <p className="font-body text-[18px] font-medium leading-[1.7em] text-text-light">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </FadeIn>

        {/* Client work ticker */}
        <div className="w-full max-w-[1200px]">
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
        </div>
      </div>
    </section>
  );
}
