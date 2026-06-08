import { CONTACT } from "@/lib/constants";

export default function Agent() {
  return (
    <section className="bg-forest-dark py-20 text-white lg:py-28">
      <div className="mx-auto grid max-w-content gap-12 px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <p className="font-display text-3xl text-white/90">Sold by Fahad</p>
          <h2 className="mt-4 font-display text-4xl">{CONTACT.name}</h2>
          <p className="mt-2 font-body text-lg text-white/80">{CONTACT.title}</p>
          <p className="mt-1 font-body text-sm text-white/70">
            {CONTACT.brokerage}
          </p>
          <p className="mt-6 text-xs italic text-white/50">
            Not intended to solicit buyers or sellers currently under contract.
          </p>
        </div>

        <div className="space-y-6 font-body">
          <a
            href={CONTACT.phoneTel}
            className="flex min-h-12 items-center gap-3 text-2xl font-semibold text-white transition-colors hover:text-white/80"
          >
            <span aria-hidden="true">📞</span>
            {CONTACT.phone}
          </a>
          <a
            href={`mailto:${CONTACT.email}`}
            className="flex min-h-12 items-center gap-3 text-lg transition-colors hover:text-white/80"
          >
            <span aria-hidden="true">✉️</span>
            {CONTACT.email}
          </a>
          <a
            href={CONTACT.website}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-12 items-center gap-3 text-lg transition-colors hover:text-white/80"
          >
            <span aria-hidden="true">🌐</span>
            fahadsold.com
          </a>
          <p className="flex min-h-12 items-start gap-3 text-sm text-white/80">
            <span aria-hidden="true">📍</span>
            600 Matheson Blvd W, Unit 5, Mississauga, ON
          </p>
        </div>
      </div>
    </section>
  );
}
