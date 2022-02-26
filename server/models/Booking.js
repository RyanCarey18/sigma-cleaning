const { Schema, model } = require("mongoose");
const profileSchema = require("./Profile");
const seriveSchema = require("./Service");

const BookingSchema = new Schema({
  profile: [profileSchema],
  time: {
    type: Date(),
    required: true,
  },
  service: [serviceSchema],
});

module.exports = BookingSchema;
