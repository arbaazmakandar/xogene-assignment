import React from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";

const DrugDetails = () => {
  const location = useLocation();

  const drug = location?.state?.drug;
  console.log(drug.conceptProperties);
  return (
    <>
      <Header />
      <table>
        <thead>
          <tr>
            <td style={{ display: "inline-block", margin: "20px" }}>Index</td>
            <td style={{ display: "inline-block", margin: "20px" }}>Name</td>
            <td style={{ display: "inline-block", margin: "20px" }}>Synonym</td>
          </tr>
        </thead>
        <tbody>
          {drug?.conceptProperties.map((element, index) => {
            return (
              <tr key={index}>
                <td style={{ display: "inline-block", margin: "20px" }}>
                  {index + 1}
                </td>

                <td style={{ display: "inline-block", margin: "20px" }}>
                  {element.name}
                </td>
                <td style={{ display: "inline-block", margin: "20px" }}>
                  {element.synonym}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default DrugDetails;
