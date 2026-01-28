import React from "react";
import { useState } from "react";
import { HiArrowSmLeft } from "react-icons/hi";
import { HiArrowSmRight } from "react-icons/hi";
import Reasons from "./Reasons";
import Ask from "./Ask";

export default function Page() {
  const [show, setShow] = useState(true);

  const handleLimit = () => {
    setShow(false);
  };
  return (
    <div className="bg-pink-200 h-screen ">
      <div className="absolute left-4 top-0 h-full flex flex-col justify-evenly text-9xl opacity-40 select-none pointer-events-none">
        <span className="animate-bounce">💗</span>
        <span className="animate-pulse">💘</span>
        <span className="animate-bounce">💘</span>
        <span className="animate-pulse">💝</span>
        <span className="animate-bounce">💓</span>
        <span className="animate-pulse">💖</span>
      </div>
      <div className="absolute left-60 top-0 h-full flex flex-col justify-evenly text-9xl opacity-40 select-none pointer-events-none">
        <span className="animate-bounce">💗</span>
        <span className="animate-pulse">💘</span>
        <span className="animate-bounce">💞</span>
        <span className="animate-pulse">💝</span>
        <span className="animate-bounce">💓</span>
        <span className="animate-pulse">💖</span>
      </div>
      <div className="absolute right-4 top-0 h-full flex flex-col justify-evenly text-9xl opacity-40 select-none pointer-events-none">
        <span className="animate-pulse">💖</span>
        <span className="animate-bounce">💓</span>
        <span className="animate-pulse">💝</span>
        <span className="animate-bounce">💞</span>
        <span className="animate-pulse">💘</span>
        <span className="animate-bounce">💗</span>
      </div>
       <div className="absolute right-60 top-0 h-full flex flex-col justify-evenly text-9xl opacity-40 select-none pointer-events-none">
        <span className="animate-pulse">💞</span>
        <span className="animate-bounce">💓</span>
        <span className="animate-pulse">💕</span>
        <span className="animate-bounce">💓</span>
        <span className="animate-pulse">❣️</span>
        <span className="animate-bounce">💖</span>
      </div>
      <div className="flex justify-center">
        <button className="text-8xl font-['Pacifico'] mt-10 text-red-500" onClick={() => setShow(true)}>
          Valentine's Day!
        </button>
      </div>

      {show ? <Reasons onLimit={handleLimit} /> : <Ask />}
    </div>
  );
}
