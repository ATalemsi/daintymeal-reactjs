import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StarRating from './startRating/StarRating';
import { useTranslation } from 'react-i18next';
import Slider from 'react-slick';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faBookmark as faBookmarkOutline } from '@fortawesome/free-solid-svg-icons';

// React-Modal setup
Modal.setAppElement('#root');

const Myplats = () => {
    const [myplats, setMyplats] = useState([]);
    const [favorites, setFavorites] = useState({});
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
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
        const fetchMyPlatsAndFavorites = async () => {
            try {
                const userCode = localStorage.getItem('user_code');
                if (!userCode) {
                    console.error('User code not found in local storage');
                    return;
                }

                // Fetching plats
                const platsResponse = await axios.get('https://x2r9rfvwwi.execute-api.eu-north-1.amazonaws.com/dev/plats/two');
                setMyplats(platsResponse.data);

                // Fetching watchlist data
                const watchlistResponse = await axios.get(`https://x2r9rfvwwi.execute-api.eu-north-1.amazonaws.com/dev/watchlist/${userCode}`, {
                    headers: { 'Authorization': `Bearer ${localStorage.getItem('access_token')}` }
                });

                // Fetching all plats to map plat_id to plat_code
                const platsMappingResponse = await axios.get('https://x2r9rfvwwi.execute-api.eu-north-1.amazonaws.com/dev/plats');
                const platCodeMap = {};
                platsMappingResponse.data.forEach(plat => {
                    platCodeMap[plat._id] = plat.plat_code;
                });

                // Initializing favorites from watchlist response
                const initialFavorites = {};
                watchlistResponse.data.forEach(plat => {
                    const plat_code = platCodeMap[plat.plat];
                    if (plat_code) {
                        initialFavorites[plat_code] = true;
                    }
                });
                setFavorites(initialFavorites);

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchMyPlatsAndFavorites();
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

            if (response.status === 409) {
                setModalMessage(t('Plat is already in watchlist'));
            } else if (newFavoriteStatus) {
                setModalMessage(t('Plat added to watchlist!'));
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {myplats.map((myplat, index) => (
                    <div key={index} className="px-2 py-2">
                        <div className="list-card bg-white h-full rounded overflow-hidden relative shadow-lg">
                            <div className="list-card-image relative w-full h-48 overflow-hidden">
                                <Slider {...settings}>
                                    {myplat.image.map((imgSrc, imgIndex) => (
                                        <div key={imgIndex}>
                                            <img
                                                src={imgSrc}
                                                className="w-full h-48 object-cover"
                                                alt={myplat.name}
                                            />
                                        </div>
                                    ))}
                                </Slider>
                                <div className="favourite-heart absolute top-2 right-2">
                                    <p
                                        className="cursor-pointer text-2xl "
                                        onClick={() => handleBookmarkClick(myplat.plat_code)}
                                    >
                                        <FontAwesomeIcon
                                            icon={favorites[myplat.plat_code] ? faBookmark : faBookmarkOutline}
                                            className={favorites[myplat.plat_code] ? 'text-red-500' : 'text-slate-50'}
                                        />
                                    </p>
                                </div>
                                <div className="member-plan absolute bottom-2 left-2">
                                    <span className="bg-green-500 text-white text-xs px-2 py-1 rounded">{t('hot')}</span>
                                </div>
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
                                        <span className="bg-red-500 text-white text-xs px-2 py-1 rounded mr-2">{t('offer')}</span>
                                    ) : (
                                        <span className="bg-gray-300 text-gray-800 text-xs px-2 py-1 rounded mr-2">{t('noOffer')}</span>
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
