// import Database from 'better-sqlite3';
// const db = new Database('faq.db');

const sql = require('better-sqlite3');
const db = sql('faq.db');

const query = `
  CREATE TABLE faq (
    id INTEGER PRIMARY KEY,
    name STRING NOT NULL,
    email STRING NOT NULL,
    title STRING NOT NULL,
    summary STRING NOT NULL,
    image STRING NOT NULL
  )
`;

db.exec(query);
