import React from "react";
import { useState } from "react";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import Words from "./components/Words/Words";
import "./App.css";

const quantity_amount = {
  time: ["15", "30", "60"],
  words: ["10", "25", "50"],
  quote: ["all", "short", "medium", "long"],
};

function App() {
  const [activeQType, changeactiveType] = useState("time");
  const [activeQamount, changeactiveAmount] = useState("15");

  const handleQType = (newType) => {
    changeactiveType(newType);
    changeactiveAmount(quantity_amount[newType][0]);
  };

  const handleQAmount = (newAmount) => {
    changeactiveAmount(newAmount);
  };

  return (
    <>
      <div className="Main-container">
        <Header />
        <Menu
          activeQType={activeQType}
          activeQamount={activeQamount}
          onTypeClick={handleQType}
          onAmountClick={handleQAmount}
        />
        <Words activeQType={activeQType} 
        activeQamount={activeQamount}
        />
      </div>
    </>
  );
}

export default App;
