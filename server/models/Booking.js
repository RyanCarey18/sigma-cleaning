const { Schema, model } = require("mongoose");
const profileSchema = require("./Profile");
const serviceSchema = require("./Service");

const BookingSchema = new Schema({
  profile: [profileSchema],
  time: {
    type: Date(),
    required: true,
  },
  service: [serviceSchema],
});

module.exports = BookingSchema;
