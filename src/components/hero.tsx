"use client";

import Image from "next/image";
import {
  ArrowRight,
  TwitterLogo,
  LinkedinLogo,
} from "@phosphor-icons/react/dist/ssr";
import { FadeIn } from "./fade-in";

const logos = [
  { src: "/images/logo-fedi.png", alt: "Fedi", width: 192, height: 37 },
  { src: "/images/logo-onramp.png", alt: "Onramp", width: 116, height: 31 },
  { src: "/images/logo-fold.png", alt: "Fold", width: 143, height: 62 },
  { src: "/images/logo-mutiny.png", alt: "Mutiny", width: 123, height: 41 },
  { src: "/images/logo-zeus.png", alt: "Zeus", width: 84, height: 33 },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Subtle gradient background */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-primary-light/60 via-white/0 to-transparent" />

      <div className="relative flex flex-col items-center gap-[100px] px-[100px] pt-[200px] pb-[100px] max-md:px-6">
        {/* Hero content */}
        <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center gap-[100px] lg:flex-row lg:items-start">
          {/* Text column */}
          <FadeIn className="flex max-w-[600px] flex-1 flex-col gap-5">
            <h1 className="max-w-[400px] font-heading text-[68px] font-medium leading-[1.1em] tracking-[-1.5px] text-text max-md:text-[44px]">
              Sahil
              <br />
              Chaturvedi
            </h1>

            <p className="font-body text-[24px] font-normal leading-[1.4em] tracking-[0.2px] text-text-light max-md:text-[20px]">
              I&apos;m a product designer in Austin.
            </p>

            <p className="font-body text-[24px] font-normal leading-[1.4em] tracking-[0.2px] text-text-light max-md:text-[20px]">
              Currently, I&apos;m Founding Designer @{" "}
              <a
                href="https://arklabs.to"
                className="text-primary underline decoration-primary/30 underline-offset-4 hover:decoration-primary/60"
              >
                Ark Labs
              </a>
              .
            </p>

            <p className="font-body text-[24px] font-normal leading-[1.4em] tracking-[0.2px] text-text-light max-md:text-[20px]">
              Prev: design @{" "}
              <a
                href="https://unchained.com"
                className="text-primary underline decoration-primary/30 underline-offset-4 hover:decoration-primary/60"
              >
                Unchained
              </a>{" "}
              &{" "}
              <a
                href="https://foundrydigital.com"
                className="text-primary underline decoration-primary/30 underline-offset-4 hover:decoration-primary/60"
              >
                Foundry
              </a>
              .
            </p>

            <p className="font-body text-[24px] font-normal leading-[1.4em] tracking-[0.2px] text-text-light max-md:text-[20px]">
              Before that, I co-founded an esports company funded by{" "}
              <a
                href="https://www.disney.com"
                className="text-primary underline decoration-primary/30 underline-offset-4 hover:decoration-primary/60"
              >
                Disney
              </a>{" "}
              and{" "}
              <a
                href="https://500.co"
                className="text-primary underline decoration-primary/30 underline-offset-4 hover:decoration-primary/60"
              >
                500 Startups
              </a>
              .
            </p>

            {/* Email CTA */}
            <a
              href="mailto:hello@sahilc.com"
              className="inline-flex items-center gap-1 font-nav text-[18px] font-bold text-primary transition-opacity hover:opacity-80"
            >
              hello@sahilc.com
              <ArrowRight size={19} weight="bold" />
            </a>

            {/* Social icons */}
            <div className="flex gap-[15px]">
              <a
                href="https://twitter.com/sahilc0"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white transition-opacity hover:opacity-80"
                aria-label="Twitter"
              >
                <TwitterLogo size={18} weight="fill" />
              </a>
              <a
                href="https://www.linkedin.com/in/sahilc0/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white transition-opacity hover:opacity-80"
                aria-label="LinkedIn"
              >
                <LinkedinLogo size={18} weight="fill" />
              </a>
              <a
                href="https://primal.net/p/npub126pll3ll3fej2egnt2k4dn0ljn46ekdxzmgnzwh23t2g53rtl6vs5ca7vm"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white transition-opacity hover:opacity-80"
                aria-label="Nostr"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 256 256"
                  fill="currentColor"
                >
                  <path d="M216,152a88.11,88.11,0,0,1-87.8,88c-50.66.12-90.21-43-88.12-93.62,1.21-29.21,11.71-60.54,29.23-86.82C87.5,32.29,109.43,16,128,16c13.25,0,28.23,8.32,42.34,23a4,4,0,0,1,.09,5.44L122,98.67a8,8,0,0,0,4,13.09l24.61,6.15-6.51,32.52a8,8,0,0,0,6.28,9.41A7.7,7.7,0,0,0,152,160a8,8,0,0,0,7.83-6.43l8-40a8,8,0,0,0-5.9-9.33l-19.16-4.79,36.89-41.33a4,4,0,0,1,6.29.41c.24.34.47.68.7,1C205.3,87.54,216,121.23,216,152Z" />
                </svg>
              </a>
            </div>
          </FadeIn>

          {/* Profile image */}
          <FadeIn delay={0.15} className="flex-1">
            <Image
              src="/images/profile.jpg"
              alt="Sahil Chaturvedi"
              width={415}
              height={415}
              className="aspect-square w-full max-w-[415px] rounded-full object-cover lg:max-w-none"
              priority
            />
          </FadeIn>
        </div>

        {/* Logos */}
        <FadeIn delay={0.3} className="mx-auto w-full max-w-[1200px] overflow-hidden p-[10px]">
          <div className="flex flex-wrap items-center justify-center gap-[60px] opacity-40">
            {logos.map((logo) => (
              <Image
                key={logo.alt}
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                style={{ width: logo.width, height: logo.height }}
                className="object-contain"
              />
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
