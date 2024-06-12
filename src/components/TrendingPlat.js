// src/components/Main.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StarRating from './startRating/StarRating';
import { useTranslation } from 'react-i18next';



const TrendingPlat = () => {
    const [trendingplats, setTrandingPlats] = useState([]);
    const { t } = useTranslation();

    useEffect(() => {
        const fetchTrendingPlats = async () => {
            try {
                const response = await axios.get('https://x2r9rfvwwi.execute-api.eu-north-1.amazonaws.com/dev/plats/trending');
                setTrandingPlats(response.data);
            } catch (error) {
                console.error('Error fetching trending plats:', error);
            }
        };
        fetchTrendingPlats();
    }, []);

    return (
        <div className="most_popular px-3">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {trendingplats && trendingplats.map((trendingplat, index) => (
                    <div key={index} className="px-2 py-2">
                        <div className="list-card bg-white h-full rounded overflow-hidden relative shadow-lg">
                            <div className="list-card-image relative">
                                <div className="favourite-heart absolute top-2 right-2">
                                    <a href="#"><i className="feather-bookmark" /></a>
                                </div>
                                <div className="member-plan absolute bottom-2 left-2">
                                    <span className="badge badge-danger">{t('hot')}</span>
                                </div>
                                <a href="restaurant.html">
                                    <div className="w-full h-48 overflow-hidden">
                                        <img src={trendingplat.image[0]} alt={trendingplat.name} className="img-fluid w-full h-full object-cover" />
                                    </div>
                                </a>
                            </div>
                            <div className="p-3 relative">
                                <div className="list-card-body">
                                    <h6 className="mb-1 text-3xl text-gray-600">
                                        <a href="restaurant.html">{trendingplat.name}</a>
                                    </h6>
                                    <p className="text-gray mb-1 text-lg">{trendingplat.category[0].name}</p>
                                    <StarRating rating={trendingplat.rating} />
                                    <p className="text-gray mb-1 text-sm font-bold">{trendingplat.plat_price} {trendingplat.currency}</p> {/* Add the price here */}
                                </div>
                                <div className="list-card-badge flex items-center">
                                    {trendingplat.discount ? (
                                        <span className="badge badge-danger mr-2">{t('offer')}</span>
                                    ) : (
                                        <span className="badge badge-secondary mr-2">{t('noOffer')}</span>
                                    )}
                                    <small>{trendingplat.discount ? '-60% ' : ''}</small>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            
        </div>

    );
};

export default TrendingPlat;
