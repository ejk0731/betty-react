'use client';
import Link from 'next/link';
import React from 'react';
import styles from './NavLink.module.scss';

export default function NavLink({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick: (e: React.MouseEvent) => void;
}) {
  return (
    <>
      <Link
        href={href}
        scroll={false}
        className={styles.link}
        onClick={onClick}
      >
        {children}
      </Link>
    </>
  );
}
