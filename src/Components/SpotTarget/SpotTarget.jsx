import React from "react";
import "./SpotTarget.css";

const SpotTarget = ({ spot, selectionSpot }) => {
  const cardBackground = {
    backgroundImage: `url(${spot.imagepath})`,
    backgroundSize: "cover",
  };
  return (
    <div
      className="targetDesign justify-content-end"
      style={cardBackground}
      onClick={() => selectionSpot(spot)}
    >
      <h4 className="nameSpot">{spot.spotname}</h4>

      <p className="citySpot">{spot.city}</p>
    </div>
  );
};

export default SpotTarget;
