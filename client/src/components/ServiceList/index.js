import React from "react";
import { Link } from "react-router-dom";

const ServiceList = ({ services, title }) => {
  if (!services.length) {
    return <h3>No Services Yet</h3>;
  }

  return (
    <div>
      <h3 className="text-primary">{title}</h3>
      <div className="flex-row justify-space-between my-4">
        {services &&
          services.map((service) => (
            <div key={service._id} className="col-12 col-xl-6">
              <div className="card mb-3">
                <h4 className="card-header text-light p-2 m-0">
                  {service.name} <br />
                </h4>

                <Link
                  className="btn btn-block btn-squared btn-light text-dark"
                  to={`/services/${service._id}`}
                >
                  Select this service.
                </Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ServiceList;
