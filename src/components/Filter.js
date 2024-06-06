import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Filter = () => {
    const [filters, setFilters] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchFilters = async () => {
            try {
                const response = await axios.get('https://x2r9rfvwwi.execute-api.eu-north-1.amazonaws.com/dev/filters');
                setFilters(response.data);
            } catch (error) {
                console.error('Error fetching Filter:', error);
                setError(error);
            } finally {
                setLoading(false);
            }
        };
        fetchFilters();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div className="scrolling-wrapper">
            {filters.length > 0 && filters[0].en.map((item, index) => (
                <div key={index} className="cardfilter bg-gray-300 rounded-lg mx-2 w-38 h-7 px-9 ">
                        <h22 className='text-x5'>{item.name}</h22>
                </div>
            ))}
        </div>
    );
};

export default Filter;
