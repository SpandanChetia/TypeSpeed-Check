import React, { useState } from "react";
import "./Words.css";
import PARAGRAPHS from "../../components/dataset";

const Words = ({ activeQType, activeQamount }) => {
  const [currentPara, setCurrentPara] = useState("");

  useEffect(() => {
    const getRandomParagraph = () => {
      const Paragraph_array = PARAGRAPHS[activeQType][activeQamount];
      const randomIndex = Math.floor(Math.random() * Paragraph_array.length);
      return Paragraph_array[randomIndex];
    };

    const randomParagraph = getRandomParagraph();
    setCurrentPara(randomParagraph);
  }, [activeQType, activeQamount]);

  changeCurrentPara(getRandomParagraph());

  return (
    <>
      <div className="words-container">{currentPara}</div>
    </>
  );
};

export default Words;
