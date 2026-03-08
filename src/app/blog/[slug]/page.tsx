import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowRight,
  TwitterLogo,
  LinkedinLogo,
} from "@phosphor-icons/react/dist/ssr";
import { Nav } from "@/components/nav";
import { caseStudies } from "@/data/case-studies";

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return params.then(({ slug }) => {
    const study = caseStudies.find((s) => s.slug === slug);
    if (!study) return { title: "Not found" };
    return {
      title: `${study.title} - Sahil Chaturvedi`,
      description: study.description,
    };
  });
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);

  if (!study) {
    notFound();
  }

  return (
    <>
      <Nav />
      <main className="bg-white">
        {/* Article header */}
        <div className="mx-auto max-w-[1200px] px-[50px] pt-[150px] pb-[50px] max-md:px-6">
          <div className="flex flex-col gap-[30px]">
            <span
              className="font-body text-[16px] font-extrabold uppercase leading-[1.5em] tracking-[1px]"
              style={{ color: study.accentColor }}
            >
              {study.category}
            </span>
            <h1 className="font-heading text-[68px] font-medium leading-[1.1em] tracking-[-1.5px] text-text max-md:text-[44px]">
              {study.title}
            </h1>
            <p className="font-body text-[24px] font-normal leading-[1.4em] tracking-[0.2px] text-text-light max-md:text-[20px]">
              {study.description}
            </p>
            <p className="font-body text-[18px] font-medium leading-[1.7em] text-text-light">
              {study.date}
            </p>
          </div>
        </div>

        {/* Article content */}
        <div className="mx-auto max-w-[1200px] px-[50px] pb-[100px] max-md:px-6">
          <div
            className="article-content"
            dangerouslySetInnerHTML={{ __html: study.content }}
          />
        </div>

        {/* Author footer */}
        <div className="bg-primary-light px-[100px] py-[100px] max-md:px-6">
          <div className="mx-auto flex max-w-[1200px] flex-col gap-5">
            <h2 className="font-heading text-[48px] font-medium leading-[1.3em] tracking-[-1px] text-text max-md:text-[36px]">
              Sahil Chaturvedi
            </h2>
            <a
              href="mailto:hello@sahilc.com"
              className="inline-flex items-center gap-1 font-nav text-[18px] font-bold text-primary transition-opacity hover:opacity-80"
            >
              hello@sahilc.com
              <ArrowRight size={19} weight="bold" />
            </a>
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
          </div>
        </div>
      </main>
    </>
  );
}
