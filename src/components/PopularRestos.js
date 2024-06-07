// src/components/Main.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StarRating from './startRating/StarRating';


const PopularRestos = () => {
    const [popularestos, setPopularRestos] = useState([]);

    useEffect(() => {
        const fetchPopularRestos = async () => {
            try {
                const response = await axios.get('https://x2r9rfvwwi.execute-api.eu-north-1.amazonaws.com/dev/restos/popular');
                setPopularRestos(response.data);
            } catch (error) {
                console.error('Error fetching popularRestos:', error);
            }
        };
        fetchPopularRestos();
    }, []);

    return (
        <div className="most_popular px-3">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {popularestos && popularestos.map((popularesto, index) => (
                    <div key={index} className="px-2 py-2">
                        <div className="list-card bg-white h-full rounded overflow-hidden relative shadow-lg">
                            <div className="list-card-image relative">
                                <div className="favourite-heart absolute top-2 right-2">
                                    <a href="#"><i className="feather-bookmark" /></a>
                                </div>
                                <div className="member-plan absolute bottom-2 left-2">
                                    <span className="badge badge-danger">HOT</span>
                                </div>
                                <a href="restaurant.html">
                                    <div className="w-full h-48 overflow-hidden">
                                        <img src={popularesto.image[0]} alt={popularesto.en.name} className="img-fluid w-full h-full object-cover" />
                                    </div>
                                </a>
                            </div>
                            <div className="p-3 relative">
                                <div className="list-card-body">
                                    <h6 className="mb-1 text-3xl text-gray-600">
                                        <a href="restaurant.html">{popularesto.en.name}</a>
                                    </h6>
                                    <p className="text-gray mb-1 text-lg">{popularesto.categories[0].name}</p>
                                    <StarRating rating={popularesto.rating} />
                                    <p className="text-gray mb-1 text-sm font-bold">Address: {popularesto.address[0].street} ,{popularesto.address[0].city}, {popularesto.address[0].country}</p> {/* Add the price here */}
                                </div>
                                <div className="list-card-badge flex items-center">        
                                        <span className="badge badge-danger mr-2">Time Work</span>                           
                                        <span className="badge badge-secondary mx-2">{popularesto.workingTime}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default PopularRestos;
