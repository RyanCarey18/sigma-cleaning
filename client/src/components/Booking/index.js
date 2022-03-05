import React from "react";

import { useQuery } from "@apollo/client";
import { QUERY_BOOKINGS } from "../../utils/queries";

const BookingList = () => {
  const { loading, data } = useQuery(QUERY_BOOKINGS);
  //   const bookings = data?.bookings;
  //   if (!bookings) {
  //     return <h3> No Bookings Yet</h3>;
  //   }

  return (
    <div>
      <h3> Your Bookings</h3>
      {loading ? (
        <div> Loading Bookings</div>
      ) : (
        data.bookings &&
        data.bookings.map((bookings) => (
          <div>
            <h4 className="card-header bg-primary text-light p-2 m-0">
              {bookings.client} <br />
              <span style={{ fontSize: "1rem" }}>
                has an appointment on {bookings.date} at {bookings.time}
              </span>
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
