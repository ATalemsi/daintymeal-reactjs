import React, { useState } from 'react';
import usePlacesAutocomplete, { getGeocode, getLatLng } from 'use-places-autocomplete';

const Search = () => {
  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete();

  const [coordinates, setCoordinates] = useState({ lat: null, lng: null });

  const handleSelect = async (address) => {
    setValue(address, false);
    clearSuggestions();

    try {
      const results = await getGeocode({ address });
      const { lat, lng } = await getLatLng(results[0]);
      setCoordinates({ lat, lng });
      console.log(`${address} Coordinates --> lat: ${lat}, lng: ${lng}`);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  return (
    <div className="search_location border-bottom p-3 text-right">
      <a href="home.html">Skip <i className="feather-chevron-right"></i></a>
      <div className="input-group osahan-search mt-3 border shadow-sm rounded-lg overflow-hidden">
        <div className="input-group-prepend">
          <button className="border-0 btn btn-outline-secondary text-primary bg-white btn-block">
            <i className="feather-search"></i>
          </button>
        </div>
        <input
          type="text"
          className="shadow-none border-0 form-control pl-0"
          placeholder="Enter Your Location"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          disabled={!ready}
        />
      </div>
      {status === 'OK' && (
        <ul className="suggestions-list">
          {data.map(({ place_id, description }) => (
            <li key={place_id} onClick={() => handleSelect(description)}>
              {description}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Search;
