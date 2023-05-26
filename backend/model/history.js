knex = require("../db/knex");

module.exports = {
  getHistoryByExercise(userId, exerciseId) {
    return knex("history")
      .where({
        user_id: userId,
        exercise_id: exerciseId,
      })
      .orderBy("date", "asc")
      .select();
  },

  getMostRecentExercises(userId) {
    return knex("history")
      .where("user_id", userId)
      .orderBy("date", "desc")
      .select()
      .limit(6);
  },
};
