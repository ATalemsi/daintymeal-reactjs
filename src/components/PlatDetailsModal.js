import React, { useState } from 'react';
import StarRating from './startRating/StarRating';

const PlatDetailsModal = ({ plat, isOpen, onClose }) => {
    // State to manage quantity
    const [quantity, setQuantity] = useState(1);
    if (!plat) return null;
    // Add to Cart logic
    const handleAddToCart = () => {
        if (quantity < 1) return;  // Ensure quantity is at least 1

        const cartItem = {
            plat_code: plat.plat_code,
            name: plat.name,
            plat_price: plat.plat_price,
            currency: plat.currency,
            image: plat.image[0],
            quantity: quantity
        };

        // Get current cart items from localStorage
        const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        // Check if item already in the cart
        const existingItemIndex = cartItems.findIndex(item => item.plat_code === cartItem.plat_code);

        if (existingItemIndex > -1) {
            // Update the quantity of the existing item
            cartItems[existingItemIndex].quantity += quantity;
        } else {
            // Add new item to the cart
            cartItems.push(cartItem);
        }

        // Save updated cart items to localStorage
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        // Dispatch custom event to update cart in the header
        window.dispatchEvent(new Event('cartUpdated'));
    };

    // Handle quantity change
    const handleQuantityChange = (change) => {
        setQuantity(prevQuantity => Math.max(1, prevQuantity + change)); // Ensure quantity is at least 1
    };

    return (
        <div
            className={`modal fade ${isOpen ? 'show' : ''}`}
            id="platDetailsModal"
            tabIndex={-1}
            role="dialog"
            aria-labelledby="platDetailsModalLabel"
            aria-hidden={!isOpen}
            style={{ display: isOpen ? 'block' : 'none' }}
        >
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header align-items-center">
                        <h5 className="modal-title" id="platDetailsModalLabel">{plat.name}</h5>
                        <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                            onClick={onClose}
                        >
                            <i className="feather-x float-right" />
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="relative mb-4">
                            <img
                                src={plat.image[1]}
                                alt={plat.name}
                                className="w-full h-56 object-cover rounded-lg"
                            />
                        </div>
                        <div className="p-4">
                            <div className="flex mb-4">
                                <img
                                    src={plat.image[0]}
                                    alt={plat.name}
                                    className="w-20 h-20 rounded-full mr-4"
                                />
                                <div>
                                    <h2 className="font-bold text-2xl">{plat.name}</h2>
                                    <p className="text-gray-600">{plat.category[0].name}</p>
                                    <div className="flex items-center mt-2">
                                        <StarRating rating={plat.rating} />
                                        <p className="rating ml-2 text-sm text-gray-600">
                                            ({plat.statics.contRatings} ratings)
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-4">
                                <h5 className="font-semibold text-lg">Price</h5>
                                <p className="text-gray-700 text-xl">
                                    {plat.plat_price} {plat.currency}
                                </p>
                            </div>
                            <div className="mb-4">
                                <h5 className="font-semibold text-lg">Description</h5>
                                <p className="text-gray-600">{plat.description}</p>
                            </div>
                            {/* Quantity Control */}
                            <div className="flex items-center mb-4">
                                <button
                                    onClick={() => handleQuantityChange(-1)}
                                    className="bg-gray-200 text-gray-600 px-2 py-1 rounded-l"
                                >
                                    -
                                </button>
                                <input
                                    type="number"
                                    value={quantity}
                                    readOnly
                                    className="w-12 text-center border border-gray-300"
                                />
                                <button
                                    onClick={() => handleQuantityChange(1)}
                                    className="bg-gray-200 text-gray-600 px-2 py-1 rounded-r"
                                >
                                    +
                                </button>
                            </div>
                            <button
                                onClick={handleAddToCart}
                                className="btn btn-outline-secondary btn-lg text-sm text-rose-700 border border-rose-900 py-2 px-4 rounded"
                            >
                                ADD TO CART
                            </button>
                        </div>
                    </div>
                    <div className="modal-footer p-0 border-0 p-3">
                        <div className="col-6 m-0 pl-0 pr-1">
                            <button
                                type="button"
                                className="btn border btn-lg btn-block"
                                data-dismiss="modal"
                                onClick={onClose}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlatDetailsModal;
