const express = require("express");
const router = express.Router();
const Project = require("../Models/project");

//Create a project
router.post("/", async (req, res) => {
  try {
    const newProject = await Project.create(req.body); //its a shortcut which create and automatically saves.
    res.json(newProject);
  } catch (e) {
    res.status(500).json(e);
  }
});

//Get All projects
router.get("/", async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.json(projects);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
