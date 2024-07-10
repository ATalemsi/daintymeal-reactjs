import React from 'react';
import { Link } from 'react-router-dom';
import Cart from '../Cart';

const ProfilHeader = () => {
    return (
        <div className="fixed top-0 left-0 w-full p-3 bg-white shadow-sm z-50">
            <div className="d-flex align-items-center">
                <Link className="font-weight-bold text-dark text-decoration-none" to="/">
                    <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} fill="currentColor" className="back-page bi bi-chevron-left" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                    </svg>
                </Link>
                <span className="ml-3 h6 mb-0">Profile</span>
                <div className="ml-auto d-flex align-items-center">
                    <Cart /> {/* Add Cart component here */}
                    <a className="toggle ml-2 text-dark hc-nav-trigger hc-nav-1" href="#" role="button" aria-controls="hc-nav-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProfilHeader;
