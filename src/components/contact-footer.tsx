"use client";

import Image from "next/image";
import {
  ArrowRight,
  ArrowCircleUpRight,
  TwitterLogo,
  LinkedinLogo,
} from "@phosphor-icons/react/dist/ssr";
import { Ticker } from "./ticker";
import { FadeIn } from "./fade-in";

const skills = [
  "User experience",
  "Product design",
  "Figma",
  "Framer",
  "User research",
  "Usability testing",
  "Motion design",
  "Design thinking",
  "Web design",
  "Wireframing",
];

export function ContactFooter() {
  return (
    <section id="contact" className="bg-primary">
      <div className="flex flex-col items-center gap-[56px] overflow-hidden px-[100px] py-[100px] max-md:px-6">
        <FadeIn className="mx-auto flex w-full max-w-[1200px] flex-col flex-wrap gap-[50px] lg:flex-row lg:items-center">
          {/* Text column */}
          <div className="flex min-w-[200px] max-w-[530px] flex-1 flex-col gap-5">
            <h2 className="font-heading text-[48px] font-medium leading-[1.3em] tracking-[-1px] text-white max-md:text-[36px]">
              Let&apos;s build great bitcoin experiences together.
            </h2>

            {/* Resume button */}
            <div className="flex items-center gap-6">
              <a
                href="https://drive.google.com/file/d/1Dx2b_4svowhfEraS_C8mjoeoG3I9KTKa/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center gap-2 rounded-[10px] bg-white px-5 py-[15px] font-nav text-[16px] font-bold text-text transition-opacity hover:opacity-90"
              >
                <ArrowCircleUpRight size={20} weight="fill" />
                View resume
              </a>
            </div>

            {/* Email CTA */}
            <a
              href="mailto:hello@sahilc.com"
              className="inline-flex items-center gap-1 font-nav text-[18px] font-bold text-white transition-opacity hover:opacity-80"
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
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/30 text-white transition-opacity hover:opacity-60"
                aria-label="Twitter"
              >
                <TwitterLogo size={20} weight="fill" />
              </a>
              <a
                href="https://www.linkedin.com/in/sahilc0/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/30 text-white transition-opacity hover:opacity-60"
                aria-label="LinkedIn"
              >
                <LinkedinLogo size={20} weight="fill" />
              </a>
              <a
                href="https://primal.net/p/npub126pll3ll3fej2egnt2k4dn0ljn46ekdxzmgnzwh23t2g53rtl6vs5ca7vm"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/30 text-white transition-opacity hover:opacity-60"
                aria-label="Nostr"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 256 256"
                  fill="currentColor"
                >
                  <path d="M216,152a88.11,88.11,0,0,1-87.8,88c-50.66.12-90.21-43-88.12-93.62,1.21-29.21,11.71-60.54,29.23-86.82C87.5,32.29,109.43,16,128,16c13.25,0,28.23,8.32,42.34,23a4,4,0,0,1,.09,5.44L122,98.67a8,8,0,0,0,4,13.09l24.61,6.15-6.51,32.52a8,8,0,0,0,6.28,9.41A7.7,7.7,0,0,0,152,160a8,8,0,0,0,7.83-6.43l8-40a8,8,0,0,0-5.9-9.33l-19.16-4.79,36.89-41.33a4,4,0,0,1,6.29.41c.24.34.47.68.7,1C205.3,87.54,216,121.23,216,152Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="min-w-[200px] flex-1 overflow-hidden rounded-[20px]">
            <Image
              src="/images/footer.jpg"
              alt="Sahil at work"
              width={660}
              height={417}
              className="h-auto w-[110%] max-w-none object-cover"
            />
          </div>
        </FadeIn>

        {/* Skills ticker */}
        <FadeIn delay={0.15} className="w-full">
          <Ticker speed={35} gap={0} pauseOnHover={false}>
            {skills.map((skill) => (
              <span
                key={skill}
                className="mx-6 inline-block font-nav text-[14px] font-bold uppercase tracking-[1px] text-white/70"
              >
                {skill}
              </span>
            ))}
          </Ticker>
        </FadeIn>
      </div>
    </section>
  );
}
