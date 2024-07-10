import React, { useEffect, useState, useRef } from 'react';
import Modal from 'react-modal';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import OpenAppButton from './OpenAppButton';

Modal.setAppElement('#root');

const Header = ({ onLanguageChange }) => {
  const [locationName, setLocationName] = useState('Location not available');
  const [showModal, setShowModal] = useState(false);
  const [permissionGranted, setPermissionGranted] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false); // State to manage search bar visibility
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const headerRef = useRef(null);

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
    const checkGeolocationPermission = async () => {
      const storedPermission = localStorage.getItem('geolocation_permission');
      if (storedPermission === 'granted') {
        setPermissionGranted(true);
        fetchLocation();
      } else if (storedPermission === 'denied') {
        setPermissionGranted(false);
        setLocationName('Geolocation permission denied');
      } else {
        if ("geolocation" in navigator) {
          navigator.permissions.query({ name: 'geolocation' })
            .then((permissionStatus) => {
              if (permissionStatus.state === 'granted') {
                localStorage.setItem('geolocation_permission', 'granted');
                setPermissionGranted(true);
                fetchLocation();
              } else if (permissionStatus.state === 'prompt') {
                setShowModal(true);
              } else {
                localStorage.setItem('geolocation_permission', 'denied');
                setPermissionGranted(false);
                setLocationName('Geolocation permission denied');
              }
            })
            .catch((error) => {
              console.error('Error checking geolocation permission:', error);
              setPermissionGranted(false);
              setLocationName('Geolocation not available');
            });
        } else {
          setPermissionGranted(false);
          setLocationName('Geolocation not supported by this browser');
        }
      }
    };

    checkGeolocationPermission();
  }, []);

  const fetchLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        fetchLocationName(latitude, longitude);
      },
      (error) => {
        setLocationName('Geolocation not available');
      }
    );
  };

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

  const handleLanguageChange = (event) => {
    const lng = event.target.value;
    i18n.changeLanguage(lng);
    onLanguageChange(lng);
  };

  const handleAllowLocation = () => {
    setShowModal(false);
    localStorage.setItem('geolocation_permission', 'granted');
    fetchLocation();
  };

  const handleDenyLocation = () => {
    setShowModal(false);
    localStorage.setItem('geolocation_permission', 'denied');
    setLocationName('Geolocation permission denied');
  };

  const toggleSearchBar = () => {
    setShowSearchBar(!showSearchBar);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        const scrollTop = window.scrollY;
        headerRef.current.style.top = `${scrollTop}px`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <OpenAppButton />
      <div className="fixed top-0 w-full shadow p-3 bg-white z-50 mt-12">
        <Modal
          isOpen={showModal}
          onRequestClose={handleDenyLocation}
          contentLabel="Geolocation Permission"
          style={customStyles}
        >
          <h2>Allow location access</h2>
          <p>We need your permission to access your location to provide better services.</p>
          <button onClick={handleAllowLocation} className="btn btn-primary mx-1.5">Allow</button>
          <button onClick={handleDenyLocation} className="btn btn-secondary mx-1.5">Deny</button>
        </Modal>
        <div className="title d-flex align-items-center justify-between mt-2" ref={headerRef}>
          <div className="d-flex align-items-center bg-white z-10 py-2 px-3 border-b border-gray-200">
            <a className="text-dark d-flex align-items-center" href="#">
              <i className="feather-map-pin fs-18 mr-2" />
              <h6 className="m-0 border-dashed-bottom">{locationName}</h6>
            </a>
          </div>
          <div className="d-flex align-items-center">
            <select className="btn border-2 border-pink-600 text-pink-600 rounded-lg btn-sm mx-1 text-gray-200" onChange={handleLanguageChange} value={i18n.language}>
              <option value="en">EN</option>
              <option value="ar">AR</option>
              <option value="fr">FR</option>
            </select>
            <button onClick={toggleSearchBar} className="ml-2 focus:outline-none">
              <i className="feather-search text-xl"></i>
            </button>
          </div>
        </div>
        {showSearchBar && (
          <div className="input-group border osahan-search mt-3 rounded-lg shadow-lg overflow-hidden">
            <div className="input-group-prepend">
              <button className="border-0 btn btn-outline-secondary text-primary bg-white btn-block"><i className="feather-search" /></button>
            </div>
            <input type="text" className="shadow-none border-0 form-control pl-0" placeholder={t('searchPlaceholder')} aria-label="search" aria-describedby="basic-addon1" />
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
