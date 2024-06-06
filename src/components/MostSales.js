import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StarRating from './startRating/StarRating';


const MostSales = () => {
    const [mostsaleplats, setMostSalesPlats] = useState([]);

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
    return (
        <div className="most_sale px-3 pb-5">
            <div className="row">
                {mostsaleplats && mostsaleplats.map((mostsaleplat, index) => (
                    <div key={index} className="col-12 pt-2">
                        <div className="d-flex align-items-center list-card bg-white h-100 rounded overflow-hidden position-relative shadow-lg homepage-osahan-list-items">
                            <div className="list-card-image">
                                <div className="star position-absolute"><span className="badge badge-success"><i className="feather-star" />{mostsaleplat.rating}</span></div>
                                <div className="favourite-heart position-absolute"><a href="#"><i className="feather-bookmark" /></a></div>
                                <div className="member-plan position-absolute">
                                        <span className="badge badge-danger mr-2">{mostsaleplat.category[0].name}</span>
                                </div>
                                <a href="restaurant.html">
                                    <img src={mostsaleplat.image[0]} alt={mostsaleplat.name} className="img-fluid item-img w-100" />
                                </a>
                            </div>
                            <div className="p-3 position-relative">
                                <div className="list-card-body">
                                    <h6 className="mb-1"><a href="restaurant.html" className="text-black">{mostsaleplat.name}
                                    </a>
                                    </h6>
                                    <p className="text-gray mb-3 time"><span className="bg-light text-dark font-bold rounded-sm pl-2 pb-1 pt-1 pr-2">Price: </span> {mostsaleplat.plat_price} {mostsaleplat.currency} <span className="float-right text-black-50"> $500 FOR TWO</span></p>
                                </div>
                                <div className="list-card-badge d-flex align-items-center">
                                {mostsaleplat.discount ? (
                                        <span className="badge badge-danger mr-2">OFFER</span>
                                    ) : (
                                        <span className="badge badge-secondary mr-2">NO OFFER</span>
                                    )}
                                    <small>{mostsaleplat.discount ? '60% NEW50' : 'No Discount'}</small>
                                </div>
                            </div>
                        </div>
                    </div>

                ))}

            </div>
        </div>


    );
};

export default MostSales;
