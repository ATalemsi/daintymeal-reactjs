// src/components/Main.js
import React from 'react';
import Categories from './Categories';
import Filter from './Filter';
import Publicity from './Publicity';
import Restos from './Restos';
import PopularPlat from './PopularPlat';
import TrendingPlat from './TrendingPlat';
import MostSales from './MostSales';

const Main = () => {
    return (
        <div className="osahan-main">
            <Categories />
            <Filter />
            <Publicity />
            <Restos />
            <div className="px-3 pt-3 title d-flex align-items-center">
                <h6 className="m-0 font-weight-bold">Trending this week</h6>
                <a className="font-weight-bold ml-auto" href="trending.html">View all <i className="feather-chevrons-right" /></a>
            </div>
            <PopularPlat />
            <div className="px-3 pt-4 pb-3 title d-flex align-items-center">
                <h6 className="m-0 font-weight-bold">Most popular</h6>
                <a className="font-weight-bold ml-auto" href="most_popular.html">26 places <i className="feather-chevrons-right" /></a>
            </div>

            <TrendingPlat />
            <div className="p-3">
                <a href="trending.html">
                    <img src="img/banner.png" className="img-fluid rounded-lg" />
                </a>
            </div>
            <div className="px-3 pt-4 pb-3 title d-flex align-items-center">
                <h6 className="m-0 font-weight-bold">Most popular</h6>
                <a className="font-weight-bold ml-auto" href="most_popular.html">26 places <i className="feather-chevrons-right" /></a>
            </div>
            <TrendingPlat />
            <div className="p-3">
                <a href="trending.html">
                    <img src="img/banner1.png" className="img-fluid rounded-lg" />
                </a>
            </div>
            <TrendingPlat />
            <div className="p-3">
                <a href="trending.html">
                    <img src="img/banner2.png" className="img-fluid rounded-lg" />
                </a>
            </div>

            <div className="px-3 pt-4 pb-3 title d-flex align-items-center">
                <h6 className="m-0 font-weight-bold">Most sales</h6>
                <a className="font-weight-bold ml-auto" href="most_popular.html">26 places <i className="feather-chevrons-right" /></a>
            </div>
            <MostSales />
        </div>
    );
};

export default Main;
