export interface CaseStudy {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  accentColor: string;
  image: string;
  featured: boolean;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "fedi-little-big-details",
    title: "Fedi: Little big details",
    description: "Cleaning up some UX papercuts.",
    date: "Jan 1, 2024",
    category: "Case study",
    accentColor: "#4ECCCF",
    image: "/images/case-fedi.webp",
    featured: false,
  },
  {
    slug: "wallet-history",
    title: "Wallet history",
    description:
      "Giving Unchained vault clients a continuous wallet history, even if they lose a key",
    date: "Apr 14, 2023",
    category: "Case study",
    accentColor: "#6172F3",
    image: "/images/case-wallet.png",
    featured: true,
  },
  {
    slug: "device-constraints",
    title: "Hardware constraints",
    description: "Designing with hardware that's out of your control",
    date: "Apr 14, 2023",
    category: "Case study",
    accentColor: "#3DA1FF",
    image: "/images/case-hardware.png",
    featured: false,
  },
  {
    slug: "uds-design-system",
    title: "Unchained Design System",
    description:
      "UDS is used to power most features. I worked with engineering to set up Storybook components. Happy to chat more about this!",
    date: "Jul 20, 2021",
    category: "Case study",
    accentColor: "#4ECCCF",
    image: "/images/case-uds.png",
    featured: false,
  },
];
