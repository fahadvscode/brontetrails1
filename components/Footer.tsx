import Image from "next/image";
import Link from "next/link";
import { IMAGES } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-forest-footer py-12 text-white">
      <div className="mx-auto max-w-content px-6 lg:px-8">
        <div className="mb-8 flex justify-center md:justify-start">
          <div className="relative h-12 w-48">
            <Image
              src={IMAGES.logo}
              alt="Bronte Trails South Oakville"
              fill
              className="object-contain object-left brightness-0 invert"
              sizes="192px"
            />
          </div>
        </div>
        <div className="text-center text-xs leading-relaxed text-white/70 md:text-left">
          <p className="font-semibold text-white">Bronte Trails Oakville</p>
          <p className="mt-4 max-w-3xl">
            This website is for informational purposes only. We do not represent
            the builder, Caivan Communities, or any party affiliated with the
            development. All information is from sources believed reliable but
            accuracy is not guaranteed. Prices, specifications, and availability
            are subject to change without notice. E.&amp;O.E.
          </p>
          <div className="mt-6 flex justify-center gap-6 md:justify-start">
            <Link href="/privacy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/sitemap.xml" className="hover:text-white">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
