const { Schema, model } = require("mongoose");
const userSchema = require("./User");
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
