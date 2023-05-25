/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("exercise").del();
  await knex("exercise").insert([
    {
      exercise_id: 1,
      exercise_name: "overhead press",
      body_part: "shoulders",
      main_muscle_group: "deltoids",
      push_or_pull: 1,
    },
    {
      exercise_id: 2,
      exercise_name: "bench press",
      body_part: "chest",
      main_muscle_group: "pectorals",
      push_or_pull: 1,
    },
    {
      exercise_id: 3,
      exercise_name: "pull up",
      body_part: "back",
      main_muscle_group: "latissimus dorsi",
      push_or_pull: 2,
    },
    {
      exercise_id: 4,
      exercise_name: "row",
      body_part: "back",
      main_muscle_group: "latissmus dorsi",
      push_or_pull: 2,
    },
    {
      exercise_id: 5,
      exercise_name: "squat",
      body_part: "legs",
      main_muscle_group: "quadriceps",
      push_or_pull: 1,
    },
    {
      exercise_id: 6,
      exercise_name: "deadlift",
      body_part: "legs",
      main_muscle_group: "hamstrings",
      push_or_pull: 2,
    },
  ]);
};
