import { ArrowCircleUpRight } from "@phosphor-icons/react/dist/ssr";
import { Nav } from "@/components/nav";
import { ContactFooter } from "@/components/contact-footer";

export const metadata = {
  title: "Studio Twentyone Newsletter - Sahil Chaturvedi",
  description: "Your portal to the world of bitcoin design, monthly.",
};

export default function NewsletterPage() {
  return (
    <>
      <Nav />
      <main className="bg-[#F8F8FB]">
        <div className="px-[100px] pt-[200px] pb-[100px] max-md:px-6">
          <div className="mx-auto flex max-w-[1200px] flex-col gap-5">
            <h1 className="max-w-[600px] font-heading text-[68px] font-medium leading-[1.1em] tracking-[-1.5px] text-text max-md:text-[44px]">
              Studio Twentyone Newsletter
            </h1>
            <p className="max-w-[600px] font-body text-[24px] font-normal leading-[1.4em] tracking-[0.2px] text-text-light max-md:text-[20px]">
              Your portal to the world of bitcoin design, monthly.
            </p>
            <a
              href="https://studio21design.substack.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center gap-2 rounded-[10px] bg-primary px-5 py-[15px] font-nav text-[16px] font-bold text-white transition-opacity hover:opacity-90"
            >
              <ArrowCircleUpRight size={20} weight="fill" />
              Go to newsletter
            </a>
          </div>
        </div>
      </main>
      <ContactFooter />
    </>
  );
}
