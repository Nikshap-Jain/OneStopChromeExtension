const express = require("express");
const router = express.Router();
const Link = require("../Models/links");

//Create a Link
router.post("/", async (req, res) => {
  try {
    const newLink = await Link.create(req.body); //its a shortcut which create and automatically saves.
    res.status(201).json(newLink);
  } catch (e) {
    res.status(500).json(e);
  }
});

//Get All Links
router.get("/", async (req, res) => {
  try {
    const links = await Link.find().sort({ createdAt: -1 });
    res.json(links);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Get single Link
router.get("/:id", async (req, res) => {
  try {
    const link = await Link.findById(req.params.id);
    res.json(link);
  } catch (e) {
    res.status(500).json(e);
  }
});

//Update Single Link

router.patch("/:id", async (req, res) => {
  try {
    const updatedLink = await Link.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(201).json(updatedLink);
  } catch (e) {
    res.status(500).json(e);
  }
});

//Destroy route
router.delete("/:id", async (req, res) => {
  try {
    const deletedLink = await Link.findByIdAndDelete(req.params.id);
    res.json(deletedLink);
  } catch (e) {
    res.status(500).json(e);
  }
});

module.exports = router;
