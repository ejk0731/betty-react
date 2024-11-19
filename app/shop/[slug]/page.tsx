import Layout from '@/components/Layout/Layout';
import { ITEM_IMAGE_PATH } from '@/constants/url';
import { getSlug } from '@/lib/items';
import Image from 'next/image';

export default function Category({ params }: { params: { slug: string } }) {
  const item = getSlug(params.slug);
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
