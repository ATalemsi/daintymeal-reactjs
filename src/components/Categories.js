import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Categories = ({ onCategorySelect }) => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get('https://x2r9rfvwwi.execute-api.eu-north-1.amazonaws.com/dev/categories');
                setCategories(response.data);
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };
        fetchCategories();
    }, []);

    return (
        <div className="relative">
            <div className="px-1 py-3 cursor-pointer" onClick={() => onCategorySelect(null)}>
                <div className="d-block text-center">
                    <div style={{ width: 60, height: 60, overflow: 'hidden', display: 'block', margin: '0px auto' }}>
                        <img src='img/application.png' alt='ALL' style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <p className="m-0 small">All</p>
                </div>
            </div>
            <div className="cat-slider border-bottom ml-16"> {/* Adjust the margin-left based on the width of the "ALL" button */}
                {categories && categories.map((category, index) => (
                    <div key={index} className="cat-item px-1 py-3 cursor-pointer" onClick={() => onCategorySelect(category.name)}>
                        <div className="d-block text-center">
                            <div style={{ width: 60, height: 60, overflow: 'hidden', display: 'block', margin: '0px auto' }}>
                                <img src={category.image} alt={category.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <p className="m-0 small">{category.name}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Categories;
