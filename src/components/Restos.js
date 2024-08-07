import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import './slick-custom.css';
import { useTranslation } from 'react-i18next';

const Restos = ({ selectedCategory, selectedLanguage }) => {
    const [restos, setRestos] = useState([]);
    const { t, i18n } = useTranslation();

    useEffect(() => {
        const fetchRestos = async () => {
            try {
                const response = await axios.get('https://x2r9rfvwwi.execute-api.eu-north-1.amazonaws.com/dev/restos');
                setRestos(response.data);
            } catch (error) {
                console.error('Error fetching restos:', error);
            }
        };
        fetchRestos();
    }, []);

    const filteredRestos = selectedCategory
        ? restos.filter((resto) => resto.categories.some((category) => category.category_code === selectedCategory))
        : restos;

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const getName = (resto) => {
        switch (selectedLanguage) {
            case 'ar':
                return resto.ar.name;
            case 'fr':
                return resto.fr.name;
            default:
                return resto.en.name;
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

    const direction = i18n.dir();

    return (
        <div className="scrolling-wrapper2" style={{ direction }}>
            {filteredRestos.length > 0 ? (
                filteredRestos.map((resto, index) => (
                    <Link key={index} to={`/restaurant/${resto.resto_code}`} className="carte rounded-lg no-underline text-black">
                        <div className="osahan-slider-item py-3 px-1 mx-2">
                            <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-lg">
                                <div className="list-card-image">
                                    <Slider {...settings}>
                                        {resto.image.map((imgSrc, imgIndex) => (
                                            <div key={imgIndex}>
                                                <img src={imgSrc} className="img-fluid item-img" style={{ width: '300px', height: '130px' }} alt="Restaurant" />
                                            </div>
                                        ))}
                                    </Slider>
                                    <div className="star position-absolute">
                                        <span className="badge badge-success"><i className="feather-star" />{resto.rating}</span>
                                    </div>
                                    <div className="favourite-heart position-absolute"><p className='cursor-pointer'><i className="feather-bookmark" /></p>
                                    </div>
                                </div>
                                <div className="p-3 position-relative">
                                    <div className="list-card-body">
                                        <h6 className="mb-1">
                                            {getName(resto)}
                                        </h6>
                                        <p className="text-gray mb-3">
                                            <span className="text-gray-500">{getAddress(resto.address[0])}</span>
                                        </p>
                                        <p className="text-gray text-xs mb-3 time">
                                            <span className="bg-light text-dark rounded-sm pl-2 pb-1 pt-1 pr-2"> {resto.workingTime}</span> : {t('timeWork')}
                                        </p>
                                    </div>
                                    <div className="list-card-badge d-flex align-items-center">
                                        <span className="badge badge-danger mr-2"> {t('offer')} </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))
            ) : (
                <div className="flex flex-col justify-center items-center h-full text-center">
                    <img
                        src="https://res.cloudinary.com/dz4pww2qv/image/upload/v1720546321/uwd8hlq2ffryixpuyipp.jpg"
                        alt="No Restaurants"
                        className="img-fluid w-48 h-32"
                    />
                    <p>{t('noRestosForCategory')}</p>
                </div>
            )}
        </div>
    );
};

export default Restos;
