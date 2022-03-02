const { Schema, model } = require("mongoose");

const bookingSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  time: {
    type: String,
    required: true,
  },
  service: [
    {
      type: Schema.Types.ObjectId,
      ref: "Service",
    },
  ],
});

const Booking = model("Booking", bookingSchema);

module.exports = Booking;
