import React from "react";

import { useQuery, useMutation } from "@apollo/client";
import { QUERY_BOOKINGS } from "../../utils/queries";
import { REMOVE_BOOKING } from "../../utils/mutations";

const buttonStyle = {
  float: "right",
};
const BookingList = () => {
  const { loading, data } = useQuery(QUERY_BOOKINGS);
  const bookings = data?.bookings;
  const [removeBooking, { error }] = useMutation(REMOVE_BOOKING);

  const handleRemoveBooking = async (bookingId) => {
    try {
      const { data } = await removeBooking({
        variables: { bookingId },
      });
    } catch (err) {
      console.error(err);
    }
  };

  if (!bookings?.length) {
    return <h3> No Bookings Yet</h3>;
  }

  return (
    <div>
      <h3> Your Bookings</h3>
      {loading ? (
        <div> Loading Bookings</div>
      ) : (
        data.bookings &&
        data.bookings.map((booking) => (
          <div className="my-2" key={booking._id}>
            <h4 className="card-header bg-primary text-light p-2 m-0">
              {booking.client} <br />
              <span className="mr-5" style={{ fontSize: "1rem" }}>
                has an appointment for a {booking.service.name} on{" "}
                {booking.date} at {booking.time}. Their address is{" "}
                {booking.address}.
              </span>
              <button
                style={buttonStyle}
                className="btn btn-sm btn-danger ml-auto"
                onClick={() => handleRemoveBooking(booking._id)}
              >
                X
              </button>
            </h4>
          </div>
        ))
      )}
    </div>
  );
};

export default BookingList;

// const Booking = () => {
//   const { data } = useQuery(QUERY_BOOKINGS);
//   const bookings = data?.bookings || [];

//   return (bookings = { bookings });
// };

// export default Booking;
