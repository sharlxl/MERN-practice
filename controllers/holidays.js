const express = require("express");
const router = express.Router();
const Holiday = require("../models/Holidays");
const { StatusCodes } = require("http-status-codes");

router.get("/", (req, res) => {
  res.send("HELLO holidayss");
});

router.get("/all", async (req, res) => {
  if (!req.session.user) {
    res
      .status(StatusCodes.UNAUTHORIZED)
      .json({ status: "fail", data: "No Access" });
  } else {
    const HolidaysList = await Holiday.find({});
    res.status(StatusCodes.OK).json(HolidaysList);
  }
});

router.get("/:id", async (req, res) => {
  console.log("sessions", req.session.user);
  if (!req.session.user) {
    res
      .status(StatusCodes.UNAUTHORIZED)
      .json({ status: "fail", data: "No Access" });
  } else {
    const id = req.params.id;
    try {
      const holiday = await Holiday.findById(id);
      if (holiday === null) {
        res
          .status(StatusCodes.NOT_FOUND)
          .json({ status: "fail", data: "Holiday Not Found" });
      } else {
        res.status(StatusCodes.OK).json(holiday);
      }
    } catch (error) {
      res.send(error);
    }
  }
});

router.post("/new", async (req, res) => {
  // if (req.body.likes < 0) {
  //     res.status(400).send("Likes can't be negative");
  //   }
  try {
    // const { name } = req.body;
    const newHoliday = await Holiday.create(req.body);
    res.status(StatusCodes.CREATED).json(newHoliday);
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
