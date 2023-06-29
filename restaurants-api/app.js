const express = require('express');
const app = express();
const sqlite3 = require('better-sqlite3')
const db = new sqlite3('restaurants.db');

// Create the "restaurants" table if it doesn't exist
const createTableQuery = `
  CREATE TABLE IF NOT EXISTS restaurants (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    adresse TEXT NOT NULL,
    kategorie TEXT NOT NULL
  )
`;

db.exec(createTableQuery);

// connection details
const port = 3000;
const hostname = 'localhost';

// bodyparser middleware aktivieren
app.use(express.json());

// globales restaurants array, inkl. initialem eintrag
let restaurants = [{ name: "Bobs Burgers", adresse: "Zum Burgerladen 3, 12345 Burgerhausen", kategorie: "burgerrestaurant" }];

// true/false, ob restaurant mit name schon vorhanden ist
function exists(name) {
    let result = restaurants.find((elem) => {
        if (elem.name == name) {
            return true;
        }
    });

    if (result) {
        return true;
    } else {
        return false;
    }

    // return result != undefined;
};

// gibt index eines bestimmten restaurants zurück; -1 falls es nicht existiert
function getIndex(name) {
    let index = -1;
    for (let i = 0; i < restaurants.length; i++) {
        if (restaurants[i].name == name) {
            index = i;
        }
    }
    return index;
}

// löscht ein restaurant aus dem globalen array
function delRestaurant(name) {
    const index = getIndex(name);
    let deleted = restaurants.splice(index, 1);
    return deleted;
}


/* API ENDPUNKTE */
// alle restaurants abfragen
app.get('/restaurants', (_, res) => {
    const query = db.prepare('SELECT * FROM restaurants');
    const restaurants = query.all();
    res.send(restaurants);
  });
  
  // bestimmtes restaurant abfragen
  app.get('/restaurant/:name', (req, res) => {
    const query = db.prepare('SELECT * FROM restaurants WHERE name = ?');
    const result = query.get(req.params.name);
    if (result) {
      res.send(result);
    } else {
      res.status(404);
      res.send('Dieses Restaurant existiert nicht');
    }
  });
  
  // neues restaurant hinzufügen
  app.post('/restaurant', (req, res) => {
    const r = req.body;
    if (!r.name || !r.adresse || !r.kategorie) {
      res.status(400);
      res.send('Objekt ist nicht vollständig! Name, Adresse oder Kategorie fehlt!');
    } else {
      const query = db.prepare('SELECT * FROM restaurants WHERE name = ?');
      const existingRestaurant = query.get(r.name);
      if (!existingRestaurant) {
        const insert = db.prepare('INSERT INTO restaurants (name, adresse, kategorie) VALUES (?, ?, ?)');
        insert.run(r.name, r.adresse, r.kategorie);
        res.status(201);
        res.send('Restaurant wurde hinzugefügt');
      } else {
        res.status(409);
        res.send('Restaurant ist bereits gespeichert!');
      }
    }
  });
  
  // bestimmtes restaurant aktualisieren
  app.put('/restaurant/:name', (req, res) => {
    const query = db.prepare('SELECT * FROM restaurants WHERE name = ?');
    const existingRestaurant = query.get(req.params.name);
    if (existingRestaurant) {
      const r = req.body;
      if (r.name && r.adresse && r.kategorie) {
        const update = db.prepare('UPDATE restaurants SET name = ?, adresse = ?, kategorie = ? WHERE name = ?');
        update.run(r.name, r.adresse, r.kategorie, req.params.name);
        res.send(r);
        console.log(`Aktualisiere: ${req.params.name}: ${r.name}, ${r.adresse}, ${r.kategorie}.`);
      } else {
        res.status(400);
        res.send('Daten unvollständig, nicht aktualisiert.');
      }
    } else {
      res.status(404);
      res.send('Restaurant nicht gefunden.');
    }
  });
  
  // bestimmtes restaurant löschen
  app.delete('/restaurant/:name', (req, res) => {
    const query = db.prepare('SELECT * FROM restaurants WHERE name = ?');
    const existingRestaurant = query.get(req.params.name);
    if (existingRestaurant) {
      const del = db.prepare('DELETE FROM restaurants WHERE name = ?');
     
}});  

// server starten
app.listen(port, hostname, () => {
    console.log(`Server gestartet ${hostname}:${port}.`);
});
