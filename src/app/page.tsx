import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { CaseStudies } from "@/components/case-studies";
import { Testimonials } from "@/components/testimonials";
import { StudioTwentyone } from "@/components/studio-twentyone";
import { DesignClub } from "@/components/design-club";
import { Talks } from "@/components/talks";
import { ContactFooter } from "@/components/contact-footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="bg-[#F8F8FB]">
        <Hero />
        <CaseStudies />
        <Testimonials />
        <StudioTwentyone />
        <DesignClub />
        <Talks />
      </main>
      <ContactFooter />
    </>
  );
}
