import React from 'react';

const Header = ({ onLanguageChange }) => {
  return (
    <div className="shadow p-3 homepage-osahan-header bg-white">
      <div className="title d-flex align-items-center">
        <div className="mr-auto">
          <a className="text-dark d-flex align-items-center" href="location.html">
            <i className="feather-map-pin fs-18 mr-2" />
            <h6 className="m-0 border-dashed-bottom">Casablanca, Sidi Maârouf 20100</h6>
          </a>
        </div>
        <div className="ml-auto d-flex align-items-center">
          {/* Language selection buttons */}
          <button className="btn btn-link mx-2 text-dark" onClick={() => onLanguageChange('en')}>English</button>
          <button className="btn btn-link mx-2 text-dark" onClick={() => onLanguageChange('ar')}>Arabic</button>
          <button className="btn btn-link mx-2 text-dark" onClick={() => onLanguageChange('fr')}>French</button>
          {/* Add other language buttons here */}
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
        <input type="text" className="shadow-none border-0 form-control pl-0" placeholder="Search for restaurants or dishes" aria-label aria-describedby="basic-addon1" />
      </div>
    </div>
  );
};

export default Header;
