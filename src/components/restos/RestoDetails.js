import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useParams } from 'react-router-dom';
import StarRating from "../startRating/StarRating"; 


const RestoDetails = () => {
    const { resto_code } = useParams();
    const [restoDetails, setRestoDetails] = useState(null);

    useEffect(() => {
        const fetchRestoDetails = async () => {
            try {
                const response = await axios.get(` https://x2r9rfvwwi.execute-api.eu-north-1.amazonaws.com/dev/restos/${resto_code}`);
                setRestoDetails(response.data);
            } catch (error) {
                console.error('Error fetching resto details:', error);
            }
        };

        fetchRestoDetails();
    }, [resto_code]);

    if (!restoDetails) return <p>Loading...</p>;


    return (
        <div className="px-3 pt-4 pb-3 bg-primary" >
            <div>
                <h2 className="font-bold text-white  text-3xl mb-6 tracking-wide hover:tracking-wide">{restoDetails.en.name}</h2>
                <p className="font-weight-light text-gray-200 m-0">{restoDetails.address[0].country} ,{restoDetails.address[0].city},{restoDetails.address[0].street}</p>
                <div className="rating-wrap d-flex align-items-center mt-2">
                    <StarRating rating={restoDetails.rating} />
                    <p className="label-rating text-white-50 ml-2 small m-0"> ({restoDetails.statics.contRatings} Reviews)</p>
                </div>
            </div>
            <div className="pt-4">
                <div className="row">
                    <div className="col-6">
                        <p className="m-0 small text-white">Delivery <span className="badge badge-osahan badge-warning small">Free</span></p>
                    </div>
                    <div className="col-6">
                        <p className="m-0 small text-white">Working Times <span className="badge badge-osahan badge-dark small"> {restoDetails.workingTime} </span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RestoDetails;