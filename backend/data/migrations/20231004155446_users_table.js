/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
  await knex.schema.createTable("users",table=> {
    table.increments("user_id").primary();
    table.string("user_first_name").notNullable();
    table.string("user_last_name").notNullable();
    table.string("user_email").notNullable();
    table.string("user_password").notNullable();
    table.string("user_username").notNullable();
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("users")
};
