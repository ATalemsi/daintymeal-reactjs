import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProfilHeader from '../components/profile/Profilheader';
import PaymentCard from '../components/profile/PaymentCard';
import AdressDetailles from '../components/profile/AdressDetailles';
import HistoricTrans from '../components/profile/HistoricTrans';
import { FaFileExport, FaPlus } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from "../components/Footer";
import axios from 'axios';
import imageCompression from 'browser-image-compression';

const Profile = () => {
    const navigate = useNavigate();
    const isLoggedIn = !!localStorage.getItem('access_token');
    const [user, setUser] = useState(null);
    const [avatar, setAvatar] = useState(user?.avatar || 'img/user1.jpg');

    const logout = async () => {
        const accessToken = localStorage.getItem('access_token');
        const refreshToken = localStorage.getItem('refresh_token');

        try {
            await axios.post('https://x2r9rfvwwi.execute-api.eu-north-1.amazonaws.com/dev/auth/logout', { refreshToken }, {
                headers: {
                    'Authorization': `Bearer ${accessToken}`
                }
            });
        } catch (error) {
            console.error('Logout failed:', error.response ? error.response.data : error.message);
        } finally {
            localStorage.removeItem('access_token');
            localStorage.removeItem('refresh_token');
            localStorage.removeItem('user_code');
            localStorage.removeItem('geolocation_permission');
            navigate('/login-email');
        }
    };

    useEffect(() => {
        if (isLoggedIn) {
            const fetchUserData = async () => {
                const accessToken = localStorage.getItem('access_token');
                const userCode = localStorage.getItem('user_code');
                try {
                    const response = await axios.get(`https://x2r9rfvwwi.execute-api.eu-north-1.amazonaws.com/dev/users/${userCode}`, {
                        headers: {
                            'Authorization': `Bearer ${accessToken}`
                        }
                    });
                    setUser(response.data);
                } catch (error) {
                    console.error('Failed to fetch user data:', error.response ? error.response.data : error.message);
                }
            };

            fetchUserData();
        }
    }, [isLoggedIn]);

    const handleFileChange = async (event) => {
        const file = event.target.files[0];
        if (file) {

            const options = {
                maxSizeMB: 1,
                maxWidthOrHeight: 1024,
                useWebWorker: true,
            };

            try {
                const compressedFile = await imageCompression(file, options);

                const reader = new FileReader();
                reader.onloadend = async () => {
                    const base64String = reader.result;
                    setAvatar(base64String);

                    const accessToken = localStorage.getItem('access_token');
                    const userCode = localStorage.getItem('user_code');

                    try {
                        await axios.post(`https://x2r9rfvwwi.execute-api.eu-north-1.amazonaws.com/dev/users/${userCode}/avatar`, {
                            imageUrl: base64String
                        }, {
                            headers: {
                                'Authorization': `Bearer ${accessToken}`,
                                'Content-Type': 'application/json'
                            }
                        });
                        const response = await axios.get(`https://x2r9rfvwwi.execute-api.eu-north-1.amazonaws.com/dev/users/${userCode}`, {
                            headers: {
                                'Authorization': `Bearer ${accessToken}`
                            }
                        });
                        setUser(response.data);
                        setAvatar(response.data.avatar || 'img/user1.jpg');
                    } catch (error) {
                        console.error('Failed to update avatar:', error.response ? error.response.data : error.message);
                    }
                };
                reader.readAsDataURL(compressedFile);
            } catch (error) {
                console.error('Failed to compress image:', error.message);
            }
        }
    };

    if (!isLoggedIn) {
        return (
            <div className="osahan-profile">
                <ProfilHeader />
                <div className="container mx-auto p-4">
                    <div className="text-left text-lg">
                        <h2 className="text-2xl font-semibold mb-2">Your profile</h2>
                        <p className="mb-4">Log in to start planning your next trip.</p>
                        <button className="bg-pink-600 text-white py-2 px-4 rounded" onClick={() => navigate('/login-email')}>Log in</button>
                    </div>
                </div>

                <a href="faq.html" className="d-flex w-100 align-items-center border-bottom px-3 py-4">
                    <div className="left mr-3">
                        <h6 className="font-weight-bold m-0 text-dark"><i className="feather-truck bg-danger text-white p-2 rounded-circle mr-2" /> Delivery Support</h6>
                    </div>
                    <div className="right ml-auto">
                        <h6 className="font-weight-bold m-0"><i className="feather-chevron-right" /></h6>
                    </div>
                </a>
                <a href="contact-us.html" className="d-flex w-100 align-items-center border-bottom px-3 py-4">
                    <div className="left mr-3">
                        <h6 className="font-weight-bold m-0 text-dark"><i className="feather-phone bg-primary text-white p-2 rounded-circle mr-2" /> Contact</h6>
                    </div>
                    <div className="right ml-auto">
                        <h6 className="font-weight-bold m-0"><i className="feather-chevron-right" /></h6>
                    </div>
                </a>
                <a href="terms.html" className="d-flex w-100 align-items-center border-bottom px-3 py-4">
                    <div className="left mr-3">
                        <h6 className="font-weight-bold m-0 text-dark"><i className="feather-info bg-success text-white p-2 rounded-circle mr-2" /> Term of use</h6>
                    </div>
                    <div className="right ml-auto">
                        <h6 className="font-weight-bold m-0"><i className="feather-chevron-right" /></h6>
                    </div>
                </a>
                <a href="privacy.html" className="d-flex w-100 align-items-center px-3 py-4">
                    <div className="left mr-3">
                        <h6 className="font-weight-bold m-0 text-dark"><i className="feather-lock bg-warning text-white p-2 rounded-circle mr-2" /> Privacy policy</h6>
                    </div>
                    <div className="right ml-auto">
                        <h6 className="font-weight-bold m-0"><i className="feather-chevron-right" /></h6>
                    </div>
                </a>
                <Footer />
            </div>
        );
    }

    return (
        <>
            <ProfilHeader />
            <div className="osahan-profile mt-16">
                <div className="bg-white shadow">
                    <div className="flex items-center border-b p-3">
                        <div className="relative flex-shrink-0"> {/* Add relative class */}
                            <img src={user?.avatar || 'https://res.cloudinary.com/dz4pww2qv/image/upload/v1719590751/eylkigghkfmwmjlqhdm9.png'} className="rounded-full w-12 h-12" alt="User" />
                            <label
                                htmlFor="avatar-upload"
                                className="absolute right-0 cursor-pointer p-1 bg-gray-700 text-white rounded-full shadow-md"
                                style={{ bottom: '-5px' }}
                            >
                                <FaPlus className="w-2 h-2" />
                            </label>
                            <input
                                type="file"
                                id="avatar-upload"
                                accept="image/*"
                                onChange={handleFileChange}
                                className="hidden"
                            />
                        </div>
                        <div className="text-left ml-3">
                            <h6 className="mb-1 font-bold text-md">{user?.name || 'Inknown'} <i className="feather-check-circle text-green-500" /></h6>
                            <p className="text-sm m-0">{user?.email || 'Inknown@gmail.com'}</p>
                        </div>
                    </div>
                    <div className="osahan-credits d-flex align-items-center p-3">
                        <p className="m-0 text-sm">Accounts Credits</p>
                        <h6 className="m-0 ml-auto text-primary text-sm font-semibold">$0.00</h6>
                    </div>
                </div>

                <div className="bg-white shadow mt-3 profile-details mb-18">
                    <a data-toggle="modal" data-target="#paycard" className="flex w-full items-center border-b p-3 text-left">
                        <div className="mr-3 flex-1">
                            <h6 className="font-bold text-lg mb-1 text-dark">Payment Cards</h6>
                            <p className="text-xs m-0">Add a credit or debit card</p>
                        </div>
                        <div className="ml-auto">
                            <h6 className="font-weight-bold m-0"><i className="feather-chevron-right" /></h6>
                        </div>
                    </a>
                    <a data-toggle="modal" data-target="#exampleModal" className="flex w-full items-center border-b p-3 text-left">
                        <div className="mr-3 flex-1">
                            <h6 className="font-bold text-lg mr-2 text-dark">Address</h6>
                            <p className="text-xs m-0">Add or remove a delivery address</p>
                        </div>
                        <div className="ml-auto">
                            <h6 className="font-weight-bold m-0"><i className="feather-chevron-right" /></h6>
                        </div>
                    </a>
                    <a data-toggle="modal" data-target="#transactionModal" className="flex w-full items-center border-b p-3 text-left">
                        <div className="mr-3 flex-1">
                            <h6 className="font-bold text-lg mr-2 text-dark">Transaction History</h6>
                            <p className="text-xs m-0">View your past orders and transaction details</p>
                        </div>
                        <div className="ml-auto">
                            <h6 className="font-weight-bold m-0"><i className="feather-chevron-right" /></h6>
                        </div>
                    </a>
                    <div className="flex items-center border-b p-3 text-left">
                        <div className="mr-3 flex-1">
                            <h6 className="font-bold text-sm mb-1">Refer Friends</h6>
                            <p className="text-xs font-semibold text-primary m-0">Get $10.00 FREE</p>
                        </div>
                        <div className="ml-auto">
                            <h6 className="font-weight-bold m-0"><i className="feather-chevron-right" /></h6>
                        </div>
                    </div>

                    <a href="faq.html" className="d-flex w-100 align-items-center border-bottom px-3 py-4">
                        <div className="left mr-3">
                            <h6 className="font-weight-bold m-0 text-dark"><i className="feather-truck bg-danger text-white p-2 rounded-circle mr-2" /> Delivery Support</h6>
                        </div>
                        <div className="right ml-auto">
                            <h6 className="font-weight-bold m-0"><i className="feather-chevron-right" /></h6>
                        </div>
                    </a>
                    <a href="contact-us.html" className="d-flex w-100 align-items-center border-bottom px-3 py-4">
                        <div className="left mr-3">
                            <h6 className="font-weight-bold m-0 text-dark"><i className="feather-phone bg-primary text-white p-2 rounded-circle mr-2" /> Contact</h6>
                        </div>
                        <div className="right ml-auto">
                            <h6 className="font-weight-bold m-0"><i className="feather-chevron-right" /></h6>
                        </div>
                    </a>
                    <a href="terms.html" className="d-flex w-100 align-items-center border-bottom px-3 py-4">
                        <div className="left mr-3">
                            <h6 className="font-weight-bold m-0 text-dark"><i className="feather-info bg-success text-white p-2 rounded-circle mr-2" /> Term of use</h6>
                        </div>
                        <div className="right ml-auto">
                            <h6 className="font-weight-bold m-0"><i className="feather-chevron-right" /></h6>
                        </div>
                    </a>
                    <a href="privacy.html" className="d-flex w-100 align-items-center px-3 py-4">
                        <div className="left mr-3">
                            <h6 className="font-weight-bold m-0 text-dark"><i className="feather-lock bg-warning text-white p-2 rounded-circle mr-2" /> Privacy policy</h6>
                        </div>
                        <div className="right ml-auto">
                            <h6 className="font-weight-bold m-0"><i className="feather-chevron-right" /></h6>
                        </div>
                    </a>
                    <PaymentCard />
                    <AdressDetailles />
                    <HistoricTrans />

                    <a onClick={logout} className="flex w-full items-center p-3 text-left cursor-pointer">
                        <div className="mr-3 flex-1">
                            <h6 className="font-weight-bold mb-1 text-dark"><i className="feather-log-out bg-blue-700    text-white p-2 rounded-circle mr-2" />Logout</h6>
                        </div>
                        <div className="ml-auto">
                            <h6 className="font-weight-bold m-0"><i className="feather-chevron-right" /></h6>
                        </div>
                    </a>
                </div>
                <Navbar />
                <Footer />
            </div>
        </>
    );
};

export default Profile;
