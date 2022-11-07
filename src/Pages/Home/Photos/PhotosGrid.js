import React from "react";

const PhotosGrid = ({ photo }) => {
  return (
    <div>
      <img className="w-full h-96 rounded-lg" src={photo.imageURL} alt=""></img>
    </div>
  );
};

export default PhotosGrid;
