// AppRouter.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import Profile from '../pages/Profile';
import FilterDetaille from '../components/FilterDetailles';
import RestoShow from '../pages/RestoShow';
import TrendingPage from '../pages/TrendingPage';
import WatchlistPage from '../pages/WhatchlistPage';

const AppRouter = () => {
    return (
        <Router>
            <div className="app">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/restaurant/:resto_code" element={<RestoShow />} /> 
                    <Route path="/trending" element={<TrendingPage />} />
                    <Route path="/favourite" element={<WatchlistPage />} />
                </Routes>
                <FilterDetaille />
                
            </div>
        </Router>
    );
};
export default AppRouter;
