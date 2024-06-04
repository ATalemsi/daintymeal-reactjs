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
                console.error('Error fetching categories:', error);
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
         <div key={index} className="card rounded-lgx">
         <center>
             <h22 className="m-0 font-weight-bold">{item.name}</h22>
         </center>
     </div>
    ));

    return (
        <div className="scrolling-wrapper">
            {englishNames}
        </div>
    );
};

export default Filter;
