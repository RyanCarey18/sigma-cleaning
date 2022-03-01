const { Schema, model } = require("mongoose");
const profileSchema = require("./User");
const Service = require("./Service");

const BookingSchema = new Schema({
  profile: [profileSchema],
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
