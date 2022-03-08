import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

import { useMutation } from "@apollo/client";
import { ADD_BOOKING } from "../utils/mutations";
import { QUERY_BOOKINGS } from "../utils/queries";

//Renders the page that has the form for creating a service
const Book = () => {
  const { serviceId } = useParams();

  //sets the formstate empty
  const [formState, setFormState] = useState({
    client: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    unix: "",
    service: serviceId,
  });

  //When the addBooking function is called it writes that to the cache of bookings
  const [addBooking, { error, data }] = useMutation(ADD_BOOKING, {
    update(cache, { data: { addBooking } }) {
      try {
        const { bookings } = cache.readQuery({ query: QUERY_BOOKINGS });
        cache.writeQuery({
          query: QUERY_BOOKINGS,
          data: { bookings: [...bookings, addBooking] },
        });
      } catch (e) {
        console.error(e);
      }
    },
  });

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  //Update state based on form input
  const handleDateChange = (event) => {
    const { name, value } = event.target;
    const unixValue = new Date(value).getTime() / 1000;
    setFormState({
      ...formState,
      ["unix"]: unixValue,
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

      setFormState("");
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <main className="flex-row justify-center mb-4">
      <div className="col-12 col-lg-10">
        <div className="card">
          <h4 className="card-header text-light p-2">Sign Up for a Cleaning</h4>
          <div className="card-body">
            {data ? (
              <p>
                Your cleaning is booked! Click here to go{" "}
                <Link to="/" className="link">
                  back to the homepage.
                </Link>
              </p>
            ) : (
              <form onSubmit={handleFormSubmit}>
                <label htmlFor="address">Name:</label>
                <input
                  className="form-input"
                  placeholder="Your name"
                  name="client"
                  type="text"
                  value={formState.client}
                  onChange={handleChange}
                />
                <label htmlFor="address">Email:</label>
                <input
                  className="form-input"
                  placeholder="Your email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                />
                <label htmlFor="address">
                  Address format: Street, City, State
                </label>
                <input
                  className="form-input"
                  placeholder="Address to be cleaned"
                  name="address"
                  type="address"
                  pattern=".+,.+,.+"
                  value={formState.address}
                  onChange={handleChange}
                />
                <label htmlFor="phone">Phone # format: 123-456-7890</label>
                <input
                  className="form-input"
                  placeholder="123-456-7890"
                  name="phone"
                  type="tel"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  value={formState.phone}
                  onChange={handleChange}
                />
                <label htmlFor="date">Choose a date:</label>
                <input
                  className="form-input"
                  label="Date:"
                  name="date"
                  type="date"
                  min={new Date(new Date().getTime() + 24 * 60 * 60 * 1000)
                    .toISOString()
                    .slice(0, 10)}
                  value={formState.date}
                  onChange={handleDateChange}
                />
                <label htmlFor="time">Choose a time:</label>
                <select
                  name="time"
                  onChange={handleChange}
                  value={formState.time}
                  className="form-input"
                >
                  <option value="8:00 AM">8 AM</option>
                  <option value="9:00 AM">9 AM</option>
                  <option value="10:00 AM">10 AM</option>
                  <option value="11:00 AM">11 AM</option>
                  <option value="12:00 PM">12 PM</option>
                  <option value="1:00 PM">1PM</option>
                  <option value="2:00 PM">2PM</option>
                  <option value="3:00 PM">3PM</option>
                  <option value="4:00 PM">4PM</option>
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
