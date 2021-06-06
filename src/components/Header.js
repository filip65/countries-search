import React from "react";
import "../css/header.css";

import { FaSearch } from "react-icons/fa";

function Header({ country, setCountry, setRegion }) {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const inputTyping = (e) => {
    setCountry(e.target.value);
  };

  const regionSelect = (e) => {
    setRegion(e.target.value);
  };

  return (
    <div className="header">
      <form id="form" onSubmit={handleSubmit}>
        <div className="input-container">
          <input
            type="text"
            name="country"
            placeholder="Search for country..."
            value={country}
            onChange={inputTyping}
          />
          <FaSearch className="input-icon" />
        </div>
        <select
          name="region"
          id="region"
          form="form"
          defaultValue=""
          onChange={regionSelect}
        >
          <option disabled hidden value="default">
            Filter by region
          </option>
          <option value="">All</option>
          <option value="africa">Africa</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
        </select>
      </form>
    </div>
  );
}

export default Header;
