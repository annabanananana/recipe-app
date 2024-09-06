// backend/index.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./database');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

app.post('/add-recipe', (req, res) => {
  const { name, ingredients, instructions } = req.body;
  const query = `INSERT INTO recipes (name, ingredients, instructions) VALUES (?, ?, ?)`;
  db.run(query, [name, ingredients, instructions], function (err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ id: this.lastID });
  });
});

app.get('/recipes', (req, res) => {
  const { ingredients } = req.query;
  const query = `SELECT * FROM recipes WHERE ingredients LIKE ?`;
  db.all(query, [`%${ingredients}%`], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ recipes: rows });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
