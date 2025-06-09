const Database = require('better-sqlite3');
const db = new Database('heroes.db', { verbose: console.log });

module.exports = db;
