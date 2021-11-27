exports.up = knex =>
  knex.schema.createTable("products", tbl => {
    tbl.increments();
    tbl.string('type');
    tbl.string('name');
    tbl.string('src');
    tbl.decimal('price', 14, 2);
    tbl.decimal('rating', 3, 2)
    tbl.timestamps();
  });

exports.down = knex => knex.schema.dropTableIfExists("products");

