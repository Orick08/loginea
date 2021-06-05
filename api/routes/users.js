const express = require('express');
const router = express.Router();

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

module.exports = router;
