import React , {useState} from 'react';
import Header from '../components/Header';
import Main from '../components/Main';
import Navbar from '../components/Navbar';
import Footer from "../components/Footer";
import i18n from '../i18n';


const HomePage = () => {
  
  const [selectedLanguage, setSelectedLanguage] = useState(localStorage.getItem('selectedLanguage') || 'en'); // Default language code

  const handleLanguageChange = (languageCode) => {
      setSelectedLanguage(languageCode);
     
      localStorage.setItem('selectedLanguage', languageCode);
  };
  const direction = i18n.dir();

  return (
    <div className="osahan-home-page" style={{ direction }}>
      <Header selectedLanguage={selectedLanguage} onLanguageChange={handleLanguageChange} />
      <Main selectedLanguage={selectedLanguage} />
      <Navbar />
      <Footer />
    </div>
  );
};

export default HomePage;
