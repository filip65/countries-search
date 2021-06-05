import React from "react";
import "../css/navbar.css";

import { useState, useEffect } from "react";

import { BsMoon } from "react-icons/bs";
import { BiMoon } from "react-icons/bi";

function Navbar() {
  const [theme, setTheme] = useState(document.body.getAttribute("theme"));

  const changeTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  useEffect(() => {
    document.body.setAttribute("theme", theme);
  }, [theme]);

  return (
    <div className="navbar">
      <h2>Where in the world?</h2>
      {theme === "dark" ? (
        <div className="theme-toggle" onClick={changeTheme}>
          <BsMoon className="moon-icon" /> <p>Dark mode</p>
        </div>
      ) : (
        <div className="theme-toggle" onClick={changeTheme}>
          <BiMoon className="moon-icon" /> <p>Light mode</p>
        </div>
      )}
      {/* {theme === "light" ? <h2>ahoj</h2> : <h2>cau</h2>} */}
    </div>
  );
}

export default Navbar;
