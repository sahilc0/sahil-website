import Image from "next/image";

const logos = [
  { src: "/images/logo-fedi.png", alt: "Fedi", width: 192, height: 36 },
  { src: "/images/logo-onramp.png", alt: "Onramp", width: 116, height: 31 },
  { src: "/images/logo-fold.png", alt: "Fold", width: 143, height: 62 },
  { src: "/images/logo-mutiny.png", alt: "Mutiny", width: 174, height: 58 },
  { src: "/images/logo-zeus.png", alt: "Zeus", width: 84, height: 33 },
];

export function Logos() {
  return (
    <section className="mx-auto max-w-[1200px] px-6 py-8">
      <div className="flex flex-wrap items-center justify-center gap-[60px] opacity-40">
        {logos.map((logo) => (
          <Image
            key={logo.alt}
            src={logo.src}
            alt={logo.alt}
            width={logo.width}
            height={logo.height}
            className="h-[32px] w-auto object-contain"
          />
        ))}
      </div>
    </section>
  );
}
