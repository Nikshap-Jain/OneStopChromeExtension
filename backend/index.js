const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("One Stop backend running");
});

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
