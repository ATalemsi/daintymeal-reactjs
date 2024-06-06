import React from 'react';

const StarRating = ({ rating }) => {
    const totalStars = 5;
    const stars = [];

    for (let i = 0; i < totalStars; i++) {
        if (rating >= i + 1) {
            // Full star
            stars.push(
                <i key={i} className="fas fa-star text-yellow-400"></i>
            );
        } else if (rating >= i + 0.5) {
            // Half star
            stars.push(
                <i key={i} className="fas fa-star-half-alt text-yellow-400"></i>
            );
        } else {
            // Empty star
            stars.push(
                <i key={i} className="far fa-star text-gray-400"></i>
            );
        }
    }

    return <ul className="rating-stars list-none p-0 flex">{stars}</ul>;
};

export default StarRating;
