exports.up = knex =>
  knex.schema.createTable("products", tbl => {
    tbl.uuid('id');
    tbl.string("type")
    tbl.string("name")
    tbl.string('src');
    tbl.decimal('price', 14, 2);
    tbl.decimal('rating', 3, 2)
  });

exports.down = knex => knex.schema.dropTableIfExists("products");

