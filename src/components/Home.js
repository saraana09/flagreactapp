import React, { useState } from "react";
import axios from "axios";
import "./home.css";

const Home = () => {
  const [flag, setFlag] = useState("https://countryflagsapi.com/png/mongolia");
  const [name, setName] = useState("");

  const handleButton = () => {
    const url = "https://countryflagsapi.com/png/";
    setFlag(url + name);
  };

  return (
    <div className="home">
      <h1>Country Flag</h1>
      <br />
      <img
        className="App-logo "
        src="https://www.globe.gov/o/gov.globe.home.explorelearnearth.web/images/learn-earth-system-clean.png"
      />
      <div className="search">
        <input
          name="country"
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
          placeholder="Enter a country name"
        />
        <button onClick={handleButton}>Get Flag</button>
      </div>
      <img className="image " src={flag} alt="flag" />
    </div>
  );
};

export default Home;
