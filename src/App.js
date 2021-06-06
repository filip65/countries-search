import "./App.css";
import { useState } from "react";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import List from "./components/List";

function App() {
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");

  return (
    <div className="App">
      <Navbar />
      <Header country={country} setCountry={setCountry} setRegion={setRegion} />
      <List country={country} region={region} />
    </div>
  );
}

export default App;
