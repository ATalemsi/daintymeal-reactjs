import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StarRating from './startRating/StarRating';

const Myplats = () => {
    const [myplats, setMyplats] = useState([]);

    useEffect(() => {
        const fetchTwoPlats = async () => {
            try {
                const response = await axios.get('https://x2r9rfvwwi.execute-api.eu-north-1.amazonaws.com/dev/plats/two');
                setMyplats(response.data);
            } catch (error) {
                console.error('Error fetching myplats:', error);
            }
        };
        fetchTwoPlats();
    }, []);

    return (
        <div className="most_popular px-3">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {myplats && myplats.map((myplat, index) => (
                    <div key={index} className="px-2 py-2">
                        <div className="list-card bg-white h-full rounded overflow-hidden relative shadow-lg">
                            <div className="list-card-image relative">
                                <div className="star absolute top-2 left-2">
                                    <span className="badge badge-success">
                                        <i className="feather-star" />{myplat.rating}
                                    </span>
                                </div>
                                <div className="favourite-heart absolute top-2 right-2">
                                    <a href="#"><i className="feather-bookmark" /></a>
                                </div>
                                <div className="member-plan absolute bottom-2 left-2">
                                    <span className="badge badge-danger">HOT</span>
                                </div>
                                <a href="restaurant.html">
                                    <div className="w-full h-48 overflow-hidden">
                                        <img src={myplat.image[0]} alt={myplat.name} className="img-fluid w-full h-full object-cover" />
                                    </div>
                                </a>
                            </div>
                            <div className="p-3 relative">
                                <div className="list-card-body">
                                    <h6 className="mb-1 text-3xl text-gray-600">
                                        <a href="restaurant.html">{myplat.name}</a>
                                    </h6>
                                    <p className="text-gray mb-1 text-lg">{myplat.category[0].name}</p>
                                    <StarRating rating={myplat.rating} />
                                    <p className="text-gray mb-1 text-sm font-bold">Price: {myplat.plat_price} {myplat.currency}</p> {/* Add the price here */}
                                </div>
                                <div className="list-card-badge flex items-center">
                                    {myplat.discount ? (
                                        <span className="badge badge-danger mr-2">OFFER</span>
                                    ) : (
                                        <span className="badge badge-secondary mr-2">NO OFFER</span>
                                    )}
                                    <small>{myplat.discount ? '60% NEW50' : 'No Discount'}</small>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Myplats;
