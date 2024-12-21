import Layout from '@/components/Layout/Layout';
import { ITEM_IMAGE_PATH } from '@/lib/constants/url';
import { getSlug } from '@/lib/apis/items';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import styles from './page.module.scss';

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
  // console.log(item);
  const setImagePath = `${ITEM_IMAGE_PATH}${item.itemCategory}/${item.imagePath}`;
  return (
    <Layout>
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
          <span>Home &gt; Shop &gt; {item.itemCategory} </span>
          <p>{item.itemTitle}</p>
          <div>
            <s>{item.originalPrice}</s>
            <span>{item.salePrice}</span>
          </div>
          <div className="option_wrap">
            <div className="color_wrap">
              <span>Color</span>
              <div className="color">
                <input type="radio" name="colorOption" id="orange" />
                <label htmlFor="orange">Orange</label>
              </div>
              <div className="color">
                <input type="radio" name="colorOption" id="green" />
                <label htmlFor="green">Green</label>
              </div>
              <div className="color">
                <input type="radio" name="colorOption" id="blue" />
                <label htmlFor="blue">Blue</label>
              </div>
              <div className="color">
                <input type="radio" name="colorOption" id="white" />
                <label htmlFor="white">White</label>
              </div>
            </div>
            <div className="size_wrap">
              <span>Size</span>
              <div className="size">
                <input type="radio" name="sizeOption" id="size-s" />
                <label htmlFor="size-s">S</label>
              </div>
              <div className="size">
                <input type="radio" name="sizeOption" id="size-m" />
                <label htmlFor="size-m">M</label>
              </div>
              <div className="size">
                <input type="radio" name="sizeOption" id="size-l" />
                <label htmlFor="size-l">L</label>
              </div>
            </div>
          </div>
          <div className="tab_wrap">
            <div className="tab_header">
              <button type="button">Description</button>
              <button type="button">Guide</button>
              <button type="button">Shopping</button>
            </div>
            <div className="tab_content">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
