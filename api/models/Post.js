const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
  post: {
    type: String,
    required: true,
    minlength: 10,
  },
  counter: {
    type: Number,
    default: 0,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Posts", PostSchema);
