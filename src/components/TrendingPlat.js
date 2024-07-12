import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StarRating from './startRating/StarRating';
import { useTranslation } from 'react-i18next';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import './slick-custom.css';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faBookmark as faBookmarkOutline } from '@fortawesome/free-solid-svg-icons';

const TrendingPlat = () => {
    const [trendingplats, setTrandingPlats] = useState([]);
    const [favorites, setFavorites] = useState({});
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const [loading, setLoading] = useState(true); // Add state for loading
    const { t } = useTranslation();
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            padding: '20px',
            borderRadius: '10px',
            border: '1px solid #ccc',
            background: '#fff',
        },
        overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
        },
    };

    useEffect(() => {
        const fetchTrendingPlats = async () => {
            try {
                const response = await axios.get('https://x2r9rfvwwi.execute-api.eu-north-1.amazonaws.com/dev/plats/trending');
                setTrandingPlats(response.data);
                setLoading(false); // Set loading to false after data is fetched
            } catch (error) {
                console.error('Error fetching trending plats:', error);
                setLoading(false); // Set loading to false on error
            }
        };
        fetchTrendingPlats();
    }, []);

    const handleBookmarkClick = async (plat_code) => {
        try {
            const userCode = localStorage.getItem('user_code');
            if (!userCode) {
                console.error('User code not found in local storage');
                return;
            }

            const newFavoriteStatus = !favorites[plat_code];
            setFavorites({ ...favorites, [plat_code]: newFavoriteStatus });

            const url = `https://x2r9rfvwwi.execute-api.eu-north-1.amazonaws.com/dev/watchlist`;
            const method = newFavoriteStatus ? 'POST' : 'DELETE';
            const data = { user_code: userCode, plat_code: plat_code };

            const response = await axios({
                url,
                method,
                data,
                headers: { 'Authorization': `Bearer ${localStorage.getItem('access_token')}` }
            });

            if (newFavoriteStatus) {
                setModalMessage(t('Plat added to watchlist!'));
                
            } else if (response.status === 409) {
                setModalMessage(t('Plat is already in watchlist'));
            } else {
                setModalMessage(t('Plat removed from watchlist!'));
            }
            setIsModalOpen(true);
        } catch (error) {
            console.error('Error updating watchlist:', error);
            setModalMessage(t('Error updating watchlist'));
            setIsModalOpen(true);
        }
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className="most_popular px-3">
            <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                contentLabel="Watchlist Status"
                style={customStyles}
                overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
            >
                <div>
                    <h2 className="text-2xl mb-4">{modalMessage}</h2>
                    <button onClick={closeModal} className="bg-pink-600 text-white py-2 px-4 rounded">
                        {t('Close')}
                    </button>
                </div>
            </Modal>

            {loading ? (  
                <div className="flex justify-center items-center h-48">
                    <svg
                        className="animate-spin h-8 w-8 text-gray-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                        ></circle>
                        <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291l-3.709 3.71A9.974 9.974 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-3.647z"
                        ></path>
                    </svg>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {trendingplats && trendingplats.map((trendingplat, index) => (
                        <div key={index} className="px-2 py-2">
                            <div className="list-card bg-white h-full rounded overflow-hidden relative shadow-lg">
                                <div className="list-card-image relative">
                                    <div className="w-full h-48 overflow-hidden">
                                        <Slider {...settings}>
                                            {trendingplat.image.map((imgSrc, imgIndex) => (
                                                <div key={imgIndex}>
                                                    <img
                                                        src={imgSrc}
                                                        className="img-fluid w-full h-48 object-cover"
                                                        alt={trendingplat.name}
                                                    />
                                                </div>
                                            ))}
                                        </Slider>
                                        <div className="favourite-heart absolute top-2 right-2">
                                            <p
                                                className="cursor-pointer text-2xl "
                                                onClick={() => handleBookmarkClick(trendingplat.plat_code)}
                                            >
                                                <FontAwesomeIcon
                                                    icon={favorites[trendingplat.plat_code] ? faBookmark : faBookmarkOutline}
                                                    className={favorites[trendingplat.plat_code] ? 'text-red-500' : 'text-slate-50'}
                                                />
                                            </p>
                                        </div>
                                        <div className="member-plan absolute bottom-2 left-2">
                                            <span className="badge badge-danger">{t('hot')}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-3 relative">
                                    <div className="list-card-body">
                                        <h6 className="mb-1 text-3xl text-gray-600">
                                            <Link to="/new-feature">{trendingplat.name}</Link>
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
                                        <small>{trendingplat.discount ? '60%' : ''}</small>
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

export default TrendingPlat;
