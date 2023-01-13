import React from "react";
import "./SpotTarget.css";

const SpotTarget = ({ spot, selectionSpot }) => {
  const cardBackground = {
    background:
      "url(https://xsurf.es/wp-content/uploads/2021/01/Surf-en-Espana.jpg)",
    backgroundSize: "cover",
  };
  return (
    <div
      className="targetDesign imageSpot justify-content-end"
      style={cardBackground}
      onClick={() => selectionSpot(spot)}
    >
      <h4 className="nameSpot">{spot.spotname}</h4>

      <p className="citySpot">{spot.city}</p>
    </div>
  );
};

export default SpotTarget;
