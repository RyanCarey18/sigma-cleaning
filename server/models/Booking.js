const { Schema, model } = require("mongoose");
const profileSchema = require("./User");
const serviceSchema = require("./Service");

const BookingSchema = new Schema({
  profile: [profileSchema],
  time: {
    type: String,
    required: true,
  },
  service: [serviceSchema],
});

module.exports = BookingSchema;
