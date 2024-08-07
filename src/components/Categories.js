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
        <div className="fixed top-0 w-full bg-white z-50  mt-28">
            <div className="scrolling-wrapper h-full my-2 overflow-x-auto">
                <div className="cat-item  mx-1.5 inline-block" onClick={() => onCategorySelect(null)}>
                    <div className="d-block text-center cursor-pointer">
                        <div style={{ width: 40, height: 40, overflow: 'hidden', display: 'block', margin: '10px auto' }}>
                            <img src="https://res.cloudinary.com/dz4pww2qv/image/upload/v1718113062/Category/k9k2harclh3zvrhxr5vt.svg" alt={getAllTranslation()} />
                        </div>
                        <p className="m-0 small">{getAllTranslation()}</p>
                    </div>
                </div>
                {categories && categories.map((category, index) => (
                    <div key={index} className="cat-item px-1  mx-1.5 inline-block" onClick={() => onCategorySelect(category.category_code)}>
                        <div className="d-block text-center cursor-pointer">
                            <div style={{ width: 40, height: 40, overflow: 'hidden', display: 'block', margin: '10px auto' }}>
                                <img src={category.image} alt={getCategoryName(category)} />
                            </div>
                            <p className="m-0 small">{getCategoryName(category)}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Categories;
