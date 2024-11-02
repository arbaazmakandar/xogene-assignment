import React from "react";
import { useNavigate } from "react-router-dom";
import "./SearchDrugs.css";

const SearchDrugs = ({ drugs }) => {
  const navigate = useNavigate();

  return (
    <div className="search-container">
      <h1>Search For Drugs</h1>
      <h2>TTY</h2>
      <div></div>
      {drugs?.drugGroup?.conceptGroup?.map((drug, index) => (
        <div key={index} className="drug-item">
          {index + 1}. {drug.tty}
          <button
            className="open-drug-button"
            onClick={() =>
              navigate("/drugDetails", { state: { drug: drug } })
            }
          >
            Open Drug
          </button>
        </div>
      ))}
    </div>
  );
};

export default SearchDrugs;
