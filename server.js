const express = require('express');
const db = require('./database'); // ta connexion SQLite
const app = express();

app.use(express.json()); // pour lire le JSON dans le body des requêtes

// Route GET : liste tous les héros
app.get('/heroes', (req, res) => {
  const heroes = db.prepare('SELECT * FROM heroes').all();
  res.json(heroes);
});

// Route GET : héros par ID
app.get('/heroes/:id', (req, res) => {
  const hero = db.prepare('SELECT * FROM heroes WHERE id = ?').get(req.params.id);
  if (!hero) return res.status(404).json({ error: 'Héros non trouvé' });
  res.json(hero);
});

// Route POST : ajouter un héros
app.post('/heroes', (req, res) => {
  const { id, name, power } = req.body;
  if (!id || !name || !power) {
    return res.status(400).json({ error: 'Champs id, name et power requis' });
  }
  const stmt = db.prepare('INSERT INTO heroes (id, name, power) VALUES (?, ?, ?)');
  try {
    stmt.run(id, name, power);
    res.status(201).json({ message: 'Héros ajouté' });
  } catch (err) {
    console.error('Erreur SQL:', err);
    res.status(500).json({ error: 'Erreur lors de l\'insertion' });
  }
});


// Route PUT : modifier un héros
app.put('/heroes/:id', (req, res) => {
  const { name, power } = req.body;
  const stmt = db.prepare('UPDATE heroes SET name = ?, power = ? WHERE id = ?');
  const result = stmt.run(name, power, req.params.id);
  if (result.changes === 0) return res.status(404).json({ error: 'Héros non trouvé' });
  res.json({ message: 'Héros modifié' });
});

// Route DELETE : supprimer un héros
app.delete('/heroes/:id', (req, res) => {
  const stmt = db.prepare('DELETE FROM heroes WHERE id = ?');
  const result = stmt.run(req.params.id);
  if (result.changes === 0) return res.status(404).json({ error: 'Héros non trouvé' });
  res.json({ message: 'Héros supprimé' });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
