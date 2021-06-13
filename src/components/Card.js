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
          <span>Population</span>:{" "}
          {`${population ? population.toLocaleString("en-US") : "not found"}`}
        </p>
        <p>
          <span>Region</span>: {`${region ? region : "not found"}`}
        </p>
        <p>
          <span>Capital</span>: {`${capital ? capital : "not found"}`}
        </p>
      </div>
    </div>
  );
}

export default Card;
