import sql from 'better-sqlite3';
import slugify from 'slugify';
import xss from 'xss';
import fs from 'node:fs';

const db = sql('faq.db');

export async function getFaq() {
  await new Promise(resolve => setTimeout(resolve, 2000));
  // throw new Error('loading items failed..');
  return db.prepare('SELECT * FROM faq').all();
}

export async function saveFaq(faq: any) {
  faq.slug = slugify(faq.title, { lower: true });
  faq.instruction = xss(faq.summery);

  const extension = faq.image.name.split('.').pop();
  const fileName = `${faq.slug}.${extension}`;

  const stream = fs.createWriteStream(`public/images/faq/${fileName}`);
  const bufferedImage = await faq.image.arrayBuffer();
  // *** error occurs here but it works fine! need to check.
  stream.write(Buffer.from(bufferedImage), () => {
    if (Error) {
      throw new Error('Saving image failed');
    }
  });

  faq.image = `/images/faq/${fileName}`;

  db.prepare(
    `
    INSERT INTO faq 
      (name, email, title, summary, image) 
    VALUES 
      (@name, @email, @title, @summary, @image)
    `,
  ).run(faq);
}
