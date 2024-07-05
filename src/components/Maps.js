import React from "react";
import { GoogleMap, MarkerF, useLoadScript } from "@react-google-maps/api";

import "../App.css";

const Map = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey:'AIzaSyBYo-N_FzEPsdTeydQFbFRfxeLzs1y9yEM',
    libraries: ["places"],
  });
  const center = { lat: 30.0444, lng: 31.2357 };
  const onLoadMarker = (marker) => {
    console.log("Marker", marker.position);
  };
  return (
    <div className="Map">
      {!isLoaded ? (
        <h3>Loading.....</h3>
      ) : (
        <GoogleMap
          mapContainerClassName="map_container"
          center={center}
          zoom={10}
        >
            
          <MarkerF position={center} onLoad={onLoadMarker} />
        </GoogleMap>
      )}
    </div>
  );
};
export default Map;