import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import './slick-custom.css';

const FilteredPlats = ({ selectedCategory }) => {
    const [plats, setPlats] = useState([]);
    const { t } = useTranslation();

    useEffect(() => {
        const fetchPlats = async () => {
            try {
                const response = await axios.get(` https://x2r9rfvwwi.execute-api.eu-north-1.amazonaws.com/dev/plats?category=${selectedCategory}`);
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
        <div className="scrolling-wrapper2">
            {plats.map((plat, index) => (
                <div key={index} className="carte rounded-lg">
                    <div className="osahan-slider-item py-3 px-1">
                        <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-lg">
                            <div className="list-card-image">
                                <div className="star position-absolute"><span className="badge badge-success"><i className="feather-star" />{plat.rating}</span></div>
                                <div className="favourite-heart position-absolute"><a href="#"><i className="feather-bookmark" /></a></div>
                                <img src={plat.image[0]} className="img-fluid item-img" style={{ width: '300px', height: '130px' }} alt="Plat" />
                            </div>
                            <div className="p-3 position-relative">
                                <div className="list-card-body">
                                    <h6 className="mb-1">{plat.name}</h6>
                                    <p className="text-muted card-text">{t('platPrice', { price: plat.plat_price, currency: plat.currency })}</p>
                                    <p className="text-muted card-text">{t('rating', { rating: plat.rating })}</p>
                                    <div className="d-flex align-items-center">
                                        <span className="badge badge-success">{t('category')}: {plat.category.map(cat => cat.translation?.fr?.name).join(', ')}</span>
                                    </div>
                                    <div className="d-flex align-items-center mt-2">
                                        <span className="badge badge-success">{t('status')}: {plat.status}</span>
                                    </div>
                                    <div className="mt-2">
                                        <button className="btn btn-outline-primary">{t('addToCart')}</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FilteredPlats;
