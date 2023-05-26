const express = require("express");
const cors = require("cors");
const router = express.Router();
const exerciseModel = require("../model/exercise");

router.get("/", cors(), async (req, res) => {
  try {
    result = await exerciseModel.getAll();
    res.status(200).send(result);
  } catch (err) {
    console.error(err);
    res.status(404).send("Exercises not found");
  }
});

module.exports = router;
