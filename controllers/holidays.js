const express = require("express");
const router = express.Router();
const Holiday = require("../models/Holidays");
const { StatusCodes } = require("http-status-codes");

router.get("/", (req, res) => {
  res.send("HELLO holidayss");
});

//all holidays
router.get("/all", async (req, res) => {
  if (!req.session.user) {
    res
      .status(StatusCodes.UNAUTHORIZED)
      .json({ status: "fail", data: "No Access" });
  } else {
    const HolidaysList = await Holiday.find({});
    res
      .status(StatusCodes.OK)
      .json({ status: "sucessful", data: HolidaysList });
  }
});

//one holiday
router.get("/:id", async (req, res) => {
  console.log("sessions", req.session.user);
  //? Request + Cookie -> Session -> req.session
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
        res.status(StatusCodes.OK).json({ status: "sucessful", data: holiday });
      }
    } catch (error) {
      res.send(error);
    }
  }
});

//new holiday
router.post("/new", async (req, res) => {
  // if (req.body.likes < 0) {
  //     res.status(400).send("Likes can't be negative");
  //   }
  try {
    // const { name } = req.body;
    const newHoliday = await Holiday.create(req.body);
    res
      .status(StatusCodes.CREATED)
      .json({ status: "sucessful", data: newHoliday });
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: error.message });
  }
});

//delete
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deleteHoliday = await Holiday.findByIdAndRemove(id);
    res
      .status(StatusCodes.OK)
      .json({ status: "sucessful", data: deleteHoliday });
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: error.message });
  }
});

//edit
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const editHoliday = await Holiday.findByIdAndUpdate(
      id,
      {
        $inc: { likes: 1 },
      },
      { new: true }
    );
    res.status(StatusCodes.OK).json({ status: "sucessful", data: editHoliday });
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: error.message });
  }
});

module.exports = router;
