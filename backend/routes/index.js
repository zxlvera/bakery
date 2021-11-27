const express = require('express')
const router = express.Router()
const db = require("../data/db.js");

/* GET home page. */

router.get('/', async(req, res) => {
  const products = await db("products");
  res.json({ products });
});

module.exports = router;
