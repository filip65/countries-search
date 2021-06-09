import { React, useState } from "react";
import Header from "../components/Header";
import List from "../components/List";

function Home() {
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");

  return (
    <div>
      <Header country={country} setCountry={setCountry} setRegion={setRegion} />
      <List country={country} region={region} />
    </div>
  );
}

export default Home;
