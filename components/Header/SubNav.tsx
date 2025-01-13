'use client';
import React, { useState } from 'react';
import styles from './SubNav.module.scss';
import Link from 'next/link';

export default function SubNav() {
  const categories = [
    {
      displayName: 'New Arrivals',
      urlName: 'new',
    },
    {
      displayName: 'Outerwear',
      urlName: 'outerwear',
    },
    {
      displayName: 'Top',
      urlName: 'top',
    },
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
                href={`/shop/${category.urlName}`}
                scroll={false}
                onClick={() => handleClickCategory(category.displayName)}
              >
                {category.displayName}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
