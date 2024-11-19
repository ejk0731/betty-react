import React from 'react';
import Header from '../Header/Header';
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
