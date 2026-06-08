"use client";

import { CONTACT } from "@/lib/constants";

export default function FloatingCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/20 bg-forest-dark p-3 lg:hidden">
      <div className="flex gap-3">
        <a
          href="#register"
          className="flex min-h-12 flex-1 items-center justify-center bg-forest-green font-body text-xs font-bold uppercase tracking-wide text-white"
        >
          📋 Register for VIP Access
        </a>
        <a
          href={CONTACT.phoneTel}
          className="flex min-h-12 flex-1 items-center justify-center border border-white font-body text-xs font-semibold text-white"
        >
          📞 Call Fahad
        </a>
      </div>
    </div>
  );
}
