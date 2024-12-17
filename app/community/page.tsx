import Link from 'next/link';
import React from 'react';
import styles from './page.module.scss';
import Layout from '@/components/Layout/Layout';
import { getFaq } from '@/lib/apis/faq';

async function Faq() {
  const faq = await getFaq();
  return (
    <div>
      {faq.map((item: any, index) => {
        return (
          <div key={index}>
            <div>{item.title}</div>
            <div>{item.image}</div>
          </div>
        );
      })}
    </div>
  );
}

export default function Community() {
  return (
    <Layout>
      <div className={styles.wrap}>
        <h2>community</h2>
        <Link href={'/community/faq'}>FAQ</Link>
        <Faq />
      </div>
    </Layout>
  );
}
