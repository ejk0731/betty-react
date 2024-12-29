import Layout from '@/components/Layout/Layout';
import { ITEM_IMAGE_PATH } from '@/lib/constants/url';
import { getSlug } from '@/lib/apis/items';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import styles from './page.module.scss';
import Link from 'next/link';
import { useState } from 'react';
import InfoTab from '@/components/Shop/infoTab';

interface IItemProps {
  itemNumber: string;
  itemCategory: string;
  itemSlug: string;
  itemTitle: string;
  originalPrice: number;
  salePrice: number;
  itemColors: string;
  itemColorValues: string;
  imagePath: string;
}

export async function generateMetadata({ params }: { params: any }) {
  const item = getSlug(params.slug) as IItemProps;

  if (!item) {
    notFound();
  }

  return {
    title: item.itemTitle,
    description: item.itemCategory,
  };
}

export default function Category({ params }: { params: any }) {
  const item = getSlug(params.slug) as IItemProps;

  if (!item) {
    notFound();
  }

  const setImagePath = `${ITEM_IMAGE_PATH}${item.itemCategory}/${item.imagePath}`;

  return (
    <Layout>
      <div className={styles.background_wrap}>
        <div className={styles.wrap}>
          <div className={styles.image_wrap}>
            <div className={styles.img_box}>
              <Image src={setImagePath} fill alt={item.itemTitle} />
            </div>
            <div className={styles.img_box}>
              <Image src={setImagePath} fill alt={item.itemTitle} />
            </div>
            <div className={styles.img_box}>
              <Image src={setImagePath} fill alt={item.itemTitle} />
            </div>
            <div className={styles.img_box}>
              <Image src={setImagePath} fill alt={item.itemTitle} />
            </div>
          </div>
          <div className={styles.info_wrap}>
            <div className={styles.breadcrumb}>
              <Link href={'/'}>Home</Link> &gt;
              <Link href={'/shop'}> Shop</Link> &gt;
              <Link href={'/shop'}> {item.itemCategory}</Link>
            </div>

            <b className={styles.item_title}>{item.itemTitle}</b>

            <div className={styles.price_box}>
              <del className={styles.o_price}>KRW{item.originalPrice}</del>
              <span className={styles.s_price}>KRW{item.salePrice}</span>
            </div>

            <div className={styles.option_wrap}>
              <div className={styles.color_wrap}>
                <span className={styles.txt}>Color</span>
                <div className={styles.color}>
                  <input type="radio" name="colorOption" id="orange" />
                  <label htmlFor="orange" className={styles.orange}>
                    Orange
                  </label>
                </div>
                <div className={styles.color}>
                  <input type="radio" name="colorOption" id="green" />
                  <label htmlFor="green" className={styles.green}>
                    Green
                  </label>
                </div>
                <div className={styles.color}>
                  <input type="radio" name="colorOption" id="blue" />
                  <label htmlFor="blue" className={styles.blue}>
                    Blue
                  </label>
                </div>
                <div className={styles.color}>
                  <input type="radio" name="colorOption" id="white" />
                  <label htmlFor="white" className={styles.white}>
                    White
                  </label>
                </div>
              </div>

              <div className={styles.size_wrap}>
                <span className={styles.txt}>Size</span>
                <div className={styles.size}>
                  <input type="radio" name="sizeOption" id="size-s" />
                  <label htmlFor="size-s">S</label>
                </div>
                <div className={styles.size}>
                  <input type="radio" name="sizeOption" id="size-m" />
                  <label htmlFor="size-m">M</label>
                </div>
                <div className={styles.size}>
                  <input type="radio" name="sizeOption" id="size-l" />
                  <label htmlFor="size-l">L</label>
                </div>
              </div>
            </div>

            <InfoTab />

            <div className={styles.btn_wrap}>
              <button type="button">Add to cart</button>
              <button type="button" className={styles.btn_buy}>
                Buy Now!
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
