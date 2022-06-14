require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const session = require("express-session");
const app = express();
const usersController = require("./controllers/users");
const fruitsController = require("./controllers/fruits");
const path = require("path");

const PORT = process.env.PORT || 5001;

const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017";
mongoose.connect(MONGO_URI);
mongoose.connection.once("open", () => {
  console.log("connected to mongo");
});

// ==static to react app==//
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

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use("/fruits", fruitsController);

app.get("/api", (req, res) => {
  console.log("Oh hey! I got a request. Let me respond with something");
  res.send("Hello World!");
});

app.use("/api/users", usersController);

// ==route for heroku to route the reactrouter back to react app== //
app.get("/*", (req, res) => {
  // res.sendFile(path.join(__dirname, "./frontend/dist/index.html"));
  res.sendFile(path.join(__dirname, "./frontend/dist", "index.html"));
  //__dirname tell you the current file it funning in
  //path.join allows you to join the files names
});

app.listen(PORT, () => {
  console.log("I am listening for requests!!!");
});
