import React from "react";
import { Link, Navigate } from "react-router-dom";

const Location = () => {
  const handleUseCurrentLocation = () => {
    // Assuming geolocation is handled in your Header component
    // For demonstration purposes, assume permission is granted
    return <Navigate to="/home" replace />;
  };

  return (
    <>
      <div className="vh-100 location location-page">
        <div className="d-flex align-items-center justify-content-center vh-100 flex-column">
          <img src="img/location.svg" className="img-fluid mx-auto" alt="Responsive image" />
          <div className="px-4 text-center mt-4">
            <h5 className="text-dark">Hi, nice to meet you!</h5>
            <p className="mb-5">Choose your location to start finding restaurants around you.</p>
            <button onClick={handleUseCurrentLocation} className="btn btn-lg btn-primary btn-block my-4">
              <i className="feather-navigation" /> Use current location
            </button>
            <Link to="/select_country" className="text-primary h6">Select it manually</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Location;
