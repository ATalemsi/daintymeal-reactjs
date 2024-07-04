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
                const userCode = localStorage.getItem('user_code');
                if (!userCode) {
                    console.error('User code not found in local storage');
                    return;
                }

                const response = await axios.get(`https://x2r9rfvwwi.execute-api.eu-north-1.amazonaws.com/dev/watchlist/${userCode}`);
                
                // Check the response structure
                console.log('Watchlist response:', response.data);
                
                // Assuming `response.data` contains an array of watchlist items
                // Check if `response.data` is an array
                if (Array.isArray(response.data)) {
                    setWatchlistPlats(response.data);  // Set the watchlist plats to the fetched data
                } else {
                    console.error('Response data is not an array:', response.data);
                }
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
        <div className="most_popular px-3 my-6">
            {watchlistplats.length === 0 ? (
                <div className="no-plats-container flex flex-col items-center justify-center h-full">
                    <img 
                        src="https://res.cloudinary.com/dz4pww2qv/image/upload/v1717851494/ep4bkvb42vi3jhixixww.jpg"  // Replace with the path to your no-plats image
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
                                                {watchlistplat.plat?.image?.map((imgSrc, imgIndex) => (
                                                    <div key={imgIndex}>
                                                        <img
                                                            src={imgSrc}
                                                            className="img-fluid w-full h-48 object-cover"
                                                            alt={watchlistplat.plat.name}
                                                        />
                                                    </div>
                                                )) || (
                                                    <p>{t('noImages')}</p>  
                                                )}
                                            </Slider>
                                        </div>
                                    </a>
                                </div>
                                <div className="p-3 relative">
                                    <div className="list-card-body">
                                        <h6 className="mb-1 text-3xl text-gray-600">
                                            <a href="restaurant.html">{watchlistplat.plat?.name || t('noName')}</a>  {/* Use default text if name is missing */}
                                        </h6>
                                        <p className="text-gray mb-1 text-lg">
                                            {watchlistplat.plat?.category?.[0]?.name || t('noCategory')}
                                        </p>
                                        <StarRating rating={watchlistplat.plat?.rating || 0} />
                                        <p className="text-gray mb-1 text-sm font-bold">
                                            {watchlistplat.plat?.plat_price || 0} {watchlistplat.plat?.currency || t('currency')}
                                        </p>
                                    </div>
                                    <div className="list-card-badge flex items-center">
                                        {watchlistplat.plat?.discount ? (
                                            <span className="badge badge-danger mr-2">{t('offer')}</span>
                                        ) : (
                                            <span className="badge badge-secondary mr-2">{t('noOffer')}</span>
                                        )}
                                        <small>{watchlistplat.plat?.discount ? '60%' : ''}</small>
                                    </div>
                                    <div className="mt-2">
                                        <button className="btn btn-outline-primary">{t('addToCart')}</button>
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
