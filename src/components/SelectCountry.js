import React, { useState, useEffect } from 'react';
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng,
} from 'react-places-autocomplete';
import Script from 'react-script-loader-hoc';
import { LoadScript , useJsApiLoader } from '@react-google-maps/api';

const center = {
    lat: 0,
    lng: 0,
};

const SelectCountry = ({ isScriptLoaded, isScriptLoadSucceed }) => {
    const [address, setAddress] = useState('');
    const [selectedPlace, setSelectedPlace] = useState(null);

    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey:"AIzaSyBwqCCHiuZJJDAnxKiqWSDWzW5m8ty6QCc",
    })

    useEffect(() => {
        if (isScriptLoaded && isScriptLoadSucceed) {
            // Google Maps API is loaded and ready to use.
        }
    }, [isScriptLoaded, isScriptLoadSucceed]);

    const handleSelect = async (address) => {
        setAddress(address);
        try {
            const results = await geocodeByAddress(address);
            const latLng = await getLatLng(results[0]);
            setSelectedPlace({
                address: results[0].formatted_address,
                location: {
                    lat: latLng.lat,
                    lng: latLng.lng,
                },
            });
        } catch (error) {
            console.error('Error fetching geocode:', error);
        }
    };

    return (
        <div className="osahan-country">
            <div className="search_location border-bottom p-3 text-right">
                <a href="home.html">Skip <i className="feather-chevron-right"></i></a>
                <div className="input-group osahan-search mt-3 border shadow-sm rounded-lg overflow-hidden">
                    <div className="input-group-prepend">
                        <button className="border-0 btn btn-outline-secondary text-primary bg-white btn-block"><i className="feather-search"></i></button>
                    </div>
                    <PlacesAutocomplete
                        value={address}
                        onChange={setAddress}
                        onSelect={handleSelect}
                        searchOptions={{ types: ['(cities)'] }}
                    >
                        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                            <input
                                {...getInputProps({
                                    placeholder: 'Enter Your Location',
                                    className: 'shadow-none border-0 form-control pl-0',
                                })}
                                aria-label="Enter Your Location"
                                aria-describedby="basic-addon1"
                            />
                        )}
                    </PlacesAutocomplete>
                </div>
            </div>

            {selectedPlace && (
                <div className="p-3 border-bottom">
                    <a href="home.html" className="text-decoration-none">
                        <p className="font-weight-bold text-primary m-0"><i className="feather-navigation"></i> {selectedPlace.address}</p>
                    </a>
                </div>
            )}

            {isScriptLoaded && isScriptLoadSucceed && (
                <div className="map-container mt-4">
                    <LoadScript
                        googleMapsApiKey="YOUR_API_KEY_HERE" // Replace with your actual API key
                    >
                        <div className="selected-place-info bg-gray-100 p-4 mt-4 border border-gray-300 rounded-lg">
                            {selectedPlace && (
                                <>
                                    <h5 className="text-lg font-semibold mb-2">Selected Place Information:</h5>
                                    <p><span className="font-semibold">Address:</span> {selectedPlace.address}</p>
                                    <p><span className="font-semibold">Latitude:</span> {selectedPlace.location.lat}</p>
                                    <p><span className="font-semibold">Longitude:</span> {selectedPlace.location.lng}</p>
                                    {/* Add more details as needed */}
                                </>
                            )}
                        </div>
                    </LoadScript>
                </div>
            )}
        </div>
    );
};

export default Script()(SelectCountry);
