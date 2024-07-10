import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useParams } from 'react-router-dom';

const RestoPlats = () => {
    const { resto_code } = useParams();
    const [plats, setPlats] = useState([]);
    const [loading, setLoading] = useState(true);  // Add loading state

    useEffect(() => {
        const fetchPlats = async () => {
            try {
                const response = await axios.get(`https://x2r9rfvwwi.execute-api.eu-north-1.amazonaws.com/dev/restos/${resto_code}/plats`);
                setPlats(response.data);
            } catch (error) {
                console.error('Error fetching plats:', error);
            } finally {
                setLoading(false); 
            }
        };
        fetchPlats();
    }, [resto_code]);

    if (loading) {
        return (
            <div className="flex items-center justify-center h-64">
                <svg
                    className="animate-spin h-8 w-8 text-pink-500"
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
        );
    }

    return (
        <div className="px-3 py-3 bg-white">
            <h2 className="font-bold text-xl mb-4">Featured Items</h2>
            <div className="flex overflow-x-scroll space-x-4 ">
                {plats.length > 0 ? (
                    plats.map((plat, index) => (
                        <div key={index} className="flex-none w-64 bg-white rounded-lg">
                            <div className="relative">
                                <img src={plat.image[0]} className="w-full h-32 object-cover rounded-t-lg" alt={plat.name} />
                                {plat.rating && (
                                    <div className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">{plat.rating}</div>
                                )}
                                <div className="absolute top-2 right-2">
                                    <button className="bg-white p-1 rounded-full shadow-md">
                                        <i className="feather-bookmark text-gray-800" />
                                    </button>
                                </div>
                                <div className="absolute bottom-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">{plat.category[0].name}</div>
                            </div>
                            <div className="p-3">
                                <h3 className="text-black font-semibold text-sm mb-1">{plat.name}</h3>
                                <p className="text-pink-500 text-xs font-bold mb-2">{plat.plat_price} {plat.currency}</p>
                                {plat.discount ? (
                                    <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">OFFER</span>
                                ) : (
                                    <span className="bg-gray-400 text-white text-xs px-2 py-1 rounded-full">NO OFFER</span>
                                )}
                                <p className="text-gray-500 text-xs mt-1">{plat.discount ? "Use Coupon" : "No discounts available"}</p>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="flex flex-col items-center justify-center h-64">
                        <img
                            src="https://res.cloudinary.com/dz4pww2qv/image/upload/v1717851494/ep4bkvb42vi3jhixixww.jpg"
                            alt="No plats available"
                            className="w-32 h-auto mb-2"
                        />
                        <p className="text-gray-500 text-center">No plats available at this restaurant</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default RestoPlats;
