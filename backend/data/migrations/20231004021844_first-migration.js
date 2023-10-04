/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
  await knex.schema.createTable("books",table => {
    table.increments("book_id");
    table.string("book_title");
    table.string("book_author");
    table.string("book_genre");
    table.integer("book_year");
    table.string("book_edition");
    table.integer("book_pages");
    table.string("book_cover");
    table.string("book_description");
    table.integer("book_price")
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("books")
};
