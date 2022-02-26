const db = require("../config/connection");
const { User } = require("../models");
const profileSeeds = require("./profileSeeds.json");
const { Service } = require("../models");
const serviceSeeds = require("./serviceSeeds.json");


db.once("open", async () => {
  try {
    await User.deleteMany({});
    await User.create(profileSeeds);
    await Service.deleteMany({});
    await Service.create(serviceSeeds);

    console.log("all done!");
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
