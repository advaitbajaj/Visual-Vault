import React from "react";

const Photo = ({ photo }) => {
  return (
    <div className="bg-[#48CAE4] w-full h-[300px]">
      <h1 className="text-2xl">{photo}</h1>
    </div>
  );
};

export default Photo;
