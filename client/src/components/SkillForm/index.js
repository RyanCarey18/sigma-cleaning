import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";

import { ADD_BOOKING } from "../../utils/mutations";

import Auth from "../../utils/auth";

const BookingForm = ({ profileId }) => {
  const [booking, setBooking] = useState({});

  const [addBooking, { error }] = useMutation(ADD_BOOKING);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const data = await addBooking({
        variables: { profileId, booking },
      });
      setBooking("");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h4>Your past Appointments.</h4>

      {Auth.loggedIn() ? (
        <form
          className="flex-row justify-center justify-space-between-md align-center"
          onSubmit={handleFormSubmit}
        >
          <div className="col-12 col-lg-9">
            <input
              placeholder="Endorse some skills..."
              value={booking}
              className="form-input w-100"
              onChange={(event) => setBooking(event.target.value)}
            />
          </div>

          <div className="col-12 col-lg-3">
            <button className="btn btn-info btn-block py-3" type="submit">
              Endorse Skill
            </button>
          </div>
          {error && (
            <div className="col-12 my-3 bg-danger text-white p-3">
              {error.message}
            </div>
          )}
        </form>
      ) : (
        <p>
          You need to be logged in to shedule an appointment. Please{" "}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
    </div>
  );
};

export default BookingForm;
