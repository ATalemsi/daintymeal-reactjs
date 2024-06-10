import React from "react";
import Rating from "./Rating";
import Comments from "./Comments";



const Review = () => {
    return (
        <div className="row ">
            <div className="bg-light py-3 lg:2/5 md:w-3/5 w-full ">
                <div id="ratings-and-reviews"
                    class="bg-white d-flex align-items-center shadow-sm p-3 mb-3 clearfix restaurant-detailed-star-rating">
                    <h6 class="mb-0">Rate this Place</h6>
                    <div class="star-rating ml-auto">
                        <div class="d-inline-block h6 m-0"><i class="feather-star text-warning"></i>
                            <i class="feather-star text-warning"></i>
                            <i class="feather-star text-warning"></i>
                            <i class="feather-star text-warning"></i>
                            <i class="feather-star"></i>
                        </div>
                    </div>
                </div>
                <Rating />
                <Comments />
            </div>
        </div>


    );
};

export default Review;