const { AuthenticationError } = require("apollo-server-express");
const { User, Booking, Service } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    //query to find and return all services to the front end
    services: async () => {
      return Service.find();
    },

    // By adding context to our query, we can retrieve the logged in user without specifically searching for them
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError("You need to be logged in!");
    },

    //searching for user with the argument
    user: async (parent, { userId }) => {
      return User.findOne({ _id: userId });
    },

    bookings: async () => {
      return await Booking.find().populate("service").sort({ unix: 1 });
    },
  },

  Mutation: {
    //Add a new user with name email and password
    addUser: async (parent, { name, email, password }) => {
      const user = await User.create({ name, email, password });
      const token = signToken(user);

      return { token, user };
    },
    //sends in the email and password to login with
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect Email or Password.");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect Email or Password.");
      }

      const token = signToken(user);
      return { token, user };
    },

    // Adds a new booking to the database
    addBooking: async (
      parent,
      { client, email, phone, date, time, service, unix, address }
    ) => {
      const booking = await Booking.create({
        client,
        email,
        phone,
        date,
        time,
        service,
        unix,
        address,
      });
      return booking._id;
    },

    removeBooking: async (parent, { bookingId }, context) => {
      // if (context.user) {
      const booking = await Booking.findOneAndDelete({ _id: bookingId });

      return booking;
    },
    // throw new AuthenticationError("You need to be logged in!");
    //},
  },
};

module.exports = resolvers;
