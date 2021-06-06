import React from "react";
import "../css/card.css";

function Card({ name, population, region, capital, flag }) {
  return (
    <div className="card">
      <div
        className="img"
        style={{
          backgroundImage: `url(${flag})`,
        }}
      ></div>
      <div className="card-content">
        <h2>{name}</h2>
        <p>
          <span>Population</span>: {population}
        </p>
        <p>
          <span>Region</span>: {region}
        </p>
        <p>
          <span>Capital</span>: {capital}
        </p>
      </div>
    </div>
  );
}

export default Card;
