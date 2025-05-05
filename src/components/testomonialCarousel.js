"use client"

import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Image from "next/image";


const Carousel = () => {

  const comments = [
    {
      id: 1,
      name: "Caleb",
      location: "Ogun",
      img: "/assets/man.svg",
    },
    {
      id: 2,
      name: "Sarah",
      location: "Lagos",
      img: "/assets/profiletwo.svg",
    },
    {
      id: 3,
      name: "John",
      location: "Abuja",
      img: "/assets/profileone.svg",
    },
 
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to move to the next card
  const goNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % comments.length);
  };

  // Function to move to the previous card
  const goPrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + comments.length) % comments.length
    );
  };

  // Function to set a specific comment based on dot click
  const goToIndex = (index) => {
    setCurrentIndex(index);
  };

  // Auto-slide functionality (every 5 seconds)
  useEffect(() => {
    const interval = setInterval(goNext, 5000); // Change to 5000ms (5 seconds)
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="w-[100%]">
      {/* Comment Card */}
      <div className="flex items-center gap-4 mt-4">
        <Image
          src={comments[currentIndex].img}
          alt={comments[currentIndex].name}
          width={1000}
          height={1000}
          className="w-10 h-10 md:h-16 md:w-16 lg:h-10 lg:w-10 rounded-full"
        />
        <div>
          <h4 className="font-semibold text-xs md:text-2xl lg:text-sm leading-relaxed text-black">
            {comments[currentIndex].name}
          </h4>
          <span className=" text-xs md:text-2xl lg:text-sm leading-relaxedtext-black">
            {comments[currentIndex].location}
          </span>
        </div>
      </div>

      {/* Navigation + Dots */}
      <div className="mt-4 flex justify-between items-center">
        {/* Dots Navigation */}
        <div className="flex gap-2">
          {comments.map((_, idx) => (
            <span
              key={idx}
              onClick={() => goToIndex(idx)}
              className={`w-2 h-2 rounded-full cursor-pointer ${
                idx === currentIndex ? "bg-green-600" : "bg-gray-400"
              }`}
            ></span>
          ))}
        </div>

        {/* Arrow Controls */}
        <div className="flex gap-2">
          <button
            onClick={goPrev}
            className="w-8 h-8 md:h-14 md:w-14 lg:h-10 lg:w-10 rounded-full bg-white text-green-500 flex items-center justify-center"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={goNext}
            className="w-8 h-8 md:h-14 md:w-14 lg:h-10 lg:w-10 rounded-full bg-white text-green-500 flex items-center justify-center"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
