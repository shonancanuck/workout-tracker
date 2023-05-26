const knex = require("../db/knex");

module.exports = {
  getAll() {
    return knex("exercise").select();
  },
};
