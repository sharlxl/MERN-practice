const express = require("express");
const User = require("../models/Users");
const bcrypt = require("bcrypt");

const router = express.Router();
const saltRounds = 10;

router.get("/seedData", async (req, res) => {
  //   async way
  //   bcrypt.hash("123", saltRounds, function (err, hash) {
  //     console.log(hash);
  //   });

  try {
    await User.deleteMany({});
    const newUsers = await User.create([
      {
        name: "shar",
        password: bcrypt.hashSync("123", saltRounds),
      },
    ]);
    res.send(newUsers);
  } catch (error) {
    res.send(error);
  }
});

router.post("/login", async (req, res) => {
  const { name, password } = req.body;
  const user = await User.findOne({ name });
  if (user === null) {
    res.send("Login fail");
  } else {
    if (bcrypt.compareSync(password, user.password)) {
      req.session.user = user;
      // console.log("session", req.session)
      res.send(user);
    } else {
      res.send("Password fail");
    }
  }
});

// ==Express Sessions== //

// ==Auth middleware==//

const isAuthenticated = (req, res, next) => {
  if (req.session.user) {
    return next();
  } else {
    res.send("login fail");
  }
};

// ==Auth middleware== //

router.get("/secret", isAuthenticated, async (req, res) => {
  res.send(req.session.user);
});

module.exports = router;
