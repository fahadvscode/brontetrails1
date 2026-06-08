import Image from "next/image";
import Link from "next/link";
import { CONTACT, IMAGES } from "@/lib/constants";

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
        <div className="grid gap-8 text-center text-xs leading-relaxed text-white/70 md:grid-cols-3 md:text-left">
          <div>
            <p className="font-semibold text-white">
              Bronte Trails Oakville | Fahad Javed Real Estate
            </p>
          </div>
          <div>
            <p>
              © 2026 {CONTACT.name}, {CONTACT.title},{" "}
              {CONTACT.brokerage}, Brokerage. The information contained herein
              is from sources believed reliable but accuracy is not guaranteed.
              Not intended to solicit buyers or sellers currently under contract
              with another brokerage.
            </p>
            <p className="mt-2">
              All information from sources deemed reliable but not guaranteed.
              Prices and specifications subject to change without notice.
              E.&amp;O.E. 2026.
            </p>
          </div>
          <div className="flex justify-center gap-6 md:justify-end">
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
