// AppRouter.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import Profile from '../pages/Profile';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import FilterDetaille from '../components/FilterDetailles';

const AppRouter = () => {
    return (
        <Router>
            <div className="app">
                <Navbar />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/profile" element={<Profile />} />
                    {/* Add other routes if needed */}
                </Routes>
                <FilterDetaille />
                <Footer />
            </div>
        </Router>
    );
};

export default AppRouter;
