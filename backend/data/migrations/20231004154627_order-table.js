/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
    await knex.schema.createTable("orders",table => {
        table.increments("order_id").primary();
        table.integer("order_book_id").notNullable();
        table.integer("order_total").notNullable();
        table.integer("order_user_id").notNullable();
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("orders");
};
