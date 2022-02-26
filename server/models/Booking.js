const { Schema, model } = require("mongoose");
const userSchema = require("./User");
const serviceSchema = require("./Service");

const BookingSchema = new Schema({
  user: userSchema,
  time: {
    type: String,
    required: true,
  },
  service: [serviceSchema],
});

module.exports = BookingSchema;
