import React from "react";
import Photo from "./Photo";

const PhotoGrid = () => {
  let photos = [0, 1, 2, 3, 4];
  return (
    <div className="m-20">
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-10">
        {photos.map((photo) => {
          return <Photo photo={photo} />;
        })}
      </div>
    </div>
  );
};

export default PhotoGrid;
