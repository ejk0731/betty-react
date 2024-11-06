import sql from 'better-sqlite3';

const db = sql('meals.db');

export async function getItems() {
  await new Promise(resolve => setTimeout(resolve, 2000));
  // throw new Error('loading items failed..');
  return db.prepare('SELECT * FROM meals').all();
}
