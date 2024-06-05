import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Restos = ({ selectedCategory }) => {
    const [restos, setRestos] = useState([]);

    useEffect(() => {
        const fetchRestos = async () => {
            try {
                const response = await axios.get('https://x2r9rfvwwi.execute-api.eu-north-1.amazonaws.com/dev/restos');
                setRestos(response.data);
            } catch (error) {
                console.error('Error fetching restos:', error);
            }
        };
        fetchRestos();
    }, []);

    const filteredRestos = selectedCategory
        ? restos.filter(resto => resto.categories[0].name && resto.categories[0].name.includes(selectedCategory))
        : restos;

    return (
        <div className="scrolling-wrapper2">
            {filteredRestos && filteredRestos.map((resto, index) => (
                <div key={index} className="carte rounded-lg">
                    <div className="osahan-slider-item py-3 px-1">
                        <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-lg">
                            <div className="list-card-image">
                                <div className="star position-absolute"><span className="badge badge-success"><i className="feather-star" />{resto.rating}</span></div>
                                <div className="favourite-heart position-absolute"><a href="#"><i className="feather-bookmark" /></a></div>
                                <div className="member-plan position-absolute"><span className="badge badge-danger">HOT</span></div>
                                <a href="restaurant.html">
                                    <img src={resto.image[0]} className="img-fluid item-img" style={{ width: '280px', height: '100px' }} />
                                </a>
                            </div>
                            <div className="p-3 position-relative">
                                <div className="list-card-body">
                                    <h6 className="mb-1"><a href="restaurant.html" className="text-black">{resto.name}</a></h6>
                                    <p className="text-gray mb-3"><span className="text-gray-500">{resto.address[0].country}</span>,{resto.address[0].city},{resto.address[0].street}</p>
                                    <p className="text-gray mb-3 time"><span className="bg-light text-dark rounded-sm pl-2 pb-1 pt-1 pr-2"><i className="feather-clock" />{resto.workingTime}</span> <span className="float-right text-black-50"> $350 FOR TWO</span></p>
                                </div>
                                <div className="list-card-badge d-flex align-items-center">
                                    <span className="badge badge-danger mr-2">OFFER</span> <small> Use Coupon</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Restos;
