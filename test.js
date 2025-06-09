const db = require('./database');

const heroes = db.prepare('SELECT * FROM heroes LIMIT 5').all();

console.log(heroes);
