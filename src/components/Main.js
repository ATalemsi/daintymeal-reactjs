import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { FaSpinner } from 'react-icons/fa';
import Categories from './Categories';
import Publicity from './Publicity';
import Restos from './Restos';
import PopularRestos from './PopularRestos';
import TrendingPlat from './TrendingPlat';
import MostSales from './MostSales';
import Myplats from './MyPlats';
import FilteredPlats from './FilterePlats';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n';
import { Link } from 'react-router-dom';

const Main = ({ selectedLanguage }) => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [isLoadingInitial, setIsLoadingInitial] = useState(true);
    const [isLoadingAdditional, setIsLoadingAdditional] = useState(false);
    const [additionalDataLoaded, setAdditionalDataLoaded] = useState(false);
    const { t } = useTranslation();
    const direction = i18n.dir();

    const fetchInitialData = async () => {
        try {
            await Promise.all([
                axios.get('https://x2r9rfvwwi.execute-api.eu-north-1.amazonaws.com/dev/categories'),
                axios.get('https://x2r9rfvwwi.execute-api.eu-north-1.amazonaws.com/dev/filters'),
                axios.get('https://x2r9rfvwwi.execute-api.eu-north-1.amazonaws.com/dev/restos'),
            ]);
            setIsLoadingInitial(false);
        } catch (error) {
            console.error('Error fetching initial data:', error);
            setIsLoadingInitial(false);
        }
    };

    const fetchAdditionalData = async () => {
        setIsLoadingAdditional(true);
        try {
            await Promise.all([
                axios.get('https://x2r9rfvwwi.execute-api.eu-north-1.amazonaws.com/dev/plats/two'),
                axios.get('https://x2r9rfvwwi.execute-api.eu-north-1.amazonaws.com/dev/plats/trending'),
                axios.get('https://x2r9rfvwwi.execute-api.eu-north-1.amazonaws.com/dev/restos/popular'),
                axios.get('https://x2r9rfvwwi.execute-api.eu-north-1.amazonaws.com/dev/plats/two'),
            ]);
            setIsLoadingAdditional(false);
            setAdditionalDataLoaded(true);
        } catch (error) {
            console.error('Error fetching additional data:', error);
            setIsLoadingAdditional(false);
        }
    };

    useEffect(() => {
        fetchInitialData();
    }, []);

    const observerRef = useRef();

    useEffect(() => {
        if (!isLoadingInitial && !additionalDataLoaded) {
            observerRef.current = new IntersectionObserver(
                (entries) => {
                    if (entries[0].isIntersecting) {
                        fetchAdditionalData();
                        observerRef.current.disconnect();
                    }
                },
                { threshold: 0.1 }
            );

            if (document.querySelector('#load-trigger')) {
                observerRef.current.observe(document.querySelector('#load-trigger'));
            }
        }
    }, [isLoadingInitial, additionalDataLoaded]);

    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
    };

    return (
        <div className="osahan-main">
            {isLoadingInitial ? (
                <div className="flex items-center justify-center h-screen">
                    <div className="text-center">
                        <svg
                            className="animate-spin h-8 w-8 text-gray-500 mx-auto"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                            ></circle>
                            <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291l-3.709 3.71A9.974 9.974 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-3.647z"
                            ></path>
                        </svg>
                    </div>
                </div>
            ) : (
                <>
                    <div className="mb-2"  style={{ direction: 'ltr' }}>
                        <Categories selectedLanguage={selectedLanguage} onCategorySelect={handleCategorySelect} />
                    </div>
                    <div className="flex-grow">
                        <Publicity />
                    </div>
                    <div className="px-3 pt-4 pb-3 title d-flex align-items-center">
                        <h6 className="m-0 font-weight-bold text-2xl"> {t('restaurant')} </h6>
                        <Link className="font-weight-bold ml-auto text-pink-800 text-sm" to="/new-feature">{t('Viewall')}<i className="feather-chevrons-right" /></Link>
                    </div>
                    <Restos selectedLanguage={selectedLanguage} selectedCategory={selectedCategory} />
                    {selectedCategory ? (
                        <>
                            <FilteredPlats selectedCategory={selectedCategory} />
                        </>
                    ) : (
                        <>
                            <div className="px-3 pt-3 title d-flex align-items-center">
                                <h6 className="m-0 font-weight-bold text-2xl"> {t('myPlats')} </h6>
                                <Link className="font-weight-bold ml-auto" to="/new-feature">{t('Viewall')}<i className="feather-chevrons-right" /></Link>
                            </div>
                            <Myplats />
                            <div className="px-3 pt-4 pb-3 title d-flex align-items-center">
                                <h6 className="m-0 font-weight-bold text-2xl">{t('trendingPlat')}</h6>
                                <Link className="font-weight-bold ml-auto" to="/trending">{t('Viewall')}<i className="feather-chevrons-right" /></Link>
                            </div>
                            <TrendingPlat />
                            <div className="p-3">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <div className="md:hidden">
                                        <Link to="/new-feature">
                                            <img src="img/banner1.png" className="w-full md:max-w-md mx-auto rounded-lg" alt="Banner 1" />
                                        </Link>
                                    </div>
                                    <div className="hidden md:block col-span-1">
                                        <Link to="/new-feature">
                                            <img src="img/banner1.png" className="max-w-md mx-auto rounded-lg" alt="Banner 1" />
                                        </Link>
                                    </div>
                                    <div className="hidden md:block col-span-1">
                                        <Link to="/new-feature">
                                            <img src="img/banner2.png" className="max-w-md mx-auto rounded-lg" alt="Banner 2" />
                                        </Link>
                                    </div>
                                    <div className="hidden md:block col-span-1">
                                        <Link to="/new-feature">
                                            <img src="img/banner.png" className="max-w-md mx-auto rounded-lg" alt="Banner 3" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="px-3 pt-4 pb-3 title d-flex align-items-center">
                                <h6 className="m-0 font-weight-bold text-2xl "> {t('popularRestaurant')} </h6>
                                <Link className="font-weight-bold ml-auto" to="/new-feature">{t('Viewall')}<i className="feather-chevrons-right" /></Link>
                            </div>
                            <PopularRestos />
                            <div className="p-3">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <div className="md:hidden">
                                        <Link to="/new-feature">
                                            <img src="img/banner1.png" className="w-full md:max-w-md mx-auto rounded-lg" alt="Banner 1" />
                                        </Link>
                                    </div>
                                    <div className="hidden md:block col-span-1">
                                        <Link to="/new-feature">
                                            <img src="img/banner1.png" className="max-w-md mx-auto rounded-lg" alt="Banner 1" />
                                        </Link>
                                    </div>
                                    <div className="hidden md:block col-span-1">
                                        <Link to="/new-feature">
                                            <img src="img/banner2.png" className="max-w-md mx-auto rounded-lg" alt="Banner 2" />
                                        </Link>
                                    </div>
                                    <div className="hidden md:block col-span-1">
                                        <Link to="/new-feature">
                                            <img src="img/banner.png" className="max-w-md mx-auto rounded-lg" alt="Banner 3" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="px-3 pt-4 pb-3 title d-flex align-items-center">
                                <h6 className="m-0 font-weight-bold text-2xl"> {t('mostSales')} </h6>
                                <Link className="font-weight-bold ml-auto" to="/new-feature">View all<i className="feather-chevrons-right" /></Link>
                            </div>
                            <MostSales />
                        </>
                    )}
                    {/* Add a hidden element that will trigger the fetching of additional data */}
                    <div id="load-trigger" className="w-full h-1"></div>
                    {isLoadingAdditional && (
                        <div className="flex items-center justify-center py-4">
                            <FaSpinner className="animate-spin text-4xl text-gray-500" />
                            <h3 className="ml-2">Loading...</h3>
                        </div>
                    )}
                </>
            )}
            <div className="mb-16" />
        </div>
    );
};

export default Main;
