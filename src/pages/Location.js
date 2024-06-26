import React from "react";
const Location = () => {
    return (

        <>
            <div className="vh-100 location location-page">
                <div className="d-flex align-items-center justify-content-center vh-100 flex-column">
                    <img src="img/location.svg" className="img-fluid mx-auto" alt="Responsive image" />
                    <div className="px-4 text-center mt-4">
                        <h5 className="text-dark">Hi, nice to meet you!</h5>
                        <p className="mb-5">Choose your location to start find restaurants around you.</p>
                        <a href="home.html" className="btn btn-lg btn-primary btn-block my-4"><i className="feather-navigation" /> Use current location</a>
                        <a href="select_country.html" className="text-primary h6">Select it manually</a>
                    </div>
                </div>
            </div>

        </>
    );

};

export default Location;