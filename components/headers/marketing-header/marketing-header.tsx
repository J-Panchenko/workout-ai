'use client';

import dynamic from "next/dynamic";
import Link from 'next/link';
import NavLink from './nav-link';

const ThemeChangerComponent = dynamic(() => import("@/components/theme-changer").then(mod => mod.default), {
  ssr: false,
});

export function MarketingHeader() {
  return (
    <header className="w-full px-4 py-2 border-b flex items-center justify-between bg-accent dark:bg-accent-dark">
      <Link href="/" className="text-xl font-bold">
        Workout AI
      </Link>
      <nav>
        <ul>
          <li>
            <NavLink
              href="/features"
              content="Features"
            />
          </li>
           <li>
            <NavLink
              href="/pricing"
              content="Pricing"
            />
          </li>
        </ul>
      </nav>
      <ThemeChangerComponent />
    </header>
  );
}
