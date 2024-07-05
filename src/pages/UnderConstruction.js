// src/components/UnderConstruction.js
import React from 'react';
import { Link } from 'react-router-dom';

const UnderConstruction = () => {


  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md text-center">
        <h1 className="text-4xl font-bold mb-4 text-red-500">Page Under Construction</h1>
        <p className="text-lg text-gray-700">We're working hard to bring this page to you soon. Stay tuned!</p>
        <div className="mt-8">
          <svg
            className="animate-spin h-8 w-8 text-gray-500 mx-auto"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291l-3.709 3.71A9.974 9.974 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-3.647z"
            ></path>
          </svg>
        </div>
        <Link
         to="/"
          className="mt-6 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default UnderConstruction;
