import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useParams } from 'react-router-dom';
import StarRating from "../startRating/StarRating";

const RestoDetails = () => {
    const { resto_code } = useParams();
    const [restoDetails, setRestoDetails] = useState(null);

    useEffect(() => {
        const fetchRestoDetails = async () => {
            try {
                const response = await axios.get(`https://x2r9rfvwwi.execute-api.eu-north-1.amazonaws.com/dev/restos/${resto_code}`);
                setRestoDetails(response.data);
            } catch (error) {
                console.error('Error fetching resto details:', error);
            }
        };

        fetchRestoDetails();
    }, [resto_code]);

    if (!restoDetails) return <svg
        className="animate-spin h-8 w-8 text-pink-500 mx-auto"
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
    </svg>;

    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="relative">
                <img src={restoDetails.image[1]} alt="Restaurant Cover" className="w-full h-64 object-cover" />
            </div>
            <div className="p-4">
                <div className="flex items-center mb-2">
                    <img src={restoDetails.image[0]} alt={restoDetails.en.name} className="w-20 h-20 rounded-full mr-4" />
                    <div>
                        <h2 className="font-bold text-2xl">{restoDetails.en.name}</h2>
                        <p className="text-gray-600">{restoDetails.categories[0].name} • {restoDetails.address[0].city}</p>
                        <div className="flex items-center mt-2">
                            <StarRating rating={restoDetails.rating} />
                            <p className="rating ml-2 text-sm text-gray-600">({restoDetails.statics.contRatings} ratings)</p>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-between mb-1.5">
                    <div className="text-green-600 font-bold">Open</div>
                    <div className="text-sm text-gray-600">Delivers by {restoDetails.workingTime}</div>
                </div>
                <div className="flex items-center mb-1.5">
                    <button className="bg-yellow-500 text-white py-2 px-4 rounded-full shadow-md mr-2">Delivery</button>
                    <button className="bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded-full shadow-md">Pickup</button>
                </div>

            </div>
        </div>
    );
};

export default RestoDetails;
