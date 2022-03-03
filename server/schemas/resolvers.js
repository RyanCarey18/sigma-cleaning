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
        return Profile.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError("You need to be logged in!");
    },

    //searching for user with the argument
    user: async (parent, { userId }) => {
      return User.findOne({ _id: userId });
    },
  },

  Mutation: {
    addUser: async (parent, { name, email, password }) => {
      const user = await User.create({ name, email, password });
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("No profile with this email found!");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect password!");
      }

      const token = signToken(user);
      return { token, user };
    },

    /////
    //THIS NEEDS CHANGING
    /////
    // Add a third argument to the resolver to access data in our `context`
    addBooking: async (
      parent,
      { client, email, phone, date, time, service }
    ) => {
      const booking = await Booking.create({
        client,
        email,
        phone,
        date,
        time,
        service,
      });
      return booking._id;
    },
    // // Set up mutation so a logged in user can only remove their profile and no one else's

    // //////
    // //THIS NEEDS CHANGING
    // //////
    // // Make it so a logged in user can only remove a skill from their own profile
    // removeBooking: async (parent, { skill }, context) => {
    //   if (context.user) {
    //     return Profile.findOneAndUpdate(
    //       { _id: context.user._id },
    //       { $pull: { skills: skill } },
    //       { new: true }
    //     );
    //   }
    //   throw new AuthenticationError("You need to be logged in!");
    // },

    /////
    //THIS NEEDS CHANGING
    /////
    // Add a third argument to the resolver to access data in our `context`
    // addService: async (parent, { profileId, skill }, context) => {
    //   // If context has a `user` property, that means the user executing this mutation has a valid JWT and is logged in
    //   if (context.user) {
    //     return Profile.findOneAndUpdate(
    //       { _id: profileId },
    //       {
    //         $addToSet: { skills: skill },
    //       },
    //       {
    //         new: true,
    //         runValidators: true,
    //       }
    //     );
    //   }
    //   // If user attempts to execute this mutation and isn't logged in, throw an error
    //   throw new AuthenticationError("You need to be logged in!");
    // },
    // // Set up mutation so a logged in user can only remove their profile and no one else's

    // //////
    // //THIS NEEDS CHANGING
    // //////
    // // Make it so a logged in user can only remove a skill from their own profile
    // removeService: async (parent, { skill }, context) => {
    //   if (context.user) {
    //     return Profile.findOneAndUpdate(
    //       { _id: context.user._id },
    //       { $pull: { skills: skill } },
    //       { new: true }
    //     );
    //   }
    //   throw new AuthenticationError("You need to be logged in!");
    // },
  },
};

module.exports = resolvers;
