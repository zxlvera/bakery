const knex = require("./db.js"); 

module.exports = {
  getAll() {
    return knex("products");
  },
  getOne(id) {
    return knex("products").where("id", id).first();
  },
  getCount() {
    return knex("products").count("id");
  },
  create(product) {
    return knex("products").insert(product, "*");
  },
  update(id, product) {
    return knex("products").where("id", id).update(product, "*");
  },
  delete(id) {
    return knex("products").where("id", id).del();
  },
};
