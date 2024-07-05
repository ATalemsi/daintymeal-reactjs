// src/components/Main.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StarRating from './startRating/StarRating';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import './slick-custom.css';



const PopularRestos = ({ selectedLanguage }) => {
    const [popularestos, setPopularRestos] = useState([]);
    const { t } = useTranslation();

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
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const getName = (popularesto) => {
        switch (selectedLanguage) {
            case 'ar':
                return popularesto.ar.name;
            case 'fr':
                return popularesto.fr.name;
            default:
                return popularesto.en.name;
        }
    };
    const getAddress = (address) => {
        switch (selectedLanguage) {
            case 'ar':
                return `${address.translations.ar.street}, ${address.translations.ar.city}, ${address.translations.ar.state}, ${address.translations.ar.country}`;
            case 'fr':
                return `${address.translations.fr.street}, ${address.translations.fr.city}, ${address.translations.fr.state}, ${address.translations.fr.country}`;
            default:
                return `${address.street}, ${address.city}, ${address.state}, ${address.country}`;
        }
    };

    return (
        <div className="most_popular px-3">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {popularestos && popularestos.map((popularesto, index) => (
                    <div key={index} className="px-2 py-2">
                        <div className="list-card bg-white h-full rounded overflow-hidden relative shadow-lg">
                            <div className="list-card-image relative">

                                <p>
                                    <div className="w-full h-48 overflow-hidden">
                                        <Slider {...settings}>
                                            {popularesto.image.map((imgSrc, imgIndex) => (
                                                <div key={imgIndex}>
                                                    <img
                                                        src={imgSrc}
                                                        className="img-fluid w-full h-full object-cover"
                                                        alt={getName(popularesto)}
                                                    />
                                                </div>
                                            ))}
                                        </Slider>
                                    </div>
                                </p>
                                <div className="favourite-heart absolute top-2 right-2">
                                    <p ><i className="feather-bookmark" /></p>
                                </div>
                                <div className="member-plan absolute bottom-2 left-2">
                                    <span className="badge badge-danger">{t('hot')}</span>
                                </div>
                            </div>
                            <div className="p-3 relative">
                                <div className="list-card-body">
                                    <h6 className="mb-1 text-3xl text-gray-600">
                                        <Link to={`/restaurant/${popularesto.resto_code}`} className="text-black">
                                            {getName(popularesto)}
                                        </Link>
                                    </h6>
                                    <StarRating rating={popularesto.rating} />
                                    <p className="text-gray mb-1 text-sm font-bold">{getAddress(popularesto.address[0])}</p>
                                </div>
                                <div className="list-card-badge flex items-center">
                                    <span className="badge badge-danger mr-2"> {t('timeWork')} </span>
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
