import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Menu.css';

const items = [
  { type: 'time', label: 'Time' },
  { type: 'words', label: 'Words' },
  { type: 'quote', label: 'Quotes' }
];

const iconMap = {
  time: 'fa-clock',
  words: 'a',
  quote: 'fa-quote-left'
};

export default function Menu() {
  return (
    <div className="menu">
      <ol className="quantity-type">
        {items.map((item) => (
          <li key={item.type} className="quantity-type-options">
            {item.type==='words' ? 
            (<span className="letter-icon">{iconMap[item.type]}</span>) :
            (<i className={`fas ${iconMap[item.type]}`} />)}
            {item.label}
          </li>
        ))}
      </ol>
    </div>
  );
}
