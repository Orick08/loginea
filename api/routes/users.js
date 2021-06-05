const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv').config();

const db = require('../model/connection');

router.get('/', (req, res) => {
  db.query('select * from usuarios', (error, rows, fileds) => {
    if (!error) {
      res.json(rows);
    }
    else {
      res.json(error);
      console.error(error);
    }
  });
});

router.post('/singin', (req, res) => {
  const { user, password } = req.body;

  db.query('SELECT idusuario, email FROM usuarios WHERE email = ? AND password = ? LIMIT 1', [user, password],
    (error, rows, fileds) => {
      if (error) {
        console.error(error);
        res.json(error);
        return;
      }

      if (rows.length > 0) {
        let data = JSON.stringify(rows[0]);
        const TOKEN = jwt.sign(data, process.env.SECRET_KEY);
        res.json({ TOKEN });
      } else {
        res.json('Incorrect user or password');
      }

    });

})

module.exports = router;
