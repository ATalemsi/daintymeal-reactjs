import React from 'react';
import Header from '../components/Header';
import Main from '../components/Main';
import Navbar from '../components/Navbar';
import Footer from "../components/Footer";


const HomePage = () => {
  return (
    <div className="osahan-home-page">
      <Header />
      <Main />
      <Navbar />
      <Footer />
    </div>
  );
};

export default HomePage;
