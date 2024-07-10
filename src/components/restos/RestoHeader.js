import React from 'react';
import { Link } from 'react-router-dom';
import Cart from '../Cart';  // Import the Cart component

const RestoHeader = () => {
    return (
        <div className="fixed top-0 left-0 right-0 bg-white shadow-md p-3 flex justify-between items-center z-50">
            <Link className="text-gray-800 flex items-center" to="/">
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="currentColor" className="bi bi-chevron-left" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"></path>
                </svg>
                <span className="pl-2">Back</span>
            </Link>
            <div className="flex items-center">
                <Cart />
            </div>
        </div>
    );
};

export default RestoHeader;
