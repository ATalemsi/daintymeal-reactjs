import React, { useEffect } from "react";


const RestoDetails = () => {

    

    return (
        <div className="px-3 pt-4 pb-3 bg-primary">
            <div>
                <h2 className="font-weight-bold text-white">Conrad Chicago Restaurant</h2>
                <p className="font-weight-light text-white-50 m-0">963 Madyson Drive Suite 679</p>
                <div className="rating-wrap d-flex align-items-center mt-2">
                    <ul className="rating-stars list-unstyled m-0">
                        <li>
                            <i className="feather-star text-warning" />
                            <i className="feather-star text-warning" />
                            <i className="feather-star text-warning" />
                            <i className="feather-star text-warning" />
                            <i className="feather-star" />
                        </li>
                    </ul>
                    <p className="label-rating text-white-50 ml-2 small m-0"> (245 Reviews)</p>
                </div>
            </div>
            <div className="pt-4">
                <div className="row">
                    <div className="col-6">
                        <p className="m-0 small text-white">Delivery <span className="badge badge-osahan badge-warning small">Free</span></p>
                    </div>
                    <div className="col-6">
                        <p className="m-0 small text-white">Open time <span className="badge badge-osahan badge-dark small">8:00
                            AM</span></p>
                    </div>
                </div>
            </div>
        </div>

    );

};

export default RestoDetails;