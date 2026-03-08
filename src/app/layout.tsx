import type { Metadata } from "next";
import { Fraunces, Inter, Manrope } from "next/font/google";
import { Agentation } from "agentation";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "800"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sahilc.com"),
  title: "Sahil Chaturvedi",
  description:
    "Product designer in Austin. Founding Designer @ Ark Labs. Previously Unchained & Foundry.",
  openGraph: {
    title: "Sahil Chaturvedi",
    description:
      "Product designer in Austin. Founding Designer @ Ark Labs. Previously Unchained & Foundry.",
    url: "https://sahilc.com",
    siteName: "Sahil Chaturvedi",
    type: "website",
  },
  twitter: {
    card: "summary",
    creator: "@sahilc0",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${fraunces.variable} ${inter.variable} ${manrope.variable} antialiased`}
      >
        {children}
        {process.env.NODE_ENV === "development" && <Agentation />}
      </body>
    </html>
  );
}
