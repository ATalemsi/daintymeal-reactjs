// src/components/Main.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StarRating from './startRating/StarRating';
import { useTranslation } from 'react-i18next';
import Slider from 'react-slick';
import './slick-custom.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import Modal from 'react-modal';

// React-Modal setup
Modal.setAppElement('#root');

const Watchlist = () => {
    const [watchlistplats, setWatchlistPlats] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const { t } = useTranslation();

    useEffect(() => {
        fetchWatchlistPlats();
    }, []);

    const fetchWatchlistPlats = async () => {
        try {
            const userCode = localStorage.getItem('user_code');
            if (!userCode) {
                console.error('User code not found in local storage');
                return;
            }

            const response = await axios.get(`https://x2r9rfvwwi.execute-api.eu-north-1.amazonaws.com/dev/watchlist/${userCode}`);

            console.log('Watchlist response:', response.data);

            if (Array.isArray(response.data)) {
                setWatchlistPlats(response.data);
            } else {
                console.error('Response data is not an array:', response.data);
            }
        } catch (error) {
            console.error('Error fetching watchlist plats:', error);
        }
    };

    const handleRemoveClick = async (plat_code) => {
        try {
            const userCode = localStorage.getItem('user_code');
            if (!userCode) {
                console.error('User code not found in local storage');
                return;
            }

            await axios.delete(
                `https://x2r9rfvwwi.execute-api.eu-north-1.amazonaws.com/dev/watchlist`,
                {
                    headers: { 'Authorization': `Bearer ${localStorage.getItem('access_token')}` },
                    data: { user_code: userCode, plat_code }
                }
            );

            // Refresh the watchlist
            fetchWatchlistPlats();

            setModalMessage(t('Plat removed from watchlist!'));
            setIsModalOpen(true);
        } catch (error) {
            console.error('Error removing plat from watchlist:', error);
            setModalMessage(t('Error removing plat from watchlist'));
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
        <div className="most_popular px-3 mb-6 ">
            <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                contentLabel="Watchlist Status"
                style={{
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
                }}
            >
                <div>
                    <h2 className="text-2xl mb-4">{modalMessage}</h2>
                    <button onClick={closeModal} className="bg-pink-600 text-white py-2 px-4 rounded">
                        {t('Close')}
                    </button>
                </div>
            </Modal>
            {watchlistplats.length === 0 ? (
                <div className="no-plats-container flex flex-col items-center justify-center h-full">
                    <img
                        src="https://res.cloudinary.com/dz4pww2qv/image/upload/v1717851494/ep4bkvb42vi3jhixixww.jpg"
                        alt="No Plats Available"
                        className="no-plats-image mb-4"
                    />
                    <p className="text-lg text-gray-500">{t('No Plats In Watchlist')}</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {watchlistplats.map((watchlistplat, index) => (
                        <div key={index} className="px-2 py-2 text-left">
                            <div className="list-card bg-white h-full rounded overflow-hidden relative shadow-lg">
                                <div className="list-card-image relative">
                                    <div className="favourite-heart absolute top-2 right-2">
                                        <p className="cursor-pointer">
                                            <FontAwesomeIcon icon="fa-regular fa-star" />
                                        </p>
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
                                    <div className="mt-2 flex gap-2">
                                        <button className="btn btn-outline-primary">{t('addToCart')}</button>
                                        <button
                                            className="btn btn-outline-danger"
                                            onClick={() => handleRemoveClick(watchlistplat.plat?.plat_code)}
                                        >
                                            <FontAwesomeIcon icon={faTrash} className="text-red-500 mr-2" />
                                            {t('Delete')}
                                        </button>
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
