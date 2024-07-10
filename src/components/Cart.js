import React, { useState, useEffect } from 'react';
import { XIcon } from '@heroicons/react/solid';
import { ShoppingBag } from 'react-feather';

const Cart = () => {
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
                const newQuantity = Math.max(0, item.quantity + change);
                if (newQuantity === 0) {
                    handleRemoveFromCart(platCode);
                    return null;  // Remove the item from the list
                }
                return {
                    ...item,
                    quantity: newQuantity
                };
            }
            return item;
        }).filter(item => item !== null);  // Filter out removed items

        setCartItems(updatedCartItems);
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
        window.dispatchEvent(new Event('cartUpdated'));
    };

    const getTotalPrice = () => {
        return cartItems.reduce((total, item) => total + (item.plat_price * item.quantity), 0).toFixed(2);
    };

    return (
        <>
            <a
                className="text-gray-800 ml-2 relative z-50"
                onClick={handleOpenCart}
                role="button"
                aria-controls="cart-modal"
            >
                <ShoppingBag className="w-6 h-6" />
                <span className="absolute top-0 right-0 bg-red-600 text-white text-xs rounded-full px-1">{cartItems.length}</span>
            </a>
            {showCart && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-md">
                        <div className="flex justify-between items-center p-4 border-b">
                            <h5 className="text-xl font-semibold text-gray-900">Your Cart</h5>
                            <button
                                type="button"
                                className="text-gray-600 hover:text-gray-800"
                                onClick={handleCloseCart}
                                aria-label="Close"
                            >
                                <XIcon className="h-5 w-5" />
                            </button>
                        </div>
                        <div className="p-4 max-h-96 overflow-y-auto">
                            {cartItems.length === 0 ? (
                                <p className="text-gray-500 text-center">Your cart is empty.</p>
                            ) : (
                                <ul className="list-unstyled">
                                    {cartItems.map(item => (
                                        <li key={item.plat_code} className="flex justify-between items-center mb-3">
                                            <div className="flex items-center">
                                                <img src={item.image[0]} className="mr-3 rounded-lg" alt={item.name} style={{ width: '50px', height: '50px' }} />
                                                <div>
                                                    <h5 className="mt-0 mb-1">{item.name}</h5>
                                                    <p className="text-gray-500">{item.plat_price} {item.currency}</p>
                                                    <div className="flex items-center mt-2">
                                                        <button
                                                            className="bg-gray-200 text-gray-700 px-2 py-1 rounded"
                                                            onClick={() => handleQuantityChange(item.plat_code, -1)}
                                                        >
                                                            -
                                                        </button>
                                                        <input
                                                            type="text"
                                                            className="mx-2 text-center border border-gray-300 rounded w-12"
                                                            value={item.quantity}
                                                            readOnly
                                                        />
                                                        <button
                                                            className="bg-gray-200 text-gray-700 px-2 py-1 rounded"
                                                            onClick={() => handleQuantityChange(item.plat_code, 1)}
                                                        >
                                                            +
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <button
                                                className="text-red-600"
                                                onClick={() => handleRemoveFromCart(item.plat_code)}
                                            >
                                                Remove
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                        <div className="flex justify-between items-center p-4 border-t">
                            <span className="font-semibold">Total: {getTotalPrice()} {cartItems.length > 0 && cartItems[0].currency}</span>
                            <div>
                                <button type="button" className="bg-gray-300 text-gray-700 px-4 py-2 rounded mr-2" onClick={handleCloseCart}>Close</button>
                                <button type="button" className="bg-rose-600 text-white px-4 py-2 rounded">Checkout</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Cart;
