
import React from 'react'
import './SpotTarget.css'


const SpotTarget = ({spot, selectionSpot}) => {

    return(
        <div className="targetDesign">
            <img 
            className="imageSpot"
            src={`https://xsurf.es/wp-content/uploads/2021/01/Surf-en-Espana.jpg`}
            onClick={() => selectionSpot(spot)} />
            <p className="nameSpot">Playa de Somo</p>
            {/* <p className="nameSpot">{spot.spotname}</p> */}
            <p className="citySpot">Cantabria</p>
            {/* <p className="citySpot">{spot.city}</p> */}

        </div>
    )
}

export default SpotTarget;