import React from "react";
import bgImage from "../../../assets/images/bgImage.jpg";

const Banner = () => {
  return (
    <div>
      <div>
        <img src={bgImage} alt="" className="max-h-8/12 mt-[-150px]" />
      </div>
    </div>
  );
};

export default Banner;
