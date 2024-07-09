import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { XIcon } from "@heroicons/react/solid";

const RestoHeader = () => {
    const [showCart, setShowCart] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const loadCartItems = () => {
            const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
            setCartItems(storedCartItems);
        };

        loadCartItems();
        window.addEventListener('cartUpdated', loadCartItems);

        return () => {
            window.removeEventListener('cartUpdated', loadCartItems);
        };
    }, []);

    const handleOpenCart = () => setShowCart(true);
    const handleCloseCart = () => setShowCart(false);

    const handleRemoveFromCart = (platCode) => {
        const updatedCartItems = cartItems.filter(item => item.plat_code !== platCode);
        setCartItems(updatedCartItems);
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
        window.dispatchEvent(new Event('cartUpdated'));
    };

    const handleQuantityChange = (platCode, change) => {
        const updatedCartItems = cartItems.map(item => {
            if (item.plat_code === platCode) {
                return {
                    ...item,
                    quantity: Math.max(1, item.quantity + change)
                };
            }
            return item;
        });

        setCartItems(updatedCartItems);
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
        window.dispatchEvent(new Event('cartUpdated'));
    };

    const getTotalPrice = () => {
        return cartItems.reduce((total, item) => total + (item.plat_price * item.quantity), 0).toFixed(2);
    };

    return (
        <div className="bg-white shadow-md p-3 flex justify-between items-center sticky top-0 z-50">
            <Link className="text-gray-800 flex items-center" to="/">
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="currentColor" className="bi bi-chevron-left" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"></path>
                </svg>
                <span className="pl-2">Back</span>
            </Link>
            <div className="flex items-center">
                <a className="text-gray-800 mx-2 relative" href="#ratings-and-reviews">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="currentColor" className="bi bi-chat-dots" viewBox="0 0 16 16">
                        <path d="M3.2 14.8a.5.5 0 0 1-.8-.6c1.8-2.8 5-5.7 9-6.7l1.4-.3c.6-.2 1 .4.8 1l-.4 1.3c-1 3-3.8 5.9-6.8 7.5a.5.5 0 0 1-.6-.8 9 9 0 0 0 5.2-5.6l.2-.7c-3.3.8-6 3.4-8 6.2z"></path>
                        <path d="M15.6 3.8c-1.5-1.8-3.8-3-6.3-3.3a.5.5 0 0 0-.5.4 9 9 0 0 1 6.7 6.8.5.5 0 0 0 .4.5c2.2-.3 4-1.4 5.2-2.9a.5.5 0 0 0-.4-.7z"></path>
                        <path d="M3 5a.5.5 0 0 1 .5-.5h2.1a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z"></path>
                        <path d="M5 8a.5.5 0 0 1 .5-.5h2.1a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z"></path>
                        <path d="M6.5 10a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2a.5.5 0 0 1 .5-.5z"></path>
                    </svg>
                </a>
                <a
                    className="text-gray-800 ml-2 relative"
                    onClick={handleOpenCart}
                    role="button"
                    aria-controls="cart-modal"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
                        <path d="M0 1.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v.5h11V1a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5a.5.5 0 0 1-.5.5h-.5v1a.5.5 0 0 1-.5.5H1a.5.5 0 0 1-.5-.5V2H0a.5.5 0 0 1-.5-.5v-.5zM1 3v1h11V3H1zM3 5h10a.5.5 0 0 1 .5.5v.5h-1v-.5a.5.5 0 0 1-.5-.5H3a.5.5 0 0 1-.5.5v.5H1v-.5a.5.5 0 0 1 .5-.5zM1 6v9.5A1.5 1.5 0 0 0 2.5 17h11A1.5 1.5 0 0 0 15 15.5V6H1zm14.5 8h-1a.5.5 0 0 1-.5-.5V11H1v2a.5.5 0 0 1-.5.5h-.5v1h1a.5.5 0 0 1 .5-.5V11h11v2a.5.5 0 0 1 .5.5h1v1zm-2 0a.5.5 0 1 0 .5-.5.5.5 0 0 0-.5.5zm-4 0a.5.5 0 1 0 .5-.5.5.5 0 0 0-.5.5z"></path>
                    </svg>
                    <span className="absolute top-0 right-0 bg-red-600 text-white text-xs rounded-full px-1">{cartItems.length}</span>
                </a>
            </div>
            {showCart && (
                <div className="modal fade show" style={{ display: 'block' }} tabIndex="-1" role="dialog" aria-labelledby="cartModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header justify-center align-items-center">
                                <h5 className="modal-title text-xl font-semibold text-gray-900" id="cartModalLabel">Your Cart</h5>
                                <button
                                    type="button"
                                    className="close absolute right-4 top-4 text-gray-600 hover:text-gray-800"
                                    onClick={handleCloseCart}
                                    aria-label="Close"
                                >
                                    <i className="feather-x text-xl text-red-500" />
                                </button>
                            </div>
                            <div className="modal-body px-4 py-5">
                                {cartItems.length === 0 ? (
                                    <p className="text-gray-500 text-center">Your cart is empty.</p>
                                ) : (
                                    <>
                                        <ul className="list-unstyled">
                                            {cartItems.map(item => (
                                                <li key={item.plat_code} className="media mb-3">
                                                    <img src={item.image[0]} className="mr-3 rounded-lg" alt={item.name} style={{ width: '50px', height: '50px' }} />
                                                    <div className="media-body">
                                                        <h5 className="mt-0 mb-1">{item.name}</h5>
                                                        <p className="text-gray-500">{item.plat_price} {item.currency}</p>
                                                        <div className="input-group input-group-sm mt-2">
                                                            <div className="input-group-prepend">
                                                                <button
                                                                    className="btn btn-outline-secondary"
                                                                    type="button"
                                                                    onClick={() => handleQuantityChange(item.plat_code, -1)}
                                                                >
                                                                    -
                                                                </button>
                                                            </div>
                                                            <input
                                                                type="text"
                                                                className="form-control text-center"
                                                                value={item.quantity}
                                                                readOnly
                                                            />
                                                            <div className="input-group-append">
                                                                <button
                                                                    className="btn btn-outline-secondary"
                                                                    type="button"
                                                                    onClick={() => handleQuantityChange(item.plat_code, 1)}
                                                                >
                                                                    +
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <button
                                                            className="btn btn-link text-danger btn-sm mt-2"
                                                            onClick={() => handleRemoveFromCart(item.plat_code)}
                                                        >
                                                            Remove
                                                        </button>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                        <div className="d-flex justify-content-between align-items-center mt-4">
                                            <span className="font-semibold">Total:</span>
                                            <span className="text-rose-700">{getTotalPrice()} {cartItems.length > 0 && cartItems[0].currency}</span>
                                        </div>
                                    </>
                                )}
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={handleCloseCart}>Close</button>
                                <button type="button" className="btn btn-primary">Checkout</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default RestoHeader;
