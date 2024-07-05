import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import StarRating from './startRating/StarRating';
import './slick-custom.css';
import { Link } from 'react-router-dom';

const FilteredPlats = ({ selectedCategory }) => {
    const [plats, setPlats] = useState([]);
    const { t } = useTranslation();

    useEffect(() => {
        const fetchPlats = async () => {
            try {
                const response = await axios.get(` https://x2r9rfvwwi.execute-api.eu-north-1.amazonaws.com/dev/plats/filter?category=${selectedCategory}`);
                setPlats(response.data);
            } catch (error) {
                console.error('Error fetching plats:', error);
            }
        };
        if (selectedCategory) {
            fetchPlats();
        }
    }, [selectedCategory]);

    return (
        
        <div className="most_popular px-3">
            <div className="title d-flex align-items-center">
            <h6 className="m-0 font-weight-bold text-2xl">
                    {plats.filter(plat => plat.category[0].category_code === selectedCategory).length} {t('filteredPlats')}
                </h6>
                <Link className="font-weight-bold ml-auto" to="trending.html">{t('Viewall')} <i className="feather-chevrons-right" /></Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {plats && plats.map((plat, index) => (
                    <div key={index} className="px-2 py-2">
                        <div className="list-card bg-white h-full rounded overflow-hidden relative shadow-lg">
                            <div className="list-card-image relative">
                                <div className="favourite-heart absolute top-2 right-2">
                                    <p><i className="feather-bookmark" /></p>
                                </div>
                                <div className="member-plan absolute bottom-2 left-2">
                                    <span className="badge badge-danger">{t('hot')}</span>
                                </div>
                                <a href="restaurant.html">
                                    <div className="w-full h-48 overflow-hidden">
                                        <img src={plat.image[0]} alt={plat.name} className="img-fluid w-full h-full object-cover" />
                                    </div>
                                </a>
                            </div>
                            <div className="p-3 relative">
                                <div className="list-card-body">
                                    <h6 className="mb-1 text-3xl text-gray-600">
                                        <a href="restaurant.html">{plat.name}</a>
                                    </h6>
                                    <p className="text-gray mb-1 text-lg">{plat.category[0].name}</p>
                                    <StarRating rating={plat.rating} />
                                    <p className="text-gray mb-1 text-sm font-bold">{plat.plat_price} {plat.currency}</p> 
                                </div>
                                <div className="list-card-badge flex items-center">
                                    {plat.discount ? (
                                        <span className="badge badge-danger mr-2">{t('offer')}</span>
                                    ) : (
                                        <span className="badge badge-secondary mr-2">{t('noOffer')}</span>
                                    )}
                                    <small>{plat.discount ? '60%' : ''}</small>
                                </div>
                                <div className="mt-2">
                                    <button className="btn btn-outline-primary">Add To Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>

    );
};

export default FilteredPlats;
