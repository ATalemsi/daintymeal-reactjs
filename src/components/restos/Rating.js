import React, { useEffect, useState } from "react";
import StarRating from "../startRating/StarRating";
import axios from "axios";
import { useParams } from "react-router-dom";

const Rating = () => {
  const { resto_code } = useParams();
  const [restoData, setRestoData] = useState(null);

  useEffect(() => {
    const fetchRestoData = async () => {
      try {
        const response = await axios.get(`https://x2r9rfvwwi.execute-api.eu-north-1.amazonaws.com/dev/restos/${resto_code}`);
        setRestoData(response.data);
      } catch (error) {
        console.error("Error fetching restaurant data:", error);
      }
    };

    fetchRestoData();
  }, [resto_code]);

  if (!restoData) return <svg
    className="animate-spin h-8 w-8 text-pink-500 mx-auto"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    ></circle>
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291l-3.709 3.71A9.974 9.974 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-3.647z"
    ></path>
  </svg>;
  const totalRatings = restoData.statics.contRatings || 0;
  const totalComments = restoData.statics.countComments || 0;
  const averageRating = totalRatings ? (restoData.rating / totalRatings).toFixed(1) : 0;


  const ratingDistribution = {
    5: totalRatings > 0 ? ((restoData.statics.countComments / totalRatings) * 100).toFixed(2) : 0,
    4: totalRatings > 0 ? ((restoData.statics.countComments / totalRatings) * 100).toFixed(2) : 0,
    3: totalRatings > 0 ? ((restoData.statics.countComments / totalRatings) * 100).toFixed(2) : 0,
    2: totalRatings > 0 ? ((restoData.statics.countComments / totalRatings) * 100).toFixed(2) : 0,
    1: totalRatings > 0 ? ((restoData.statics.countComments / totalRatings) * 100).toFixed(2) : 0
  };


  return (
    <div className="bg-wxhite shadow-sm p-3 mb-3 clearfix graph-star-rating">
      <h6 className="mb-0 mb-3 font-sans text-xl">Ratings and Reviews</h6>
      <div className="graph-star-rating-header">
        <div className="star-rating">
          <div className="d-inline-block">
            <StarRating rating={restoData.rating} />
          </div>
          <b className="text-black ml-2">{totalComments} reviews</b>
        </div>
        <p className="text-muted mb-4 mt-2 small">Rated {restoData.rating} out of 5</p>
      </div>
      <div className="graph-star-rating-body">
        {Object.keys(ratingDistribution).reverse().map((rating) => (
          <div key={rating} className="rating-list  ">
            <div className="rating-list-left font-weight-bold "><p className="font-weight-bold text-xs">{rating} Star</p></div>
            <div className="rating-list-center">
              <div className="progress">
                <div
                  role="progressbar"
                  className="progress-bar bg-info"
                  aria-valuenow={ratingDistribution[rating]}
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: `${ratingDistribution[rating]}%` }}
                ></div>
              </div>
            </div>
            <div className="rating-list-right font-weight-bold small">{ratingDistribution[rating]} %</div>
          </div>
        ))}
      </div>
      <div className="graph-star-rating-footer text-center mt-12 ">
        <button type="button" className="btn btn-primary btn-block btn-sm">Rate and Review</button>
      </div>
    </div>
  );
};

export default Rating;
