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

    if (!restoDetails) return <p>Loading...</p>;

    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="relative">
                <img src={restoDetails.image[1]} alt="Restaurant Cover" className="w-full h-64 object-cover" />
            </div>
            <div className="p-4">
                <div className="flex items-center mb-4">
                    <img src={restoDetails.image[0]} alt={restoDetails.en.name} className="w-16 h-16 rounded-full mr-4" />
                    <div>
                        <h2 className="font-bold text-2xl">{restoDetails.en.name}</h2>
                        <p className="text-gray-600">{restoDetails.categories[0].name} • {restoDetails.address[0].city}</p>
                        <div className="flex items-center mt-2">
                            <StarRating rating={restoDetails.rating} />
                            <p className="rating ml-2 text-sm text-gray-600">({restoDetails.statics.contRatings} ratings)</p>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-between mb-4">
                    <div className="text-green-600 font-bold">Open</div>
                    <div className="text-sm text-gray-600">Delivers by {restoDetails.workingTime}</div>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg mb-4">
                    <div className="flex items-center justify-between">
                        <div className="text-lg font-bold">delivery free</div>
                        <div className="text-sm text-gray-600">Delivers by Glovo</div>
                    </div>
                    <div className="mt-2 text-sm text-gray-600">Glovo Detailes</div>
                </div>
                <div className="flex items-center mb-4">
                    <button className="bg-yellow-500 text-white py-2 px-4 rounded-full shadow-md mr-2">Delivery</button>
                    <button className="bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded-full shadow-md">Pickup</button>
                </div>

            </div>
        </div>
    );
};

export default RestoDetails;
