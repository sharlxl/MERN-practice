require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const session = require("express-session");
const app = express();
const usersController = require("./controllers/users");
const fruitsController = require("./controllers/fruits");

const PORT = process.env.PORT || 3000;

const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017";
mongoose.connect(MONGO_URI);
mongoose.connection.once("open", () => {
  console.log("connected to mongo");
});

app.use(express.static("./frontend/dist"));
// ==Express Sessions== //
app.set("trust proxy", 1); // trust first proxy
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    // cookie: { secure: true },
  })
);
// ==Express Sessions== //

app.use(express.urlencoded({ extended: false }));
app.use("/users", usersController);
app.use("/fruits", fruitsController);

app.get("/", (req, res) => {
  console.log("Oh hey! I got a request. Let me respond with something");
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log("I am listening for requests!!!");
});
