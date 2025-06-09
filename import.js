const fs = require('fs');
const db = require('./database');

// Chargement du JSON et récupération du tableau 'superheros'
const data = JSON.parse(fs.readFileSync('SuperHerosComplet.json', 'utf-8')).superheros;

// Création de la table (si elle n'existe pas) avec plusieurs colonnes pour les powerstats
db.prepare(`
  CREATE TABLE IF NOT EXISTS heroes (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    slug TEXT,
    intelligence INTEGER,
    strength INTEGER,
    speed INTEGER,
    durability INTEGER,
    power INTEGER,
    combat INTEGER
  )
`).run();

// Préparation de l'insertion
const insert = db.prepare(`
  INSERT INTO heroes (id, name, slug, intelligence, strength, speed, durability, power, combat)
  VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
`);

// Insertion des données
for (const hero of data) {
  const stats = hero.powerstats || {};
  insert.run(
    hero.id,
    hero.name,
    hero.slug,
    stats.intelligence || null,
    stats.strength || null,
    stats.speed || null,
    stats.durability || null,
    stats.power || null,
    stats.combat || null
  );
}

console.log('Import terminé avec succès.');
