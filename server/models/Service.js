const { Schema, model } = require("mongoose");

const serviceSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  length: {
    type: String,
  },
});

const Service = model("Service", serviceSchema);

module.exports = Service;
