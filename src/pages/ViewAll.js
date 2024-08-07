import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import AllPlats from '../components/AllPlats';


const ViewAll = () => {
    return (
        <>
        <div class="osahan-favorites">
            <div class="p-3 osahan-inner-header bg-white shadow-sm">
                <div class="d-flex align-items-center">
                    <Link  class="font-weight-bold text-dark text-back text-decoration-none " to="/">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="back-page bi bi-chevron-left" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"></path>
                        </svg>
                    </Link>
                    <span class="ml-3 h6 mb-0">ViewAll</span>
                    <div class="ml-auto d-flex align-items-center">
                        <a class="text-dark mx-2 top-nav-btn top-nav-btn-cart fs-18 position-relative" href="checkout.html"><i class="feather-shopping-bag"></i></a>
                        <a class="toggle ml-2 text-dark hc-nav-trigger hc-nav-1" href="#" role="button" aria-controls="hc-nav-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            <AllPlats />

            
        </div>
        <div className="mb-16" /> 
        <Footer />
        <Navbar />

    </>

    );
};

export default ViewAll;
