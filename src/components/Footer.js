// src/components/Main.js
import React from 'react';


const Footer = () => {
    return (
        <div className="osahan-menu-fotter border rounded shadow fixed-bottom bg-white m-3 px-3 py-2 text-center">
            <div className="row">
                <div className="col selected">
                    <a href="home.html" className="text-danger small font-weight-bold text-decoration-none">
                        <p className="h4 m-0"><i className="feather-home text-danger" /></p>
                        Home
                    </a>
                </div>
                <div className="col">
                    <a href="most_popular.html" className="text-dark small font-weight-bold text-decoration-none">
                        <p className="h4 m-0"><i className="feather-map-pin" /></p>
                        Trending
                    </a>
                </div>
                <div className="col osahan-menu-logo">
                    <a href="checkout.html" className="text-white small font-weight-bold text-decoration-none">
                        <img src="img/nav-logo.png" className="img-fluid" />
                    </a>
                </div>
                <div className="col">
                    <a href="favorites.html" className="text-dark small font-weight-bold text-decoration-none">
                        <p className="h4 m-0"><i className="feather-heart" /></p>
                        Favorites
                    </a>
                </div>
                <div className="col">
                    <a href="profile.html" className="text-dark small font-weight-bold text-decoration-none">
                        <p className="h4 m-0"><i className="feather-user" /></p>
                        Profile
                    </a>
                </div>
            </div>
        </div>

    );
};

export default Footer;
