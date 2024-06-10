import React, { useEffect, useState } from "react";
import StarRating from "../startRating/StarRating";
import axios from "axios";
import { useParams } from "react-router-dom";
import Modal from "react-modal";
import { XIcon } from "@heroicons/react/solid"; // Assuming you're using Heroicons for the close icon

const Comments = () => {
  const { resto_code } = useParams();
  const [comments, setComments] = useState([]);
  const [showAllComments, setShowAllComments] = useState(false);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get(
          `https://x2r9rfvwwi.execute-api.eu-north-1.amazonaws.com/dev/comments/resto/${resto_code}`
        );
        setComments(response.data);
      } catch (error) {
        console.error("Error fetching comments data:", error);
      }
    };

    fetchComments();
  }, [resto_code]);

  const handleOpenModal = () => setShowAllComments(true);
  const handleCloseModal = () => setShowAllComments(false);

  const renderComment = (comment, index) => (
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
  );

  return (
    <div className="bg-white shadow-sm p-3 mb-3">
      <a className="text-primary float-right" href="#">Top Rated</a>
      <h6 className="mb-1">All Ratings and Reviews</h6>
      {comments.slice(0, 3).map(renderComment)}
      <button 
        className="text-center w-full block mt-3 font-bold text-blue-600" 
        onClick={handleOpenModal}
      >
        See All Reviews
      </button>

      <div className="bg-white shadow-sm p-3 rating-review-select-page mt-3">
        <h6 className="mb-3">Leave Comment</h6>
        <div className="flex items-center mb-3">
          <p className="m-0 small">Rate the Place</p>
          <div className="star-rating ml-auto">
            <div className="inline-block">
              <i className="feather-star text-warning"></i>
              <i className="feather-star text-warning"></i>
              <i className="feather-star text-warning"></i>
              <i className="feather-star text-warning"></i>
              <i className="feather-star"></i>
            </div>
          </div>
        </div>
        <form>
          <div className="form-group">
            <label className="form-label small">Your Comment</label>
            <textarea className="form-control"></textarea>
          </div>
          <div className="form-group mb-0">
            <button type="button" className="btn btn-primary btn-block">
              Submit Comment
            </button>
          </div>
        </form>
      </div>

      <Modal
        isOpen={showAllComments}
        onRequestClose={handleCloseModal}
        className="fixed inset-0 flex items-center justify-center p-4"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50"
        contentLabel="All Comments"
      >
        <div className="relative bg-white p-4 rounded shadow-lg max-w-md w-full max-h-[80vh] overflow-y-auto">
          <button 
            onClick={handleCloseModal} 
            className="absolute top-4 right-4 bg-transparent text-gray-600 hover:text-gray-900"
          >
            <XIcon className="h-6 w-6" />
          </button>
          <h2 className="text-xl mb-4">All Ratings and Reviews</h2>
          {comments.map(renderComment)}
        </div>
      </Modal>
    </div>
  );
};

export default Comments;
