import React from "react";
import { useQuery } from "@apollo/client";

import ServiceList from "../components/ServiceList";

import { QUERY_SERVICES } from "../utils/queries";

const Home = () => {
  const { loading, data } = useQuery(QUERY_SERVICES);
  const services = data?.services || [];

  return (
    <main>
      <div className="flex-row justify-center">
        <div className="col-12 col-md-10 my-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <ServiceList
              services={services}
              title="Here's the current roster of friends..."
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
