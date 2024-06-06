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

    // Extract English names
    const englishNames = filters.length > 0 && filters[0].en.map((item, index) => (
        <div key={index} className="inline-block border-2 border-gray-500 rounded-lg w-20 h-8 bg-gray-200 flex items-center justify-center ">
            <h2 className="m-0 font-weight-bold text-center text-sm">{item.name}</h2>
        </div>
    ));

    return ( 
            <div className="scrolling-wrapper flex justify-center">
                {englishNames}
            </div>
    );
};

export default Filter;
