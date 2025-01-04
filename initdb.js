const sql = require('better-sqlite3');
const db = sql('items.db');

const dummyItems = [
  {
    itemNumber: '13241',
    itemCategory: 'new',
    itemSlug: 'new-title-1',
    itemTitle: 'Title1',
    originalPrice: 56000,
    salePrice: 50000,
    itemDetail: 'detail detail',
    itemColors: '브라운, 카키, 네이비, 화이트',
    itemColorValues: '#501704,#56754c,#000082,#ffffff',
    itemSize: 'S, L, XL',
    imagePath: '1.jpg',
  },
  {
    itemNumber: '13242',
    itemCategory: 'new',
    itemSlug: 'new-title-2',
    itemTitle: 'Title2',
    originalPrice: 56000,
    salePrice: 50000,
    itemDetail: 'detail detail',
    itemColors: '화이트',
    itemColorValues: '#ffffff',
    itemSize: 'S, L, XL',
    imagePath: '2.jpg',
  },
  {
    itemNumber: '13243',
    itemCategory: 'new',
    itemSlug: 'new-title-3',
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
    itemNumber: '13244',
    itemCategory: 'new',
    itemSlug: 'new-title-4',
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
    itemNumber: '13245',
    itemCategory: 'new',
    itemSlug: 'new-title-5',
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
    itemNumber: '13246',
    itemCategory: 'new',
    itemSlug: 'new-title-6',
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
    itemNumber: '13247',
    itemCategory: 'new',
    itemSlug: 'new-title-7',
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
    itemNumber: '13248',
    itemCategory: 'new',
    itemSlug: 'new-title-8',
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
    itemNumber: '13249',
    itemCategory: 'new',
    itemSlug: 'new-title-9',
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
    itemNumber: '13250',
    itemCategory: 'new',
    itemSlug: 'new-title-10',
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
    itemNumber: '13251',
    itemCategory: 'new',
    itemSlug: 'new-title-11',
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
    itemNumber: '13252',
    itemCategory: 'new',
    itemSlug: 'new-title-12',
    itemTitle: 'Title12',
    originalPrice: 56000,
    salePrice: 50000,
    itemDetail: 'detail detail',
    itemColors: '베이지, 브라운, 카키, 네이비, 화이트',
    itemColorValues: '#d7b170,#501704,#56754c,#000082,#ffffff',
    itemSize: 'S, L, XL',
    imagePath: '12.jpg',
  },
  {
    itemNumber: '13341',
    itemCategory: 'outerwear',
    itemSlug: 'outerwear-title-1',
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
    itemNumber: '13342',
    itemCategory: 'outerwear',
    itemSlug: 'outerwear-title-2',
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
    itemNumber: '13443',
    itemCategory: 'outerwear',
    itemSlug: 'outerwear-title-3',
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
    itemNumber: '13344',
    itemCategory: 'outerwear',
    itemSlug: 'outerwear-title-4',
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
    itemNumber: '13345',
    itemCategory: 'outerwear',
    itemSlug: 'outerwear-title-5',
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
    itemNumber: '13346',
    itemCategory: 'outerwear',
    itemSlug: 'outerwear-title-6',
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
    itemNumber: '13347',
    itemCategory: 'outerwear',
    itemSlug: 'outerwear-title-7',
    itemTitle: 'Title7',
    originalPrice: 56000,
    salePrice: 50000,
    itemDetail: 'detail detail',
    itemColors: '베이지, 카키, 네이비, 화이트',
    itemColorValues: '#d7b170,#56754c,#000082,#ffffff',
    itemSize: 'S, L, XL',
    imagePath: '7.jpg',
  },
  {
    itemNumber: '13348',
    itemCategory: 'outerwear',
    itemSlug: 'outerwear-title-8',
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
    itemNumber: '13349',
    itemCategory: 'outerwear',
    itemSlug: 'outerwear-title-9',
    itemTitle: 'Title9',
    originalPrice: 56000,
    salePrice: 50000,
    itemDetail: 'detail detail',
    itemColors: '베이지, 브라운, 카키, 네이비',
    itemColorValues: '#d7b170,#501704,#56754c,#000082',
    itemSize: 'S, L, XL',
    imagePath: '9.jpg',
  },
  {
    itemNumber: '13350',
    itemCategory: 'outerwear',
    itemSlug: 'outerwear-title-10',
    itemTitle: 'Title10',
    originalPrice: 56000,
    salePrice: 50000,
    itemDetail: 'detail detail',
    itemColors: '베이지, 브라운, 네이비, 화이트',
    itemColorValues: '#d7b170,#501704,#000082,#ffffff',
    itemSize: 'S, L, XL',
    imagePath: '10.jpg',
  },
  {
    itemNumber: '13351',
    itemCategory: 'outerwear',
    itemSlug: 'outerwear-title-11',
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
    itemNumber: '13352',
    itemCategory: 'outerwear',
    itemSlug: 'outerwear-title-12',
    itemTitle: 'Title12',
    originalPrice: 56000,
    salePrice: 50000,
    itemDetail: 'detail detail',
    itemColors: '베이지, 브라운, 카키, 네이비, 화이트',
    itemColorValues: '#d7b170,#501704,#56754c,#000082,#ffffff',
    itemSize: 'S, L, XL',
    imagePath: '12.jpg',
  },
  {
    itemNumber: '13441',
    itemCategory: 'top',
    itemSlug: 'top-title-1',
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
    itemNumber: '13442',
    itemCategory: 'top',
    itemSlug: 'top-title-2',
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
    itemNumber: '13443',
    itemCategory: 'top',
    itemSlug: 'top-title-3',
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
    itemNumber: '13444',
    itemCategory: 'top',
    itemSlug: 'top-title-4',
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
    itemNumber: '13445',
    itemCategory: 'top',
    itemSlug: 'top-title-5',
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
    itemNumber: '13446',
    itemCategory: 'top',
    itemSlug: 'top-title-6',
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
    itemNumber: '13447',
    itemCategory: 'top',
    itemSlug: 'top-title-7',
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
    itemNumber: '13448',
    itemCategory: 'top',
    itemSlug: 'top-title-8',
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
    itemNumber: '13449',
    itemCategory: 'top',
    itemSlug: 'top-title-9',
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
    itemNumber: '13450',
    itemCategory: 'top',
    itemSlug: 'top-title-10',
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
    itemNumber: '13451',
    itemCategory: 'top',
    itemSlug: 'top-title-11',
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
    itemNumber: '13452',
    itemCategory: 'top',
    itemSlug: 'top-title-12',
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
       itemSlug STRING NOT NULL,
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
         @itemSlug,
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
