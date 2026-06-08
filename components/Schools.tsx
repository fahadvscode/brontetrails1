"use client";

import { motion } from "framer-motion";

const schools = [
  {
    name: "Thomas A. Blakelock High School",
    type: "Public Secondary | Halton District School Board",
    grades: "9–12",
    rating: "Fraser Ranking: 8.0/10",
    programs: "English, French Immersion, AP",
    location: "1160 Rebecca St, Oakville",
    distance: "~8 min drive",
    note: "The only public high school serving southwest Oakville — a major catchment advantage.",
  },
  {
    name: "St. Ignatius of Loyola Catholic Secondary School",
    type: "Catholic Secondary | Halton Catholic District School Board",
    grades: "9–12",
    location: "2441 Lakeshore Road West, Oakville",
    distance: "~10 min drive",
  },
  {
    name: "Gladys Speers Public School",
    type: "Public Elementary | Halton DSB",
    grades: "JK–8",
    location: "Bronte neighbourhood",
    distance: "~5 min",
  },
  {
    name: "Eastview Public School",
    type: "Public Elementary | Halton DSB",
    grades: "JK–8",
    location: "Bronte neighbourhood",
    distance: "~6 min",
  },
  {
    name: "Brookdale Public School",
    type: "Public Elementary | Halton DSB",
    grades: "JK–8",
    location: "Bronte neighbourhood",
    distance: "~7 min",
  },
  {
    name: "St. Dominic Catholic Elementary",
    type: "Catholic Elementary | Halton CDSB",
    grades: "JK–8",
    location: "Bronte area",
    distance: "~8 min",
  },
  {
    name: "St. Nicholas Catholic Elementary",
    type: "Catholic Elementary | Halton CDSB",
    grades: "JK–8",
    location: "Bronte area",
    distance: "~8 min",
  },
  {
    name: "Sheridan College (Trafalgar Campus)",
    type: "Post-Secondary",
    grades: "",
    location: "Oakville",
    distance: "~8 min drive",
  },
];

export default function Schools() {
  return (
    <section id="schools" className="bg-cream py-20 lg:py-28">
      <div className="mx-auto max-w-content px-6 lg:px-8">
        <p className="section-label text-center">Education</p>
        <div className="gold-divider my-4" />
        <h2 className="mb-6 text-center font-display text-3xl text-forest-dark md:text-4xl">
          Schools Near Bronte Trails Oakville
        </h2>
        <p className="mx-auto mb-12 max-w-3xl text-center font-body text-[15px] leading-relaxed text-text-body">
          Oakville consistently ranks among Ontario&apos;s top municipalities for
          academic achievement. Families purchasing at Bronte Trails gain access
          to some of the highest-rated schools in the province, making this a
          particularly compelling choice for buyers with school-age children or
          investors targeting family-oriented tenants.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {schools.map((school, i) => (
            <motion.article
              key={school.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="gold-corners gold-corners-inner bg-white p-6"
            >
              <h3 className="font-body text-lg font-bold text-forest-dark">
                {school.name}
              </h3>
              <p className="mt-1 text-sm text-forest-mid">{school.type}</p>
              {school.grades && (
                <p className="mt-2 text-sm">
                  Grades: {school.grades}
                  {school.rating && (
                    <span className="ml-2 text-forest-green">| {school.rating}</span>
                  )}
                </p>
              )}
              {school.programs && (
                <p className="text-sm">Programs: {school.programs}</p>
              )}
              <p className="mt-2 text-sm text-forest-mid">
                {school.location} | {school.distance}
              </p>
              {school.note && (
                <p className="mt-3 border-l-2 border-forest-green pl-3 text-sm italic text-forest-mid">
                  {school.note}
                </p>
              )}
            </motion.article>
          ))}
        </div>

        <div className="mt-12 border border-forest-green bg-cream p-6 text-center md:p-8">
          <p className="font-body text-sm leading-relaxed text-text-body">
            Oakville has 6 public high schools, all ranked above the Ontario
            provincial average. Abbey Park High School and Iroquois Ridge High
            School rank #8 in Ontario — both reachable from Bronte Trails.
          </p>
        </div>

        <p className="mt-6 text-center text-[10px] text-gray-500">
          School boundaries are subject to change. Always verify catchment with
          the Halton District School Board (hdsb.ca) or Halton Catholic
          District School Board (hcdsb.org).
        </p>
      </div>
    </section>
  );
}
