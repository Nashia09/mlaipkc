import React from "react";
import ml from "../assets/hero/ml.jpg";

function Banner({ title, summary }) {
  return (
    <div className="relative font-[sans-serif] before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-50 before:z-10 z-0">
      <img
        src={ml}
        alt="Banner Image"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="min-h-[300px] relative z-50 h-full max-w-6xl mx-auto flex flex-col justify-center items-start text-start text-white p-6">
        <h2 className="sm:text-4xl text-2xl font-bold mb-6 ">{title}</h2>
        <p className="text-lg text-center text-gray-200">{summary}</p>
      </div>
    </div>
  );
}

export default Banner;
