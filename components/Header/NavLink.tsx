'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import styles from './NavLink.module.scss';

export default function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <Link href={href} scroll={false} className={styles.link}>
        {children}
      </Link>
    </>
  );
}
