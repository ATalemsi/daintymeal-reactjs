import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from '../components/Navbar';
import Footer from "../components/Footer";
import TrendingPlat from "../components/TrendingPlat";


const TrendingPage = () => {
    const navigate = useNavigate();
    const isLoggedIn = !!localStorage.getItem('access_token');

    if (!isLoggedIn) {
        return (
            <div className="osahan-popular">
                <div className="p-3 osahan-inner-header bg-white shadow-sm">
                    <div className="d-flex align-items-center">
                        <Link className="font-weight-bold text-dark text-back text-decoration-none " to="/">
                            <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} fill="currentColor" className="back-page bi bi-chevron-left" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                            </svg>
                        </Link>
                        <span className="ml-3 h6 mb-0">Most Popular</span>
                        <div className="ml-auto d-flex align-items-center">
                            <a className="text-dark mx-2 top-nav-btn top-nav-btn-cart fs-18 position-relative" href="checkout.html"><i className="feather-shopping-bag" /> <span>3</span></a>
                            <a className="toggle ml-2 text-dark hc-nav-trigger hc-nav-1" href="#" role="button" aria-controls="hc-nav-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="container mx-auto p-4">
                    <div className="text-left text-lg">
                        <h2 className="text-2xl font-semibold mb-2">Trending</h2>
                        <p className="mb-4">Log in to start planning your next trip.</p>
                        <button className="bg-pink-600 text-white py-2 px-4 rounded" onClick={() => navigate('/login-email')}>Log in</button>
                    </div>
                </div>
                <Footer />
            </div>


        );
    }
    return (

        <>
            <div className="osahan-popular">
                <div className="p-3 osahan-inner-header bg-white shadow-sm">
                    <div className="d-flex align-items-center">
                        <Link className="font-weight-bold text-dark text-back text-decoration-none " to="/">
                            <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} fill="currentColor" className="back-page bi bi-chevron-left" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                            </svg>
                        </Link>
                        <span className="ml-3 h6 mb-0">Most Popular</span>
                        <div className="ml-auto d-flex align-items-center">
                            <a className="text-dark mx-2 top-nav-btn top-nav-btn-cart fs-18 position-relative" href="checkout.html"><i className="feather-shopping-bag" /> <span>3</span></a>
                            <a className="toggle ml-2 text-dark hc-nav-trigger hc-nav-1" href="#" role="button" aria-controls="hc-nav-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                <TrendingPlat />
                <Footer />
            </div>
            <Navbar />

        </>
    );

};

export default TrendingPage;