const sql = require('better-sqlite3');
const db = sql('items.db');

const dummyItems = [
  {
    itemNumber: '13241',
    itemCategory: 'new',
    itemTitle: 'Title1',
    originalPrice: 56000,
    salePrice: 50000,
    itemDetail: 'detail detail',
    itemColors: '베이지, 브라운, 카키, 네이비, 화이트',
    itemColorValues: '#d7b170,#501704,#56754c,#000082,#ffffff',
    itemSize: 'S, L, XL',
    imagePath: '1.jpg',
  },
  {
    itemNumber: '13242',
    itemCategory: 'new',
    itemTitle: 'Title2',
    originalPrice: 56000,
    salePrice: 50000,
    itemDetail: 'detail detail',
    itemColors: '베이지, 브라운, 카키, 네이비, 화이트',
    itemColorValues: '#d7b170,#501704,#56754c,#000082,#ffffff',
    itemSize: 'S, L, XL',
    imagePath: '2.jpg',
  },
  {
    itemNumber: '13243',
    itemCategory: 'new',
    itemTitle: 'Title3',
    originalPrice: 56000,
    salePrice: 50000,
    itemDetail: 'detail detail',
    itemColors: '베이지, 브라운, 카키, 네이비, 화이트',
    itemColorValues: '#d7b170,#501704,#56754c,#000082,#ffffff',
    itemSize: 'S, L, XL',
    imagePath: '3.jpg',
  },
  {
    itemNumber: '13241',
    itemCategory: 'new',
    itemTitle: 'Title4',
    originalPrice: 56000,
    salePrice: 50000,
    itemDetail: 'detail detail',
    itemColors: '베이지, 브라운, 카키, 네이비, 화이트',
    itemColorValues: '#d7b170,#501704,#56754c,#000082,#ffffff',
    itemSize: 'S, L, XL',
    imagePath: '4.jpg',
  },
  {
    itemNumber: '13241',
    itemCategory: 'new',
    itemTitle: 'Title5',
    originalPrice: 56000,
    salePrice: 50000,
    itemDetail: 'detail detail',
    itemColors: '베이지, 브라운, 카키, 네이비, 화이트',
    itemColorValues: '#d7b170,#501704,#56754c,#000082,#ffffff',
    itemSize: 'S, L, XL',
    imagePath: '5.jpg',
  },
  {
    itemNumber: '13241',
    itemCategory: 'new',
    itemTitle: 'Title6',
    originalPrice: 56000,
    salePrice: 50000,
    itemDetail: 'detail detail',
    itemColors: '베이지, 브라운, 카키, 네이비, 화이트',
    itemColorValues: '#d7b170,#501704,#56754c,#000082,#ffffff',
    itemSize: 'S, L, XL',
    imagePath: '6.jpg',
  },
  {
    itemNumber: '13241',
    itemCategory: 'new',
    itemTitle: 'Title7',
    originalPrice: 56000,
    salePrice: 50000,
    itemDetail: 'detail detail',
    itemColors: '베이지, 브라운, 카키, 네이비, 화이트',
    itemColorValues: '#d7b170,#501704,#56754c,#000082,#ffffff',
    itemSize: 'S, L, XL',
    imagePath: '7.jpg',
  },
  {
    itemNumber: '13241',
    itemCategory: 'new',
    itemTitle: 'Title8',
    originalPrice: 56000,
    salePrice: 50000,
    itemDetail: 'detail detail',
    itemColors: '베이지, 브라운, 카키, 네이비, 화이트',
    itemColorValues: '#d7b170,#501704,#56754c,#000082,#ffffff',
    itemSize: 'S, L, XL',
    imagePath: '8.jpg',
  },
  {
    itemNumber: '13241',
    itemCategory: 'new',
    itemTitle: 'Title9',
    originalPrice: 56000,
    salePrice: 50000,
    itemDetail: 'detail detail',
    itemColors: '베이지, 브라운, 카키, 네이비, 화이트',
    itemColorValues: '#d7b170,#501704,#56754c,#000082,#ffffff',
    itemSize: 'S, L, XL',
    imagePath: '9.jpg',
  },
  {
    itemNumber: '13241',
    itemCategory: 'new',
    itemTitle: 'Title10',
    originalPrice: 56000,
    salePrice: 50000,
    itemDetail: 'detail detail',
    itemColors: '베이지, 브라운, 카키, 네이비, 화이트',
    itemColorValues: '#d7b170,#501704,#56754c,#000082,#ffffff',
    itemSize: 'S, L, XL',
    imagePath: '10.jpg',
  },
  {
    itemNumber: '13241',
    itemCategory: 'new',
    itemTitle: 'Title11',
    originalPrice: 56000,
    salePrice: 50000,
    itemDetail: 'detail detail',
    itemColors: '베이지, 브라운, 카키, 네이비, 화이트',
    itemColorValues: '#d7b170,#501704,#56754c,#000082,#ffffff',
    itemSize: 'S, L, XL',
    imagePath: '11.jpg',
  },
  {
    itemNumber: '13241',
    itemCategory: 'new',
    itemTitle: 'Title12',
    originalPrice: 56000,
    salePrice: 50000,
    itemDetail: 'detail detail',
    itemColors: '베이지, 브라운, 카키, 네이비, 화이트',
    itemColorValues: '#d7b170,#501704,#56754c,#000082,#ffffff',
    itemSize: 'S, L, XL',
    imagePath: '12.jpg',
  },
];

db.prepare(
  `
   CREATE TABLE IF NOT EXISTS items (
       id INTEGER PRIMARY KEY AUTOINCREMENT,
       itemNumber STRING NOT NULL,
       itemCategory STRING NOT NULL,
       itemTitle STRING NOT NULL,
       originalPrice NUMBER NOT NULL,
       salePrice NUMBER NOT NULL,
       itemDetail STRING NOT NULL,
       itemColors STRING NOT NULL,
       itemColorValues STRING NOT NULL,
       itemSize STRING NOT NULL,
       imagePath STRING NOT NULL
    )
`
).run();

async function initData() {
  const stmt = db.prepare(`
      INSERT INTO items VALUES (
         null,
         @itemNumber,
         @itemCategory,
         @itemTitle,
         @originalPrice,
         @salePrice,
         @itemDetail,
         @itemColors,
         @itemColorValues,
         @itemSize,
         @imagePath
      )
   `);

  for (const item of dummyItems) {
    stmt.run(item);
  }
}

initData();
