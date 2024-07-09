import React from "react";
import Rating from "./Rating";
import Comments from "./Comments";



const Review = () => {
    return (
        <div className="row ">
            <div className="bg-light py-3 lg:2/5 md:w-3/5 w-full ">
                <Rating />
                <Comments />
            </div>
        </div>


    );
};

export default Review;