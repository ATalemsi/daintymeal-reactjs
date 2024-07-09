import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { FaSpinner } from 'react-icons/fa';
const Menu = () => {
    const { resto_code } = useParams();
    const [restaurant, setRestaurant] = useState(null);
    const [plats, setPlats] = useState([]);
    const [quantities, setQuantities] = useState({});

    useEffect(() => {
        const fetchRestaurantDetails = async () => {
            try {
                const response = await axios.get(`https://x2r9rfvwwi.execute-api.eu-north-1.amazonaws.com/dev/restos/${resto_code}`);
                setRestaurant(response.data);
            } catch (error) {
                console.error('Error fetching restaurant details:', error);
            }
        };

        const fetchPlats = async () => {
            try {
                const response = await axios.get(`https://x2r9rfvwwi.execute-api.eu-north-1.amazonaws.com/dev/restos/${resto_code}/plats`);
                setPlats(response.data);
                // Initialize quantities with 1 for each plat
                const initialQuantities = response.data.reduce((acc, plat) => {
                    acc[plat.plat_code] = 1;
                    return acc;
                }, {});
                setQuantities(initialQuantities);
            } catch (error) {
                console.error('Error fetching plats:', error);
            }
        };

        fetchRestaurantDetails();
        fetchPlats();
    }, [resto_code]);

    const handleAddToCart = (plat, quantity) => {
        if (quantity < 1) return;  // Ensure quantity is at least 1

        const cartItem = {
            plat_code: plat.plat_code,
            name: plat.name,
            plat_price: plat.plat_price,
            currency: plat.currency,
            image: plat.image,
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

    const handleQuantityChange = (plat_code, change) => {
        setQuantities(prevQuantities => ({
            ...prevQuantities,
            [plat_code]: Math.max(1, prevQuantities[plat_code] + change) // Ensure quantity is at least 1
        }));
    };

    if (!restaurant) return <svg
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

    if (plats.length === 0) {
        return <p className="text-center text-gray-500 mt-10">No items available in the menu</p>;
    }

    return (
        <div className="w-full mx-auto  py-6 max-w-screen-xl">
            <div className="border-t border-gray-200 bg-white rounded-lg shadow-sm">
                {plats.map(plat => (
                    <div key={plat.plat_code} className="flex p-4 border-b border-gray-200">
                        <img src={plat.image[0]} className="w-16 h-16 object-cover rounded-lg mr-4" alt={plat.name} />
                        <div className="flex-grow text-left">
                            <h6 className="text-lg font-semibold mb-1 ">
                                {plat.name}
                                {plat.best_seller && <span className="ml-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">BEST SELLER</span>}
                            </h6>
                            <p className="text-gray-500 mb-0">{plat.plat_price} {plat.currency}</p>
                        </div>
                        <div className="flex flex-col items-center ml-auto">
                            <div className="flex items-center">
                                <button
                                    onClick={() => handleQuantityChange(plat.plat_code, -1)}
                                    className="bg-gray-200 text-gray-600 px-2 py-1 rounded-l"
                                >
                                    -
                                </button>
                                <input
                                    type="number"
                                    value={quantities[plat.plat_code]}
                                    readOnly
                                    className="w-12 text-center border border-gray-300"
                                />
                                <button
                                    onClick={() => handleQuantityChange(plat.plat_code, 1)}
                                    className="bg-gray-200 text-gray-600 px-2 py-1 rounded-r"
                                >
                                    +
                                </button>
                            </div>
                            <button
                                onClick={() => handleAddToCart(plat, quantities[plat.plat_code])}
                                className="btn btn-outline-secondary btn-sm mt-2 text-sm text-rose-700 border border-rose-900 py-1 px-3 rounded"
                            >
                                ADD
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Menu;
