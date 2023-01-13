import React from "react";
import "./SpotTarget.css";
import { useSelector } from "react-redux";




const SpotTarget = ({ spot, selectionSpot }) => {
//   const cardBackground = {
//     background:
//       "url(https://xsurf.es/wp-content/uploads/2021/01/Surf-en-Espana.jpg)",
//     backgroundSize: "cover",
//   };


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
