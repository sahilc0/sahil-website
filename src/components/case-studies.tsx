import Image from "next/image";
import Link from "next/link";
import { caseStudies } from "@/data/case-studies";

export function CaseStudies() {
  return (
    <section id="case-studies" className="mx-auto max-w-[1200px] px-6 py-[100px]">
      <div className="flex flex-col gap-[50px]">
        <div className="flex max-w-[600px] flex-col gap-5">
          <h2 className="font-heading text-[48px] font-medium leading-[1.3em] tracking-[-1px] text-text max-md:text-[36px]">
            Case studies
          </h2>
          <p className="font-body text-[18px] font-medium leading-[1.7em] text-text-light">
            A few in depth, end-to-end examples of past work.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {caseStudies.map((study) => (
            <Link
              key={study.slug}
              href={`/blog/${study.slug}`}
              className="group flex flex-col gap-[40px] rounded-[20px] bg-white p-[40px] transition-shadow hover:shadow-lg"
            >
              <div className="relative overflow-hidden rounded-[15px]" style={{ aspectRatio: "1.47" }}>
                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-[1.02]"
                />
              </div>
              <div className="flex flex-col gap-3">
                <span
                  className="font-body text-[16px] font-extrabold uppercase leading-[1.5em] tracking-[1px]"
                  style={{ color: study.accentColor }}
                >
                  {study.category}
                </span>
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
        </div>
      </div>
    </section>
  );
}
