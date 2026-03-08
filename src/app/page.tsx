import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { CaseStudies } from "@/components/case-studies";
import { Testimonials } from "@/components/testimonials";
import { StudioTwentyone } from "@/components/studio-twentyone";
import { DesignClub } from "@/components/design-club";
import { Talks } from "@/components/talks";
import { ContactFooter } from "@/components/contact-footer";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Sahil Chaturvedi",
  url: "https://sahilc.com",
  jobTitle: "Product Designer",
  worksFor: { "@type": "Organization", name: "Ark Labs" },
  sameAs: [
    "https://twitter.com/sahilc0",
    "https://www.linkedin.com/in/sahilc0/",
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
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
