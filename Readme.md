# 🦸‍♂️ TP - API Super-Héros (Node.js + SQLite + Express)

Ce projet est une API REST développée dans le cadre d’un TP de la matière **Technologie du Web** à l’INSA Hauts-de-France.  
Elle permet de manipuler une base de données de super-héros (consultation, ajout, modification, suppression).

## 📁 Structure du projet
TP-API_Node/
├── database.js // Connexion à la base SQLite
├── import.js // Script d'import JSON → SQLite
├── server.js // Serveur Express avec routes CRUD
├── SuperHerosComplet.json // Fichier source des données
├── heroes.db // Base de données générée
├── README.md // Ce fichier

## ▶️ Installation & lancement

### 1. Prérequis
- Node.js (v18+ recommandé)
- SQLite intégré (via `better-sqlite3`)

### 2. Cloner le projet
git clone https://github.com/ton-pseudo/tp-api-superheros.git
cd tp-api-superheros

### 3. Installer les dépendances
npm install

### 4. Importer les données dans la base
node import.js
Cela crée un fichier heroes.db contenant les super-héros extraits de SuperHerosComplet.json.

### 5. Lancer le serveur
node server.js
Le serveur tourne alors sur http://localhost:3000.

## 🔁 API REST - Endpoints disponibles
### 📄 GET /heroes
Récupère la liste complète des héros

### 🔍 GET /heroes/:id
Récupère un héros par son ID

### ➕ POST /heroes
Ajoute un nouveau héros

### ❌ DELETE /heroes/:id
Supprime un héros par son ID

👨‍💻 Auteurs
Louis Potier
Enseignant encadrant : Robert Tomczak