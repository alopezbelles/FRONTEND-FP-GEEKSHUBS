import React from "react";
import "./SpotTarget.css";

const SpotTarget = ({ spot, selectionSpot }) => {
//   const cardBackground = {
//     background:
//       "url(https://xsurf.es/wp-content/uploads/2021/01/Surf-en-Espana.jpg)",
//     backgroundSize: "cover",
//   };
  const cardBackground = {
    background:
      "url(https://turismolanzarote.com/wp-content/uploads/2017/03/Famara_Jeziel_12.jpg)",
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
