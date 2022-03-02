const { Schema, model } = require("mongoose");

const BookingSchema = new Schema({
<<<<<<< HEAD
  User: {
    type: Schema.Types.ObjectId,
    ref: "User",
=======
  user: {
    type: Schema.Types.ObjectId,
    ref: "User"
>>>>>>> 06c1b7fd8e676eaea9c5ad8dc03ede8261251bb0
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
