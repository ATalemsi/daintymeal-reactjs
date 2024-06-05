// src/components/Main.js
import React from 'react';


const Myplats = () => {
    return (
        <div className="most_popular px-3">
            <div className="grid grid-cols-2 gap-4">
                <div className="px-2 py-2">
                    <div className="list-card bg-white h-full rounded overflow-hidden relative shadow-lg">
                        <div className="list-card-image relative">
                            <div className="star absolute top-2 left-2"><span className="badge badge-success"><i className="feather-star" /> 4.4</span></div>
                            <div className="favourite-heart absolute top-2 right-2"><a href="#"><i className="feather-bookmark" /></a></div>
                            <div className="member-plan absolute bottom-2 left-2"><span className="badge badge-danger">HOT</span></div>
                            <a href="restaurant.html">
                                <img src="img/popular10.png" className="img-fluid item-img w-full" />
                            </a>
                        </div>
                        <div className="p-3 relative">
                            <div className="list-card-body">
                                <h6 className="mb-1"><a href="restaurant.html" className="text-black">The Daintymeal Restaurant</a></h6>
                                <p className="text-gray mb-1 text-sm">Maârif, Casablanca</p>
                                <ul className="rating-stars list-none p-0 flex">
                                    <li className="flex">
                                        <i className="feather-star star_active" />
                                        <i className="feather-star star_active" />
                                        <i className="feather-star star_active" />
                                        <i className="feather-star star_active" />
                                        <i className="feather-star" />
                                    </li>
                                </ul>
                            </div>
                            <div className="list-card-badge flex items-center">
                                <span className="badge badge-danger mr-2">OFFER</span> <small>60% NEW50</small>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="px-2 py-2">
                    <div className="list-card bg-white h-full rounded overflow-hidden relative shadow-lg">
                        <div className="list-card-image relative">
                            <div className="star absolute top-2 left-2"><span className="badge badge-success"><i className="feather-star" /> 2.4</span></div>
                            <div className="favourite-heart absolute top-2 right-2"><a href="#"><i className="feather-bookmark" /></a></div>
                            <div className="member-plan absolute bottom-2 left-2"><span className="badge badge-warning">Buy 1 Get 1 free</span></div>
                            <a href="restaurant.html">
                                <img src="img/popular20.png" className="img-fluid item-img w-full" />
                            </a>
                        </div>
                        <div className="p-3 relative">
                            <div className="list-card-body">
                                <h6 className="mb-1"><a href="restaurant.html" className="text-black">Thai Famous Indian Cuisine</a></h6>
                                <p className="text-gray mb-1 text-sm">Indian, Pure veg</p>
                                <ul className="rating-stars list-none p-0 flex">
                                    <li className="flex">
                                        <i className="feather-star star_active" />
                                        <i className="feather-star star_active" />
                                        <i className="feather-star star_active" />
                                        <i className="feather-star star_active" />
                                        <i className="feather-star" />
                                    </li>
                                </ul>
                            </div>
                            <div className="list-card-badge flex items-center">
                                <span className="badge badge-danger mr-2">OFFER</span> <small>50% off</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Myplats;
