import React, { useState } from 'react';
import Header from '../components/Header';
import Main from '../components/Main';
import Navbar from '../components/Navbar';
import Footer from "../components/Footer";
import i18n from '../i18n';
const HomePage = () => {

  const [selectedLanguage, setSelectedLanguage] = useState(localStorage.getItem('selectedLanguage') || 'en');

  const handleLanguageChange = (languageCode) => {
    setSelectedLanguage(languageCode);

    localStorage.setItem('selectedLanguage', languageCode);
  };
  const direction = i18n.dir();

  return (
    <div className="osahan-home-page text-left" style={{ direction }}>

      <div className="header-container overflow-auto">
        <Header onLanguageChange={handleLanguageChange} />
      </div>
      <Main selectedLanguage={selectedLanguage} />
      <Navbar />
      <Footer />
    </div>
  );
};

export default HomePage;
