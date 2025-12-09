'use client';

import dynamic from "next/dynamic";
import Link from 'next/link';

const ThemeChangerComponent = dynamic(() => import("@/components/theme-changer").then(mod => mod.default), {
  ssr: false,
});

export function MainHeader() {
  return (
    <header className="w-full px-4 py-2 border-b flex items-center justify-between">
      <nav>
        <Link href="/" className="text-xl font-bold">
          Workout AI
        </Link>
      </nav>
      <ThemeChangerComponent />
    </header>
  );
}
