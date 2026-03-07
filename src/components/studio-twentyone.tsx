import Link from "next/link";
import {
  ArrowsInCardinal,
  Detective,
  Barbell,
  MagnifyingGlass,
} from "@phosphor-icons/react/dist/ssr";

const features = [
  {
    icon: ArrowsInCardinal,
    title: "User experience strategy calls",
    description:
      "We'll zoom out and find gaps in product storytelling or product strategy. Together we'll find the 80/20 effort/impact projects to tackle next.",
  },
  {
    icon: Detective,
    title: "Interface & experience audit",
    description:
      'aka "I need some tips of where we can improve" - A detailed design critique of part of your website or product. Guided by years of bitcoin product and design experience. Organized neatly by effort, impact, priority.',
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

export function StudioTwentyone() {
  return (
    <section id="freelance" className="mx-auto max-w-[1200px] px-6 py-[100px]">
      <div className="flex flex-col gap-[50px]">
        <div className="flex max-w-[600px] flex-col gap-5">
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
        </div>

        <div className="grid max-w-[1100px] grid-cols-1 gap-5 md:grid-cols-2">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col gap-[30px] rounded-[20px] bg-white p-[40px]"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-[10px] bg-primary-light">
                <feature.icon size={28} weight="fill" className="text-primary" />
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
        </div>
      </div>
    </section>
  );
}
