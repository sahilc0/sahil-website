"use client";

import { Ticker } from "./ticker";

const skills = [
  "User experience",
  "Product design",
  "Figma",
  "Framer",
  "User research",
  "Usability testing",
  "Motion design",
  "Design thinking",
  "Web design",
  "Wireframing",
];

export function SkillsTicker() {
  return (
    <div className="bg-primary py-4">
      <Ticker speed={35} gap={0} pauseOnHover={false}>
        {skills.map((skill) => (
          <span
            key={skill}
            className="mx-6 inline-block font-nav text-[14px] font-bold uppercase tracking-[1px] text-white/70"
          >
            {skill}
          </span>
        ))}
      </Ticker>
    </div>
  );
}
