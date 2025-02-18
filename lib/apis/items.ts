import sql from 'better-sqlite3';

const db = sql('items.db');

export async function getItems() {
  await new Promise(resolve => setTimeout(resolve, 500));
  // throw new Error('loading items failed..');
  return db.prepare('SELECT * FROM items').all();
}

export async function getCategoryItems(category: string) {
  await new Promise(resolve => setTimeout(resolve, 500));
  return db.prepare('SELECT * FROM items WHERE itemCategory = ?').all(category);
}

export function getSlug(slug: string) {
  return db.prepare('SELECT * FROM items WHERE itemSlug = ?').get(slug);
}
