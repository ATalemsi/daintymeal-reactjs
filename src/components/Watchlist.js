// src/components/Main.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StarRating from './startRating/StarRating';
import { useTranslation } from 'react-i18next';
import Slider from 'react-slick';
import './slick-custom.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Watchlist = () => {
    const [watchlistplats, setWatchlistPlats] = useState([]);
    const { t } = useTranslation();

    useEffect(() => {
        const fetchWatchlistPlats = async () => {
            try {
                // Retrieve user_code from local storage
                const userCode = localStorage.getItem('user_code');
                if (!userCode) {
                    console.error('User code not found in local storage');
                    return;
                }

                // Fetch watchlist plats using the user_code
                const response = await axios.get(`https://x2r9rfvwwi.execute-api.eu-north-1.amazonaws.com/dev/wishlists/${userCode}`);
                setWatchlistPlats(response.data.plats);  // Assuming the API returns { plats: [...] }
            } catch (error) {
                console.error('Error fetching watchlist plats:', error);
            }
        };
        fetchWatchlistPlats();
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className="most_popular px-3">
            {watchlistplats.length === 0 ? (
                <div className="no-plats-container flex flex-col items-center justify-center h-full">
                    <img 
                        src="https://res.cloudinary.com/dz4pww2qv/image/upload/v1717851494/ep4bkvb42vi3jhixixww.jpg"
                        alt="No Plats Available"
                        className="no-plats-image mb-4"
                    />
                    <p className="text-lg text-gray-500">{t('noPlatsInWatchlist')}</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {watchlistplats.map((watchlistplat, index) => (
                        <div key={index} className="px-2 py-2">
                            <div className="list-card bg-white h-full rounded overflow-hidden relative shadow-lg">
                                <div className="list-card-image relative">
                                    <div className="favourite-heart absolute top-2 right-2">
                                        <p className="cursor-pointer"><FontAwesomeIcon icon="fa-regular fa-star" /></p>
                                    </div>
                                    <div className="member-plan absolute bottom-2 left-2">
                                        <span className="badge badge-danger">{t('hot')}</span>
                                    </div>
                                    <a href="restaurant.html">
                                        <div className="w-full h-48 overflow-hidden">
                                            <Slider {...settings}>
                                                {watchlistplat.image.map((imgSrc, imgIndex) => (
                                                    <div key={imgIndex}>
                                                        <img
                                                            src={imgSrc}
                                                            className="img-fluid w-full h-48 object-cover"
                                                            alt={watchlistplat.name}
                                                        />
                                                    </div>
                                                ))}
                                            </Slider>
                                        </div>
                                    </a>
                                </div>
                                <div className="p-3 relative">
                                    <div className="list-card-body">
                                        <h6 className="mb-1 text-3xl text-gray-600">
                                            <a href="restaurant.html">{watchlistplat.name}</a>
                                        </h6>
                                        <p className="text-gray mb-1 text-lg">{watchlistplat.category[0].name}</p>
                                        <StarRating rating={watchlistplat.rating} />
                                        <p className="text-gray mb-1 text-sm font-bold">{watchlistplat.plat_price} {watchlistplat.currency}</p> {/* Add the price here */}
                                    </div>
                                    <div className="list-card-badge flex items-center">
                                        {watchlistplat.discount ? (
                                            <span className="badge badge-danger mr-2">{t('offer')}</span>
                                        ) : (
                                            <span className="badge badge-secondary mr-2">{t('noOffer')}</span>
                                        )}
                                        <small>{watchlistplat.discount ? '60%' : ''}</small>
                                    </div>
                                    <div className="mt-2">
                                        <button className="btn btn-outline-primary">Add To Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Watchlist;
