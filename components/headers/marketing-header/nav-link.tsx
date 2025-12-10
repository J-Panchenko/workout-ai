'use client';

import Link from 'next/link';
import {usePathname } from 'next/navigation';

export default function NavLink({href, content}: { params: Promise<{ param: string }>;}) {
  const path = usePathname();
  console.log('NavLink path:', path);
  
  return (
    <Link href={href} className={"mx-2 text-lg" + (path === href ? ' font-bold text-primary dark:text-primary-dark' : ' text-text dark:text-text-dark')}>
      {content}
    </Link>
  );
}
