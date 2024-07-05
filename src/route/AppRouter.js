import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import Profile from '../pages/Profile';
import FilterDetaille from '../components/FilterDetailles';
import RestoShow from '../pages/RestoShow';
import TrendingPage from '../pages/TrendingPage';
import WatchlistPage from '../pages/WhatchlistPage';
import Landing from '../pages/Landing';
import Location from '../pages/Location';
import SelectLocation from '../pages/SelectLocaltion';
import LoginWithPhone from '../pages/Login/LoginWithPhone';
import LoginWithEmail from '../pages/Login/LoginWithEmail';
import RegisterWithEmail from '../pages/Register/RegisterWithEmail';
import RegisterWithPhone from '../pages/Register/RegisterWithPhone';
import UnderConstruction from '../pages/UnderConstruction';

const AppRouter = () => {
    return (
        <Router>
            <div className="app">
                <Routes>
                    <Route path="/login-email" element={<LoginWithEmail />} />
                    <Route path="/login-phone" element={<LoginWithPhone />} />
                    <Route path="/register-email" element={<RegisterWithEmail />} />
                    <Route path="/register-phone" element={<RegisterWithPhone />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/restaurant/:resto_code" element={<RestoShow />} /> 
                    <Route path="/trending" element={<TrendingPage />} />
                    <Route path="/favourite" element={<WatchlistPage />} />
                    <Route path="/landing" element={<Landing />} />
                    <Route path="/location" element={<Location />} />
                    <Route path="/select_country" element={<SelectLocation />} />
                    <Route path="/" element={<HomePage />} />
                    <Route path="/new-feature" component={UnderConstruction} />
                </Routes>
                <FilterDetaille />
            </div>
        </Router>
    );
};

export default AppRouter;
