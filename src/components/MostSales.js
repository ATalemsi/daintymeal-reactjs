import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faBookmark as faBookmarkOutline } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';



const MostSales = () => {
    const [mostsaleplats, setMostSalesPlats] = useState([]);
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
        const fetchMostSalesPlats = async () => {
            try {
                const response = await axios.get('https://x2r9rfvwwi.execute-api.eu-north-1.amazonaws.com/dev/plats/two');
                setMostSalesPlats(response.data);
            } catch (error) {
                console.error('Error fetching most sale plats:', error);
            }
        };
        fetchMostSalesPlats();
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
    return (
        <div className="most_sale px-3 pb-5">
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
            <div className="row">
                {mostsaleplats && mostsaleplats.map((mostsaleplat, index) => (
                    <div key={index} className="col-12 pt-2">
                        <div className="d-flex align-items-center list-card bg-white h-100 rounded overflow-hidden position-relative shadow-lg homepage-osahan-list-items">
                            <Link  to="/new-feature" className="list-card-image">
                                <div className="star position-absolute"><span className="badge badge-success"><i className="feather-star" />{mostsaleplat.rating}</span></div>
                                <div className="favourite-heart absolute top-2 right-2">
                                    <p
                                        className="cursor-pointer text-2xl "
                                        onClick={() => handleBookmarkClick(mostsaleplat.plat_code)}
                                    >
                                        <FontAwesomeIcon
                                            icon={favorites[mostsaleplat.plat_code] ? faBookmark : faBookmarkOutline}
                                            className={favorites[mostsaleplat.plat_code] ? 'text-red-500' : 'text-slate-50'}
                                        />
                                    </p>
                                </div>
                                <div className="member-plan position-absolute">
                                        <span className="badge badge-danger mr-2">{mostsaleplat.category[0].name}</span>
                                </div>
                                <p >
                                    <img src={mostsaleplat.image[0]} alt={mostsaleplat.name} className="img-fluid item-img w-100" />
                                </p>
                            </Link>
                            <Link  to="/new-feature" className="p-3 position-relative">
                                <div className="list-card-body">
                                    <h6 className="mb-1"><p className="text-black">{mostsaleplat.name}
                                    </p>
                                    </h6>
                                    <p className="text-gray mb-3 time"><span className="bg-light text-dark font-bold rounded-sm pl-2 pb-1 pt-1 pr-2"> </span> {mostsaleplat.plat_price} {mostsaleplat.currency} <span className="float-right text-black-50"></span>  :{t('price')}</p>
                                </div>
                                <div className="list-card-badge d-flex align-items-center">
                                {mostsaleplat.discount ? (
                                        <span className="badge badge-danger mr-2"> {t('offer')}</span>
                                    ) : (
                                        <span className="badge badge-secondary mr-2">{t('noOffer')}</span>
                                    )}
                                    <small>{mostsaleplat.discount ? '-60% ' : 'No Discount'}</small>
                                </div>
                            </Link>
                        </div>
                    </div>

                ))}

            </div>
        </div>


    );
};

export default MostSales;
