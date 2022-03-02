const { Schema, model } = require("mongoose");

const BookingSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User"
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

module.exports = BookingSchema;
