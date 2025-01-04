import { getCategoryItems } from '@/lib/apis/items';
import ItemsGrid from './ItemsGrid';

export async function CategoryItems({ category }: { category: string }) {
  const items = await getCategoryItems(category);
  return <ItemsGrid items={items} />;
}
