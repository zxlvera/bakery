const express = require('express')
const router = express.Router()
const queries = require("../data/queries.js");
const { uuid } = require('uuidv4');

router.get('/', async (req, res) => {
  queries.getAll().then((products) => {
    res.json({ products });
  });
});

router.post("/", (req, res, next) => {
  req.body.id = uuid();
  req.body.src = 'https://res.cloudinary.com/zxlim9/image/upload/v1637392190/bakery/croissants-1_curtch.jpg'
  req.body.price = Math.random() * 50
  req.body.rating = Math.random() * 5 
  queries.create(req.body).then((products) => {
    res.status(201).send('');
  });
});

router.put("/", (req, res, next) => {
  req.body.price = Math.random() * 50
  req.body.rating = Math.random() * 5 
  queries.update(req.body.id, req.body).then((products) => {
    res.status(201).send('');
  });
});

router.delete("/", (req, res, next) => {
  queries.delete(req.body.id).then((products) => {
    res.status(201).send('');
  });
});
module.exports = router;
