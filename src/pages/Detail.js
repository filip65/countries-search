import React from "react";
import { useParams } from "react-router";
import useFetchCountries from "../useFetchCountries";
import "../css/detail.css";
import { Link } from "react-router-dom";
import { MdKeyboardBackspace } from "react-icons/md";

const Detail = () => {
  const { country } = useParams();
  const { countries, isLoading, isError } = useFetchCountries(country);

  //   const {
  //     name,
  //     nativeName,
  //     population,
  //     region,
  //     subregion,
  //     capital,
  //     topLevelDomain,
  //     currencies,
  //     languages,
  //     borders,
  //   } = countries[0];
  //chcel som takto ale neviem preco to takto neislo :(

  //   console.log(countries[0]);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>Error</h2>;
  }

  return (
    <div className="detail">
      <Link to="/">
        <button className="back-btn">
          <MdKeyboardBackspace className="back-icon" />
          Back
        </button>
      </Link>

      <div
        className="image"
        style={{
          backgroundImage: `url(${countries[0].flag})`,
        }}
      ></div>
      <h1>{countries[0].name}</h1>
      <div className="text-section">
        <p>
          <span>Native name:</span>
          {countries[0].nativeName}
        </p>
        <p>
          <span>Population:</span>
          {countries[0].population}
        </p>
        <p>
          <span>Region:</span>
          {countries[0].region}
        </p>
        <p>
          <span>Sub region:</span>
          {countries[0].subregion}
        </p>
        <p>
          <span>Capital:</span>
          {countries[0].capital}
        </p>
      </div>

      <div className="text-section">
        <p>
          <span>Top level domain:</span>
          {countries[0].topLevelDomain}
        </p>
        <p>
          <span>Currencies:</span>
          {/* {countries[0].currencies} */}
        </p>
        <p>
          <span>Languages:</span>
          {countries[0].topLevelDomain}
        </p>
      </div>

      <h2>Border Countries:</h2>
      <div className="border-container">
        {countries[0].borders.map((border, index) => {
          return <p key={index}>{border}</p>;
        })}
      </div>
    </div>
  );
};

export default Detail;
