import Layout from '@/components/Layout/Layout';
import { ITEM_IMAGE_PATH } from '@/lib/constants/url';
import { getSlug } from '@/lib/apis/items';
import Image from 'next/image';
import { notFound } from 'next/navigation';

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
