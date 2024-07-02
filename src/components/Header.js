import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import { Navigate ,useNavigate } from 'react-router-dom'; // Import Navigate for navigation

Modal.setAppElement('#root');

const Header = ({ onLanguageChange }) => {
  const [locationName, setLocationName] = useState('Location not available');
  const [showModal, setShowModal] = useState(false);
  const [permissionGranted, setPermissionGranted] = useState(false);
  const { t, i18n } = useTranslation();
  const navigate = useNavigate(); 


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
      navigator.permissions.query({ name: 'geolocation' })
        .then((permissionStatus) => {
          if (permissionStatus.state === 'granted') {
            setPermissionGranted(true);
            fetchLocation();
          } else {
            setPermissionGranted(false);
            navigate('/landing') 
            setLocationName('Geolocation permission denied');
            return  navigate('/landing') 
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
    setPermissionGranted(true);
    setShowModal(false);
    fetchLocation();
  };

  const handleDenyLocation = () => {
    setPermissionGranted(false);
    setShowModal(false);
  };

  const handleUseCurrentLocation = () => {
    if (!permissionGranted) {
      return <Navigate to="/landing" replace />;
    } 
  };

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
          <select className="btn border-2 border-pink-600 text-pink-600 rounded-lg btn-sm mx-1 text-gray-200" onChange={handleLanguageChange} value={i18n.language}>
            <option value="en">EN</option>
            <option value="ar">AR</option>
            <option value="fr">FR</option>
          </select>
          <a className="text-dark mx-2 fs-18 top-nav-btn-cart position-relative" data-toggle="modal" data-target="#exampleModal" href="#"><i className="feather-filter" /></a>
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
