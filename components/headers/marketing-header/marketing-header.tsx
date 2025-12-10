'use client';

import dynamic from "next/dynamic";
import Link from 'next/link';
import NavLink from './nav-link';
import Image from 'next/image';
import logo from '@/public/logo.svg';

const ThemeChangerComponent = dynamic(() => import("@/components/theme-changer").then(mod => mod.default), {
  ssr: false,
});

export function MarketingHeader() {
  return (
    <header className="w-full px-4 py-2 border-b border-n200 dark:border-n200-dark flex items-center justify-between bg-n100 dark:bg-n100-dark">
      <Link href="/" className="text-lg font-bold flex items-center justify-center space-x-2">
        <Image
          src={logo}
          alt="Workout AI Logo"
          width={40}
          height={40}
        />
        <h1 className="text-primary dark:text-primary-dark">
          Workout AI
        </h1>
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
