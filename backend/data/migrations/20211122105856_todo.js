exports.up = knex =>
  knex.schema.createTable("products", tbl => {
    table.increments('id')
    tbl.string('src');
    tbl.decimal('price', 14, 2);
    tbl.decimal('rating', 3, 2)
  });

exports.down = knex => knex.schema.dropTableIfExists("products");

