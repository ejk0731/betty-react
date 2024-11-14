import React from 'react';
import Items from './Item';

export default function ItemsGrid({ items }: { items: any }) {
  return (
    <ul>
      {items.map((item: any) => {
        return (
          <li key={item.id}>
            <Items {...item} />
          </li>
        );
      })}
    </ul>
  );
}
