import React from "react";
import Header from "./Header";
import SearchBox from "./SearchBox";
import SearchDrugs from "./SearchDrugs";
import { useSnackbar } from "notistack";
import { useState } from "react";
import axios from "axios";

const Home = ({ drugData, setDrugData }) => {
  const { enqueueSnackbar } = useSnackbar();
  const [error, setError] = useState("");

  const onSearch = async (drug) => {
    try {
      const response = await axios.get(
        `https://rxnav.nlm.nih.gov/REST/drugs.json?name=${drug}`
      );
      console.log(response.data);
      if (response.status === 200) {
        setDrugData(response.data);
      }

      if (response.data.drugGroup.name === null) {
        setError(`Nothing could be found for that term.`);
      }
    } catch (error) {
      if (error.response.drugGroup.name === null) {
        enqueueSnackbar(`Nothing could be found for that term.`, {
          variant: "error",
        });
      }
    }
  };
  return (
    <div>
      <Header />
      &nbsp;&nbsp;
      <SearchBox onSearch={onSearch} setError={setError} />
      &nbsp;&nbsp;
      {error === "" ? <p>{error}</p> : <p></p>}
      <div
        style={{ display: "flex", justifyContent: "center", height: "35rem" }}
      >
        <SearchDrugs drugs={drugData} />
      </div>
    </div>
  );
};
export default Home;
