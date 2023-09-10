import express from "express";
import db from "./db.js";

const router = express.Router();

// Get a list of 50 posts
router.get("/courses", async (req, res) => {
  let collection = await db.collection("Courses");
  let results = await collection.find({}).limit(50).toArray();
  console.log("Collection");
  res.send(results).status(200);
});
export default router;