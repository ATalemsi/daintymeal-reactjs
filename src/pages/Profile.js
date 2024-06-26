import React from 'react';
import ProfilHeader from '../components/profile/Profilheader';
import PaymentCard from '../components/profile/PaymentCard';
import AdressDetailles from '../components/profile/AdressDetailles';
import HistoricTrans from '../components/profile/HistoricTrans';
import Navbar from '../components/Navbar';
import Footer from "../components/Footer";



const Profile = () => {
    return (
        <>
            <div class="osahan-profile">
                <ProfilHeader />
                <div className=" osahan-profile">
                    <div className="bg-white shadow">
                        <div className="d-flex align-items-center border-bottom p-3">
                            <div className="left mr-3">
                                <img src="img/user1.jpg" className="rounded-circle" />
                            </div>
                            <div className="right">
                                <h6 className="mb-1 font-bold text-lg">Nellie H. Riggs <i className="feather-check-circle text-success" /></h6>
                                <p className="text-sm m-0 ">yourmail@gmail.com</p>
                            </div>
                        </div>
                        <div className="osahan-credits d-flex align-items-center p-3">
                            <p className="m-0 text-sm">Accounts Credits</p>
                            <h6 className="m-0 ml-auto text-primary text-sm font-semibold">$52.25</h6>
                        </div>
                    </div>
                    
                    <div className="bg-white shadow mt-3 profile-details">
                        <a data-toggle="modal" data-target="#paycard" className="d-flex w-100 align-items-center border-bottom p-3">
                            <div className="left mr-3">
                                <h6 className="font-bold text-lg mb-1 text-dark">Payment Cards</h6>
                                <p className="text-xs  m-0">Add a credit or debit card</p>
                            </div>
                            <div className="right ml-auto">
                                <h6 className="font-weight-bold m-0"><i className="feather-chevron-right" /></h6>
                            </div>
                        </a>
                        <a data-toggle="modal" data-target="#exampleModal" className="d-flex w-100 align-items-center border-bottom p-3">
                            <div className="left mr-3">
                                <h6 className="font-bold text-lg mr-2 text-dark">Address</h6>
                                <p className="text-xs m-0">Add or remove a delivery address</p>
                            </div>
                            <div className="right ml-auto">
                                <h6 className="font-weight-bold m-0"><i className="feather-chevron-right" /></h6>
                            </div>
                        </a>
                        <a data-toggle="modal" data-target="#transactionModal" className="d-flex w-100 align-items-center border-bottom p-3">
                            <div className="left mr-3">
                                <h6 className="font-bold text-lg mr-2 text-dark">Transaction History</h6>
                                <p className="text-xs m-0">View your past orders and transaction details</p>
                            </div>
                            <div className="right ml-auto">
                                <h6 className="font-weight-bold m-0"><i className="feather-chevron-right" /></h6>
                            </div>
                        </a>
                        <div className="d-flex align-items-center border-bottom p-3">
                            <div className="left mr-3">
                                <h6 className="font-bold text-sm mb-1">Refer Friends</h6>
                                <p className="text-xs font-semibold text-primary m-0">Get $10.00 FREE</p>
                            </div>
                            <div className="right ml-auto">
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
                    </div>
                </div>

            </div>
            <PaymentCard />
            <AdressDetailles />
            <HistoricTrans />
            <Navbar />
            <Footer />
        </>

    );
};

export default Profile;
