import React, { useEffect } from "react";


const RestoInfo = () => {
    return (
        <div className="p-3 osahan-inner-header bg-primary">
            <div className="d-flex align-items-center">
                <a className="font-weight-bold text-white text-back text-decoration-none d-flex" href="home.html">
                    <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} fill="currentColor" className="back-page bi bi-chevron-left" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z">
                        </path>
                    </svg>
                    <span className="pl-2">Back</span>
                </a>
                <div className="ml-auto d-flex align-items-center">
                    <a className="text-white mx-2 top-nav-btn top-nav-btn-cart fs-18 position-relative" href="#ratings-and-reviews"><i className="feather-message-square" /> <span className="border">3</span></a>
                    <a className="text-white mx-2 top-nav-btn top-nav-btn-cart fs-18 position-relative" href="#ratings-and-reviews"><i className="feather-star" /></a>
                    <a className="text-white mx-2 top-nav-btn top-nav-btn-cart fs-18 position-relative" href="#ratings-and-reviews"><i className="feather-map-pin" /></a>
                    <a className="text-white mx-2 top-nav-btn top-nav-btn-cart fs-18 position-relative" href="contact-us.html"><i className="feather-phone" /></a>
                    <a className="toggle ml-2 text-white hc-nav-trigger hc-nav-1" href="#" role="button" aria-controls="hc-nav-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z">
                            </path>
                        </svg>
                    </a>
                </div>
            </div>
        </div>

    );

};

export default RestoInfo;