import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

import { useMutation } from "@apollo/client";
import { ADD_BOOKING } from "../utils/mutations";

const Book = () => {
  const { serviceId } = useParams();

  const [formState, setFormState] = useState({
    client: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    service: serviceId,
  });
  const [addBooking, { error, data }] = useMutation(ADD_BOOKING);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addBooking({
        variables: { ...formState },
      });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <main className="flex-row justify-center mb-4">
      <div className="col-12 col-lg-10">
        <div className="card">
          <h4 className="card-header text-light p-2">
            Sign Up for a Cleaning
          </h4>
          <div className="card-body">
            {data ? (
              <p>
                Success! You may now head{" "}
                <Link to="/">back to the homepage.</Link>
              </p>
            ) : (
              <form onSubmit={handleFormSubmit}>
                <input
                  className="form-input"
                  placeholder="Your name"
                  name="client"
                  type="text"
                  value={formState.client}
                  onChange={handleChange}
                />
                <input
                  className="form-input"
                  placeholder="Your email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                />
                <input
                  className="form-input"
                  placeholder="123-456-7890"
                  name="phone"
                  type="tel"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  value={formState.phone}
                  onChange={handleChange}
                />
                <input
                  className="form-input"
                  label="Date:"
                  name="date"
                  type="date"
                  value={formState.date}
                  onChange={handleChange}
                />
                <label htmlFor="time">Choose a time:</label>
                <select
                  name="time"
                  onChange={handleChange}
                  value={formState.time}
                  className="form-input"
                >
                  <option value="8">8 AM</option>
                  <option value="9">9 AM</option>
                  <option value="10">10 AM</option>
                  <option value="11">11 AM</option>
                  <option value="12">12 PM</option>
                  <option value="1">1PM</option>
                  <option value="2">2PM</option>
                  <option value="3">3PM</option>
                  <option value="4">4PM</option>
                </select>
                <button
                  className="btn btn-block btn-light text-dark"
                  style={{ cursor: "pointer" }}
                  type="submit"
                >
                  Submit
                </button>
              </form>
            )}

            {error && (
              <div className="my-3 p-3 bg-danger text-white">
                {error.message}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Book;
