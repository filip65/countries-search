import React from "react";
import { useParams } from "react-router";
import useFetchCountries from "../useFetchCountries";
import "../css/detail.css";
import { Link } from "react-router-dom";
import { MdKeyboardBackspace } from "react-icons/md";
import lookup from "country-code-lookup";
import { WaveLoading } from "react-loadingg";

const Detail = () => {
  const { countryName } = useParams();
  const { countries, isLoading, isError } = useFetchCountries(countryName);

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

  if (isLoading) {
    return <WaveLoading />;
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

      <div className="wrapper">
        <div
          className="image"
          style={{
            backgroundImage: `url(${countries[0].flag})`,
          }}
        ></div>

        <div className="text-section-container">
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
              {countries[0].currencies.map((currency) => {
                return (
                  <span className="currency" key={currency.code}>
                    {currency.name}
                  </span>
                );
              })}
            </p>
            <p>
              <span>Languages:</span>
              {countries[0].languages.map((language, index) => {
                return (
                  <span key={index} className="language">
                    {countries[0].languages.length - 1 === index
                      ? language.name
                      : `${language.name},`}
                  </span>
                );
              })}
            </p>
          </div>
        </div>
      </div>

      {countries[0].borders.length !== 0 && <h2>Border Countries:</h2>}
      <div className="borders-container">
        {countries[0].borders.map((border, index) => {
          return (
            <Link
              to={`/detail/${lookup.byIso(border).country}`}
              className="border"
              key={index}
            >
              {lookup.byIso(border).country}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Detail;
