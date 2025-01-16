import Layout from '@/components/Layout/Layout';
import { ITEM_IMAGE_PATH } from '@/lib/constants/url';
import { getSlug } from '@/lib/apis/items';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import styles from './page.module.scss';
import Link from 'next/link';
import InfoTab from '@/components/Shop/InfoTab';
import Options from '@/components/Shop/Options';
import BtnAddToCart from '@/components/Shop/BtnAddToCart';
import { IItemInfos } from '@/lib/types/item';

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

// export async function generateMetadata() {
//   const item = (await getSlug('new-title-1')) as IItemProps;

//   if (!item) {
//     notFound();
//   }

//   return {
//     title: item.itemTitle,
//     description: item.itemCategory,
//   };
// }

export default function ProductDetails() {
  // const item = (await getSlug('new-title-1')) as IItemProps;

  // if (!item) return notFound();
  // console.log(item);

  // const setImagePath = `${ITEM_IMAGE_PATH}${item.itemCategory}/${item.imagePath}`;

  return (
    <Layout>
      <div className={styles.background_wrap}>
        yaaaaaaaa
        {/* <div className={styles.wrap}>
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
              <Link href={'/shop'} className={styles.category}>
                {item.itemCategory}
              </Link>
            </div>

            <b className={styles.item_title}>{item.itemTitle}</b>

            <div className={styles.price_box}>
              <del className={styles.o_price}>KRW{item.originalPrice}</del>
              <span className={styles.s_price}>KRW{item.salePrice}</span>
            </div>

            <InfoTab />

            <Options />

            <div className={styles.btn_wrap}>
              <BtnAddToCart />
              <button type="button" className={styles.btn_buy}>
                Buy Now!
              </button>
            </div>
          </div>
        </div> */}
      </div>
    </Layout>
  );
}
