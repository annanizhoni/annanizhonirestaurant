import React from "react";
import Image from "next/image";

const Offer = () => {
  return (
    <div className="bg-orange-950 h-screen flex flex-col md:flex-row md:justify-between">
      {/* TEXT CONTAINER */}
      <div className="flex-1 flex flex-col justify-center items-center text-center gap-8 p-6">
        <h1 className="text-white text-5xl font-bold xl:text-6xl">
          Broiled Salmon With Pepita Salsa
        </h1>
        <p className="text-white">Special of the Week</p>
        <button className="bg-teal-500 text-white rounded-md py-3 px-6">
          Order Now
        </button>
      </div>
      {/* IMAGE CONTAINER */}
      <div className="flex-1 w-full relative md:h-full">
        <Image
          src="/salmondish.jpeg"
          alt="offerProduct"
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default Offer;
