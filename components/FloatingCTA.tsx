"use client";

export default function FloatingCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/20 bg-forest-dark p-3 lg:hidden">
      <a
        href="#register"
        className="flex min-h-12 w-full items-center justify-center bg-forest-green font-body text-xs font-bold uppercase tracking-wide text-white"
      >
        📋 Register for VIP Access
      </a>
    </div>
  );
}
