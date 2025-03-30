const express = require("express");
const router = express.Router();
const Project = require("../Models/project");

//Create a project
router.post("/", async (req, res) => {
  try {
    const newProject = await Project.create(req.body); //its a shortcut which create and automatically saves.
    res.status(201).json(newProject);
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

//Get single project
router.get("/:id", async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    res.json(project);
  } catch (e) {
    res.status(500).json(e);
  }
});

//Update Single Project

router.patch("/:id", async (req, res) => {
  try {
    const updatedProject = await Project.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    res.status(201).json(updatedProject);
  } catch (e) {
    res.status(500).json(e);
  }
});

//Destroy route
router.delete("/:id", async (req, res) => {
  try {
    const deletedProject = await Project.findByIdAndDelete(req.params.id);
    res.json(deletedProject);
  } catch (e) {
    res.status(500).json(e);
  }
});

module.exports = router;
