import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import Script from "next/script";
import { IMAGES, SITE_URL } from "@/lib/constants";
import {
  apartmentComplexSchema,
  breadcrumbSchema,
  faqSchema,
} from "@/lib/schema";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
  preload: true,
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
  preload: true,
});

const title =
  "Bronte Trails Oakville | Pre-Construction Townhomes by Caivan | Register Now";
const description =
  "Bronte Trails by Caivan — pre-construction freehold townhomes at Bronte Road & Upper Middle Road West, Oakville. Register for VIP floor plans, pricing & platinum access.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title:
      "Bronte Trails Oakville by Caivan | New Townhomes — Register VIP",
    description:
      "Coming soon to Oakville: Bronte Trails freehold townhomes by Caivan at Bronte Road & Upper Middle Road West. Backed by Bronte Creek Provincial Park. Register for VIP access.",
    type: "website",
    url: SITE_URL,
    images: [{ url: IMAGES.aerial, width: 1200, height: 630, alt: "Bronte Trails Oakville aerial view" }],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Bronte Trails Oakville by Caivan | New Townhomes — Register VIP",
    description:
      "Coming soon to Oakville: Bronte Trails freehold townhomes by Caivan. Register for VIP access.",
    images: [IMAGES.aerial],
  },
  other: {
    "geo.region": "CA-ON",
    "geo.placename": "Oakville",
  },
};

const schemas = [
  apartmentComplexSchema,
  faqSchema,
  breadcrumbSchema,
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="en-CA" className={`${cormorant.variable} ${montserrat.variable}`}>
      <head>
        {schemas.map((schema, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </head>
      <body>
        {gtmId && (
          <>
            <Script id="gtm" strategy="afterInteractive">
              {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${gtmId}');`}
            </Script>
            <noscript>
              <iframe
                src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
                height="0"
                width="0"
                style={{ display: "none", visibility: "hidden" }}
              />
            </noscript>
          </>
        )}
        {gaId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="ga4" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gaId}');`}
            </Script>
          </>
        )}
        {children}
      </body>
    </html>
  );
}
