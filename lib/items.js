import sql from 'better-sqlite3';

const db = sql('items.db');

export async function getItems() {
  await new Promise(resolve => setTimeout(resolve, 2000));
  // throw new Error('loading items failed..');
  return db.prepare('SELECT * FROM items').all();
}

export function getSlug(slug) {
  return db.prepare('SELECT * FROM items WHERE itemSlug = ?').get(slug);
}
