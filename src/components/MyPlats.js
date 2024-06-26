import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StarRating from './startRating/StarRating';
import { useTranslation } from 'react-i18next';
import Slider from 'react-slick';
import './slick-custom.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Myplats = () => {
    const [myplats, setMyplats] = useState([]);
    const { t } = useTranslation();

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


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className="most_popular px-3">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {myplats && myplats.map((myplat, index) => (
                    <div key={index} className="px-2 py-2">
                        <div className="list-card bg-white h-full rounded overflow-hidden relative shadow-lg">
                            <div className="list-card-image relative">
                                <div className="favourite-heart absolute top-2 right-2">
                                <p className="cursor-pointer"><FontAwesomeIcon icon="fa-regular fa-star" /></p>
                                </div>
                                <div className="member-plan absolute bottom-2 left-2">
                                    <span className="badge badge-danger">{t('hot')}</span>
                                </div>
                                <p>
                                    <div className="w-full h-48 overflow-hidden">
                                        <Slider {...settings}>
                                            {myplat.image.map((imgSrc, imgIndex) => (
                                                <div key={imgIndex}>
                                                    <img
                                                        src={imgSrc}
                                                        className="img-fluid w-full h-48 object-cover"
                                                        alt={myplat.name}
                                                    />
                                                </div>
                                            ))}
                                        </Slider>
                                    </div>
                                </p>
                            </div>
                            <div className="p-3 relative">
                                <div className="list-card-body">
                                    <h6 className="mb-1 text-3xl text-gray-600">
                                        <a href="restaurant.html">{myplat.name}</a>
                                    </h6>
                                    <p className="text-gray mb-1 text-lg">{myplat.category[0].name}</p>
                                    <StarRating rating={myplat.rating} />
                                    <p className="text-gray mb-1 text-sm font-bold">{myplat.plat_price} {myplat.currency}</p>
                                </div>
                                <div className="list-card-badge flex items-center">
                                    {myplat.discount ? (
                                        <span className="badge badge-danger mr-2">{t('offer')}</span>
                                    ) : (
                                        <span className="badge badge-secondary mr-2">{t('noOffer')}</span>
                                    )}
                                    <small>{myplat.discount ? '-60% ' : ''}</small>
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
