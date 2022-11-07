import React, { useEffect, useState } from "react";
import PhotosGrid from "./PhotosGrid";

const Photos = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/photos")
      .then((res) => res.json())
      .then((data) => setPhotos(data));
  }, []);

  return (
    <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-20 w-11/12 mx-auto">
      {photos.map((photo) => (
        <PhotosGrid photo={photo} key={photo._id}></PhotosGrid>
      ))}
    </div>
  );
};

export default Photos;
