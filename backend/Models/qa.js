const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const qaSchema = new Schema({
  project: {
    type: Schema.Types.ObjectId,
    ref: "Project",
    required: true,
  },
  title: String,
  question: {
    type: String,
    required: true,
  },

  url: {
    type: String,
  },
  answer: String,

  tags: [String],
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("QA", qaSchema);
