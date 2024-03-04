"use client";
import BrCard from "./BrCard";
import { useState } from "react";

const Carousel = ({ cards }) => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const goToNextCard = () => {
    setCurrentCardIndex((prevIndex) =>
      prevIndex === cards.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevCard = () => {
    setCurrentCardIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="flex justify-between items-center">
      <button onClick={goToPrevCard}>Previous</button>
      <BrCard year={cards[currentCardIndex]} />
      <button onClick={goToNextCard}>Next</button>
    </div>
  );
};

export default Carousel;
