const { Schema, model } = require("mongoose");

const bookingSchema = new Schema({
  client: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  unix: {
    type: Number,
    required: true,
  },
  service: {
    type: Schema.Types.ObjectId,
    ref: "Service",
  },
});

const Booking = model("Booking", bookingSchema);

module.exports = Booking;
