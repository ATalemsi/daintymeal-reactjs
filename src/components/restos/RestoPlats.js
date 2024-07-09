import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useParams } from 'react-router-dom';

const RestoPlats = () => {
    const { resto_code } = useParams();
    const [plats, setPlats] = useState([]);
    useEffect(() => {
        const fetchPlats = async () => {
            try {
                const response = await axios.get(` https://x2r9rfvwwi.execute-api.eu-north-1.amazonaws.com/dev/restos/${resto_code}/plats`);
                setPlats(response.data);
            } catch (error) {
                console.error('Error fetching plats:', error);
            }
        };
        fetchPlats();
    }, [resto_code]);

    if (!plats) return <p>Loading...</p>;

    return (
        <div className="px-3 py-3 bg-white">
            <h2 className="font-bold text-xl mb-4">Featured Items</h2>
            <div className="flex overflow-x-scroll space-x-4 ">
                {plats.length > 0 ? (
                    plats.map((plat, index) => (
                        <div key={index} className="flex-none w-64 bg-white rounded-lg shadow-lg">
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
                    <div className="text-center mt-5">
                        <img src="https://res.cloudinary.com/dz4pww2qv/image/upload/v1717851494/ep4bkvb42vi3jhixixww.jpg" alt="No plats available" className="w-32 h-auto mx-auto" />
                        <p className="mt-2">No plats available at this restaurant</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default RestoPlats;
