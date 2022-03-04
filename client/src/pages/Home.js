import React from "react";
import { useQuery } from "@apollo/client";

import ServiceList from "../components/ServiceList";

import { QUERY_SERVICES } from "../utils/queries";

import logo from "../assets/clean.png";

const Home = () => {
  const { loading, data } = useQuery(QUERY_SERVICES);

  return (
    <main>
      <div className="flex-row justify-center">
        <div className="col-12 col-md-10 my-3 text-center">
          <h3>
            Business Cleaning® has been providing the world with cleaning
            services since 2022. We offer groundbreaking methods in the world of
            cleaning with trained personnel that give our customers peace of
            mind.
          </h3>
        </div>

        <img src={logo} alt="clean" />

        <div className="col-12 col-md-10 my-3 text-center">
          <h3>When you trust Business Cleaning®, you can count on:</h3>
          <ul>
            <li>0 Years of Experience</li>
            <li>Guaranteed Satisfaction</li>
            <li>Time-tested Advanced Techniques</li>
            <li>Specialized Cleaning Products</li>
          </ul>
        </div>

        <div className="btn-group col-12 col-md-10 my-3 card text-center display-block">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <ServiceList
              services={data?.services || []}
              title="Here is our Selection of Great Services"
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
