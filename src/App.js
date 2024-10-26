import "./App.css";
import DrugDetails from "./Components/DrugDetails.jsx";
import Home from "./Components/Home.jsx";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import SearchDrugs from "./Components/SearchDrugs.jsx";
import { useState } from "react";

function App() {
  const [drug, setDrug] = useState({});
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={<Home drugData={drug} setDrugData={setDrug} />}
        />
        <Route path="/drugDetails" element={<DrugDetails />} />
        <Route path="/searchDrugs" element={<SearchDrugs drug={drug} />} />
      </Routes>
    </div>
  );
}

export default App;
