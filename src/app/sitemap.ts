import type { MetadataRoute } from "next";
import { caseStudies } from "@/data/case-studies";

export default function sitemap(): MetadataRoute.Sitemap {
  const studies = caseStudies.map((study) => ({
    url: `https://sahilc.com/blog/${study.slug}`,
    lastModified: new Date(study.date),
  }));

  return [
    { url: "https://sahilc.com", lastModified: new Date() },
    { url: "https://sahilc.com/newsletter", lastModified: new Date() },
    { url: "https://sahilc.com/podcast", lastModified: new Date() },
    ...studies,
  ];
}
