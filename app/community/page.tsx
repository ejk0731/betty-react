import Link from 'next/link';
import React from 'react';
import styles from './page.module.scss';
import Layout from '@/components/Layout/Layout';

export default function Community() {
  return (
    <Layout>
      <div className={styles.wrap}>
        <h2>community</h2>
        <Link href={'/community/faq'}>FAQ</Link>
      </div>
    </Layout>
  );
}
