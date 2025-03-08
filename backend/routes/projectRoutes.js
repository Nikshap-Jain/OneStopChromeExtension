const express = require("express");
const router = express.Router();
const ProjectSchema = require("../Models/project");

//Create a project
router.post("/", async (req, res) => {
  try {
    const newProject = await ProjectSchema.create(req.body);
    res.json(newProject);
  } catch (e) {
    res.status(500).json(e);
  }
});

//Get All projects
router.get("/", async (req, res) => {
  try {
    const projects = await ProjectSchema.find().sort({ createdAt: -1 });
    res.json(projects);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
