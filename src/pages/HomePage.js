import React , {useState} from 'react';
import Header from '../components/Header';
import Main from '../components/Main';
import Navbar from '../components/Navbar';
import Footer from "../components/Footer";


const HomePage = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(localStorage.getItem('selectedLanguage') || 'en'); // Default language code

  const handleLanguageChange = (languageCode) => {
      setSelectedLanguage(languageCode);
      // Store selected language in local storage
      localStorage.setItem('selectedLanguage', languageCode);
  };

  return (
    <div className="osahan-home-page">
      <Header selectedLanguage={selectedLanguage} onLanguageChange={handleLanguageChange} />
      <Main selectedLanguage={selectedLanguage} />
      <Navbar />
      <Footer />
    </div>
  );
};

export default HomePage;
