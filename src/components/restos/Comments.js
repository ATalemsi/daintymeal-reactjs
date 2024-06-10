import React, { useEffect, useState } from "react";
import StarRating from "../startRating/StarRating";
import axios from "axios";
import { useParams } from "react-router-dom";

const Comments = () => {
    const { resto_code } = useParams();
    const [comments, setComments] = useState(null);

    useEffect(() => {
        const fetchComments = async () => {
            try {
                const response = await axios.get(`https://x2r9rfvwwi.execute-api.eu-north-1.amazonaws.com/dev/comments/resto/${resto_code}`);
                setComments(response.data);
            } catch (error) {
                console.error("Error fetching comments data:", error);
            }
        };

        fetchComments();
    }, [resto_code]);
    return (
        <div className="bg-white shadow-sm p-3 mb-3">
            <a className="text-primary float-right" href="#">Top Rated</a>
            <h6 className="mb-1">All Ratings and Reviews</h6>
            {comments.map((comment, index) => (
                <div key={index} className="py-3">
                    <div className="flex items-start">
                        <a href="#">
                            <img
                                src={comment.createdBy.imageProfile}
                                className="w-12 h-12 rounded-full mr-3"
                                alt="Reviewer Profile"
                            />
                        </a>
                        <div className="flex-1">
                            <div className="flex justify-between items-center">
                                <h6 className="mb-0">
                                    <a className="text-dark" href="#">{comment.createdBy.name}</a>
                                </h6>
                                <div className="star-rating">
                                    <StarRating rating={comment.rating} />
                                </div>
                            </div>
                            <p className="text-gray-500 text-sm">{new Date(comment.addedAt).toLocaleDateString()}</p>
                            <p className="mt-2">{comment.comment}</p>
                        </div>
                    </div>
                    <hr className="my-3" />
                </div>
            ))}
            <a className="text-center w-full block mt-3 font-bold" href="#">
                See All Reviews
            </a>
            <div class="bg-white shadow-sm p-3 rating-review-select-page">
                  <h6 class="mb-3">Leave Comment</h6>
                  <div class="d-flex align-items-center mb-3">
                     <p class="m-0 small">Rate the Place</p>
                     <div class="star-rating ml-auto">
                        <div class="d-inline-block"><i class="feather-star text-warning"></i>
                           <i class="feather-star text-warning"></i>
                           <i class="feather-star text-warning"></i>
                           <i class="feather-star text-warning"></i>
                           <i class="feather-star"></i>
                        </div>
                     </div>
                  </div>
                  <form>
                     <div class="form-group"><label class="form-label small">Your Comment</label><textarea
                           class="form-control"></textarea></div>
                     <div class="form-group mb-0"><button type="button" class="btn btn-primary btn-block"> Submit
                           Comment </button></div>
                  </form>
               </div>
        </div>
    );
};

export default Comments;
