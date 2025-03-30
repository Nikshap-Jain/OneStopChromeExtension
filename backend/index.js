const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const ProjectRouters = require("./routes/projectRoutes");
const LinkRouters = require("./routes/linkRoutes");
const QARouters = require("./routes/qaRoutes");

const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

app.use("/api/projects", ProjectRouters);
app.use("/api/links", LinkRouters);
app.use("/api/qas", QARouters);

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
