// src/components/Categories.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Categories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get('https://x2r9rfvwwi.execute-api.eu-north-1.amazonaws.com/dev/categories');
                console.log('====================================');
                console.log(response.data.categories);
                console.log('====================================');
                setCategories(response.data);
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };
        fetchCategories();
    }, []);

    return (
        <div className="cat-slider border-bottom">
            {categories && categories.map((category, index) => (
                <div key={index} className="cat-item px-1 py-3">
                    <a className="d-block text-center" href="trending.html">
                        <div style={{ width: 60, height: 60, overflow: 'hidden', display: 'block', margin: '0px auto' }}>
                            <img src={category.image} alt={category.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                        <p className="m-0 small">{category.name}</p>
                    </a>
                </div>
            ))}
        </div>
    );
};

export default Categories;
