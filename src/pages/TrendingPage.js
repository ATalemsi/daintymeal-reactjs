import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from '../components/Navbar';
import Footer from "../components/Footer";
import TrendingPlat from "../components/TrendingPlat";
import Cart from "../components/Cart";

const TrendingPage = () => {
    const navigate = useNavigate();
    const isLoggedIn = !!localStorage.getItem('access_token');

    if (!isLoggedIn) {
        return (
            <div className="osahan-popular">
                <div className="p-3 osahan-inner-header bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
                    <div className="d-flex align-items-center">
                        <Link className="font-weight-bold text-dark text-back text-decoration-none " to="/">
                            <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} fill="currentColor" className="back-page bi bi-chevron-left" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                            </svg>
                        </Link>
                        <span className="ml-3 h6 mb-0">Most Popular</span>
                        <div className="ml-auto d-flex align-items-center">
                            <Cart />
                        </div>
                    </div>
                </div>
                <div className="container mx-auto p-4 pt-16">
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
                <div className="p-3 osahan-inner-header bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
                    <div className="d-flex align-items-center">
                        <Link className="font-weight-bold text-dark text-back text-decoration-none " to="/">
                            <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} fill="currentColor" className="back-page bi bi-chevron-left" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                            </svg>
                        </Link>
                        <span className="ml-3 h6 mb-0">Most Popular</span>
                        <div className="ml-auto d-flex align-items-center">
                            <Cart />
                        </div>
                    </div>
                </div>
                <div className="mt-16">
                    <TrendingPlat />
                </div>
                <Footer />
                <Navbar />
            </div>
        </>
    );
};

export default TrendingPage;
