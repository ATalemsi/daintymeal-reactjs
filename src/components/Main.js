import React, { useState } from 'react';
import Categories from './Categories';
import Filter from './Filter';
import Publicity from './Publicity';
import Restos from './Restos';
import PopularPlat from './PopularPlat';
import TrendingPlat from './TrendingPlat';
import MostSales from './MostSales';
import Myplats from './MyPlats';

const Main = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);

    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
    };

    return (
        <div className="osahan-main">
            <Categories onCategorySelect={handleCategorySelect} />
            <Filter />
            <Publicity />
            <div className="px-3 pt-4 pb-3 title d-flex align-items-center">
                <h6 className="m-0 font-weight-bold text-2xl">Restaurant</h6>
                <a className="font-weight-bold ml-auto text-pink-800 text-sm" href="most_popular.html">More <i className="feather-chevrons-right" /></a>
            </div>
            <Restos selectedCategory={selectedCategory} />
            <div className="px-3 pt-3 title d-flex align-items-center">
                <h6 className="m-0 font-weight-bold text-2xl">My Plats</h6>
                <a className="font-weight-bold ml-auto" href="trending.html">View all <i className="feather-chevrons-right" /></a>
            </div>
            <Myplats />
            <div className="px-3 pt-4 pb-3 title d-flex align-items-center">
                <h6 className="m-0 font-weight-bold text-2xl">Trending Plat</h6>
                <a className="font-weight-bold ml-auto" href="most_popular.html">26 places <i className="feather-chevrons-right" /></a>
            </div>
            <PopularPlat />
            <div className="p-3">
                <a href="trending.html">
                    <img src="img/banner.png" className="img-fluid rounded-lg" />
                </a>
            </div>
            <div className="px-3 pt-4 pb-3 title d-flex align-items-center">
                <h6 className="m-0 font-weight-bold text-2xl ">Popular Restaurant</h6>
                <a className="font-weight-bold ml-auto" href="most_popular.html">26 places <i className="feather-chevrons-right" /></a>
            </div>
            <TrendingPlat />
            <div className="p-3">
                <a href="trending.html">
                    <img src="img/banner1.png" className="img-fluid rounded-lg" />
                </a>
            </div>
            <div className="px-3 pt-4 pb-3 title d-flex align-items-center">
                <h6 className="m-0 font-weight-bold text-2xl">Most sales</h6>
                <a className="font-weight-bold ml-auto" href="most_popular.html">26 places <i className="feather-chevrons-right" /></a>
            </div>
            <MostSales />
        </div>
    );
};

export default Main;
