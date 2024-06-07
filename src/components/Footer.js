import React from 'react';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <div className="osahan-menu-fotter border rounded shadow fixed-bottom bg-white m-3 px-3 py-2 text-center">
            <div className="row">
                <div className="col selected">
                    <Link to="/" className="text-danger small font-weight-bold text-decoration-none">
                        <p className="h4 m-0"><i className="feather-home text-danger" /></p>
                        Home
                    </Link>
                </div>
                <div className="col">
                    <Link to="/most_popular" className="text-dark small font-weight-bold text-decoration-none">
                        <p className="h4 m-0"><i className="feather-map-pin" /></p>
                        Trending
                    </Link>
                </div>
                <div className="col osahan-menu-logo">
                    <Link to="/checkout" className="text-white small font-weight-bold text-decoration-none">
                        <img src="img/nav-logo.png" className="img-fluid" />
                    </Link>
                </div>
                <div className="col">
                    <Link to="/favorites" className="text-dark small font-weight-bold text-decoration-none">
                        <p className="h4 m-0"><i className="feather-heart" /></p>
                        Favorites
                    </Link>
                </div>
                <div className="col">
                    <Link to="/profile" className="text-dark small font-weight-bold text-decoration-none">
                        <p className="h4 m-0"><i className="feather-user" /></p>
                        Profile
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Footer;
