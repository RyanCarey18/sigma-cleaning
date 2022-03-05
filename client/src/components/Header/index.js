import React from "react";
import { Link } from "react-router-dom";

import Auth from "../../utils/auth";

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header className="bg-clean-blue text-yellow mb-4 py-3 display-flex align-center">
      <div className="container flex-column justify-space-between-lg justify-center align-start text-center">
        <Link className="text-white h1:hover" to="/">
          <h1 className="m-2" style={{ fontSize: "3rem" }}>
            Sigma Cleaning
          </h1>
        </Link>
        <div>
          {Auth.loggedIn() ? (
            <>
              <Link className="btn btn-lg btn-light m-2" to="/me">
                View Bookings
              </Link>
              <button className="btn btn-lg btn-light m-2" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link className="btn btn-lg btn-light m-2" to="/login">
                Login
              </Link>
            </>
          )}
        </div>
      </div>
      <div className="container flex-row justify-space-around align-end text-center">
        <p className="m-0" style={{ fontSize: "1.75rem", fontWeight: "700" }}>
          <a href="tel:603-313-0370">Call us at: (555)-555-5555</a>
        </p>
        <p className="m-0" style={{ fontSize: "1.75rem", fontWeight: "700" }}>
          <a href="mailto:SigmaClean@gmail.com">
            Email us at: SigmaClean@gmail.com
          </a>
        </p>
      </div>
    </header>
  );
};

export default Header;
