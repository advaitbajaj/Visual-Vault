import React from "react";
import Photo from "./Photo";

const PhotoGrid = ({ photos }) => {
  return (
    <div className="m-20">
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-5 relative">
        {photos.map((photo) => {
          return <Photo key={photo.id} {...photo} />;
        })}
      </div>
    </div>
  );
};

export default PhotoGrid;
