import Link from "next/link";
import { Nav } from "@/components/nav";

export default function NotFound() {
  return (
    <>
      <Nav />
      <main className="flex min-h-screen flex-col items-center justify-center px-6">
        <div className="flex flex-col items-center gap-5 text-center">
          <span className="font-nav text-[120px] font-extrabold leading-none text-primary/20">
            404
          </span>
          <h1 className="font-heading text-[48px] font-medium leading-[1.3em] tracking-[-1px] text-text max-md:text-[36px]">
            Page not found.
          </h1>
          <p className="max-w-[400px] font-body text-[18px] font-medium leading-[1.7em] text-text-light">
            The page you are looking for doesn&apos;t exist or has been moved.
          </p>
          <Link
            href="/"
            className="rounded-[10px] bg-primary px-5 py-[15px] font-nav text-[16px] font-bold text-white transition-opacity hover:opacity-90"
          >
            Go back home
          </Link>
        </div>
      </main>
    </>
  );
}
