import React from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import "./DrugDetails.css";

const DrugDetails = () => {
  const location = useLocation();

  const drug = location?.state?.drug;
  return (
    <>
      <Header />
      <div className="container">
        <div className="row header">
          <div className="cell">Index</div>
          <div className="cell">Name</div>
          <div className="cell">Synonym</div>
        </div>

        {drug?.conceptProperties?.map((element, index) => (
          <div className="row" key={index}>
            <div className="cell centered">{index + 1}</div>
            <div className="cell">{element.name}</div>
            <div className="cell">{element.synonym}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default DrugDetails;
