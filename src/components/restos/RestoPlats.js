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
            <p className="font-weight-bold px-3 pt-3 m-0">FEATURED ITEMS</p>
            {plats.length > 0 ? (
                <>
                    <div className="trending-slider rounded overflow-hidden">
                        {plats.map((plat, index) => (
                            <div key={index} className="osahan-slider-item px-1 py-3">
                                <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                                    <div className="list-card-image">
                                        <a href="#">
                                            <img src={plat.image[0]} className="img-fluid item-img w-96" alt={plat.name} />
                                        </a>
                                    </div>
                                    <div className="p-3 position-relative">
                                        <div className="list-card-body">
                                            <h6 className="mb-1"><a href="#" className="text-black">{plat.name}</a></h6>
                                            <p className="text-gray mb-3">{plat.category[0].name}</p>
                                            <p className="text-gray m-0"><span className="text-black-50">{plat.plat_price} {plat.currency} </span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            ) : (
                <div className="no-plats text-center mt-5">
                    <img src="https://res.cloudinary.com/dz4pww2qv/image/upload/v1717851494/ep4bkvb42vi3jhixixww.jpg" alt="No plats available"  className="w-32 h-auto mx-auto"/>
                    <p className="mt-2">No plats available at this restaurant</p>
                </div>
            )}
        </div>
    );

};

export default RestoPlats;