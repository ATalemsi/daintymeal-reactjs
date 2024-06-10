import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Menu = () => {
    const { resto_code } = useParams();
    const [restaurant, setRestaurant] = useState(null);
    const [plats, setPlats] = useState([]);

    useEffect(() => {
        const fetchRestaurantDetails = async () => {
            try {
                const response = await axios.get(`https://x2r9rfvwwi.execute-api.eu-north-1.amazonaws.com/dev/restos/${resto_code}`);
                setRestaurant(response.data);
            } catch (error) {
                console.error('Error fetching restaurant details:', error);
            }
        };

        const fetchPlats = async () => {
            try {
                const response = await axios.get(`https://x2r9rfvwwi.execute-api.eu-north-1.amazonaws.com/dev/restos/${resto_code}/plats`);
                setPlats(response.data);
            } catch (error) {
                console.error('Error fetching plats:', error);
            }
        };

        fetchRestaurantDetails();
        fetchPlats();
    }, [resto_code]);

    if (!restaurant) return <p>Loading...</p>;

    return (
        <div>
            {restaurant.categories.filter(category => plats.filter(plat => plat.category[0].category_code === category.category_code).length > 0).map(category => (
                <div key={category.category_code} className="row">
                    <h6 className="mb-3 mt-3 col-md-12">{category.name} <small className="text-black-50">{plats.filter(plat => plat.category[0].category_code === category.category_code).length} ITEMS</small></h6>
                    <div className="col-md-12 px-0 border-top">
                        <div className="bg-white mb-4">
                            {plats.filter(plat => plat.category[0].category_code === category.category_code).map(plat => (
                                <div key={plat.plat_code} className="p-3 border-bottom gold-members d-flex">
                                    <div className="media">
                                        <div className="mr-3 font-weight-bold text-danger non_veg">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-circle-fill" viewBox="0 0 16 16">
                                                <circle cx="8" cy="8" r="8" />
                                            </svg>
                                        </div>
                                        <div className="media-body">
                                            <h6 className="mb-1">{plat.name}<span className="badge badge-danger mx-2">BEST SELLER</span></h6>
                                            <p className="text-muted mb-0">{plat.plat_price} {plat.currency} </p>
                                        </div>
                                    </div>
                                    <span className="ml-auto"><a href="checkout.html" className="btn btn-outline-secondary btn-sm add-sm-btn">ADD</a></span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Menu;
