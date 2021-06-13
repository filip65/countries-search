import React from "react";
import Card from "../components/Card";
import useFetchCountries from "../useFetchCountries.js";
import { Link } from "react-router-dom";
import { WaveLoading } from "react-loadingg";

import "../css/list.css";

function List({ country, region }) {
  const { countries, isLoading, isError } = useFetchCountries(country, region);

  if (isLoading) {
    return <WaveLoading />;
  }

  if (isError) {
    return <h1 className="error">Nothing found... 😰</h1>;
  }

  return (
    <div className="list">
      {countries.map((country, index) => {
        return (
          <Link to={`/detail/${country.name}`} key={index}>
            <Card
              name={country.name}
              population={country.population}
              region={country.region}
              capital={country.capital}
              flag={country.flag}
            />
          </Link>
        );
      })}
    </div>
  );
}

export default List;
