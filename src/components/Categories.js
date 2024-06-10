import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Categories = ({ onCategorySelect, selectedLanguage }) => {
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

    // Function to get category name based on selected language
    const getCategoryName = (category) => {
        switch (selectedLanguage) {
            case 'ar':
                return category.translation.ar.name;
            case 'fr':
                return category.translation.fr.name;
            default:
                return category.name; 
        }
    };
    const getAllTranslation = () => {
        switch (selectedLanguage) {
            case 'ar':
                return 'الكل';
            case 'fr':
                return 'Tous';
            default:
                return 'All'; 
        }
    };

    return (
        <div className="cat-slider border-bottom ml-16">
            <div className="px-1 py-3 cursor-pointer" onClick={() => onCategorySelect(null)}>
                <div className="d-block text-center">
                    <div style={{ width: 60, height: 60, overflow: 'hidden', display: 'block', margin: '0px auto' }}>
                        <img src='img/application.png' alt='ALL' style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <p className="m-0 small">{getAllTranslation()}</p>
                </div>
            </div>
            {categories && categories.map((category, index) => (
                <div key={index} className="cat-item px-1 py-3 cursor-pointer" onClick={() => onCategorySelect(getCategoryName(category))}>
                    <div className="d-block text-center">
                        <div style={{ width: 60, height: 60, overflow: 'hidden', display: 'block', margin: '0px auto' }}>
                            <img src={category.image} alt={getCategoryName(category)} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                        <p className="m-0 small">{getCategoryName(category)}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Categories;
