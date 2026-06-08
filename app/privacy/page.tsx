import Link from "next/link";
import { CONTACT } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Bronte Trails Oakville",
  robots: { index: false },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-cream px-6 py-20">
      <div className="mx-auto max-w-2xl font-body text-sm leading-relaxed text-text-body">
        <Link href="/" className="text-forest-green hover:underline">
          ← Back to Bronte Trails Oakville
        </Link>
        <h1 className="mt-8 font-display text-3xl text-forest-dark">
          Privacy Policy
        </h1>
        <p className="mt-6">
          {CONTACT.name}, operating through {CONTACT.brokerage}, collects
          personal information submitted through registration forms on this
          website solely for the purpose of providing real estate services
          related to Bronte Trails and other pre-construction opportunities.
        </p>
        <p className="mt-4">
          Information collected may include your name, email address, phone
          number, and city. This information is not sold to third parties. You
          may request deletion of your data by contacting{" "}
          <a href={`mailto:${CONTACT.email}`} className="text-forest-green">
            {CONTACT.email}
          </a>
          .
        </p>
        <p className="mt-4 text-xs text-gray-500">
          Last updated: June 2026. E.&amp;O.E.
        </p>
      </div>
    </div>
  );
}
