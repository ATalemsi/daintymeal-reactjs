// AppRouter.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import Profile from '../pages/Profile';
import FilterDetaille from '../components/FilterDetailles';
import RestoShow from '../pages/RestoShow';

const AppRouter = () => {
    return (
        <Router>
            <div className="app">
                
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/restaurant/:resto_code" element={<RestoShow />} /> 
                </Routes>
                <FilterDetaille />
                
            </div>
        </Router>
    );
};
export default AppRouter;
