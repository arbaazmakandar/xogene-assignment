import React, { useState } from "react";

const SearchBox = ({ onSearch, setError }) => {
  const [drug, setDrug] = useState("");

  const handleChange = (event) => {
    setDrug(event.target.value);
    setError("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(drug);
    setDrug("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter Drug Name"
        value={drug}
        onChange={handleChange}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBox;
