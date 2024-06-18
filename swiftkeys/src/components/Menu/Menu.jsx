import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Menu.css";

const items = [
  { type: "time", label: "time" },
  { type: "words", label: "words" },
  { type: "quote", label: "quotes" },
];

const iconMap = {
  time: "fa-clock",
  words: "S",
  quote: "fa-quote-left",
};

const quantity_amount = {
  time: ["15", "30", "60"],
  words: ["10", "25", "50"],
  quote: ["all", "short", "medium", "long"],
};

export default function Menu() {
  const [activeQuantity, changeQuantity] = useState("time");

  const quantity_amount_items = quantity_amount[activeQuantity];
  const handle_quantitytype = (newtype) => {
    changeQuantity(newtype);
  };
  return (
    <div className="menu">
      <ol className="quantity-type">
        {items.map((item) => (
          <li
            key={item.type}
            className="quantity-type-options"
            onClick={() => {
              handle_quantitytype(item.type);
            }}
          >
            {item.type === "words" ? (
              <span className="letter-icon">{iconMap[item.type]}</span>
            ) : (
              <i className={`fas ${iconMap[item.type]}`} />
            )}
            {item.label}
          </li>
        ))}
      </ol>
      <ol className="quantity-amount">
        {quantity_amount_items.map((amount, index) => (
          <li key={index} className="amount-value">
            {amount}
          </li>
        ))}
      </ol>
    </div>
  );
}
