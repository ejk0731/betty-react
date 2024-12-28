import Layout from '@/components/Layout/Layout';
import { ITEM_IMAGE_PATH } from '@/lib/constants/url';
import { getSlug } from '@/lib/apis/items';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import styles from './page.module.scss';
import Link from 'next/link';

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
              <Image
                src={setImagePath}
                fill
                alt={item.itemTitle}
                objectFit="cover"
              />
            </div>
            <div className={styles.img_box}>
              <Image
                src={setImagePath}
                fill
                alt={item.itemTitle}
                objectFit="cover"
              />
            </div>
            <div className={styles.img_box}>
              <Image
                src={setImagePath}
                fill
                alt={item.itemTitle}
                objectFit="cover"
              />
            </div>
            <div className={styles.img_box}>
              <Image
                src={setImagePath}
                fill
                alt={item.itemTitle}
                objectFit="cover"
              />
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

            <div className={styles.tab_wrap}>
              <div className={styles.tab_header}>
                <button type="button">Description</button>
                <button type="button">Size Guide</button>
                <button type="button">Shipping</button>
              </div>

              <div className={styles.tab_content}>
                <div>
                  <p>
                    A knit mini dress featuring a mock neck, allover sequin
                    embellishments, long sleeves, and bodycon silhouette.
                  </p>
                  <span>Content + Care</span>
                  <ul>
                    <li>Shell: 75% polyester, 25% metallic yarn</li>
                    <li>Lining 1: 95% polyester, 5% spandex</li>
                    <li>Lining 2: 100% polyester</li>
                    <li>Hand wash cold</li>
                  </ul>
                </div>
                <div>
                  <p>
                    <span> How to measure your waist</span>
                    Measure around the narrowest part of your natural waist,
                    generally around the belly button. To ensure a comfortable
                    fit, keep one finger between the measuring tape and your
                    body.
                  </p>
                </div>
                <div>
                  <span>Shipping</span>
                  <p>Delivery in 3-5 working days.</p>
                  <span>Returns</span>
                  <p>
                    You have 30 days from the shipping date to return your
                    purchase
                  </p>
                </div>
              </div>
            </div>

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
