import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Items({
  src,
  title,
  slug,
}: {
  src: string;
  title: string;
  slug: any;
}) {
  return (
    <Link href={`/shop/${slug}`}>
      {/* <Image src={src} alt={title} fill /> */}
      <b>{title}</b>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <span>price</span>
    </Link>
  );
}
