import Layout from '@/components/Layout/Layout';
import { ITEM_IMAGE_PATH } from '@/constants/url';
import { getSlug } from '@/lib/items';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export interface IItemProps {
  itemNumber?: string;
  itemCategory: string;
  itemSlug?: string;
  itemTitle: string;
  originalPrice: number;
  salePrice: number;
  itemColors?: string;
  itemColorValues?: string;
  imagePath: string;
}
export default function Category({ params }: { params: { slug: string } }) {
  const item: IItemProps = getSlug(params.slug);

  if (!item) {
    notFound();
    return null;
  }
  console.log(item);
  const setImagePath = `${ITEM_IMAGE_PATH}${item.itemCategory}/${item.imagePath}`;
  return (
    <Layout>
      <div>
        <Image
          src={setImagePath}
          width={250}
          height={300}
          alt={item.itemTitle}
        ></Image>
      </div>
      <div>
        <h1>Home &gt; Shop &gt; {item.itemCategory} </h1>
        <p>{item.itemTitle}</p>
        <div>
          <s>{item.originalPrice}</s>
          <span>{item.salePrice}</span>
        </div>
      </div>
    </Layout>
  );
}
