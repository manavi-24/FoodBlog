// scripts/delete-by-title.js
const sql = require('better-sqlite3');

const db = sql('meals.db');

// List of titles to delete
const titlesToDelete = [
  'Cake',
  'Fries',
  'fried',
  'pasta',
  'Tea',
  'Choco Lava Cake',
  'HotDog',
  'jk'
];

for (const title of titlesToDelete) {
  const result = db.prepare('DELETE FROM meals WHERE title = ?').run(title);
  console.log(`Deleted ${result.changes} meal(s) with title: "${title}"`);
}
