// src/components/Main.js
import React from 'react';


const PopularPlat = () => {
    return (
        <div className="most_popular px-3">
            <div className="row">
                <div className="col-6 pr-1">
                    <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-lg">
                        <div className="list-card-image">
                            <div className="star position-absolute"><span className="badge badge-success"><i className="feather-star" /> 4.4</span></div>
                            <div className="favourite-heart position-absolute"><a href="#"><i className="feather-bookmark" /></a></div>
                            <div className="member-plan position-absolute"><span className="badge badge-danger">HOT</span></div>
                            <a href="restaurant.html">
                                <img src="img/popular1.png" className="img-fluid item-img w-100" />
                            </a>
                        </div>
                        <div className="p-3 position-relative">
                            <div className="list-card-body">
                                <h6 className="mb-1"><a href="restaurant.html" className="text-black">The Daintymeal Restaurant
                                </a>
                                </h6>
                                <p className="text-gray mb-1 small">Maârif, Casablanca</p>
                                <p className="text-gray mb-1 rating">
                                </p><ul className="rating-stars list-unstyled">
                                    <li>
                                        <i className="feather-star star_active" />
                                        <i className="feather-star star_active" />
                                        <i className="feather-star star_active" />
                                        <i className="feather-star star_active" />
                                        <i className="feather-star" />
                                    </li>
                                </ul>
                                <p />
                            </div>
                            <div className="list-card-badge d-flex align-items-center">
                                <span className="badge badge-danger mr-2">OFFER</span> <small>60% NEW50</small>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-6 pl-1">
                    <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-lg">
                        <div className="list-card-image">
                            <div className="star position-absolute"><span className="badge badge-success"><i className="feather-star" /> 2.4</span></div>
                            <div className="favourite-heart position-absolute"><a href="#"><i className="feather-bookmark" /></a></div>
                            <div className="member-plan position-absolute"><span className="badge badge-warning">Buy 1 Get 1 free</span></div>
                            <a href="restaurant.html">
                                <img src="img/popular2.png" className="img-fluid item-img w-100" />
                            </a>
                        </div>
                        <div className="p-3 position-relative">
                            <div className="list-card-body">
                                <h6 className="mb-1"><a href="restaurant.html" className="text-black">Thai Famous Indian Cuisine</a></h6>
                                <p className="text-gray mb-1 small">Indian, Pure veg</p>
                                <p className="text-gray mb-1 rating">
                                </p><ul className="rating-stars list-unstyled">
                                    <li>
                                        <i className="feather-star star_active" />
                                        <i className="feather-star star_active" />
                                        <i className="feather-star star_active" />
                                        <i className="feather-star star_active" />
                                        <i className="feather-star" />
                                    </li>
                                </ul>
                                <p />
                            </div>
                            <div className="list-card-badge d-flex align-items-center">
                                <span className="badge badge-danger mr-2">OFFER</span> <small>50% off</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row pt-2">
                <div className="col-6 pr-1">
                    <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-lg">
                        <div className="list-card-image">
                            <div className="star position-absolute"><span className="badge badge-success"><i className="feather-star" /> 4.3</span></div>
                            <div className="favourite-heart position-absolute"><a href="#"><i className="feather-bookmark" /></a></div>
                            <a href="restaurant.html">
                                <img src="img/popular3.png" className="img-fluid item-img w-100" />
                            </a>
                        </div>
                        <div className="p-3 position-relative">
                            <div className="list-card-body">
                                <h6 className="mb-1"><a href="restaurant.html" className="text-black">The Sakafo Restaurant
                                </a>
                                </h6>
                                <p className="text-gray mb-1 small">Hamburgers, Pure veg</p>
                                <p className="text-gray mb-1 rating">
                                </p><ul className="rating-stars list-unstyled">
                                    <li>
                                        <i className="feather-star star_active" />
                                        <i className="feather-star star_active" />
                                        <i className="feather-star star_active" />
                                        <i className="feather-star star_active" />
                                        <i className="feather-star" />
                                    </li>
                                </ul>
                                <p />
                            </div>
                            <div className="list-card-badge d-flex align-items-center">
                                <span className="badge badge-danger mr-2">OFFER</span> <small>30% NEW50</small>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-6 pl-1">
                    <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-lg">
                        <div className="list-card-image">
                            <div className="star position-absolute"><span className="badge badge-success"><i className="feather-star" /> 3.3</span></div>
                            <div className="favourite-heart position-absolute"><a href="#"><i className="feather-bookmark" /></a></div>
                            <div className="member-plan position-absolute"><span className="badge badge-dark">Ads</span></div>
                            <a href="restaurant.html">
                                <img src="img/popular4.png" className="img-fluid item-img w-100" />
                            </a>
                        </div>
                        <div className="p-3 position-relative">
                            <div className="list-card-body">
                                <h6 className="mb-1"><a href="restaurant.html" className="text-black">Bite Me Now Sandwiches</a></h6>
                                <p className="text-gray mb-1 small">American, Pure veg</p>
                                <p className="text-gray mb-1 rating">
                                </p><ul className="rating-stars list-unstyled">
                                    <li>
                                        <i className="feather-star star_active" />
                                        <i className="feather-star star_active" />
                                        <i className="feather-star star_active" />
                                        <i className="feather-star star_active" />
                                        <i className="feather-star" />
                                    </li>
                                </ul>
                                <p />
                            </div>
                            <div className="list-card-badge d-flex align-items-center">
                                <span className="badge badge-success mr-2">OFFER</span> <small>40% off</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row pt-2">
                <div className="col-6 pr-1">
                    <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-lg">
                        <div className="list-card-image">
                            <div className="star position-absolute"><span className="badge badge-success"><i className="feather-star" /> 4.4</span></div>
                            <div className="favourite-heart position-absolute"><a href="#"><i className="feather-bookmark" /></a></div>
                            <div className="member-plan position-absolute"><span className="badge badge-danger">HOT</span></div>
                            <a href="restaurant.html">
                                <img src="img/brochettes.png" className="img-fluid item-img w-100" />
                            </a>
                        </div>
                        <div className="p-3 position-relative">
                            <div className="list-card-body">
                                <h6 className="mb-1"><a href="restaurant.html" className="text-black">The Sakafo Restaurant
                                </a>
                                </h6>
                                <p className="text-gray mb-1 small">North, Hamburgers</p>
                                <p className="text-gray mb-1 rating">
                                </p><ul className="rating-stars list-unstyled">
                                    <li>
                                        <i className="feather-star star_active" />
                                        <i className="feather-star star_active" />
                                        <i className="feather-star star_active" />
                                        <i className="feather-star star_active" />
                                        <i className="feather-star" />
                                    </li>
                                </ul>
                                <p />
                            </div>
                            <div className="list-card-badge d-flex align-items-center">
                                <span className="badge badge-danger mr-2">OFFER</span> <small>60% NEW50</small>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-6 pl-1">
                    <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-lg">
                        <div className="list-card-image">
                            <div className="star position-absolute"><span className="badge badge-success"><i className="feather-star" /> 2.4</span></div>
                            <div className="favourite-heart position-absolute"><a href="#"><i className="feather-bookmark" /></a></div>
                            <div className="member-plan position-absolute"><span className="badge badge-warning">Buy 1 Get 1 free</span></div>
                            <a href="restaurant.html">
                                <img src="img/tangia.png" className="img-fluid item-img w-100" />
                            </a>
                        </div>
                        <div className="p-3 position-relative">
                            <div className="list-card-body">
                                <h6 className="mb-1"><a href="restaurant.html" className="text-black">Thai Famous Indian Cuisine</a></h6>
                                <p className="text-gray mb-1 small">Indian, Pure veg</p>
                                <p className="text-gray mb-1 rating">
                                </p><ul className="rating-stars list-unstyled">
                                    <li>
                                        <i className="feather-star star_active" />
                                        <i className="feather-star star_active" />
                                        <i className="feather-star star_active" />
                                        <i className="feather-star star_active" />
                                        <i className="feather-star" />
                                    </li>
                                </ul>
                                <p />
                            </div>
                            <div className="list-card-badge d-flex align-items-center">
                                <span className="badge badge-danger mr-2">OFFER</span> <small>50% off</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row pt-2">
                <div className="col-6 pr-1">
                    <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-lg">
                        <div className="list-card-image">
                            <div className="star position-absolute"><span className="badge badge-success"><i className="feather-star" /> 4.3</span></div>
                            <div className="favourite-heart position-absolute"><a href="#"><i className="feather-bookmark" /></a></div>
                            <a href="restaurant.html">
                                <img src="img/couscous.png" className="img-fluid item-img w-100" />
                            </a>
                        </div>
                        <div className="p-3 position-relative">
                            <div className="list-card-body">
                                <h6 className="mb-1"><a href="restaurant.html" className="text-black">The Sakafo Restaurant
                                </a>
                                </h6>
                                <p className="text-gray mb-1 small">Hamburgers, Pure veg</p>
                                <p className="text-gray mb-1 rating">
                                </p><ul className="rating-stars list-unstyled">
                                    <li>
                                        <i className="feather-star star_active" />
                                        <i className="feather-star star_active" />
                                        <i className="feather-star star_active" />
                                        <i className="feather-star star_active" />
                                        <i className="feather-star" />
                                    </li>
                                </ul>
                                <p />
                            </div>
                            <div className="list-card-badge d-flex align-items-center">
                                <span className="badge badge-danger mr-2">OFFER</span> <small>30% NEW50</small>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-6 pl-1">
                    <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-lg">
                        <div className="list-card-image">
                            <div className="star position-absolute"><span className="badge badge-success"><i className="feather-star" /> 3.3</span></div>
                            <div className="favourite-heart position-absolute"><a href="#"><i className="feather-bookmark" /></a></div>
                            <div className="member-plan position-absolute"><span className="badge badge-dark">Ads</span></div>
                            <a href="restaurant.html">
                                <img src="img/tajine.png" className="img-fluid item-img w-100" />
                            </a>
                        </div>
                        <div className="p-3 position-relative">
                            <div className="list-card-body">
                                <h6 className="mb-1"><a href="restaurant.html" className="text-black">Bite Me Now Sandwiches</a></h6>
                                <p className="text-gray mb-1 small">American, Pure veg</p>
                                <p className="text-gray mb-1 rating">
                                </p><ul className="rating-stars list-unstyled">
                                    <li>
                                        <i className="feather-star star_active" />
                                        <i className="feather-star star_active" />
                                        <i className="feather-star star_active" />
                                        <i className="feather-star star_active" />
                                        <i className="feather-star" />
                                    </li>
                                </ul>
                                <p />
                            </div>
                            <div className="list-card-badge d-flex align-items-center">
                                <span className="badge badge-success mr-2">OFFER</span> <small>40% off</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopularPlat;
