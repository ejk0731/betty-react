import sql from 'better-sqlite3';
import slugify from 'slugify';
import xss from 'xss';

const db = sql('items.db');

export async function getItems() {
  await new Promise(resolve => setTimeout(resolve, 2000));
  // throw new Error('loading items failed..');
  return db.prepare('SELECT * FROM items').all();
}

export function getSlug(slug) {
  return db.prepare('SELECT * FROM items WHERE itemSlug = ?').get(slug);
}

export async function saveFaq(faq) {
  faq.slug = slugify(meal.title, { lower: true });
  faq.instruction = xss(faq.summery);

  const extension = faq.image.name.split('.').pop();
  const fileName = `${faq.slug}.${extension}`;

  const stream = fs.createWriteStream(`public/images/faq/${fileName}`);
  const bufferedImage = await faq.image.arrayBuffer();
  stream.write(Buffer.from(butteredImage), () => {
    if (error) {
      throw new Error('Saving image failed');
    }
  });

  faq.image = `/images/faq/${fileName}`;

  // *** should make new table
  db.prepare(`
    INSERT INTO items 
      (title, summary, instructions, image) 
    VALUES (
    @title, @summary, @instructions, @image
    )
    `);
  return;
}
