import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import axios from 'axios';
import { useTranslation } from 'react-i18next';

Modal.setAppElement('#root');

const Header = ({ onLanguageChange }) => {
  const [locationName, setLocationName] = useState('Location not available');
  const [showModal, setShowModal] = useState(false);
  const [permissionGranted, setPermissionGranted] = useState(false);
  const { t,i18n } = useTranslation();

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      padding: '20px',
      borderRadius: '10px',
      border: '1px solid #ccc',
      background: '#fff',
    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.75)',
    },
  };

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetchLocationName(latitude, longitude);
        },
        (error) => {
          if (error.code === error.PERMISSION_DENIED) {
            setShowModal(true);
          } else {
            setLocationName('Geolocation not available');
          }
        }
      );
    } else {
      setLocationName('Geolocation not supported by this browser');
    }
  }, []);

  const handelchangeLanguage = (lng) => {
    console.log('====================================');
    console.log(lng);
    console.log('====================================');
    i18n.changeLanguage(lng);
    onLanguageChange(lng);
  }

  const fetchLocationName = async (latitude, longitude) => {
    try {
      const response = await axios.get(`https://nominatim.openstreetmap.org/reverse`, {
        params: {
          lat: latitude,
          lon: longitude,
          format: 'json',
        },
      });
      const address = response.data.address;
      const location = `${address.neighbourhood || address.suburb || 'Unknown neighborhood'}, ${address.city || address.town || address.village || 'Unknown city'}, ${address.country || 'Unknown country'}`;
      setLocationName(location);
    } catch (error) {
      setLocationName('Location not available');
    }
  };

  const handleAllowLocation = () => {
    setPermissionGranted(true);
    setShowModal(false);
  };

  const handleDenyLocation = () => {
    setPermissionGranted(false);
    setShowModal(false);
  };

  useEffect(() => {
    if (permissionGranted) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetchLocationName(latitude, longitude);
        },
        (error) => {
          setLocationName('Geolocation permission denied');
        }
      );
    }
  }, [permissionGranted]);

  return (
    <div className="shadow p-3 homepage-osahan-header bg-white">
      <Modal
        isOpen={showModal}
        onRequestClose={handleDenyLocation}
        contentLabel="Geolocation Permission"
        style={customStyles}
      >
        <h2>Allow location access</h2>
        <p>We need your permission to access your location to provide better services.</p>
        <button onClick={handleAllowLocation} className="btn btn-primary">Allow</button>
        <button onClick={handleDenyLocation} className="btn btn-secondary">Deny</button>
      </Modal>

      <div className="title d-flex align-items-center">
        <div className="mr-auto">
          <a className="text-dark d-flex align-items-center" href="#">
            <i className="feather-map-pin fs-18 mr-2" />
            <h6 className="m-0 border-dashed-bottom">{locationName}</h6>
          </a>
        </div>
        <div className="ml-auto d-flex align-items-center">
          <button className="btn border-2 border-pink-600 text-pink-600 rounded-lg btn-sm mx-1 text-gray-200" onClick={() => { handelchangeLanguage('en') }}>EN</button>
          <button className="btn border-2 border-pink-600 text-pink-600 rounded-lg btn-sm mx-1 text-gray-200" onClick={() => { handelchangeLanguage('ar') }}>AR</button>
          <button className="btn border-2 border-pink-600 text-pink-600 rounded-lg btn-sm mx-1 text-gray-200" onClick={() => { handelchangeLanguage('fr') }}>FR</button>
          <a className="toggle ml-2 text-dark hc-nav-trigger hc-nav-1" href="#" role="button" aria-controls="hc-nav-1">
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
            </svg>
          </a>
        </div>
      </div>
      <div className="input-group border osahan-search mt-3 rounded-lg shadow-lg overflow-hidden">
        <div className="input-group-prepend">
          <button className="border-0 btn btn-outline-secondary text-primary bg-white btn-block"><i className="feather-search" /></button>
        </div>
        <input type="text" className="shadow-none border-0 form-control pl-0" placeholder={t('searchPlaceholder')} aria-label aria-describedby="basic-addon1" />
      </div>
    </div>
  );
};

export default Header;
