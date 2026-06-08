import { CONTACT, PROJECT, SITE_URL } from "./constants";

export const realEstateAgentSchema = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: CONTACT.name,
  jobTitle: CONTACT.title,
  worksFor: {
    "@type": "RealEstateOrganization",
    name: `${CONTACT.brokerage}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "600 Matheson Blvd W, Unit 5",
      addressLocality: "Mississauga",
      addressRegion: "ON",
      addressCountry: "CA",
    },
  },
  telephone: "+1-647-898-1739",
  email: CONTACT.email,
  url: CONTACT.website,
  areaServed: "Oakville, Ontario, Canada",
};

export const apartmentComplexSchema = {
  "@context": "https://schema.org",
  "@type": "ApartmentComplex",
  name: PROJECT.name,
  description:
    "Bronte Trails is a pre-construction freehold townhome community by Caivan Communities at Bronte Road and Upper Middle Road West in Oakville, Ontario. Located adjacent to Bronte Creek Provincial Park.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Bronte Road & Upper Middle Road West",
    addressLocality: "Oakville",
    addressRegion: "ON",
    addressCountry: "CA",
    postalCode: "L6M",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "43.4350",
    longitude: "-79.7450",
  },
  numberOfRooms: "2-4",
  petsAllowed: false,
  amenityFeature: [
    {
      "@type": "LocationFeatureSpecification",
      name: "Bronte Creek Provincial Park access",
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Freehold — no condo fees",
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Minutes to Bronte GO Station",
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Access to QEW, Hwy 403, Hwy 407",
    },
  ],
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Bronte Trails Oakville?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bronte Trails is a new pre-construction freehold townhome community by Caivan Communities, coming soon to Bronte Road and Upper Middle Road West in Oakville, Ontario. The project is currently in the VIP registration phase.",
      },
    },
    {
      "@type": "Question",
      name: "Who is the builder of Bronte Trails?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bronte Trails is developed by Caivan Communities (also known as Caivan Homes), an Ottawa-based Ontario builder with projects across the GTA and Ottawa region.",
      },
    },
    {
      "@type": "Question",
      name: "Where is Bronte Trails located?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bronte Trails is located at Bronte Road and Upper Middle Road West in Oakville, Ontario — adjacent to Bronte Creek Provincial Park and minutes from Bronte GO Station.",
      },
    },
    {
      "@type": "Question",
      name: "What schools are near Bronte Trails Oakville?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bronte Trails is close to Thomas A. Blakelock High School (Fraser ranking 8/10), St. Ignatius of Loyola Catholic Secondary School (2441 Lakeshore Rd W), Gladys Speers Public School, Eastview Public School, Brookdale Public School, St. Dominic Catholic Elementary, and St. Nicholas Catholic Elementary.",
      },
    },
    {
      "@type": "Question",
      name: "How do I get VIP access to Bronte Trails pricing and floor plans?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Register your interest on this page or call Fahad Javed at 647-898-1739. As a Platinum VIP broker, Fahad provides early access to floor plans, price lists, and incentives before the public launch.",
      },
    },
    {
      "@type": "Question",
      name: "What highways are near Bronte Trails?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bronte Trails has quick access to Highway 403, Highway 407, and the QEW. Bronte GO Station is approximately 5–7 minutes away.",
      },
    },
  ],
};

export const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: `${SITE_URL}/`,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Pre-Construction Oakville",
      item: `${SITE_URL}/#overview`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Bronte Trails",
      item: `${SITE_URL}/#register`,
    },
  ],
};
