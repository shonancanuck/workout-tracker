/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("history").del();
  await knex("history").insert([
    {
      user_id: 1,
      exercise_id: 1,
      date: "2023-03-07",
      weight: 20,
      reps: 5,
      sets: 2,
      difficulty: 2,
    },
    {
      user_id: 1,
      exercise_id: 2,
      date: "2023-03-07",
      weight: 30,
      reps: 8,
      sets: 3,
      difficulty: 2,
    },
    {
      user_id: 1,
      exercise_id: 3,
      date: "2023-03-07",
      weight: 0,
      reps: 5,
      sets: 2,
      difficulty: 2,
    },
    {
      user_id: 1,
      exercise_id: 4,
      date: "2023-03-07",
      weight: 30,
      reps: 10,
      sets: 2,
      difficulty: 2,
    },
    {
      user_id: 1,
      exercise_id: 5,
      date: "2023-03-07",
      weight: 30,
      reps: 6,
      sets: 3,
      difficulty: 3,
    },
    {
      user_id: 1,
      exercise_id: 6,
      date: "2023-03-07",
      weight: 30,
      reps: 5,
      sets: 2,
      difficulty: 2,
    },
    {
      user_id: 1,
      exercise_id: 1,
      date: "2023-03-09",
      weight: 20,
      reps: 5,
      sets: 2,
      difficulty: 2,
    },
    {
      user_id: 1,
      exercise_id: 2,
      date: "2023-03-09",
      weight: 30,
      reps: 8,
      sets: 3,
      difficulty: 2,
    },
    {
      user_id: 1,
      exercise_id: 3,
      date: "2023-03-09",
      weight: 0,
      reps: 5,
      sets: 2,
      difficulty: 2,
    },
    {
      user_id: 1,
      exercise_id: 4,
      date: "2023-03-09",
      weight: 30,
      reps: 10,
      sets: 2,
      difficulty: 2,
    },
    {
      user_id: 1,
      exercise_id: 5,
      date: "2023-03-09",
      weight: 30,
      reps: 6,
      sets: 3,
      difficulty: 3,
    },
    {
      user_id: 1,
      exercise_id: 6,
      date: "2023-03-09",
      weight: 30,
      reps: 5,
      sets: 2,
      difficulty: 2,
    },

    // week 2

    {
      user_id: 1,
      exercise_id: 1,
      date: "2023-03-14",
      weight: 20,
      reps: 6,
      sets: 2,
      difficulty: 2,
    },
    {
      user_id: 1,
      exercise_id: 2,
      date: "2023-03-14",
      weight: 30,
      reps: 10,
      sets: 3,
      difficulty: 2,
    },
    {
      user_id: 1,
      exercise_id: 3,
      date: "2023-03-14",
      weight: 0,
      reps: 5,
      sets: 3,
      difficulty: 2,
    },
    {
      user_id: 1,
      exercise_id: 4,
      date: "2023-03-14",
      weight: 30,
      reps: 10,
      sets: 3,
      difficulty: 2,
    },
    {
      user_id: 1,
      exercise_id: 5,
      date: "2023-03-14",
      weight: 30,
      reps: 8,
      sets: 3,
      difficulty: 2,
    },
    {
      user_id: 1,
      exercise_id: 6,
      date: "2023-03-14",
      weight: 30,
      reps: 8,
      sets: 2,
      difficulty: 2,
    },
    {
      user_id: 1,
      exercise_id: 1,
      date: "2023-03-16",
      weight: 20,
      reps: 6,
      sets: 2,
      difficulty: 2,
    },
    {
      user_id: 1,
      exercise_id: 2,
      date: "2023-03-16",
      weight: 30,
      reps: 10,
      sets: 3,
      difficulty: 2,
    },
    {
      user_id: 1,
      exercise_id: 3,
      date: "2023-03-16",
      weight: 0,
      reps: 5,
      sets: 3,
      difficulty: 2,
    },
    {
      user_id: 1,
      exercise_id: 4,
      date: "2023-03-16",
      weight: 30,
      reps: 10,
      sets: 3,
      difficulty: 2,
    },
    {
      user_id: 1,
      exercise_id: 5,
      date: "2023-03-16",
      weight: 30,
      reps: 8,
      sets: 3,
      difficulty: 2,
    },
    {
      user_id: 1,
      exercise_id: 6,
      date: "2023-03-16",
      weight: 30,
      reps: 8,
      sets: 2,
      difficulty: 2,
    },
    // week 3
    {
      user_id: 1,
      exercise_id: 1,
      date: "2023-03-21",
      weight: 20,
      reps: 7,
      sets: 2,
      difficulty: 2,
    },
    {
      user_id: 1,
      exercise_id: 2,
      date: "2023-03-21",
      weight: 30,
      reps: 11,
      sets: 3,
      difficulty: 2,
    },
    {
      user_id: 1,
      exercise_id: 3,
      date: "2023-03-21",
      weight: 0,
      reps: 6,
      sets: 3,
      difficulty: 2,
    },
    {
      user_id: 1,
      exercise_id: 4,
      date: "2023-03-21",
      weight: 30,
      reps: 12,
      sets: 3,
      difficulty: 2,
    },
    {
      user_id: 1,
      exercise_id: 5,
      date: "2023-03-21",
      weight: 30,
      reps: 7,
      sets: 3,
      difficulty: 2,
    },
    {
      user_id: 1,
      exercise_id: 6,
      date: "2023-03-21",
      weight: 30,
      reps: 10,
      sets: 2,
      difficulty: 2,
    },
    {
      user_id: 1,
      exercise_id: 1,
      date: "2023-03-23",
      weight: 20,
      reps: 7,
      sets: 2,
      difficulty: 2,
    },
    {
      user_id: 1,
      exercise_id: 2,
      date: "2023-03-23",
      weight: 30,
      reps: 11,
      sets: 3,
      difficulty: 2,
    },
    {
      user_id: 1,
      exercise_id: 3,
      date: "2023-03-23",
      weight: 0,
      reps: 6,
      sets: 3,
      difficulty: 2,
    },
    {
      user_id: 1,
      exercise_id: 4,
      date: "2023-03-23",
      weight: 30,
      reps: 12,
      sets: 3,
      difficulty: 2,
    },
    {
      user_id: 1,
      exercise_id: 5,
      date: "2023-03-23",
      weight: 30,
      reps: 7,
      sets: 3,
      difficulty: 2,
    },
    {
      user_id: 1,
      exercise_id: 6,
      date: "2023-03-23",
      weight: 30,
      reps: 10,
      sets: 2,
      difficulty: 2,
    },

    // week 4
    {
      user_id: 1,
      exercise_id: 1,
      date: "2023-03-28",
      weight: 20,
      reps: 8,
      sets: 2,
      difficulty: 2,
    },
    {
      user_id: 1,
      exercise_id: 2,
      date: "2023-03-28",
      weight: 30,
      reps: 12,
      sets: 3,
      difficulty: 2,
    },
    {
      user_id: 1,
      exercise_id: 3,
      date: "2023-03-28",
      weight: 0,
      reps: 6,
      sets: 3,
      difficulty: 2,
    },
    {
      user_id: 1,
      exercise_id: 4,
      date: "2023-03-28",
      weight: 30,
      reps: 14,
      sets: 3,
      difficulty: 2,
    },
    {
      user_id: 1,
      exercise_id: 5,
      date: "2023-03-28",
      weight: 30,
      reps: 10,
      sets: 3,
      difficulty: 3,
    },
    {
      user_id: 1,
      exercise_id: 6,
      date: "2023-03-28",
      weight: 30,
      reps: 12,
      sets: 2,
      difficulty: 1,
    },
    {
      user_id: 1,
      exercise_id: 1,
      date: "2023-03-30",
      weight: 20,
      reps: 8,
      sets: 2,
      difficulty: 2,
    },
    {
      user_id: 1,
      exercise_id: 2,
      date: "2023-03-30",
      weight: 30,
      reps: 12,
      sets: 3,
      difficulty: 2,
    },
    {
      user_id: 1,
      exercise_id: 3,
      date: "2023-03-30",
      weight: 0,
      reps: 6,
      sets: 3,
      difficulty: 2,
    },
    {
      user_id: 1,
      exercise_id: 4,
      date: "2023-03-30",
      weight: 30,
      reps: 14,
      sets: 3,
      difficulty: 2,
    },
    {
      user_id: 1,
      exercise_id: 5,
      date: "2023-03-30",
      weight: 30,
      reps: 10,
      sets: 3,
      difficulty: 3,
    },
    {
      user_id: 1,
      exercise_id: 6,
      date: "2023-03-30",
      weight: 30,
      reps: 12,
      sets: 2,
      difficulty: 1,
    },

    // week 5
    {
      user_id: 1,
      exercise_id: 1,
      date: "2023-04-04",
      weight: 20,
      reps: 9,
      sets: 2,
      difficulty: 3,
    },
    {
      user_id: 1,
      exercise_id: 2,
      date: "2023-04-04",
      weight: 30,
      reps: 13,
      sets: 4,
      difficulty: 3,
    },
    {
      user_id: 1,
      exercise_id: 3,
      date: "2023-04-04",
      weight: 0,
      reps: 7,
      sets: 3,
      difficulty: 2,
    },
    {
      user_id: 1,
      exercise_id: 4,
      date: "2023-04-04",
      weight: 30,
      reps: 15,
      sets: 3,
      difficulty: 2,
    },
    {
      user_id: 1,
      exercise_id: 5,
      date: "2023-04-04",
      weight: 30,
      reps: 10,
      sets: 3,
      difficulty: 3,
    },
    {
      user_id: 1,
      exercise_id: 6,
      date: "2023-04-04",
      weight: 30,
      reps: 15,
      sets: 2,
      difficulty: 1,
    },
    {
      user_id: 1,
      exercise_id: 1,
      date: "2023-04-06",
      weight: 20,
      reps: 9,
      sets: 2,
      difficulty: 3,
    },
    {
      user_id: 1,
      exercise_id: 2,
      date: "2023-04-06",
      weight: 30,
      reps: 13,
      sets: 4,
      difficulty: 3,
    },
    {
      user_id: 1,
      exercise_id: 3,
      date: "2023-04-06",
      weight: 0,
      reps: 7,
      sets: 3,
      difficulty: 2,
    },
    {
      user_id: 1,
      exercise_id: 4,
      date: "2023-04-06",
      weight: 30,
      reps: 15,
      sets: 3,
      difficulty: 2,
    },
    {
      user_id: 1,
      exercise_id: 5,
      date: "2023-04-06",
      weight: 30,
      reps: 10,
      sets: 3,
      difficulty: 3,
    },
    {
      user_id: 1,
      exercise_id: 6,
      date: "2023-04-06",
      weight: 30,
      reps: 15,
      sets: 2,
      difficulty: 1,
    },
    // week 6
    {
      user_id: 1,
      exercise_id: 1,
      date: "2023-04-11",
      weight: 20,
      reps: 10,
      sets: 2,
      difficulty: 3,
    },
    {
      user_id: 1,
      exercise_id: 2,
      date: "2023-04-11",
      weight: 30,
      reps: 14,
      sets: 4,
      difficulty: 3,
    },
    {
      user_id: 1,
      exercise_id: 3,
      date: "2023-04-11",
      weight: 0,
      reps: 7,
      sets: 4,
      difficulty: 2,
    },
    {
      user_id: 1,
      exercise_id: 4,
      date: "2023-04-11",
      weight: 35,
      reps: 8,
      sets: 3,
      difficulty: 2,
    },
    {
      user_id: 1,
      exercise_id: 5,
      date: "2023-04-11",
      weight: 35,
      reps: 8,
      sets: 3,
      difficulty: 3,
    },
    {
      user_id: 1,
      exercise_id: 6,
      date: "2023-04-11",
      weight: 35,
      reps: 12,
      sets: 2,
      difficulty: 1,
    },
    {
      user_id: 1,
      exercise_id: 1,
      date: "2023-04-13",
      weight: 20,
      reps: 10,
      sets: 2,
      difficulty: 3,
    },
    {
      user_id: 1,
      exercise_id: 2,
      date: "2023-04-13",
      weight: 30,
      reps: 14,
      sets: 4,
      difficulty: 3,
    },
    {
      user_id: 1,
      exercise_id: 3,
      date: "2023-04-13",
      weight: 0,
      reps: 7,
      sets: 4,
      difficulty: 2,
    },
    {
      user_id: 1,
      exercise_id: 4,
      date: "2023-04-13",
      weight: 35,
      reps: 8,
      sets: 3,
      difficulty: 2,
    },
    {
      user_id: 1,
      exercise_id: 5,
      date: "2023-04-13",
      weight: 35,
      reps: 8,
      sets: 3,
      difficulty: 3,
    },
    {
      user_id: 1,
      exercise_id: 6,
      date: "2023-04-13",
      weight: 35,
      reps: 12,
      sets: 2,
      difficulty: 1,
    },

    // week 7
    {
      user_id: 1,
      exercise_id: 1,
      date: "2023-04-18",
      weight: 25,
      reps: 7,
      sets: 2,
      difficulty: 3,
    },
    {
      user_id: 1,
      exercise_id: 2,
      date: "2023-04-18",
      weight: 30,
      reps: 15,
      sets: 4,
      difficulty: 3,
    },
    {
      user_id: 1,
      exercise_id: 3,
      date: "2023-04-18",
      weight: 0,
      reps: 8,
      sets: 3,
      difficulty: 2,
    },
    {
      user_id: 1,
      exercise_id: 4,
      date: "2023-04-18",
      weight: 35,
      reps: 9,
      sets: 3,
      difficulty: 2,
    },
    {
      user_id: 1,
      exercise_id: 5,
      date: "2023-04-18",
      weight: 35,
      reps: 9,
      sets: 3,
      difficulty: 3,
    },
    {
      user_id: 1,
      exercise_id: 6,
      date: "2023-04-18",
      weight: 35,
      reps: 14,
      sets: 2,
      difficulty: 1,
    },
    {
      user_id: 1,
      exercise_id: 1,
      date: "2023-04-20",
      weight: 25,
      reps: 7,
      sets: 2,
      difficulty: 3,
    },
    {
      user_id: 1,
      exercise_id: 2,
      date: "2023-04-20",
      weight: 30,
      reps: 15,
      sets: 4,
      difficulty: 3,
    },
    {
      user_id: 1,
      exercise_id: 3,
      date: "2023-04-20",
      weight: 0,
      reps: 8,
      sets: 3,
      difficulty: 2,
    },
    {
      user_id: 1,
      exercise_id: 4,
      date: "2023-04-20",
      weight: 35,
      reps: 9,
      sets: 3,
      difficulty: 2,
    },
    {
      user_id: 1,
      exercise_id: 5,
      date: "2023-04-20",
      weight: 35,
      reps: 9,
      sets: 3,
      difficulty: 3,
    },
    {
      user_id: 1,
      exercise_id: 6,
      date: "2023-04-20",
      weight: 35,
      reps: 14,
      sets: 2,
      difficulty: 1,
    },
    // week 8
    {
      user_id: 1,
      exercise_id: 1,
      date: "2023-04-25",
      weight: 25,
      reps: 8,
      sets: 2,
      difficulty: 3,
    },
    {
      user_id: 1,
      exercise_id: 2,
      date: "2023-04-25",
      weight: 35,
      reps: 8,
      sets: 4,
      difficulty: 3,
    },
    {
      user_id: 1,
      exercise_id: 3,
      date: "2023-04-25",
      weight: 0,
      reps: 8,
      sets: 4,
      difficulty: 2,
    },
    {
      user_id: 1,
      exercise_id: 4,
      date: "2023-04-25",
      weight: 35,
      reps: 10,
      sets: 3,
      difficulty: 2,
    },
    {
      user_id: 1,
      exercise_id: 5,
      date: "2023-04-25",
      weight: 35,
      reps: 10,
      sets: 3,
      difficulty: 3,
    },
    {
      user_id: 1,
      exercise_id: 6,
      date: "2023-04-25",
      weight: 40,
      reps: 8,
      sets: 2,
      difficulty: 1,
    },
    {
      user_id: 1,
      exercise_id: 1,
      date: "2023-04-27",
      weight: 25,
      reps: 8,
      sets: 2,
      difficulty: 3,
    },
    {
      user_id: 1,
      exercise_id: 2,
      date: "2023-04-27",
      weight: 35,
      reps: 8,
      sets: 4,
      difficulty: 3,
    },
    {
      user_id: 1,
      exercise_id: 3,
      date: "2023-04-27",
      weight: 0,
      reps: 8,
      sets: 4,
      difficulty: 2,
    },
    {
      user_id: 1,
      exercise_id: 4,
      date: "2023-04-27",
      weight: 35,
      reps: 10,
      sets: 3,
      difficulty: 2,
    },
    {
      user_id: 1,
      exercise_id: 5,
      date: "2023-04-27",
      weight: 35,
      reps: 10,
      sets: 3,
      difficulty: 3,
    },
    {
      user_id: 1,
      exercise_id: 6,
      date: "2023-04-27",
      weight: 40,
      reps: 8,
      sets: 2,
      difficulty: 1,
    },
    // week 9

    {
      user_id: 1,
      exercise_id: 1,
      date: "2023-05-02",
      weight: 25,
      reps: 9,
      sets: 2,
      difficulty: 3,
    },
    {
      user_id: 1,
      exercise_id: 2,
      date: "2023-05-02",
      weight: 35,
      reps: 9,
      sets: 4,
      difficulty: 3,
    },
    {
      user_id: 1,
      exercise_id: 3,
      date: "2023-05-02",
      weight: 0,
      reps: 8,
      sets: 5,
      difficulty: 2,
    },
    {
      user_id: 1,
      exercise_id: 4,
      date: "2023-05-02",
      weight: 35,
      reps: 11,
      sets: 3,
      difficulty: 2,
    },
    {
      user_id: 1,
      exercise_id: 5,
      date: "2023-05-02",
      weight: 40,
      reps: 6,
      sets: 3,
      difficulty: 3,
    },
    {
      user_id: 1,
      exercise_id: 6,
      date: "2023-05-02",
      weight: 40,
      reps: 9,
      sets: 2,
      difficulty: 1,
    },
    {
      user_id: 1,
      exercise_id: 1,
      date: "2023-05-04",
      weight: 25,
      reps: 9,
      sets: 2,
      difficulty: 3,
    },
    {
      user_id: 1,
      exercise_id: 2,
      date: "2023-05-04",
      weight: 35,
      reps: 9,
      sets: 4,
      difficulty: 3,
    },
    {
      user_id: 1,
      exercise_id: 3,
      date: "2023-05-04",
      weight: 0,
      reps: 8,
      sets: 5,
      difficulty: 2,
    },
    {
      user_id: 1,
      exercise_id: 4,
      date: "2023-05-04",
      weight: 35,
      reps: 11,
      sets: 3,
      difficulty: 2,
    },
    {
      user_id: 1,
      exercise_id: 5,
      date: "2023-05-04",
      weight: 40,
      reps: 6,
      sets: 3,
      difficulty: 3,
    },
    {
      user_id: 1,
      exercise_id: 6,
      date: "2023-05-04",
      weight: 40,
      reps: 9,
      sets: 2,
      difficulty: 1,
    },

    // week 10
    {
      user_id: 1,
      exercise_id: 1,
      date: "2023-05-09",
      weight: 25,
      reps: 10,
      sets: 2,
      difficulty: 3,
    },
    {
      user_id: 1,
      exercise_id: 2,
      date: "2023-05-09",
      weight: 35,
      reps: 10,
      sets: 4,
      difficulty: 3,
    },
    {
      user_id: 1,
      exercise_id: 3,
      date: "2023-05-09",
      weight: 0,
      reps: 9,
      sets: 3,
      difficulty: 2,
    },
    {
      user_id: 1,
      exercise_id: 4,
      date: "2023-05-09",
      weight: 35,
      reps: 12,
      sets: 3,
      difficulty: 2,
    },
    {
      user_id: 1,
      exercise_id: 5,
      date: "2023-05-09",
      weight: 40,
      reps: 7,
      sets: 3,
      difficulty: 3,
    },
    {
      user_id: 1,
      exercise_id: 6,
      date: "2023-05-09",
      weight: 40,
      reps: 10,
      sets: 2,
      difficulty: 1,
    },
    {
      user_id: 1,
      exercise_id: 1,
      date: "2023-05-11",
      weight: 25,
      reps: 10,
      sets: 2,
      difficulty: 3,
    },
    {
      user_id: 1,
      exercise_id: 2,
      date: "2023-05-11",
      weight: 35,
      reps: 10,
      sets: 4,
      difficulty: 3,
    },
    {
      user_id: 1,
      exercise_id: 3,
      date: "2023-05-11",
      weight: 0,
      reps: 9,
      sets: 3,
      difficulty: 2,
    },
    {
      user_id: 1,
      exercise_id: 4,
      date: "2023-05-11",
      weight: 35,
      reps: 12,
      sets: 3,
      difficulty: 2,
    },
    {
      user_id: 1,
      exercise_id: 5,
      date: "2023-05-11",
      weight: 40,
      reps: 7,
      sets: 3,
      difficulty: 3,
    },
    {
      user_id: 1,
      exercise_id: 6,
      date: "2023-05-11",
      weight: 40,
      reps: 10,
      sets: 2,
      difficulty: 1,
    },
  ]);
};
