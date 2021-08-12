const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const postsRoute = require("./routes/post");
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(console.log("Connected to MongoDb"))
  .catch((err) => console.log(err));

// app.use("/", (req, res) => {
//   console.log("hey this is main url");
// });

app.use("/posts", postsRoute);

app.get("/", (req, res) => {
  res.send("Home");
});

app.listen(5000);
