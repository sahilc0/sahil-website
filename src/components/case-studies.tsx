"use client";

import Image from "next/image";
import Link from "next/link";
import { caseStudies } from "@/data/case-studies";
import { FadeIn } from "./fade-in";

export function CaseStudies() {
  return (
    <section id="case-studies" className="overflow-hidden px-[100px] py-[100px] max-md:px-6">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-[50px]">
        <FadeIn className="flex max-w-[600px] flex-col items-center gap-5 text-center">
          <h2 className="font-heading text-[48px] font-medium leading-[1.3em] tracking-[-1px] text-text max-md:text-[36px]">
            Case studies
          </h2>
          <p className="font-body text-[18px] font-medium leading-[1.7em] text-text-light">
            A few in depth, end-to-end examples of past work.
          </p>
        </FadeIn>

        <FadeIn delay={0.15} className="grid w-full grid-cols-1 gap-5 md:grid-cols-2">
          {caseStudies.map((study) => (
            <Link
              key={study.slug}
              href={`/blog/${study.slug}`}
              className="group flex flex-col gap-[40px] rounded-[20px] bg-white p-[40px] transition-all duration-200 ease-[ease] hover:shadow-lg hover:-translate-y-0.5"
            >
              <div
                className="relative overflow-hidden rounded-[15px]"
                style={{ aspectRatio: "1.47" }}
              >
                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  className="object-cover transition-transform duration-200 ease-[ease] group-hover:scale-[1.02]"
                />
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="font-heading text-[24px] font-medium leading-[1.4em] tracking-[-0.5px] text-text">
                  {study.title}
                </h3>
                <p className="font-body text-[18px] font-medium leading-[1.7em] text-text-light">
                  {study.description}
                </p>
                <p className="font-body text-[18px] font-medium leading-[1.7em] text-text-light">
                  {study.date}
                </p>
              </div>
            </Link>
          ))}
        </FadeIn>
      </div>
    </section>
  );
}
