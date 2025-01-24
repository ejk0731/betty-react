'use client';
import React, { useState } from 'react';
import styles from './CategoryTab.module.scss';
import Link from 'next/link';
import { categories } from '@/lib/constants/category';

export default function CategoryTab() {
  const [activeCategory, setActiveCategory] = useState<string>('New Arrivals');
  const handleClickCategory = (category: string) => {
    setActiveCategory(category);
  };

  return (
    <div className={styles.tab_category}>
      <b>{activeCategory}</b>
      <ul>
        {categories.map((category, index) => {
          return (
            <li key={index}>
              <Link
                href={`/category`}
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
