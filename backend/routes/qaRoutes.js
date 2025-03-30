const express = require("express");
const router = express.Router();
const QA = require("../Models/qa");

//Create a QA(Question & Answer)
router.post("/", async (req, res) => {
  try {
    const newQA = await QA.create(req.body); //its a shortcut which create and automatically saves.
    res.status(201).json(newQA);
  } catch (e) {
    res.status(500).json(e);
  }
});

//Get All QAs
router.get("/", async (req, res) => {
  try {
    const qa = await QA.find().sort({ createdAt: -1 });
    res.json(qa);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Get single QA
router.get("/:id", async (req, res) => {
  try {
    const qa = await QA.findById(req.params.id);
    res.json(qa);
  } catch (e) {
    res.status(404).json(e);
  }
});

//Update Single QA

router.patch("/:id", async (req, res) => {
  try {
    const updatedQA = await QA.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(201).json(updatedQA);
  } catch (e) {
    res.status(500).json(e);
  }
});

//Destroy route
router.delete("/:id", async (req, res) => {
  try {
    const deletedQA = await QA.findByIdAndDelete(req.params.id);
    res.json(deletedQA);
  } catch (e) {
    res.status(500).json(e);
  }
});

module.exports = router;
