import React, { useState } from "react";
import SearchComponent from "./SearchComponent";
import axios from "axios";

const SearchBox = ({ onSearch, setError }) => {
  const [drug, setDrug] = useState("");
  const [data, setData] = useState("");

  const onChangeHandler = async (drug) => {
    try {
      const response = await axios.get(
        `https://rxnav.nlm.nih.gov/REST/spellingsuggestions.json?name=${drug}`
      );

      if (response.status === 200) {
        setData(response.data);
      }
    } catch (error) {
      setError("An error occurred while fetching data.");
    }
  };
  const handleChange = (event) => {
    setDrug(event.target.value);
    if (drug !== "") onChangeHandler(drug);
    setError("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(drug);
    setDrug("");
    setData("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter Drug Name"
        value={drug}
        onChange={handleChange}
      />
      <SearchComponent data={data} setInputBox={setDrug} />

      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBox;
