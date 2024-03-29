import express from "express";
import {
  all_booking_get,
  cancel_booking,
  current_booking_get,
  open_parking_barrier,
  parking_spaces_near_get,
  reserve_parking_space,
} from "../controllers/parkingSpacesController.js";

import isAuth from "../middleware/auth.js";

const router = express.Router();

//get the nearest parking spaces
router.get("/getNearParkingSpaces", isAuth, parking_spaces_near_get);
//http://localhost:3000/getNearParkingSpaces?longitude=31.80602&latitude=30.080012

//req to open barrier of a specific parking space
router.post("/openBarrier", isAuth, open_parking_barrier);

//reserve a parking space
router.post("/reserveParkingSpace", isAuth, reserve_parking_space);

//cancel booking
router.post("/cancelBooking", isAuth, cancel_booking);

//get current booking
router.get("/getCurrentBooking", isAuth, current_booking_get);

//get all bookings
router.get("/allBooking", isAuth, all_booking_get);

// app.get("/test", async (req, res) => {});

export default router;
