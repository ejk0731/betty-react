'use client';
import React, { useState } from 'react';
import styles from './SubNav.module.scss';
import Link from 'next/link';

export default function SubNav() {
  const categories = [
    'New Arrivals',
    'Outerwear',
    'Top',
    'Bottom',
    'Dress',
    'Accessories',
  ];
  const [activeCategory, setActiveCategory] = useState<string>('New Arrivals');
  const handleClickCategory = (category: string) => {
    setActiveCategory(category);
  };
  return (
    <div className={styles.sub_nav}>
      <b>{activeCategory}</b>
      <ul>
        {categories.map((category, index) => {
          return (
            <li key={index}>
              <Link
                href={'/shop'}
                scroll={false}
                onClick={() => handleClickCategory(category)}
              >
                {category}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
