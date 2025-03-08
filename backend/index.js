const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const ProjectRouters = require("./routes/projectRoutes");

const app = express();
// const PORT = process.env.PORT || 8080;
const PORT = 8080;
app.use(cors());
app.use(express.json());

app.use("/api/projects", ProjectRouters);

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("mongoDb connected"))
  .catch((e) => console.log(`Error in mongoDb connection ${e}`));

app.get("/", (req, res) => {
  res.send("One Stop backend running");
});

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
