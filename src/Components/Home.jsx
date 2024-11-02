import React, { useState } from "react";
import Header from "./Header";
import SearchBox from "./SearchBox";
import SearchDrugs from "./SearchDrugs";
import axios from "axios";
import "./Home.css";

const Home = ({ drugData, setDrugData }) => {
  const [error, setError] = useState("");

  const onSearch = async (drug) => {
    try {
      const response = await axios.get(
        `https://rxnav.nlm.nih.gov/REST/drugs.json?name=${drug}`
      );
      console.log(response);

      if (response.status === 200) {
        if (!response.data.drugGroup.hasOwnProperty("conceptGroup")) {
          setError("Nothing could be found for that term.");
          setDrugData("");
        } else {
          setDrugData(response.data);
          setError(""); // Clear error if data is successfully found
        }
      }
    } catch (error) {
      setError("An error occurred while fetching data.");
    }
  };

  return (
    <>
      <Header />
      <SearchBox onSearch={onSearch} setError={setError} />
      {error && <p>{error}</p>}
      <div className="search-drugs">
        <SearchDrugs drugs={drugData} />
      </div>
    </>
  );
};

export default Home;
