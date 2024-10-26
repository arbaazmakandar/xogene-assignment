import React from "react";
import { useNavigate } from "react-router-dom";

const SearchDrugs = ({ drugs }) => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Search For Drugs</h1>
      <h2>TTY</h2>
      <div></div>
      {drugs?.drugGroup?.conceptGroup?.map((drug, index) => {
        return (
          <div key={index} style={{ margin: "20px" }}>
            {index + 1} . {drug.tty}
            <button
              style={{ border: "0px" }}
              onClick={() =>
                navigate("/drugDetails", { state: { drug: drug } })
              }
            >
              Open Drug
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default SearchDrugs;
