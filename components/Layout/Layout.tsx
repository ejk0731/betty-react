import React from 'react';
import Header from '@/components/Header/Header';
import styles from './Layout.module.scss';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Header />
      <main className={styles.main}>{children}</main>
    </div>
  );
}
