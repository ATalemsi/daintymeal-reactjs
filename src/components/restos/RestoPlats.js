import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useParams } from 'react-router-dom';


const RestoPlats = () => {
    const { resto_code } = useParams();
    const [plats, setPlats] = useState([]);
    useEffect(() => {
        const fetchPlats = async () => {
            try {
                const response = await axios.get(` https://x2r9rfvwwi.execute-api.eu-north-1.amazonaws.com/dev/restos/${resto_code}/plats`);
                setPlats(response.data);
            } catch (error) {
                console.error('Error fetching plats:', error);
            }
        };
        fetchPlats();
    }, [resto_code]);

    if (!plats) return <p>Loading...</p>;
    return (
        <div>
            <p class="font-weight-bold px-3 pt-3 m-0">FEATURED ITEMS</p>
            <div className="scrolling-wrapper2">

                {plats.length > 0 ? (
                    plats.map((plat, index) => (
                        <div key={index} className="carte rounded-lg">
                            <div className="osahan-slider-item py-3 px-1">
                                <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-lg">
                                    <div className="list-card-image">
                                        <div className="star position-absolute"><span className="badge badge-success"><i className="feather-star" />{plat.rating}</span></div>
                                        <div className="favourite-heart position-absolute"><a href="#"><i className="feather-bookmark" /></a></div>
                                        <div className="member-plan position-absolute"><span className="badge badge-danger">{plat.category[0].name}</span></div>
                                        <a href="#">
                                            <img src={plat.image[0]} className="img-fluid item-img" style={{ width: '280px', height: '100px' }} alt={plat.name} />
                                        </a>
                                    </div>
                                    <div className="p-3 position-relative">
                                        <div className="list-card-body">
                                            <h6 className="mb-1">
                                                <p className="text-black">
                                                    {plat.name}
                                                </p>
                                            </h6>
                                            <p className="text-gray mb-3 time"><span className="float-right text-xs text-pink-500 font-bold"> {plat.plat_price} {plat.currency}</span></p>
                                        </div>
                                        <div className="list-card-badge d-flex align-items-center">
                                            {plat.discount ? (
                                                <span className="badge badge-danger mr-2">OFFER</span>
                                            ) : (
                                                <span className="badge badge-secondary mr-2">NO OFFER</span>
                                            )}
                                            <small>{plat.discount ? "Use Coupon" : "No discounts available"}</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="no-plats text-center mt-5">
                        <img src="https://res.cloudinary.com/dz4pww2qv/image/upload/v1717851494/ep4bkvb42vi3jhixixww.jpg" alt="No plats available" className="w-32 h-auto mx-auto" />
                        <p className="mt-2">No plats available at this restaurant</p>
                    </div>
                )}
            </div>

        </div>
    )
};

export default RestoPlats;