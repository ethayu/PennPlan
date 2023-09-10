const express = require("express");
const router = express.Router();
const mongoose = require("../mongoose");

// Define a GET route to retrieve data
router.get("/course_items", async (req, res) => {
  try {
    const items = await mongoose.connection
      .collection("Courses")
      .find()
      .toArray();

    // Send the retrieved data as a JSON response
    res.json(items);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while fetching data." });
  }
});

module.exports = router;
