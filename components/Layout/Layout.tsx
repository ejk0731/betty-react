import React from 'react';
import styles from './Layout.module.scss';
import Footer from '../Footer/Footer';
import dynamic from 'next/dynamic';

const ResizeScrollHeader = dynamic(() => import('@/components/Header/Header'), {
  ssr: false,
});

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <ResizeScrollHeader />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
}
