const express = require("express");
const cors = require("cors");
const router = express.Router();
const model = require("../model/history");

router.get("/exercise", cors(), async (req, res) => {
  try {
    const userId = req.body.id;
    const exerciseId = req.body.exerciseId;
    const result = await model.getHistoryByExercise(userId, exerciseId);
    res.status(200).send(result);
  } catch (err) {
    console.error(err);
    res.status(404).send("Unable to find user history");
  }
});

router.get("/recent", cors(), async (req, res) => {
  try {
    const userId = req.body.id;
    const result = await model.getMostRecentExercises(userId);
    res.status(200).send(result);
  } catch (err) {
    console.error(err);
    res.status(404).send("Most recent exercises not found");
  }
});

module.exports = router;
