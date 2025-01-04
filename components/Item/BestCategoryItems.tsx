import { getCategoryItems } from '@/lib/apis/items';
import BestItemGrid from './BestItemGrid';

export async function BestCategoryItems({ category }: { category: string }) {
  const items = await getCategoryItems(category);
  return <BestItemGrid items={items} />;
}
