import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Logos } from "@/components/logos";
import { CaseStudies } from "@/components/case-studies";
import { Testimonials } from "@/components/testimonials";
import { StudioTwentyone } from "@/components/studio-twentyone";
import { ClientWork } from "@/components/client-work";
import { DesignClub } from "@/components/design-club";
import { Talks } from "@/components/talks";
import { ContactFooter } from "@/components/contact-footer";
import { SkillsTicker } from "@/components/skills-ticker";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="bg-[#F8F8FB]">
        <Hero />
        <Logos />
        <CaseStudies />
        <Testimonials />
        <StudioTwentyone />
        <ClientWork />
        <DesignClub />
        <Talks />
      </main>
      <ContactFooter />
      <SkillsTicker />
    </>
  );
}
