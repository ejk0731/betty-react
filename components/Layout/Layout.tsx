import React from 'react';
import Header from '@/components/Header/Header';
import styles from './Layout.module.scss';
import Footer from '../Footer/Footer';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
}
