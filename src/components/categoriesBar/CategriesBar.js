import React, { useState } from "react";
import "./_categoriesBar.scss";

const keywords = [
  "All",
  "React.js",
  "Angular.js",
  "React Native",
  "use of API",
  "Redux",
  "Music",
  "Algorithm Art",
  "Guitar",
  "Bangali Songs",
  "Coding",
  "Cricket",
  "Football",
  "Real Madrid",
  "Gatsby",
  "Poor Coder",
  "Shwetabh",
];

const CategriesBar = () => {
  const [activeElement, setActiveElement] = useState("All");

  const handleClick = (val) => {
    setActiveElement(val);
  };

  return (
    <div className="categoriesBar">
      {keywords.map((val, i) => (
        <span
          key={i}
          onClick={() => handleClick(val)}
          className={activeElement === val ? "active" : ""}
        >
          {val}
        </span>
      ))}
    </div>
  );
};

export default CategriesBar;
