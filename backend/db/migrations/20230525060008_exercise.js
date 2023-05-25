/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("exercise", (table) => {
    table.increments("exercise_id").primary();
    table.string("exercise_name").notNullable();
    table.string("body_part").notNullable();
    table.string("main_muscle_group");
    table.integer("push_or_pull");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("exercise");
};
